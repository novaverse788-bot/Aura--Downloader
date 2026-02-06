import { MediaResult, MediaType, DownloadOption, PlaylistResult, PlaylistItem } from '../types';

// Use environment variable for Railway backend URL, fallback to relative path for local dev
const API_BASE_URL = import.meta.env.VITE_API_URL || '';
const PROXY_ENDPOINT = `${API_BASE_URL}/api/fetch`;
const DIRECT_API_URL = 'https://cobalt-production-4e75.up.railway.app/api/json';
const CORS_PROXY = 'https://corsproxy.io/?';

export const fetchMediaDetails = async (url: string): Promise<MediaResult> => {
  if (!url.startsWith('http')) {
    throw new Error('Please enter a valid URL starting with http:// or https://');
  }

  try {
    // 1. Try Backend Proxy (Preferred)
    return await fetchFromEndpoint(PROXY_ENDPOINT, url);
  } catch (proxyError: any) {
    console.warn('Backend proxy failed, attempting client-side fallback:', proxyError);

    // 2. Client-Side Fallback
    try {
      const targetUrl = DIRECT_API_URL;
      const proxiedUrl = `${CORS_PROXY}${encodeURIComponent(targetUrl)}`;
      return await fetchFromEndpoint(proxiedUrl, url);
    } catch (fallbackError: any) {
      throw new Error(fallbackError.message || 'Unable to fetch media. Please try again.');
    }
  }
};

async function fetchFromEndpoint(endpoint: string, mediaUrl: string): Promise<MediaResult> {
  const controller = new AbortController();
  // 30s timeout for yt-dlp
  const timeoutId = setTimeout(() => controller.abort(), 35000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: mediaUrl,
        isAudioOnly: false // Can be expanded for UI options
      }),
      signal: controller.signal
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Media service endpoint not found (404). If you are developing locally, please ensure the backend is running or use a valid proxy.');
      }
      let errorText = `Request failed (${response.status})`;
      try {
        const errJson = await response.json();
        if (errJson.text) errorText = errJson.text;
      } catch (e) { }
      throw new Error(errorText);
    }

    const data = await response.json();

    if (data.status === 'success') {
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
            items: data.playlistData.items.map((item: any) => ({
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

      // Handle single video
      let options: DownloadOption[] = (data.options || []).map((opt: any) => ({
        id: opt.id || crypto.randomUUID(),
        label: opt.label || 'Download',
        format: opt.format || 'MP4',
        size: opt.size || 'Unknown',
        url: opt.url || data.url,
        formatId: opt.formatId,
        isPrimary: opt.isPrimary || false
      }));

      // If no options are provided (e.g., TikTok videos), create both video and audio options
      if (options.length === 0) {
        // Video option (MP4)
        options.push({
          id: 'video',
          label: 'Video (MP4)',
          format: 'MP4',
          size: '~5 MB', // Estimated size
          url: data.url,
          formatId: 'mp4',
          isPrimary: true
        });

        // Audio option (MP3)
        options.push({
          id: 'audio',
          label: 'Audio Only (MP3)',
          format: 'MP3',
          size: '~0.5 MB', // Estimated size
          url: data.url,
          formatId: 'mp3',
          isPrimary: false
        });
      }

      // Format duration if available
      const formattedDuration = data.duration
        ? (typeof data.duration === 'string'
          ? data.duration
          : `${Math.floor(data.duration / 60)}:${(data.duration % 60).toString().padStart(2, '0')}`)
        : 'Unknown';

      // Get thumbnail - use data.thumbnail or fallback
      const thumbnail = data.thumbnail ||
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop';

      return {
        id: crypto.randomUUID(),
        url: mediaUrl,
        title: data.title || 'Downloaded Media',
        author: data.author || 'Unknown',
        duration: formattedDuration,
        width: data.width,
        height: data.height,
        thumbnail: thumbnail,
        platform: data.platform || 'generic',
        type: data.isAudioOnly ? MediaType.AUDIO : MediaType.VIDEO,
        options: options,
        isPlaylist: false
      };
    }

    throw new Error('No downloadable media found in the response.');

  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Connection timed out. yt-dlp extraction took too long.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
