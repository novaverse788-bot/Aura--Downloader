<div align="center">
  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" alt="AuraDownloader Banner" width="100%" style="border-radius: 12px; max-height: 300px; object-fit: cover;" />
</div>

# AuraDownloader 🎬

**Fast, Free & Secure YouTube Video & Playlist Downloader**

Download YouTube videos, playlists, Shorts, and music in MP4 or MP3 format. Support for 4K, 1080p, 720p, and more quality options.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)

## Features ✨

- 🎥 **Single Videos** - Download any YouTube video
- 📋 **Playlist Support** - Browse and download videos from playlists
- 🎵 **MP3 Extraction** - Extract audio from videos
- 📊 **Multiple Qualities** - 4K, 1080p, 720p, 480p, 360p
- ⚡ **Lightning Fast** - Optimized servers for quick downloads
- 🔒 **Secure & Private** - No registration required
- 📱 **Mobile Friendly** - Works on all devices
- 💯 **100% Free** - No hidden fees or subscriptions

## Getting Started 🚀

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Python 3.8+ (for yt-dlp backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/AuraDownloader.git
cd AuraDownloader
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup (Optional)

For full functionality, you'll need yt-dlp installed:

```bash
# Windows
pip install yt-dlp

# macOS
pip3 install yt-dlp

# Linux
sudo pip3 install yt-dlp
```

## Usage 📖

### Download a Single Video

1. Copy the YouTube video URL
2. Paste it into the search box
3. Click "Download"
4. Select your preferred quality
5. Save the video

### Download a Playlist

1. Copy the YouTube playlist URL
2. Paste it into the search box
3. Click "Fetch"
4. Browse all videos in the playlist
5. Download individual videos or select all

## Supported Content 📦

| Type | Status |
|------|--------|
| Regular YouTube Videos | ✅ Supported |
| YouTube Playlists | ✅ Supported |
| YouTube Shorts | ✅ Supported |
| Music Videos | ✅ Supported |
| Live Streams (VODs) | ✅ Supported |
| MP3 Audio | ✅ Supported |

## Tech Stack 🛠️

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Vercel Serverless Functions
- **Download Engine**: yt-dlp

## Project Structure 📁

```
AuraDownloader/
├── api/
│   └── fetch.ts          # Backend API for yt-dlp
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ResultCard.tsx
│   └── PlaylistResult.tsx
├── pages/
│   ├── Home.tsx          # Main download page
│   ├── About.tsx         # About & guide
│   └── FAQ.tsx           # FAQ page
├── services/
│   └── mockApi.ts        # API client
├── types.ts              # TypeScript types
├── constants.ts          # App constants
└── LICENSE               # MIT License
```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer ⚠️

**IMPORTANT**: This software is provided for educational and personal use purposes only.

- This tool is not affiliated with YouTube or Google
- Users are responsible for complying with YouTube's Terms of Service
- Respect copyright laws - only download content you have rights to
- The developers are not liable for any misuse of this software

## Support 💬

If you have any questions or need help, please open an issue on GitHub.

---

**Made with ❤️ by AuraDownloader**
