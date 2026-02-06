import type { VercelRequest, VercelResponse } from '@vercel/node';

// Backend URL - should be set via environment variable
const BACKEND_URL = process.env.BACKEND_URL || 'https://aura-downloader-production.up.railway.app';

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

  // Validate URL format
  if (!url.startsWith('http')) {
    return res.status(400).json({
      status: 'error',
      text: 'Please enter a valid URL starting with http:// or https://.'
    });
  }

  try {
    // Proxy the request to the backend
    const backendEndpoint = `${BACKEND_URL}/api/json?url=${encodeURIComponent(url)}`;

    const response = await fetch(backendEndpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend error:', response.status, errorText);

      if (response.status === 404) {
        return res.status(404).json({
          status: 'error',
          text: 'Media not found. Please check the URL.'
        });
      }

      if (response.status === 403) {
        return res.status(403).json({
          status: 'error',
          text: 'Access denied. Rate limit exceeded or content is restricted.'
        });
      }

      if (response.status === 500) {
        return res.status(500).json({
          status: 'error',
          text: 'Backend service error. Please try again later.'
        });
      }

      throw new Error(`Backend returned ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Handle backend response
    if (data.status === 'success' || data.status === 'stream') {
      // Build response in the expected format
      const options: Array<{
        id: string;
        label: string;
        format: string;
        size: string;
        url: string;
        formatId: string;
        isPrimary?: boolean;
      }> = [];

      // Add video options from backend
      if (data.options && Array.isArray(data.options)) {
        data.options.forEach((opt: any, index: number) => {
          options.push({
            id: opt.id || `option_${index}`,
            label: opt.label || opt.name || 'Download',
            format: opt.format || opt.ext || 'MP4',
            size: opt.size || 'Unknown',
            url: opt.url || data.url,
            formatId: opt.formatId || opt.id,
            isPrimary: opt.isPrimary || index === 0
          });
        });
      }

      // Add MP3 option if available
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

      // Fallback option
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

      // Format duration
      const duration = data.duration
        ? (typeof data.duration === 'string'
          ? data.duration
          : `${Math.floor(data.duration / 60)}:${(data.duration % 60).toString().padStart(2, '0')}`)
        : null;

      // Get thumbnail
      const thumbnail = data.thumbnail ||
        data.thumbnails?.[0] ||
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop';

      return res.status(200).json({
        status: 'success',
        url: data.url,
        title: data.title || 'Downloaded Media',
        author: data.uploader || data.uploader_id || 'Unknown',
        duration: duration,
        width: data.width,
        height: data.height,
        thumbnail: thumbnail,
        platform: data.platform || 'YouTube',
        source: url,
        options: options,
        isAudioOnly: isAudioOnly || data.status === 'audio',
        isPlaylist: false
      });
    }

    if (data.status === 'error') {
      return res.status(400).json({
        status: 'error',
        text: data.text || data.error || 'An error occurred'
      });
    }

    throw new Error('Unexpected response from backend');

  } catch (error: any) {
    console.error('Proxy error:', error);

    // Handle fetch errors
    if (error.message.includes('fetch')) {
      return res.status(503).json({
        status: 'error',
        text: 'Backend service is unavailable. Please try again later.',
        details: error.message
      });
    }

    return res.status(500).json({
      status: 'error',
      text: error.message || 'An unexpected error occurred'
    });
  }
}

// Handle download redirect
async function handleDownload(req: VercelRequest, res: VercelResponse) {
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
    // Proxy to backend download endpoint
    const downloadUrl = `${BACKEND_URL}/api/json?url=${encodeURIComponent(urlStr)}`;
    const response = await fetch(downloadUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.json();

    if (data.url) {
      return res.redirect(302, data.url);
    }

    if (data.status === 'error') {
      return res.status(400).json({ error: data.text || 'Download failed' });
    }

    throw new Error('No download URL found');

  } catch (error: any) {
    console.error('Download proxy error:', error);
    return res.status(500).json({
      error: 'Download failed. Please try using the main API endpoint instead.',
      details: error.message
    });
  }
}
