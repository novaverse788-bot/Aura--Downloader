import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_PLATFORMS } from '../constants';
import { useNavigate } from 'react-router-dom';
import { Search, Globe } from 'lucide-react';

const Platforms: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [failedLogos, setFailedLogos] = useState<Set<string>>(new Set());

  const filteredPlatforms = useMemo(() => {
    return SUPPORTED_PLATFORMS.filter(platform =>
      platform.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      platform.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handlePlatformClick = (exampleUrl?: string) => {
    if (exampleUrl) {
      navigate('/');
    }
  };

  const handleImageError = (id: string) => {
    setFailedLogos(prev => new Set(prev).add(id));
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-aura-black">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
            {t('platforms_title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('platforms_subtitle')}
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl blur opacity-25 group-focus-within:opacity-50 transition duration-300"></div>
            <div className="relative flex items-center bg-aura-black rounded-xl border border-aura-border px-4 py-3 focus-within:border-indigo-500/50 transition-all shadow-2xl">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder={t('search_platforms')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white focus:outline-none placeholder-gray-500 font-medium"
              />
            </div>
          </div>
        </div>

        {filteredPlatforms.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredPlatforms.map((platform) => (
              <div
                key={platform.id}
                onClick={() => handlePlatformClick(platform.exampleUrl)}
                className="group relative bg-aura-card border border-aura-border rounded-xl p-4 flex flex-col items-center justify-center hover:border-indigo-500/50 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer overflow-hidden aspect-square sm:aspect-auto sm:min-h-[160px]"
              >
                <div className="w-14 h-14 bg-white rounded-xl p-2.5 mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center relative overflow-hidden">
                  {failedLogos.has(platform.id) ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-lg">
                      <span className="text-2xl font-black text-indigo-500/80 uppercase">
                        {platform.name.charAt(0)}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={platform.logoUrl}
                      alt={platform.name}
                      onError={() => handleImageError(platform.id)}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                <h3 className="text-sm font-bold text-gray-200 group-hover:text-white text-center w-full px-2 break-words line-clamp-2">
                  {platform.name}
                </h3>

                {/* Status Indicator */}
                <div className="absolute top-2 right-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-aura-black border border-aura-border rounded-lg p-3 shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-30">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: platform.color }}
                    ></span>
                    <span className="font-bold text-white text-sm">{platform.name}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-snug text-left line-clamp-3">
                    {platform.description}
                  </p>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-aura-black border-r border-b border-aura-border rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">{t('no_platforms')} "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-indigo-400 hover:text-indigo-300 mt-2 font-medium"
            >
              Clear search
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Platforms;
