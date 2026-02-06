export interface Platform {
  id: string;
  name: string;
  color: string;
  logoUrl: string; // URL to the official logo image
  exampleUrl?: string;
  description: string;
}

export enum MediaType {
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  IMAGE = 'IMAGE',
  PLAYLIST = 'PLAYLIST'
}

export interface DownloadOption {
  id: string;
  label: string; // e.g., "1080p MP4", "Audio Only"
  format: string;
  size: string;
  url: string; // The link (either direct or original for server-side processing)
  formatId?: string; // Optional: yt-dlp format string or 'mp3'
  isPrimary?: boolean;
}

export interface PlaylistItem {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  duration?: string;
  uploader?: string;
  position: number;
}

export interface PlaylistResult {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  author?: string;
  itemCount: number;
  items: PlaylistItem[];
  platform: string;
}

export interface MediaResult {
  id: string;
  url: string;
  source?: string; // Original URL for downloads (e.g., YouTube URL)
  title: string;
  thumbnail: string;
  duration?: string;
  width?: number;
  height?: number;
  author: string;
  platform: string; // Platform ID
  type: MediaType;
  options: DownloadOption[];
  isPlaylist?: boolean;
  playlistData?: PlaylistResult;
}

export interface ApiError {
  message: string;
  code?: string;
}
