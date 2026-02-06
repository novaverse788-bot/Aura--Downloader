import { MediaResult, MediaType, DownloadOption } from '../types';

// Use environment variable for Vercel proxy URL (preferred)
// The Vercel proxy handles CORS and forwards requests to Railway backend
const VERCEL_API_URL = import.meta.env.VITE_API_URL || '';
const PROXY_ENDPOINT = `${VERCEL_API_URL}/api/fetch`;

export const fetchMediaDetails = async (url: string): Promise<MediaResult> => {
  if (!url.startsWith('http')) {
    throw new Error('Please enter a valid URL starting with http:// or https://');
  }

  // Try the Vercel proxy first (handles CORS correctly)
  if (PROXY_ENDPOINT) {
    try {
      return await fetchWithRetry(PROXY_ENDPOINT, url, 3);
    } catch (error: any) {
      console.warn('Vercel proxy failed after retries:', error.message);
      throw new Error('Service temporarily unavailable. Please try again in a few moments.');
    }
  }

  throw new Error('API endpoint not configured. Please set VITE_API_URL environment variable.');
};

async function fetchWithRetry(endpoint: string, url: string, retries: number): Promise<MediaResult> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fetchFromEndpoint(endpoint, url, 'POST');
    } catch (error: any) {
      lastError = error;
      console.warn(`Attempt ${attempt}/${retries} failed:`, error.message);

      // Don't retry on client-side errors (4xx)
      if (error.message.includes('4') || error.message.includes('not found') || error.message.includes('private') || error.message.includes('restricted')) {
        throw error;
      }

      // Wait before retry (exponential backoff)
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  }

  throw lastError || new Error('Max retries exceeded');
}

async function fetchFromEndpoint(endpoint: string, mediaUrl: string, method: 'GET' | 'POST'): Promise<MediaResult> {
  const controller = new AbortController();
  // 20 second timeout - long enough for yt-dlp, short enough for UX
  const timeoutId = setTimeout(() => controller.abort(), 20000);

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
        throw new Error('Service endpoint not found (404). The API may be misconfigured.');
      }
      if (response.status === 403) {
        throw new Error('Access denied (403). Rate limit may be exceeded.');
      }
      if (response.status === 500) {
        // Check if it's a YouTube bot detection error
        throw new Error('SVR_ERR_500: YouTube is blocking requests. Try a different video.');
      }
      if (response.status === 502 || response.status === 503 || response.status === 504) {
        throw new Error(`Server unavailable (${response.status}). The service may be overloaded.`);
      }

      let errorText = `Request failed (${response.status})`;
      try {
        const errJson = await response.json();
        if (errJson.text) errorText = errJson.text;
        if (errJson.error) errorText = errJson.error;
        if (errJson.details && errJson.details.includes('bot')) {
          errorText = 'YouTube is blocking requests from this server. Try a different video.';
        }
      } catch (e) { }
      throw new Error(errorText);
    }

    const data = await response.json();

    if (data.status === 'success' || data.status === 'stream' || data.fromInvidious) {
      return parseMediaResponse(data, mediaUrl);
    }

    if (data.status === 'error') {
      throw new Error(data.text || data.error || 'Unknown error');
    }

    throw new Error('Invalid response from server.');

  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Connection timed out. The service took too long to respond.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

function parseMediaResponse(data: any, mediaUrl: string): MediaResult {
  // Handle playlists
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
      id: opt.id || opt.formatId || `option_${index}`,
      label: opt.label || opt.name || 'Download',
      format: opt.format || opt.ext || 'MP4',
      size: opt.size || 'Unknown',
      url: opt.url || data.url,
      formatId: opt.formatId || opt.id,
      isPrimary: opt.isPrimary || index === 0
    }));
  }

  // Fallback: create options from available data
  if (options.length === 0 && data.url) {
    options.push({
      id: 'video_best',
      label: 'Best Available',
      format: 'MP4',
      size: 'Unknown',
      url: data.url,
      formatId: 'best',
      isPrimary: true
    });
  }

  // Format duration
  const formattedDuration = data.duration
    ? (typeof data.duration === 'string'
      ? data.duration
      : `${Math.floor((data.duration || 0) / 60)}:${((data.duration || 0) % 60).toString().padStart(2, '0')}`)
    : 'Unknown';

  // Get thumbnail
  const thumbnail = data.thumbnail ||
    data.thumbnailUrl ||
    data.thumbnails?.[0] ||
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop';

  return {
    id: crypto.randomUUID(),
    url: mediaUrl,
    title: data.title || 'Downloaded Media',
    author: data.uploader || data.uploader_id || data.author || 'Unknown',
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
