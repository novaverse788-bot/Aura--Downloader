import path from 'path';
import { spawn } from 'child_process';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import https from 'https';
import http from 'http';
import fs from 'fs';
import os from 'os';

// In-memory progress tracking
const progressStore: Record<string, { percent: number; status: string; error?: string }> = {};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      {
        name: 'api-middleware',
        configureServer(server) {
          server.middlewares.use((req: any, res: any, next: any) => {
            const parsedUrl = new URL(req.url || '/', `http://${req.headers.host}`);
            const pathname = parsedUrl.pathname;

            // --- API FETCH ENDPOINT ---
            if (pathname === '/api/fetch' && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk: any) => { body += chunk; });
              req.on('end', async () => {
                try {
                  const { url: mediaUrl } = JSON.parse(body);
                  if (!mediaUrl) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ status: 'error', text: 'No URL provided' }));
                    return;
                  }

                  const args = ['-m', 'yt_dlp', '-j', '--no-warnings', '--no-playlist', '--verbose'];
                  args.push(mediaUrl);

                  console.log(`[Diagnostic] Fetching info (verbose): ${mediaUrl}`);
                  const child = spawn('python', args);
                  let stdout = '';
                  let stderr = '';

                  child.stdout.on('data', (data) => { stdout += data; });
                  child.stderr.on('data', (data) => { stderr += data; });

                  child.on('close', (code) => {
                    if (res.writableEnded) return;
                    res.setHeader('Content-Type', 'application/json');

                    if (code !== 0) {
                      console.error(`[Fetch Failed] Code: ${code}. Stderr snippet: ${stderr.slice(-500)}`);
                      res.statusCode = 500;
                      res.end(JSON.stringify({ status: 'error', text: 'YT-DLP failed', details: stderr.slice(-1000) }));
                      return;
                    }

                    try {
                      const metadata = JSON.parse(stdout);
                      const formats = metadata.formats || [];
                      const options: any[] = [];

                      const bestAudio = formats.filter((f: any) => f.vcodec === 'none' && f.acodec !== 'none')
                        .sort((a: any, b: any) => (b.abr || 0) - (a.abr || 0))[0];
                      const audioSize = bestAudio?.filesize || bestAudio?.filesize_approx || 0;

                      // Target video resolutions
                      const targetHeights = [2160, 1440, 1080, 720, 480, 360];

                      targetHeights.forEach(h => {
                        const vFormats = formats.filter((f: any) => f.vcodec !== 'none' && f.height === h)
                          .sort((a: any, b: any) => (b.tbr || 0) - (a.tbr || 0));

                        if (vFormats.length > 0) {
                          const vFormat = vFormats[0];
                          const vSize = vFormat.filesize || vFormat.filesize_approx || 0;
                          const totalBytes = vSize ? (vSize + audioSize) : (metadata.filesize_approx || 0);
                          const sizeStr = totalBytes ? `~${Math.round(totalBytes / (1024 * 1024))} MB` : 'Unknown';

                          options.push({
                            id: `video-${h}`,
                            label: `${h}p High Quality`,
                            format: 'MP4',
                            size: sizeStr,
                            url: mediaUrl, // Keep original URL for yt-dlp based merging
                            // Prefer AVC1 for better compatibility and to match high-bitrate estimations (e.g. 140MB vs 50MB AV01)
                            formatId: `bestvideo[height<=${h}][vcodec^=avc1]+bestaudio/best/bestvideo[height<=${h}]+bestaudio/best/best`,
                            isPrimary: h === 1080 || h === 720
                          });
                        }
                      });

                      options.push({
                        id: 'audio-mp3',
                        label: 'Audio Only (MP3)',
                        format: 'MP3',
                        size: metadata.duration ? `~${((metadata.duration * 128 * 1024 / 8) / (1024 * 1024)).toFixed(1)} MB` : '~4 MB',
                        url: mediaUrl,
                        formatId: 'mp3',
                        isPrimary: false
                      });

                      if (bestAudio) {
                        options.push({
                          id: 'audio-native',
                          label: `Audio Only (${bestAudio.ext.toUpperCase()})`,
                          format: bestAudio.ext.toUpperCase(),
                          size: bestAudio.filesize ? `${(bestAudio.filesize / (1024 * 1024)).toFixed(1)} MB` : 'Unknown',
                          url: bestAudio.url,
                          isPrimary: false
                        });
                      }

                      res.statusCode = 200;
                      res.end(JSON.stringify({
                        status: 'success',
                        title: metadata.title,
                        thumbnail: metadata.thumbnail,
                        duration: metadata.duration,
                        width: metadata.width,
                        height: metadata.height,
                        author: metadata.uploader || metadata.channel || 'Unknown',
                        platform: metadata.extractor || 'generic',
                        options: options
                      }));
                    } catch (e) {
                      res.statusCode = 500;
                      res.end(JSON.stringify({ status: 'error', text: 'Failed to parse metadata' }));
                    }
                  });
                } catch (e) {
                  if (!res.writableEnded) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ status: 'error', text: 'Invalid JSON' }));
                  }
                }
              });
              return;
            }

            // --- API PROGRESS ENDPOINT ---
            if (pathname === '/api/progress') {
              const taskId = parsedUrl.searchParams.get('taskId');
              res.setHeader('Content-Type', 'application/json');
              if (taskId && progressStore[taskId]) {
                res.end(JSON.stringify(progressStore[taskId]));
              } else {
                res.end(JSON.stringify({ percent: 0, status: 'Not started or finished' }));
              }
              return;
            }

            // --- API DOWNLOAD PROXY ---
            if (pathname === '/api/download') {
              const mediaUrl = parsedUrl.searchParams.get('url');
              const formatId = parsedUrl.searchParams.get('formatId');
              const taskId = parsedUrl.searchParams.get('taskId');
              let filename = parsedUrl.searchParams.get('filename') || 'download';

              if (!mediaUrl) {
                res.statusCode = 400;
                res.end('Missing URL');
                return;
              }

              // Set common download headers
              res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
              res.setHeader('X-Content-Type-Options', 'nosniff');

              if (formatId && (formatId.includes('+') || formatId === 'mp3')) {
                console.log(`[Processing] Directing output to tmp for: ${filename} (${formatId})`);

                const safeFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_').replace(/\.[^/.]+$/, "");
                const tmpFileBase = path.join(os.tmpdir(), `aura_diag_${Date.now()}_${safeFilename}`);
                const ext = formatId === 'mp3' ? 'mp3' : 'mp4';
                const tmpFile = `${tmpFileBase}.${ext}`;

                if (taskId) {
                  progressStore[taskId] = { percent: 0, status: 'Starting...' };
                }

                const args = ['-m', 'yt_dlp', '--no-warnings', '--no-playlist', '--verbose', '--socket-timeout', '60', '--retries', '10', '-o', tmpFile];

                if (formatId === 'mp3') {
                  args.push('-x', '--audio-format', 'mp3');
                  res.setHeader('Content-Type', 'audio/mpeg');
                } else {
                  args.push('-f', formatId, '--merge-output-format', 'mp4');
                  // Force AAC transcoding for universal compatibility (Fixes Opus-in-MP4 issue)
                  args.push('--postprocessor-args', 'ffmpeg:-c:a aac');
                  res.setHeader('Content-Type', 'video/mp4');
                }
                args.push(mediaUrl);

                console.log(`[Diagnostic] Executing: python ${args.join(' ')}`);
                const child = spawn('python', args, { stdio: ['pipe', 'pipe', 'pipe'] });

                let processErr = '';
                child.stderr.on('data', (d) => {
                  const line = d.toString();
                  processErr += line;

                  if (taskId) {
                    // Basic progress parsing: "[download]  23.5% of"
                    const match = line.match(/(\d+\.\d+)%/);
                    if (match) {
                      progressStore[taskId].percent = parseFloat(match[1]);
                      progressStore[taskId].status = line.includes('Merging') ? 'Merging files...' : 'Downloading...';
                    } else if (line.includes('Merging')) {
                      progressStore[taskId].status = 'Merging files (almost done)...';
                      progressStore[taskId].percent = 99;
                    } else if (line.includes('Destination')) {
                      progressStore[taskId].status = 'Downloading parts...';
                    }
                  }
                });

                child.on('close', (code) => {
                  if (code === 0 && fs.existsSync(tmpFile)) {
                    if (taskId) {
                      progressStore[taskId].percent = 100;
                      progressStore[taskId].status = 'Ready! Serving file...';
                    }

                    const stats = fs.statSync(tmpFile);
                    res.setHeader('Content-Length', stats.size);
                    const stream = fs.createReadStream(tmpFile);
                    stream.pipe(res);
                    stream.on('end', () => {
                      setTimeout(() => {
                        try { if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile); } catch (e) { }
                        if (taskId) delete progressStore[taskId];
                      }, 5000);
                    });
                  } else {
                    if (taskId) progressStore[taskId].error = 'Processing failed';
                    if (!res.writableEnded) {
                      res.statusCode = 500;
                      res.end(`Processing failed: ${processErr.slice(-300)}`);
                    }
                    try { if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile); } catch (e) { }
                  }
                });

                req.on('close', () => {
                  if (child.exitCode === null) {
                    child.kill();
                    setTimeout(() => {
                      try { if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile); } catch (e) { }
                      if (taskId) delete progressStore[taskId];
                    }, 5000);
                  }
                });
                return;
              } else {
                // Direct URL Proxy
                const protocol = mediaUrl.startsWith('https') ? https : http;
                try {
                  const proxyReq = protocol.get(mediaUrl, (proxyRes) => {
                    if (proxyRes.statusCode === 301 || proxyRes.statusCode === 302) {
                      const newUrl = proxyRes.headers.location;
                      if (newUrl) {
                        protocol.get(newUrl, (newRes) => {
                          res.setHeader('Content-Type', newRes.headers['content-type'] || 'application/octet-stream');
                          if (newRes.headers['content-length']) res.setHeader('Content-Length', newRes.headers['content-length']);
                          newRes.pipe(res);
                        }).on('error', () => { res.statusCode = 500; res.end(); });
                        return;
                      }
                    }

                    res.setHeader('Content-Type', proxyRes.headers['content-type'] || 'application/octet-stream');
                    if (proxyRes.headers['content-length']) res.setHeader('Content-Length', proxyRes.headers['content-length']);
                    proxyRes.pipe(res);
                  });
                  proxyReq.on('error', () => { res.statusCode = 500; res.end(); });
                } catch (e) {
                  res.statusCode = 500; res.end();
                }
                return;
              }
            }

            next();
          });
        }
      }
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    }
  };
});
