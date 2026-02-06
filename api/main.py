#!/usr/bin/env python3
"""
AuraDownloader API - Python Backend for yt-dlp
Deploy this separately on Railway/Render for free yt-dlp support
"""

import json
import subprocess
import os
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlparse, urlencode

# CORS headers
CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
}


def format_bytes(size):
    """Convert bytes to human readable format"""
    if not size:
        return 'Unknown'
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size < 1024:
            return f"{size:.1f} {unit}"
        size /= 1024
    return f"{size:.1f} TB"


def format_duration(seconds):
    """Format duration in seconds to HH:MM:SS or MM:SS"""
    if not seconds:
        return None
    seconds = int(seconds)
    if seconds >= 3600:
        hours = seconds // 3600
        minutes = (seconds % 3600) // 60
        secs = seconds % 60
        return f"{hours}:{minutes:02d}:{secs:02d}"
    minutes = seconds // 60
    secs = seconds % 60
    return f"{minutes}:{secs:02d}"


def execute_yt_dlp_json(args):
    """Execute yt-dlp and return JSON output"""
    try:
        result = subprocess.run(
            ['python', '-m', 'yt_dlp'] + args,
            capture_output=True,
            text=True,
            timeout=60
        )
        
        if result.returncode != 0:
            raise Exception(result.stderr.strip())
        
        # Handle multiple JSON objects (playlists)
        lines = result.stdout.strip().split('\n')
        json_objects = []
        for line in lines:
            try:
                json_objects.append(json.loads(line))
            except json.JSONDecodeError:
                continue
        
        if len(json_objects) == 1:
            return json_objects[0]
        elif len(json_objects) > 1:
            # First object is playlist info, rest are entries
            return json_objects[0]
        else:
            raise Exception('No valid JSON output from yt-dlp')
    
    except subprocess.TimeoutExpired:
        raise Exception('yt-dlp timed out (60s)')
    except Exception as e:
        raise Exception(str(e))


def execute_yt_dlp_get_url(args):
    """Execute yt-dlp --get-url and return the URL"""
    try:
        result = subprocess.run(
            ['python', '-m', 'yt_dlp'] + args,
            capture_output=True,
            text=True,
            timeout=60
        )
        
        if result.returncode == 0 and result.stdout.strip():
            return result.stdout.strip()
        else:
            raise Exception(result.stderr.strip())
    
    except subprocess.TimeoutExpired:
        raise Exception('yt-dlp timed out (60s)')
    except Exception as e:
        raise Exception(str(e))


def build_download_options(formats):
    """Build download options from yt-dlp formats"""
    options = []
    
    # Filter formats
    video_with_audio = [f for f in formats if f.get('vcodec') != 'none' and f.get('acodec') != 'none']
    video_only = [f for f in formats if f.get('vcodec') != 'none' and f.get('acodec') == 'none']
    audio_only = [f for f in formats if f.get('vcodec') == 'none' and f.get('acodec') != 'none']
    
    # Case 1: Combined formats (video + audio)
    if video_with_audio:
        qualities = {}
        for f in video_with_audio:
            if f.get('height'):
                if f['height'] not in qualities:
                    qualities[f['height']] = f
        for height in sorted(qualities.keys(), reverse=True)[:4]:
            f = qualities[height]
            options.append({
                'id': f"video_{height}p",
                'label': f"{height}p {f.get('ext', 'mp4').upper()}",
                'format': f.get('ext', 'mp4').upper(),
                'size': format_bytes(f.get('filesize')),
                'url': f.get('url', ''),
                'formatId': f.get('format_id'),
                'isPrimary': height in [720, 1080]
            })
    
    # Case 2: DASH formats (separate video/audio) - also add if video_with_audio exists
    if video_only and audio_only:
        best_audio = max(audio_only, key=lambda x: x.get('abr', 0))
        qualities = {}
        for f in video_only:
            if f.get('height'):
                if f['height'] not in qualities:
                    qualities[f['height']] = f
        for height in sorted(qualities.keys(), reverse=True)[:4]:
            # Skip if already exists
            if any(o['id'] == f"video_{height}p" for o in options):
                continue
            f = qualities[height]
            total_size = (f.get('filesize', 0) or 0) + (best_audio.get('filesize', 0) or 0)
            options.append({
                'id': f"video_{height}p",
                'label': f"{height}p {f.get('ext', 'mp4').upper()}",
                'format': f.get('ext', 'mp4').upper(),
                'size': format_bytes(total_size),
                'url': f.get('url', ''),
                'formatId': f"{f.get('format_id')}+{best_audio.get('format_id')}",
                'isPrimary': height in [720, 1080] and len(options) == 0
            })
        
        # Add best audio option
        if best_audio.get('url'):
            abr = best_audio.get('abr', 0)
            abr_str = f"{int(abr)}kbps" if abr else 'Best'
            options.append({
                'id': 'audio_best',
                'label': f"Audio {best_audio.get('ext', 'm4a').upper()} ({abr_str})",
                'format': best_audio.get('ext', 'm4a').upper(),
                'size': format_bytes(best_audio.get('filesize')),
                'url': best_audio.get('url', ''),
                'formatId': best_audio.get('format_id'),
                'isPrimary': False
            })
    
    # Case 3: Video only (no audio available)
    if not options and video_only:
        qualities = {}
        for f in video_only:
            if f.get('height'):
                if f['height'] not in qualities:
                    qualities[f['height']] = f
        for height in sorted(qualities.keys(), reverse=True)[:4]:
            f = qualities[height]
            options.append({
                'id': f"video_{height}p",
                'label': f"{height}p {f.get('ext', 'mp4').upper()}",
                'format': f.get('ext', 'mp4').upper(),
                'size': format_bytes(f.get('filesize')),
                'url': f.get('url', ''),
                'formatId': f.get('format_id'),
                'isPrimary': height in [720, 1080]
            })
    
    # Fallback - always add audio option if audio formats exist
    if audio_only or video_with_audio:
        options.append({
            'id': 'audio_mp3',
            'label': 'Audio Only (MP3)',
            'format': 'MP3',
            'size': 'Unknown',
            'url': '',
            'formatId': 'mp3',
            'isPrimary': False
        })
    
    # Final fallback
    if not options:
        fallback_url = formats[-1].get('url', '') if formats else ''
        options.append({
            'id': 'video',
            'label': 'Video (MP4)',
            'format': 'MP4',
            'size': 'Unknown',
            'url': fallback_url,
            'formatId': 'mp4',
            'isPrimary': True
        })
    
    return options


class APIHandler(BaseHTTPRequestHandler):
    """HTTP request handler"""
    
    def log_message(self, format, *args):
        """Custom logging"""
        print(f"[{self.log_date_time_string()}] {format % args}")
    
    def send_cors_headers(self):
        """Send CORS headers"""
        for key, value in CORS_HEADERS.items():
            self.send_header(key, value)
    
    def do_OPTIONS(self):
        """Handle preflight requests"""
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()
    
    def do_GET(self):
        """Handle GET requests"""
        if self.path == '/health':
            self.send_response(200)
            self.send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'ok'}).encode())
        elif self.path.startswith('/api/download'):
            # Handle download redirect
            try:
                parsed = urlparse(self.path)
                params = parse_qs(parsed.query)
                url = params.get('url', [None])[0]
                format_id = params.get('formatId', ['best'])[0]
                
                if not url:
                    self.send_response(400)
                    self.send_cors_headers()
                    self.end_headers()
                    self.wfile.write(json.dumps({'error': 'URL required'}).encode())
                    return
                
                # Check if it's a direct URL (googlevideo.com) - if so, redirect directly
                if 'googlevideo.com' in url or 'redirect' in url.lower():
                    print(f"Direct URL detected, redirecting: {url[:100]}...")
                    self.send_response(302)
                    self.send_header('Location', url)
                    self.send_cors_headers()
                    self.end_headers()
                    return
                
                print(f"Getting download URL for: {url}")
                
                # Get direct URL from yt-dlp
                args = ['--get-url']
                if format_id and format_id != 'best':
                    args.extend(['--format', format_id])
                args.append(url)
                
                direct_url = execute_yt_dlp_get_url(args)
                
                # Redirect to the direct URL
                self.send_response(302)
                self.send_header('Location', direct_url)
                self.send_cors_headers()
                self.end_headers()
                
            except Exception as e:
                print(f"Download error: {e}")
                self.send_response(500)
                self.send_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Download failed', 'details': str(e)}).encode())
        else:
            self.send_response(404)
            self.send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())
    
    def do_POST(self):
        """Handle POST requests"""
        if self.path == '/api/fetch':
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_length)
                data = json.loads(body.decode())
                url = data.get('url')
                is_audio_only = data.get('isAudioOnly', False)
                
                if not url:
                    self.send_response(400)
                    self.send_cors_headers()
                    self.end_headers()
                    self.wfile.write(json.dumps({'status': 'error', 'text': 'URL required'}).encode())
                    return
                
                print(f"Fetching metadata for: {url}")
                
                # Get metadata - don't use -x for metadata, only for download
                args = ['-j', '--no-warnings']
                # Don't use --flat-playlist for single videos
                args.append(url)
                
                metadata = execute_yt_dlp_json(args)
                
                # Build response
                thumbnail = (metadata.get('thumbnails', [])[-1]['url'] 
                           if metadata.get('thumbnails') 
                           else metadata.get('thumbnail'))
                
                response = {
                    'status': 'success',
                    'url': metadata.get('url'),
                    'title': metadata.get('title'),
                    'author': metadata.get('uploader') or metadata.get('uploader_id') or 'Unknown',
                    'duration': format_duration(metadata.get('duration') or metadata.get('duration_string')),
                    'width': metadata.get('width'),
                    'height': metadata.get('height'),
                    'thumbnail': thumbnail,
                    'platform': 'YouTube',
                    'source': metadata.get('webpage_url'),
                    'options': build_download_options(metadata.get('formats', [])),
                    'isAudioOnly': is_audio_only,
                    'isPlaylist': False
                }
                
                self.send_response(200)
                self.send_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps(response).encode())
                
            except Exception as e:
                print(f"Error: {e}")
                error_msg = str(e)
                user_message = 'Unable to fetch media. Please check the URL.'
                
                if 'Private' in error_msg:
                    user_message = 'This content is private.'
                elif 'age-restricted' in error_msg.lower():
                    user_message = 'This content is age-restricted.'
                elif 'deleted' in error_msg.lower():
                    user_message = 'This content has been deleted.'
                
                self.send_response(500)
                self.send_cors_headers()
                self.end_headers()
                self.wfile.write(json.dumps({
                    'status': 'error',
                    'text': user_message,
                    'details': error_msg
                }).encode())
        else:
            self.send_response(404)
            self.send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())


def main():
    """Main entry point"""
    port = int(os.environ.get('PORT', 8080))
    server = HTTPServer(('0.0.0.0', port), APIHandler)
    print(f"Starting AuraDownloader API on port {port}")
    print(f"Health check: http://localhost:{port}/health")
    print(f"Download endpoint: http://localhost:{port}/api/download?url=<video_url>&formatId=<format_id>")
    server.serve_forever()


if __name__ == '__main__':
    main()
