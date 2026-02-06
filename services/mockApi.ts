import { MediaResult, MediaType, DownloadOption } from '../types';

// Use environment variable for Vercel proxy URL (preferred) or Railway backend URL
const VERCEL_PROXY_URL = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/fetch` : '';
const RAILWAY_BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://aura-downloader-production.up.railway.app';

export const fetchMediaDetails = async (url: string): Promise<MediaResult> => {
  if (!url.startsWith('http')) {
    throw new Error('Please enter a valid URL starting with http:// or https://');
  }

  // 1. Try Vercel Proxy (Preferred) - for production with Railway backend
  if (VERCEL_PROXY_URL) {
    try {
      return await fetchFromEndpoint(VERCEL_PROXY_URL, url, 'POST');
    } catch (proxyError: any) {
      console.warn('Vercel proxy failed:', proxyError);
    }
  }

  // 2. Try Railway Backend directly with POST
  try {
    const railwayEndpoint = `${RAILWAY_BACKEND_URL}/api/fetch`;
    return await fetchFromEndpoint(railwayEndpoint, url, 'POST');
  } catch (backendError: any) {
    console.warn('Railway backend failed:', backendError);
  }

  // 3. Try Railway Backend with GET /api/json
  try {
    const jsonEndpoint = `${RAILWAY_BACKEND_URL}/api/json?url=${encodeURIComponent(url)}`;
    return await fetchFromEndpoint(jsonEndpoint, url, 'GET');
  } catch (jsonError: any) {
    console.warn('Railway /api/json failed:', jsonError);
  }

  throw new Error('Unable to fetch media. Please check the URL and try again.');
};

async function fetchFromEndpoint(endpoint: string, mediaUrl: string, method: 'GET' | 'POST'): Promise<MediaResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const options: RequestInit = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      signal: controller.signal
    };

    if (method === 'POST') {
      options.body = JSON.stringify({
        url: mediaUrl,
        isAudioOnly: false
      });
    }

    const response = await fetch(endpoint, options);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Media service endpoint not found (404).');
      }
      if (response.status === 403) {
        throw new Error('Access denied (403). Rate limit may be exceeded.');
      }
      if (response.status === 500) {
        throw new Error('Server error (500). Please try again later.');
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

      // Handle single video
      let options: DownloadOption[] = [];

      if (data.options && Array.isArray(data.options)) {
        options = data.options.map((opt: any, index: number) => ({
          id: opt.id || `option_${index}`,
          label: opt.label || opt.name || 'Download',
          format: opt.format || opt.ext || 'MP4',
          size: opt.size || 'Unknown',
          url: opt.url || data.url,
          formatId: opt.formatId || opt.id,
          isPrimary: opt.isPrimary || index === 0
        }));
      }

      // Fallback options
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
      }

      // Add MP3 option if audio
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

      const formattedDuration = data.duration
        ? (typeof data.duration === 'string'
          ? data.duration
          : `${Math.floor((data.duration || 0) / 60)}:${((data.duration || 0) % 60).toString().padStart(2, '0')}`)
        : 'Unknown';

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
        platform: data.platform || 'YouTube',
        type: data.status === 'audio' ? MediaType.AUDIO : MediaType.VIDEO,
        options: options,
        isPlaylist: false
      };
    }

    if (data.status === 'error') {
      throw new Error(data.text || data.error || 'Unknown error');
    }

    throw new Error('No downloadable media found.');

  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Connection timed out. Please try again.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
