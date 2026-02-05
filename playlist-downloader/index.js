/**
 * Aura Playlist Downloader - YouTube Playlist Download CLI Tool
 * 
 * This tool downloads all videos from a YouTube playlist
 * with progress tracking and quality selection.
 */

const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');

// Configuration
const DOWNLOADS_DIR = 'downloads';
const PLAYLIST_URL = process.argv[2] || 'https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID';

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    red: '\x1b[31m'
};

/**
 * Log message with color
 */
function log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

/**
 * Sanitize filename by removing invalid characters
 */
function sanitizeFilename(filename) {
    return filename.replace(/[<>:"/\\|?*]/g, '-').trim();
}

/**
 * Format bytes to human readable format
 */
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Get video ID from various YouTube URL formats
 */
function getVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

/**
 * Get playlist ID from URL
 */
function getPlaylistId(url) {
    const regex = /[?&]list=([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

/**
 * Check if URL is a valid YouTube URL
 */
function isValidYouTubeUrl(url) {
    const videoRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return videoRegex.test(url);
}

/**
 * Create downloads directory if it doesn't exist
 */
function ensureDownloadsDir() {
    if (!fs.existsSync(DOWNLOADS_DIR)) {
        fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
        log(`Created downloads directory: ${DOWNLOADS_DIR}`, colors.green);
    }
}

/**
 * Download a single video with progress tracking
 */
async function downloadVideo(videoURL, outputPath, videoTitle) {
    return new Promise((resolve, reject) => {
        const videoId = getVideoId(videoURL);
        const startTime = Date.now();

        log(`\n${colors.cyan}▶ Starting download: ${colors.bright}${videoTitle}${colors.reset}`);
        log(`${colors.cyan}  Video ID: ${videoId}${colors.reset}`);
        log(`${colors.cyan}  Output: ${outputPath}${colors.reset}`);

        try {
            // Get video info for quality selection
            ytdl.getInfo(videoURL).then(info => {
                // Select highest quality format with both video and audio
                const format = ytdl.chooseFormat(info.formats, {
                    quality: 'highest',
                    filter: 'audioandvideo'
                });

                if (!format) {
                    // Fallback to highest video quality (separate audio)
                    const videoFormat = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });
                    const audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highest' });

                    log(`${colors.yellow}  Note: Using separate video + audio tracks${colors.reset}`, colors.yellow);

                    if (!videoFormat) {
                        throw new Error('No suitable video format found');
                    }

                    // Download video and audio separately
                    return downloadWithMerging(videoURL, outputPath, videoTitle, videoFormat, audioFormat, startTime, resolve, reject);
                }

                log(`${colors.cyan}  Format: ${format.container?.toUpperCase() || 'MP4'} | ${format.qualityLabel || 'Unknown'}${colors.reset}`);

                const videoStream = ytdl(videoURL, { format: format });
                const fileStream = fs.createWriteStream(outputPath);

                let downloadedBytes = 0;
                let totalBytes = 0;

                videoStream.on('progress', (chunkLength, downloaded, total) => {
                    downloadedBytes = downloaded;
                    totalBytes = total;

                    const progress = (downloaded / total) * 100;
                    const speed = downloadedBytes / ((Date.now() - startTime) / 1000);
                    const eta = (totalBytes - downloadedBytes) / speed;

                    process.stdout.write(`\r${colors.cyan}  Progress: ${colors.bright}${progress.toFixed(1)}%${colors.reset} | `);
                    process.stdout.write(`${colors.green}${formatBytes(downloaded)}${colors.reset} / ${formatBytes(total)} | `);
                    process.stdout.write(`${colors.yellow}${formatBytes(speed)}/s${colors.reset} | `);
                    process.stdout.write(`${colors.magenta}ETA: ${Math.floor(eta)}s${colors.reset}   `);
                });

                videoStream.pipe(fileStream);

                videoStream.on('end', () => {
                    const duration = (Date.now() - startTime) / 1000;
                    console.log('\n'); // New line after progress
                    log(`✓ Download complete: ${videoTitle}`, colors.green);
                    log(`  Duration: ${duration.toFixed(1)}s | Size: ${formatBytes(totalBytes)}`, colors.cyan);
                    resolve();
                });

                videoStream.on('error', (err) => {
                    console.log('\n');
                    log(`✗ Error streaming video: ${err.message}`, colors.red);
                    reject(err);
                });

                fileStream.on('error', (err) => {
                    console.log('\n');
                    log(`✗ Error writing file: ${err.message}`, colors.red);
                    reject(err);
                });
            }).catch(reject);
        } catch (error) {
            console.log('\n');
            log(`✗ Error: ${error.message}`, colors.red);
            reject(error);
        }
    });
}

/**
 * Download video with separate audio merging (using ffmpeg if available)
 */
async function downloadWithMerging(videoURL, outputPath, title, videoFormat, audioFormat, startTime, resolve, reject) {
    // For now, download video only if merging not available
    log(`${colors.yellow}  Note: Audio merging requires ffmpeg. Downloading video only.${colors.reset}`, colors.yellow);

    const videoStream = ytdl(videoURL, { format: videoFormat });
    const fileStream = fs.createWriteStream(outputPath.replace('.mp4', '_video.mp4'));

    let downloadedBytes = 0;
    let totalBytes = 0;

    videoStream.on('progress', (chunkLength, downloaded, total) => {
        downloadedBytes = downloaded;
        totalBytes = total;

        const progress = (downloaded / total) * 100;
        const speed = downloadedBytes / ((Date.now() - startTime) / 1000);
        const eta = (totalBytes - downloadedBytes) / speed;

        process.stdout.write(`\r${colors.cyan}  Progress: ${colors.bright}${progress.toFixed(1)}%${colors.reset} | `);
        process.stdout.write(`${colors.green}${formatBytes(downloaded)}${colors.reset} / ${formatBytes(total)} | `);
        process.stdout.write(`${colors.yellow}${formatBytes(speed)}/s${colors.reset} | `);
        process.stdout.write(`${colors.magenta}ETA: ${Math.floor(eta)}s${colors.reset}   `);
    });

    videoStream.pipe(fileStream);

    videoStream.on('end', () => {
        const duration = (Date.now() - startTime) / 1000;
        console.log('\n');
        log(`✓ Video download complete: ${title}`, colors.green);
        log(`  Duration: ${duration.toFixed(1)}s | Size: ${formatBytes(totalBytes)}`, colors.cyan);
        resolve();
    });

    videoStream.on('error', (err) => {
        console.log('\n');
        log(`✗ Error: ${err.message}`, colors.red);
        reject(err);
    });
}

/**
 * Download a YouTube playlist
 */
async function downloadPlaylist(playlistURL) {
    const playlistId = getPlaylistId(playlistURL);

    if (!playlistId) {
        log('✗ Invalid playlist URL. Please provide a valid YouTube playlist URL.', colors.red);
        log('Example: https://www.youtube.com/playlist?list=PLxxxxxxxxxxxxx', colors.yellow);
        return;
    }

    log(`\n${colors.bright}${colors.magenta}╔══════════════════════════════════════════════════════════╗${colors.reset}`);
    log(`${colors.bright}${colors.magenta}║       Aura Playlist Downloader - YouTube Playlist        ║${colors.reset}`);
    log(`${colors.bright}${colors.magenta}╚══════════════════════════════════════════════════════════╝${colors.reset}\n`);

    try {
        log(`${colors.cyan}Fetching playlist information...${colors.reset}`);

        // Get playlist info using the first video or playlist URL
        const info = await ytdl.getInfo(playlistURL);

        // Extract video details from playlist
        const playlistDetails = info.playlist || info;
        const videos = [];

        // Handle different response formats from ytdl-core
        if (info.video_details && info.video_details.length > 0) {
            // Direct video details in response
            videos.push(...info.video_details);
        } else if (info.related_video && info.related_video.length > 0) {
            // Related videos (sometimes used for playlists)
            videos.push(...info.related_video);
        }

        // Also try to get videos from the page data
        if (info.player_response?.streamingData?.formats) {
            log(`${colors.yellow}Note: Could not extract full playlist. Downloading single video info.${colors.reset}`);
        }

        // Get all videos from the playlist using getBasicInfo on each
        log(`${colors.cyan}Playlist ID: ${playlistId}${colors.reset}`);

        // Use the details from info if available
        if (info.details && info.details.length > 0) {
            for (const detail of info.details) {
                if (detail.id) {
                    videos.push({
                        id: detail.id,
                        title: detail.title || `Video ${videos.length + 1}`,
                        url: `https://www.youtube.com/watch?v=${detail.id}`,
                        length: detail.length_seconds
                    });
                }
            }
        }

        // Fallback: try to get playlist videos using a workaround
        if (videos.length === 0 && info.video_id) {
            log(`${colors.yellow}Extracting playlist from page data...${colors.reset}`);

            // Try to extract from player response
            const playerResponse = info.player_response || {};
            const contents = playerResponse?.contents?.twoColumnWatchNextResults?.playlist?.playlist?.contents || [];

            for (const item of contents) {
                if (item.playlistPanelVideoRenderer) {
                    const renderer = item.playlistPanelVideoRenderer;
                    videos.push({
                        id: renderer.videoId,
                        title: renderer.title?.simpleText || `Video ${videos.length + 1}`,
                        url: `https://www.youtube.com/watch?v=${renderer.videoId}`,
                        length: renderer.lengthText?.simpleText || 'N/A'
                    });
                }
            }
        }

        if (videos.length === 0) {
            log('✗ No videos found in playlist. The playlist might be private or empty.', colors.red);
            return;
        }

        log(`\n${colors.green}✓ Found ${videos.length} videos in playlist${colors.reset}\n`);

        // Display playlist info
        log(`${colors.cyan}Playlist: ${info.metadata?.playlistMetadataRenderer?.title || 'Unknown'}${colors.reset}`);
        log(`${colors.cyan}Videos: ${videos.length}${colors.reset}\n`);

        // Display first few videos
        log(`${colors.bright}First few videos:${colors.reset}`);
        for (let i = 0; i < Math.min(5, videos.length); i++) {
            const v = videos[i];
            log(`  ${i + 1}. ${v.title?.substring(0, 60) || 'Unknown'}`, colors.cyan);
        }
        if (videos.length > 5) {
            log(`  ... and ${videos.length - 5} more`, colors.yellow);
        }

        console.log('\n');

        // Ensure downloads directory exists
        ensureDownloadsDir();

        // Download each video
        let successCount = 0;
        let failCount = 0;

        for (let i = 0; i < videos.length; i++) {
            const video = videos[i];
            const videoUrl = video.url || `https://www.youtube.com/watch?v=${video.id}`;
            const videoTitle = video.title || `Video_${i + 1}`;
            const sanitizedTitle = sanitizeFilename(videoTitle);

            // Create output path with title and index
            const outputPath = path.join(DOWNLOADS_DIR, `${i + 1}. ${sanitizedTitle}.mp4`);
            const safeOutputPath = path.join(DOWNLOADS_DIR, `${i + 1}. ${video.id}.mp4`);

            try {
                await downloadVideo(videoUrl, safeOutputPath, videoTitle);
                successCount++;
            } catch (error) {
                failCount++;
                log(`✗ Failed to download: ${videoTitle}`, colors.red);
                log(`  Error: ${error.message}`, colors.yellow);
            }

            // Small delay between downloads to avoid rate limiting
            if (i < videos.length - 1) {
                log(`  Waiting 2 seconds before next download...`, colors.cyan);
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }

        // Summary
        console.log('\n');
        log(`${colors.bright}${colors.green}╔══════════════════════════════════════════════════════════╗${colors.reset}`);
        log(`${colors.bright}${colors.green}║                    DOWNLOAD COMPLETE                       ║${colors.reset}`);
        log(`${colors.bright}${colors.green}╚══════════════════════════════════════════════════════════╝${colors.reset}`);
        log(`${colors.green}✓ Successfully downloaded: ${successCount}${colors.reset}`);
        if (failCount > 0) {
            log(`${colors.red}✗ Failed: ${failCount}${colors.reset}`);
        }
        log(`\nDownloaded files saved to: ${path.resolve(DOWNLOADS_DIR)}`, colors.cyan);

    } catch (error) {
        console.log('\n');
        log(`✗ Error fetching playlist: ${error.message}`, colors.red);

        if (error.message.includes('401') || error.message.includes('Private')) {
            log('The playlist might be private or you do not have access.', colors.yellow);
        } else if (error.message.includes('410') || error.message.includes('Gone')) {
            log('This video or playlist has been removed or is no longer available.', colors.yellow);
        } else if (error.message.includes('ratelimit') || error.message.includes('429')) {
            log('You have been rate limited. Please try again later.', colors.yellow);
        }

        throw error;
    }
}

/**
 * Download a single video
 */
async function downloadSingleVideo(videoURL) {
    if (!isValidYouTubeUrl(videoURL)) {
        log('✗ Invalid YouTube URL. Please provide a valid YouTube video URL.', colors.red);
        return;
    }

    log(`\n${colors.bright}${colors.magenta}╔══════════════════════════════════════════════════════════╗${colors.reset}`);
    log(`${colors.bright}${colors.magenta}║           Aura Playlist Downloader - Single Video          ║${colors.reset}`);
    log(`${colors.bright}${colors.magenta}╚══════════════════════════════════════════════════════════╝${colors.reset}\n`);

    try {
        log(`${colors.cyan}Fetching video information...${colors.reset}`);

        const info = await ytdl.getInfo(videoURL);
        const videoTitle = info.videoDetails?.title || 'Video';
        const sanitizedTitle = sanitizeFilename(videoTitle);

        log(`${colors.green}✓ Video found: ${videoTitle}`, colors.green);
        log(`  Duration: ${info.videoDetails?.lengthSeconds || 'Unknown'} seconds`, colors.cyan);
        log(`  Views: ${info.videoDetails?.viewCount || 'Unknown'}`, colors.cyan);
        log(`  Author: ${info.videoDetails?.author?.name || 'Unknown'}`, colors.cyan);

        ensureDownloadsDir();

        const outputPath = path.join(DOWNLOADS_DIR, `${sanitizedTitle}.mp4`);
        const safeOutputPath = path.join(DOWNLOADS_DIR, `${getVideoId(videoURL)}.mp4`);

        await downloadVideo(videoURL, safeOutputPath, videoTitle);

        log(`\n✓ Single video download complete!`, colors.green);

    } catch (error) {
        log(`✗ Error: ${error.message}`, colors.red);
    }
}

/**
 * Main function
 */
async function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        // Show help
        console.log('');
        log(`${colors.bright}Aura Playlist Downloader${colors.reset}`, colors.magenta);
        log(`${colors.cyan}YouTube Playlist and Video Download CLI Tool${colors.reset}`);
        console.log('');
        log(`${colors.bright}Usage:${colors.reset}`);
        log(`  node index.js <URL>`, colors.cyan);
        console.log('');
        log(`${colors.bright}Examples:${colors.reset}`);
        log(`  node index.js https://www.youtube.com/watch?v=VIDEO_ID`, colors.cyan);
        log(`  node index.js https://www.youtube.com/playlist?list=PLAYLIST_ID`, colors.cyan);
        console.log('');
        log(`${colors.yellow}Note: Set the PLAYLIST_URL constant in the file to change the default URL.${colors.reset}`);
        return;
    }

    const url = args[0];

    // Check if it's a playlist URL
    if (url.includes('playlist') && url.includes('list=')) {
        await downloadPlaylist(url);
    } else {
        await downloadSingleVideo(url);
    }
}

// Run the main function
main().catch(error => {
    log(`\nFatal error: ${error.message}`, colors.red);
    process.exit(1);
});
