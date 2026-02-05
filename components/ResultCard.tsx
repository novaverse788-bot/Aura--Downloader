import React from 'react';
import { MediaResult } from '../types';
import { Download, Clock, User, CheckCircle, Video, Music, Hd, Zap } from 'lucide-react';

interface ResultCardProps {
  data: MediaResult;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ data, onReset }) => {
  const isVertical = (data.width && data.height) ? (data.height > data.width) : false;
  const [downloadingId, setDownloadingId] = React.useState<string | null>(null);
  const [progress, setProgress] = React.useState<{ percent: number; status: string } | null>(null);
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    let interval: any;
    if (downloadingId) {
      interval = setInterval(async () => {
        try {
          const res = await fetch(`/api/progress?taskId=${downloadingId}`);
          const status = await res.json();
          setProgress(status);
          if (status.percent === 100 || status.error) {
            setTimeout(() => {
              setDownloadingId(null);
              setProgress(null);
            }, 3000);
            clearInterval(interval);
          }
        } catch (e) {
          console.error('Progress poll failed', e);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [downloadingId]);

  const handleDownload = (optionId: string, url: string, filename: string, formatId?: string) => {
    const isHQ = formatId && (formatId.includes('+') || formatId === 'mp3');
    if (isHQ) {
      const taskId = crypto.randomUUID();
      setDownloadingId(taskId);
      setProgress({ percent: 0, status: 'Starting...' });

      const downloadUrl = `/api/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}&formatId=${encodeURIComponent(formatId)}&taskId=${taskId}`;
      window.location.href = downloadUrl;
    } else {
      const downloadUrl = `/api/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}`;
      window.location.href = downloadUrl;
    }
  };

  // Fallback thumbnail if image fails to load
  const fallbackThumbnail = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop';
  const thumbnailUrl = imageError ? fallbackThumbnail : data.thumbnail;

  // Check if media is audio-only
  const isAudioOnly = data.type === 'AUDIO' || (data.options.length > 0 && data.options[0].format === 'MP3');

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-slide-up">
      {/* Main Card */}
      <div className="bg-aura-card border border-aura-border rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">

        {/* Header / Preview Area */}
        <div className={`grid grid-cols-1 ${isVertical || isAudioOnly ? 'md:grid-cols-5' : 'md:grid-cols-2'} gap-0`}>

          {/* Thumbnail Section */}
          <div className={`${isVertical || isAudioOnly ? 'md:col-span-2 h-48 md:h-64' : 'h-64 md:h-80'} relative bg-gray-900 overflow-hidden`}>
            {/* Thumbnail with overlay */}
            <img
              src={thumbnailUrl}
              alt={data.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Duration Badge */}
            {data.duration && (
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs text-white font-medium shadow-lg">
                  <Clock className="w-3.5 h-3.5" /> {data.duration}
                </span>
              </div>
            )}

            {/* Quality Badge */}
            {data.height && (
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 bg-indigo-600/90 text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-lg">
                  <Hd className="w-3.5 h-3.5" /> {data.height}p
                </span>
              </div>
            )}

            {/* Type Badge */}
            <div className="absolute top-4 right-4">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold shadow-lg ${isAudioOnly
                ? 'bg-purple-600/90 text-white'
                : 'bg-indigo-600/90 text-white'
                }`}>
                {isAudioOnly ? <Music className="w-3.5 h-3.5" /> : <Video className="w-3.5 h-3.5" />}
                {data.type}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className={`${isVertical || isAudioOnly ? 'md:col-span-3' : ''} p-6 flex flex-col justify-between`}>
            <div>
              {/* Title */}
              <h3 className={`font-bold text-white line-clamp-2 leading-tight mb-3 ${isVertical || isAudioOnly ? 'text-xl' : 'text-2xl'
                }`}>
                {data.title}
              </h3>

              {/* Author and Platform */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-6">
                {data.author && (
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span className="text-gray-300">{data.author}</span>
                  </div>
                )}
                {data.platform && data.platform !== 'generic' && (
                  <>
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${data.platform === 'YouTube' ? 'bg-red-600/20 text-red-400' :
                      data.platform === 'TikTok' ? 'bg-pink-600/20 text-pink-400' :
                        data.platform === 'Instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500/20 text-purple-400' :
                          'bg-indigo-600/20 text-indigo-400'
                      }`}>
                      {data.platform}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Download Options */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Options
              </p>

              {data.options.map((option, index) => {
                const filename = `${data.title.replace(/[/*?:"<>|]/g, '')}_${option.label.replace(/\s+/g, '_')}.${option.format}`.replace(/\s+/g, '_');
                const isHighQuality = option.formatId === 'mp3' || option.label.includes('1080') || option.label.includes('720');

                return (
                  <button
                    key={option.id || index}
                    onClick={() => handleDownload(option.id, option.url, filename, option.formatId)}
                    disabled={!!downloadingId}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 group ${option.isPrimary || isHighQuality
                      ? 'bg-indigo-600/10 border-indigo-500/50 hover:bg-indigo-600/20 active:scale-[0.98]'
                      : 'bg-aura-dark border-aura-border hover:bg-gray-800 hover:border-gray-600 active:scale-[0.98]'
                      }
                      ${downloadingId ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${option.isPrimary || isHighQuality
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-gray-700 text-gray-300'
                        }`}>
                        {option.format === 'MP3' ? (
                          <Music className="w-5 h-5" />
                        ) : (
                          <Zap className="w-5 h-5" />
                        )}
                      </div>
                      <div className="text-left">
                        <div className={`text-sm font-bold ${option.isPrimary || isHighQuality ? 'text-indigo-300' : 'text-gray-200'
                          }`}>
                          {option.label}
                        </div>
                        <div className="text-xs text-gray-500 font-medium uppercase flex items-center gap-2">
                          <span className="bg-gray-700/50 px-1.5 py-0.5 rounded">{option.format}</span>
                          <span>•</span>
                          <span>{option.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {(option.isPrimary || isHighQuality) && (
                        <CheckCircle className="w-5 h-5 text-indigo-500" />
                      )}
                      <Download className={`w-5 h-5 transition-transform group-hover:translate-y-0.5 ${option.isPrimary || isHighQuality ? 'text-indigo-400' : 'text-gray-500'
                        }`} />
                    </div>
                  </button>
                );
              })}

              {/* Progress Bar UI */}
              {progress && (
                <div className="mt-4 p-4 bg-indigo-600/5 border border-indigo-500/20 rounded-xl animate-slide-up">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                      {progress.status}
                    </span>
                    <span className="text-xs font-black text-indigo-300">{Math.round(progress.percent)}%</span>
                  </div>
                  <div className="h-2 w-full bg-aura-dark rounded-full overflow-hidden border border-aura-border">
                    <div
                      className="h-full bg-indigo-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                      style={{ width: `${progress.percent}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2 text-center">Preparing Quality File...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={onReset}
          className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors px-4 py-2"
        >
          <Download className="w-4 h-4" />
          Download another
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
