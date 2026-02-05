# Aura Playlist Downloader 🎬

A powerful Node.js CLI tool for downloading YouTube videos and playlists with progress tracking and quality selection.

## Features

- 🎥 **Single Video Download** - Download any YouTube video
- 📋 **Playlist Support** - Download entire playlists automatically
- 📊 **Progress Tracking** - Real-time download percentage, speed, and ETA
- 🎯 **Quality Selection** - Automatically selects highest quality available
- 🛡️ **Error Handling** - Robust error handling for private/removed videos
- ⏸️ **Rate Limiting Protection** - Automatic delays between downloads
- 📁 **Organized Output** - Videos saved to `downloads/` folder with proper filenames

## Installation

```bash
# Navigate to the project directory
cd playlist-downloader

# Install dependencies
npm install
```

## Usage

### Download a single video:
```bash
node index.js https://www.youtube.com/watch?v=VIDEO_ID
```

### Download a playlist:
```bash
node index.js https://www.youtube.com/playlist?list=PLAYLIST_ID
```

### Without arguments (shows help):
```bash
node index.js
```

## Output

Downloaded videos are saved to the `downloads/` directory with:
- Proper filenames (sanitized for filesystem compatibility)
- Index numbering for playlists (e.g., `1. Video Title.mp4`)
- Progress displayed in terminal during download

## Requirements

- Node.js 14+ 
- npm or yarn
- Stable internet connection

## Dependencies

- [ytdl-core](https://github.com/fb55/node-ytdl) - YouTube video download library

## Optional (for audio merging)

For best results with combined video+audio, install ffmpeg:
- **Windows**: `choco install ffmpeg` or download from ffmpeg.org
- **macOS**: `brew install ffmpeg`
- **Linux**: `sudo apt install ffmpeg`

## License

MIT License - see the main project [LICENSE](../LICENSE) file for details.

## Disclaimer

This tool is for educational and personal use only. Please respect content creators' rights and YouTube's Terms of Service.
