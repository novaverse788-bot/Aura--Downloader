import type { VercelRequest, VercelResponse } from '@vercel/node';

// Backend URL - should be set via environment variable
const BACKEND_URL = process.env.BACKEND_URL || 'https://aura-downloader-production.up.railway.app';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only handle GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { url, filename, formatId } = req.query || {};

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const urlStr = Array.isArray(url) ? url[0] : url;
    const filenameStr = filename ? (Array.isArray(filename) ? filename[0] : filename) : 'download';
    const formatIdStr = formatId ? (Array.isArray(formatId) ? formatId[0] : formatId) : 'best';

    console.log(`[Download API] Processing download for: ${urlStr.substring(0, 50)}...`);

    try {
        // Check if it's already a direct video URL
        if (urlStr.includes('googlevideo.com') || urlStr.includes('redirect')) {
            console.log('[Download API] Direct URL detected, redirecting...');
            res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filenameStr)}"`);
            return res.redirect(302, urlStr);
        }

        // Proxy to Railway backend /api/download
        const backendDownloadUrl = `${BACKEND_URL}/api/download?url=${encodeURIComponent(urlStr)}&formatId=${encodeURIComponent(formatIdStr)}&filename=${encodeURIComponent(filenameStr)}`;
        console.log(`[Download API] Proxying to: ${backendDownloadUrl.substring(0, 100)}...`);

        const response = await fetch(backendDownloadUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.url) {
                console.log('[Download API] Received redirect URL, forwarding...');
                res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filenameStr)}"`);
                return res.redirect(302, data.url);
            }
        }

        // If proxy fails, try getting URL directly
        console.log('[Download API] Proxy failed, trying alternative...');
        const directUrl = `${BACKEND_URL}/api/json?url=${encodeURIComponent(urlStr)}`;
        const metadataResponse = await fetch(directUrl);

        if (metadataResponse.ok) {
            const metadata = await metadataResponse.json();
            if (metadata.url) {
                console.log('[Download API] Using direct URL from metadata...');
                res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filenameStr)}"`);
                return res.redirect(302, metadata.url);
            }
        }

        throw new Error('Could not get download URL');

    } catch (error: any) {
        console.error('[Download API] Error:', error.message);
        return res.status(500).json({
            error: 'Download failed',
            message: error.message || 'Could not process download request'
        });
    }
}
