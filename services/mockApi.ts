import { MediaResult, MediaType, DownloadOption, PlaylistResult, PlaylistItem } from '../types';

// Use environment variable for Railway backend URL, fallback to relative path for local dev
const API_BASE_URL = import.meta.env.VITE_API_URL || '';
const PROXY_ENDPOINT = `${API_BASE_URL}/api/fetch`;

// Multiple backend options for reliability
const BACKEND_OPTIONS = [
  { name: 'cobalt', url: 'https://cobalt-production-4e75.up.railway.app/api/json' },
  { name: 'cobalt-mirror1', url: 'https://cobalt-api-z1dh.railway.app/api/json' },
  { name: 'co.wuk.sh', url: 'https://co.wuk.sh/api/json' }
];

// CORS proxy options
const CORS_PROXIES = [
  'https://corsproxy.io/?',
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?'
];

export const fetchMediaDetails = async (url: string): Promise<MediaResult> => {
  if (!url.startsWith('http')) {
    throw new Error('Please enter a valid URL starting with http:// or https://');
  }

  // 1. Try Backend Proxy (Preferred) - for local development
  if (API_BASE_URL) {
    try {
      return await fetchFromEndpoint(PROXY_ENDPOINT, url);
    } catch (proxyError: any) {
      console.warn('Backend proxy failed:', proxyError);
    }
  }

  // 2. Try direct backend URLs with CORS proxy fallback
  for (const backend of BACKEND_OPTIONS) {
    for (const proxy of CORS_PROXIES) {
      try {
        const targetUrl = `${backend.url}?url=${encodeURIComponent(url)}`;
        const proxiedUrl = `${proxy}${encodeURIComponent(targetUrl)}`;
        return await fetchFromEndpoint(proxiedUrl, url);
      } catch (error: any) {
        console.warn(`Backend ${backend.name} via proxy ${proxy} failed:`, error.message);
        // Continue to next option
      }
    }
  }

  throw new Error('Unable to fetch media. All backend services are currently unavailable. Please try again later.');
};

async function fetchFromEndpoint(endpoint: string, mediaUrl: string): Promise<MediaResult> {
  const controller = new AbortController();
  // 30s timeout for yt-dlp
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      signal: controller.signal
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Media service endpoint not found (404). Please try again.');
      }
      if (response.status === 403) {
        throw new Error('Access denied (403). The service may be rate-limited.');
      }
      if (response.status === 500) {
        throw new Error('Server error (500). The backend service may be overloaded.');
      }
      let errorText = `Request failed (${response.status})`;
      try {
        const errJson = await response.json();
        if (errJson.text) errorText = errJson.text;
        if (errJson.error) errorText = errJson.error;
      } catch (e) { }
      throw new Error(errorText);
    }

    const data = await response.json();

    if (data.status === 'success' || data.status === 'stream') {
      // Handle different API response formats

      // Check if it's a playlist
      if (data.isPlaylist && data.playlistData) {
        return {
          id: crypto.randomUUID(),
          url: mediaUrl,
          title: data.playlistData.title || 'YouTube Playlist',
          author: data.playlistData.author || 'Unknown',
          thumbnail: data.playlistData.thumbnail || null,
          duration: `${data.playlistData.itemCount} videos`,
          platform: 'YouTube',
          type: MediaType.PLAYLIST,
          options: [],
          isPlaylist: true,
          playlistData: {
            id: data.playlistData.id,
            title: data.playlistData.title,
            url: mediaUrl,
            thumbnail: data.playlistData.thumbnail,
            author: data.playlistData.author,
            itemCount: data.playlistData.itemCount,
            items: (data.playlistData.items || []).map((item: any) => ({
              id: item.id,
              title: item.title || `Video ${item.position}`,
              url: item.url || `https://www.youtube.com/watch?v=${item.id}`,
              thumbnail: item.thumbnail || null,
              duration: item.duration || null,
              uploader: item.uploader || null,
              position: item.position
            })),
            platform: 'YouTube'
          }
        };
      }

      // Handle single video - map different API response formats
      let options: DownloadOption[] = [];

      // Format 1: options array from cobalt API
      if (data.options && Array.isArray(data.options)) {
        options = data.options.map((opt: any) => ({
          id: opt.id || crypto.randomUUID(),
          label: opt.label || opt.name || 'Download',
          format: opt.format || opt.ext || 'MP4',
          size: opt.size || 'Unknown',
          url: opt.url || data.url || mediaUrl,
          formatId: opt.formatId || opt.id,
          isPrimary: opt.isPrimary || false
        }));
      }

      // Format 2: Create options from stream data
      if (options.length === 0 && data.url) {
        options.push({
          id: 'video',
          label: 'Video (MP4)',
          format: 'MP4',
          size: 'Unknown',
          url: data.url,
          formatId: 'best',
          isPrimary: true
        });

        if (data.audio) {
          options.push({
            id: 'audio',
            label: 'Audio (M4A)',
            format: 'M4A',
            size: 'Unknown',
            url: data.audio,
            formatId: 'bestaudio',
            isPrimary: false
          });
        }
      }

      // Format 3: Create MP3 option if audio is available
      if (data.status === 'audio' || data.picker) {
        options.push({
          id: 'audio_mp3',
          label: 'Audio Only (MP3)',
          format: 'MP3',
          size: 'Unknown',
          url: data.url || data.picker?.[0],
          formatId: 'mp3',
          isPrimary: false
        });
      }

      // Fallback - always add at least one option
      if (options.length === 0) {
        options.push({
          id: 'video',
          label: 'Video (MP4)',
          format: 'MP4',
          size: 'Unknown',
          url: data.url || mediaUrl,
          formatId: 'best',
          isPrimary: true
        });
      }

      // Format duration if available
      const formattedDuration = data.duration
        ? (typeof data.duration === 'string'
          ? data.duration
          : `${Math.floor((data.duration || 0) / 60)}:${((data.duration || 0) % 60).toString().padStart(2, '0')}`)
        : 'Unknown';

      // Get thumbnail - use data.thumbnail or fallback
      const thumbnail = data.thumbnail ||
        data.thumbnails?.[0] ||
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop';

      return {
        id: crypto.randomUUID(),
        url: mediaUrl,
        title: data.title || 'Downloaded Media',
        author: data.uploader || data.author || 'Unknown',
        duration: formattedDuration,
        width: data.width,
        height: data.height,
        thumbnail: thumbnail,
        platform: data.platform || 'generic',
        type: data.status === 'audio' ? MediaType.AUDIO : MediaType.VIDEO,
        options: options,
        isPlaylist: false
      };
    }

    if (data.status === 'error' || data.error) {
      throw new Error(data.text || data.error || 'Unknown error occurred');
    }

    throw new Error('No downloadable media found in the response.');

  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Connection timed out. The service took too long to respond.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
