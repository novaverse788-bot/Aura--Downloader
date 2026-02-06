import type { VercelRequest, VercelResponse } from '@vercel/node';
import { spawn } from 'child_process';
import crypto from 'crypto';

// YouTube Downloader API
// - Uses yt-dlp for YouTube video metadata and downloads
// - Supports single videos and playlists

interface YTDLPSourceFormat {
  format_id?: string;
  url?: string;
  vcodec?: string;
  acodec?: string;
  height?: number;
  width?: number;
  ext?: string;
  filesize?: number;
  abr?: number;
}

interface YTDLPMetadata {
  title?: string;
  url?: string;
  formats?: YTDLPSourceFormat[];
  thumbnail?: string;
  thumbnails?: Array<{ url?: string }>;
  uploader_thumbnail?: string;
  duration?: number | string;
  duration_string?: string;
  uploader?: string;
  uploader_id?: string;
  creator?: string;
  channel?: string;
  author?: string;
  owner?: string;
  width?: number;
  height?: number;
  webpage_url?: string;
  protocol?: string;
  playlist?: string;
  playlist_title?: string;
  playlist_count?: number;
  entries?: Array<{
    id?: string;
    title?: string;
    url?: string;
    thumbnail?: string;
    duration?: number | string;
    duration_string?: string;
    uploader?: string;
  }>;
}

interface PlaylistItemData {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  duration?: string;
  uploader?: string;
  position: number;
}

// Helper function to validate YouTube URL
function isYouTubeUrl(url: string): boolean {
  try {
    const hostname = new URL(url).hostname;
    return hostname.includes('youtube.com') || hostname.includes('youtu.be');
  } catch {
    return false;
  }
}

// Helper function to check if URL is a playlist
function isPlaylistUrl(url: string): boolean {
  return url.includes('playlist') || url.includes('list=');
}

// Helper function to get video ID from URL
function getVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Helper function to format bytes to human readable size
function formatBytes(bytes: number, decimals = 2): string {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

// Helper function to format duration
function formatDuration(seconds: number | string | undefined): string | null {
  if (!seconds) return null;

  let secs: number;
  if (typeof seconds === 'string') {
    // Try to parse string like "3:33" or "1:23:45"
    const parts = seconds.split(':').map(Number);
    if (parts.length === 3) {
      secs = parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      secs = parts[0] * 60 + parts[1];
    } else {
      secs = Number(seconds);
    }
  } else {
    secs = seconds;
  }

  if (isNaN(secs)) return null;

  if (secs >= 3600) {
    return `${Math.floor(secs / 3600)}:${Math.floor((secs % 3600) / 60).toString().padStart(2, '0')}:${(secs % 60).toString().padStart(2, '0')}`;
  }
  return `${Math.floor(secs / 60)}:${(secs % 60).toString().padStart(2, '0')}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Date, X-Api-Version');

  // 2. Handle Preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. Handle download redirect (GET request to /api/download)
  if (req.method === 'GET' && (req.url?.includes('/api/download') || (req.query as any)?.url)) {
    return handleDownload(req, res);
  }

  // 4. Method validation for POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      status: 'error',
      text: 'Method Not Allowed. Use POST.'
    });
  }

  const { url, isAudioOnly } = req.body || {};

  if (!url) {
    return res.status(400).json({
      status: 'error',
      text: 'Please enter a YouTube URL.'
    });
  }

  // Validate YouTube URL
  if (!isYouTubeUrl(url)) {
    return res.status(400).json({
      status: 'error',
      text: 'Please enter a valid YouTube URL (youtube.com or youtu.be).'
    });
  }

  try {
    // Check if it's a playlist
    if (isPlaylistUrl(url)) {
      return await handlePlaylist(url, isAudioOnly, res);
    } else {
      return await handleSingleVideo(url, isAudioOnly, res);
    }
  } catch (error: any) {
    console.error('Handler Error:', error);

    // Check for specific error types
    const errorMessage = error.message || '';

    let userMessage = 'Unable to fetch media. Please check the URL and try again.';

    if (errorMessage.includes('Private') || errorMessage.includes('private')) {
      userMessage = 'This playlist is private. You need to make it public or sign in to YouTube to access it.';
    } else if (errorMessage.includes('age-restricted') || errorMessage.includes('age limit')) {
      userMessage = 'This video is age-restricted. Please sign in to YouTube to verify your age.';
    } else if (errorMessage.includes('deleted') || errorMessage.includes('Gone')) {
      userMessage = 'This video or playlist has been removed or is no longer available.';
    } else if (errorMessage.includes('unavailable') || errorMessage.includes('404')) {
      userMessage = 'This content is unavailable. It may have been removed or set to private.';
    } else if (errorMessage.includes('Sign in')) {
      userMessage = 'This content requires you to sign in to YouTube. Please try a different video.';
    } else if (errorMessage.includes('ratelimit') || errorMessage.includes('429')) {
      userMessage = 'Too many requests. Please wait a moment and try again.';
    }

    return res.status(500).json({
      status: 'error',
      text: userMessage,
      details: errorMessage
    });
  }
}

// Handle single video download
async function handleSingleVideo(url: string, isAudioOnly: boolean, res: VercelResponse) {
  const args = ['-m', 'yt_dlp', '-j', '--no-warnings'];

  // Don't use -x for metadata, only for actual download
  // -x will limit formats to audio only

  args.push(url);

  const metadata = await executeYtDlp(args);

  const formats = metadata.formats || [];
  const options = buildDownloadOptions(formats);

  const thumbnail = metadata.thumbnail ||
    metadata.thumbnails?.[metadata.thumbnails.length - 1]?.url ||
    metadata.uploader_thumbnail ||
    null;

  return res.status(200).json({
    status: 'success',
    url: metadata.url || formats[formats.length - 1]?.url,
    filename: metadata.title || 'download',
    title: metadata.title,
    author: metadata.uploader || metadata.uploader_id || 'Unknown',
    duration: formatDuration(metadata.duration || metadata.duration_string),
    width: metadata.width,
    height: metadata.height,
    thumbnail: thumbnail,
    platform: 'YouTube',
    source: metadata.webpage_url,
    options: options,
    isAudioOnly: isAudioOnly,
    isPlaylist: false
  });
}

// Handle playlist download
async function handlePlaylist(url: string, isAudioOnly: boolean, res: VercelResponse) {
  // Use yt-dlp with --dump-json to get playlist info
  const args = ['-m', 'yt_dlp', '-j', '--no-warnings', '--flat-playlist', url];

  const metadata = await executeYtDlp(args);

  // Extract playlist items
  const playlistItems: PlaylistItemData[] = [];

  // metadata.entries might be an array of playlist entries
  if (metadata.entries && Array.isArray(metadata.entries)) {
    let position = 1;
    for (const entry of metadata.entries) {
      if (entry && entry.id) {
        const entryAny = entry as any;
        const thumbnail = entryAny.thumbnail ||
          (entryAny.thumbnails && entryAny.thumbnails[entryAny.thumbnails?.length - 1]?.url) ||
          null;

        playlistItems.push({
          id: entry.id,
          title: entry.title || `Video ${position}`,
          url: `https://www.youtube.com/watch?v=${entry.id}`,
          thumbnail: thumbnail,
          duration: formatDuration(entry.duration || entry.duration_string),
          uploader: entry.uploader,
          position: position++
        });
      }
    }
  }

  // If no entries, try to extract from raw output
  if (playlistItems.length === 0) {
    throw new Error('Could not extract playlist items. Playlist might be private or empty.');
  }

  // Get first video details for preview
  const firstItem = playlistItems[0];

  return res.status(200).json({
    status: 'success',
    url: url,
    title: metadata.playlist_title || metadata.title || 'YouTube Playlist',
    author: metadata.uploader || 'Unknown',
    duration: `${playlistItems.length} videos`,
    thumbnail: firstItem.thumbnail || null,
    platform: 'YouTube',
    source: url,
    options: [],
    isAudioOnly: isAudioOnly,
    isPlaylist: true,
    playlistData: {
      id: metadata.playlist || 'playlist',
      title: metadata.playlist_title || 'YouTube Playlist',
      url: url,
      thumbnail: firstItem.thumbnail || null,
      author: metadata.uploader,
      itemCount: playlistItems.length,
      items: playlistItems,
      platform: 'YouTube'
    }
  });
}

// Execute yt-dlp and return parsed JSON
async function executeYtDlp(args: string[]): Promise<YTDLPMetadata> {
  return new Promise((resolve, reject) => {
    const child = spawn('python', args);

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data;
    });

    child.stderr.on('data', (data) => {
      stderr += data;
    });

    const timeout = setTimeout(() => {
      child.kill();
      reject(new Error('yt-dlp took too long to respond (timeout after 30s)'));
    }, 30000);

    child.on('close', (code) => {
      clearTimeout(timeout);

      if (code === null) {
        reject(new Error('Request timed out'));
        return;
      }

      if (code !== 0) {
        console.error('yt-dlp error:', stderr);
        reject(new Error(stderr || 'yt-dlp failed with exit code ' + code));
        return;
      }

      try {
        // Handle multiple JSON objects (one per line for playlists)
        const lines = stdout.trim().split('\n');
        const jsonObjects = lines.map(line => {
          try {
            return JSON.parse(line);
          } catch {
            return null;
          }
        }).filter(Boolean);

        // For playlists, return the first object or merge them
        if (jsonObjects.length > 1) {
          // Playlist: first object is playlist info, rest are entries
          const playlistInfo = jsonObjects[0];
          const entries = jsonObjects.slice(1);

          resolve({
            ...playlistInfo,
            entries: entries.map((entry: any, index: number) => ({
              ...entry,
              position: index + 1
            }))
          });
        } else if (jsonObjects.length === 1) {
          resolve(jsonObjects[0] as YTDLPMetadata);
        } else {
          reject(new Error('No valid JSON output from yt-dlp'));
        }
      } catch (parseError: any) {
        reject(new Error('Failed to parse yt-dlp output: ' + parseError.message));
      }
    });
  });
}

// Build download options from formats
function buildDownloadOptions(formats: YTDLPSourceFormat[]) {
  const videoWithAudio = formats.filter(f => f.vcodec !== 'none' && f.acodec !== 'none');
  const audioOnly = formats.filter(f => f.vcodec === 'none' && f.acodec !== 'none');
  const videoOnly = formats.filter(f => f.vcodec !== 'none' && f.acodec === 'none');

  const options: Array<{
    id: string;
    label: string;
    format: string;
    size: string;
    url: string;
    formatId: string;
    isPrimary?: boolean;
  }> = [];

  // Case 1: Combined formats (video + audio)
  if (videoWithAudio.length > 0) {
    const videoQualities = [...new Map(videoWithAudio.map(f => [f.height, f])).values()]
      .filter(f => f.height)
      .sort((a, b) => (b.height || 0) - (a.height || 0))
      .slice(0, 4);

    videoQualities.forEach((format, i) => {
      if (!format.url) return;
      options.push({
        id: `video_${format.height}p`,
        label: `${format.height}p ${format.ext?.toUpperCase() || 'MP4'}`,
        format: (format.ext?.toUpperCase() || 'MP4'),
        size: format.filesize ? formatBytes(format.filesize) : 'Unknown',
        url: format.url,
        formatId: format.format_id || `bestvideo[height=${format.height}]`,
        isPrimary: i === 0
      });
    });
  }

  // Case 2: DASH format (separate video/audio) - also run if videoWithAudio exists to add more options
  if (videoOnly.length > 0 && audioOnly.length > 0) {
    const videoQualities = [...new Map(videoOnly.map(f => [f.height, f])).values()]
      .filter(f => f.height)
      .sort((a, b) => (b.height || 0) - (a.height || 0))
      .slice(0, 4);

    const bestAudio = audioOnly.sort((a, b) => (b.abr || 0) - (a.abr || 0))[0];

    videoQualities.forEach((format, i) => {
      // Only add if not already exists
      const exists = options.some(o => o.id === `video_${format.height}p`);
      if (!format.url || exists) return;

      const totalSize = (format.filesize || 0) + (bestAudio.filesize || 0);
      options.push({
        id: `video_${format.height}p`,
        label: `${format.height}p ${format.ext?.toUpperCase() || 'MP4'}`,
        format: (format.ext?.toUpperCase() || 'MP4'),
        size: totalSize > 0 ? formatBytes(totalSize) : 'Unknown',
        url: format.url,
        formatId: `${format.format_id}+${bestAudio.format_id}`,
        isPrimary: i === 0 && options.length === 0
      });
    });

    // Add best audio option
    if (bestAudio.url) {
      options.push({
        id: 'audio_best',
        label: `Audio ${bestAudio.ext?.toUpperCase() || 'M4A'} (${bestAudio.abr ? Math.round(bestAudio.abr) + 'kbps' : 'Best'})`,
        format: (bestAudio.ext?.toUpperCase() || 'M4A'),
        size: bestAudio.filesize ? formatBytes(bestAudio.filesize) : 'Unknown',
        url: bestAudio.url,
        formatId: bestAudio.format_id,
        isPrimary: false
      });
    }
  }

  // Case 3: Video only (no audio available)
  if (options.length === 0 && videoOnly.length > 0) {
    const videoQualities = [...new Map(videoOnly.map(f => [f.height, f])).values()]
      .filter(f => f.height)
      .sort((a, b) => (b.height || 0) - (a.height || 0))
      .slice(0, 4);

    videoQualities.forEach((format, i) => {
      if (!format.url) return;
      options.push({
        id: `video_${format.height}p`,
        label: `${format.height}p ${format.ext?.toUpperCase() || 'MP4'}`,
        format: (format.ext?.toUpperCase() || 'MP4'),
        size: format.filesize ? formatBytes(format.filesize) : 'Unknown',
        url: format.url,
        formatId: format.format_id || `bestvideo[height=${format.height}]`,
        isPrimary: i === 0
      });
    });
  }

  // Fallback - always add audio option if available
  if (options.length === 0) {
    const fallbackUrl = formats[formats.length - 1]?.url || '';
    options.push({
      id: 'video',
      label: 'Video (MP4)',
      format: 'MP4',
      size: 'Unknown',
      url: fallbackUrl,
      formatId: 'mp4',
      isPrimary: true
    });
  }

  // Always add MP3 audio option if audio formats exist
  if (audioOnly.length > 0 || videoWithAudio.length > 0) {
    options.push({
      id: 'audio_mp3',
      label: 'Audio Only (MP3)',
      format: 'MP3',
      size: 'Unknown',
      url: '',
      formatId: 'mp3',
      isPrimary: false
    });
  }

  return options;
}

// Handle download redirect to direct URL
export async function handleDownload(req: VercelRequest, res: VercelResponse) {
  const { url, formatId, filename } = req.query || {};

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const urlStr = String(url);

  // Check if it's already a direct video URL (googlevideo.com) - redirect directly
  if (urlStr.includes('googlevideo.com') || urlStr.includes('redirect')) {
    console.log('Direct URL detected, redirecting:', urlStr.substring(0, 100) + '...');
    return res.redirect(302, urlStr);
  }

  try {
    // Get direct URL from yt-dlp using subprocess (--get-url returns plain text)
    const args = ['-m', 'yt_dlp', '--get-url'];

    if (formatId && formatId !== 'best') {
      args.push('--format', String(formatId));
    }

    args.push(urlStr);

    return new Promise((resolve) => {
      const child = spawn('python', args);

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data;
      });

      child.stderr.on('data', (data) => {
        stderr += data;
      });

      child.on('close', (code) => {
        if (code === 0 && stdout.trim()) {
          // Redirect to the direct URL
          res.redirect(stdout.trim());
          resolve(undefined);
        } else {
          console.error('Download error:', stderr);
          res.status(500).json({ error: 'Could not get download URL', details: stderr });
          resolve(undefined);
        }
      });

      // Timeout after 30 seconds
      setTimeout(() => {
        child.kill();
        res.status(500).json({ error: 'Download timed out' });
        resolve(undefined);
      }, 30000);
    });

  } catch (error: any) {
    console.error('Download error:', error);
    return res.status(500).json({ error: 'Download failed', details: error.message });
  }
}
