import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Link as LinkIcon, Loader2, PlayCircle, ShieldCheck, Youtube, List } from 'lucide-react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';
import { fetchMediaDetails } from '../services/mockApi';
import { MediaResult, PlaylistResult as PlaylistResultType } from '../types';
import ResultCard from '../components/ResultCard';
import PlaylistResult from '../components/PlaylistResult';

// YouTube-only homepage with playlist support
const Home: React.FC = () => {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MediaResult | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [isPlaylist, setIsPlaylist] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to top on initial page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Auto-resize logic for the textarea
  useEffect(() => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [url]);

  // Helper function to check if URL is a playlist
  const isPlaylistUrl = (url: string): boolean => {
    return url.includes('playlist') && url.includes('list=');
  };

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    // Check if it's a playlist URL
    if (isPlaylistUrl(url)) {
      setError('🎵 Playlist downloading is coming soon! Stay tuned for updates.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);
    setIsPlaylist(false);

    try {
      const data = await fetchMediaDetails(url);
      setResult(data);
      setIsPlaylist(data.isPlaylist || false);

      // Scroll to top after result loads
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch media. Please check the URL.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key to submit
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleFetch(e as unknown as React.FormEvent);
    }
  };

  const handleReset = () => {
    setUrl('');
    setResult(null);
    setError(null);
    setIsPlaylist(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleDownloadPlaylistItem = (item: { url: string }) => {
    // Open the video URL in a new tab for individual download
    window.open(item.url, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">

      {/* Floating Terms of Use Disclaimer */}
      {showDisclaimer && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 w-full max-w-sm animate-fade-in">
          <div className="bg-aura-card border border-aura-border rounded-xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-cyan-500"></div>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-45" />
            </button>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              Terms of Use
            </h3>
            <div className="text-gray-400 text-xs leading-relaxed space-y-3">
              <p>
                By choosing to download, you acknowledge that the audio or video content you are accessing is for personal and non-commercial use only.
              </p>
              <p>
                You agree not to distribute, copy, modify or otherwise use the downloaded content for any commercial purpose, including but not limited to resale, public performance or broadcast.
              </p>
              <p>
                Any use of the content beyond the scope of these terms may result in a violation of applicable copyright law and the Terms of Service.
              </p>
              <p className="font-medium text-gray-300">
                Aura Downloader assumes no liability for any unauthorized or improper use of the content.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-[1600px] mx-auto flex flex-col items-center justify-center text-center">

        {/* Background Decorative Effects */}
        <div className="absolute top-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v1.0 Now Live
        </div>

        <div className="text-gray-400 text-sm font-medium mb-6 animate-fade-in">
          Free High Quality
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 animate-slide-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
            YouTube Downloader
          </span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Fast & Free
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-gray-400 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Download YouTube videos, Shorts, and music in MP4 or MP3 format. Support for 4K, 1080p, 720p, and more.
        </p>

        {/* Search Input Area */}
        <div className="w-full max-w-2xl relative group animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <form onSubmit={handleFetch} className="relative flex flex-col sm:flex-row gap-2 bg-aura-black p-2 rounded-xl border border-aura-border shadow-2xl items-center">
            <div className="flex-1 flex items-center px-4 py-3 bg-aura-dark/50 rounded-lg border border-transparent focus-within:border-indigo-500/50 focus-within:bg-aura-dark transition-all w-full">
              <LinkIcon className="text-gray-500 w-5 h-5 mr-3 flex-shrink-0" />
              <textarea
                ref={inputRef}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Paste YouTube URL here... (videos, Shorts, music)"
                rows={1}
                className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none resize-none overflow-hidden leading-6"
                disabled={isLoading}
                style={{ minHeight: '24px' }}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !url}
              className="h-12 w-full sm:w-auto px-8 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t('fetching')}
                </>
              ) : (
                <>
                  <ArrowRight className="w-5 h-5" />
                  {t('download')}
                </>
              )}
            </button>
          </form>
        </div>

        {/* Copyright Disclaimer */}
        <button
          onClick={() => setShowDisclaimer(!showDisclaimer)}
          className="mt-8 flex items-center gap-2 text-gray-500 text-sm animate-fade-in group hover:text-gray-400 transition-colors"
        >
          <p>Copyrighted content is not available for download with this tool.</p>
          <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center text-[10px] font-bold group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">
            i
          </div>
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-fade-in max-w-xl">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <p className="font-medium mb-1">Coming Soon!</p>
                <p className="text-red-300/80">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Result Area */}
        {result && (
          isPlaylist && result.playlistData ? (
            <PlaylistResult
              data={result.playlistData}
              onReset={handleReset}
              onDownloadItem={handleDownloadPlaylistItem}
            />
          ) : (
            <ResultCard data={result} onReset={handleReset} />
          )
        )}

      </section>

      {/* YouTube Banner */}
      <div className="bg-gradient-to-r from-red-600/20 via-pink-600/20 to-purple-600/20 border-y border-red-500/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center gap-3">
          <Youtube className="w-6 h-6 text-red-500" />
          <span className="text-white font-medium">YouTube Downloader</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400 text-sm">Download videos, Shorts, and music</span>
        </div>
      </div>

      {/* SEO & FAQ Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* SEO Content Column */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Best YouTube Downloader</h2>
              </div>

              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  <span className="text-white font-medium">Aura Downloader</span> is one of the best YouTube video downloaders for MP3 and MP4 formats. It offers a free, easy-to-use tool that allows you to save videos (up to 4K), playlists, Shorts, and music from YouTube with just one click.
                </p>
                <p>
                  Whether you want to download a high-resolution video, a YouTube Shorts clip, an entire playlist, or simply save audio as MP3, Aura Downloader makes the process fast and simple.
                </p>
                <p>
                  Just enter the YouTube link, select the desired quality, and download it directly to your device. We prioritize speed and security, ensuring your files are processed without annoying ads or tracking.
                </p>
              </div>
            </div>

            {/* FAQ Column */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "Where downloads are saved?",
                    a: "Usually, files are saved in the 'Downloads' folder of your browser or device. On mobile, you can find them in your Photos or Files app."
                  },
                  {
                    q: "How to download YouTube Playlists?",
                    a: "Paste the YouTube playlist link into the search box. The playlist will load showing all videos. You can download individual videos or use our bulk download feature."
                  },
                  {
                    q: "How to download YouTube Videos in MP3?",
                    a: "Paste the YouTube link into the search box, click 'Fetch', then select the 'MP3' option from the result card. Your audio will be ready in seconds."
                  },
                  {
                    q: "How long does it take to download videos?",
                    a: "Preparation takes just a few seconds. Larger high-quality files are merged on our server to ensure the best possible bitrate before serving them to you."
                  },
                  {
                    q: "Is it safe to download with Aura Downloader?",
                    a: "Yes, our tool is strictly for personal use and doesn't require any personal information or account registration to function."
                  }
                ].map((item, id) => (
                  <details key={id} className="group bg-aura-card rounded-xl border border-aura-border overflow-hidden transition-all hover:border-indigo-500/30">
                    <summary className="flex items-center justify-between p-5 list-none cursor-pointer focus:outline-none">
                      <span className="text-white font-semibold pr-4">{id + 1}. {item.q}</span>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-aura-border pt-4">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto pb-24">
        {[
          {
            icon: LinkIcon,
            title: "1. Paste Link",
            desc: "Copy the URL from YouTube (videos, Shorts, or music) and paste it above."
          },
          {
            icon: PlayCircle,
            title: "2. Download",
            desc: "Choose your quality and format. Download starts instantly. No ads."
          }
        ].map((step, idx) => (
          <div key={idx} className="bg-aura-card p-8 rounded-2xl border border-aura-border hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
              <step.icon className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
