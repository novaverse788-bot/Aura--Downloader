import React from 'react';
import { SUPPORTED_PLATFORMS } from '../constants';
import { Platform } from '../types';

interface PlatformMarqueeProps {
  onPlatformSelect?: (platform: Platform) => void;
}

const PlatformMarquee: React.FC<PlatformMarqueeProps> = ({ onPlatformSelect }) => {
  return (
    <section id="supported-platforms" className="py-24 relative bg-aura-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aura-dark/50 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Supported Platforms
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We support downloading high-quality media from over 1000+ popular websites.
          <span className="hidden md:inline"> Click a platform to see an example.</span>
        </p>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
          {SUPPORTED_PLATFORMS.map((platform) => {
            return (
              <button
                key={platform.id}
                onClick={() => onPlatformSelect && onPlatformSelect(platform)}
                className="group relative flex flex-col items-center justify-center p-4 bg-aura-card border border-aura-border rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer h-32 w-full hover:z-20"
                style={{
                  // @ts-ignore
                  '--platform-color': platform.color
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--platform-color)]/0 to-[var(--platform-color)]/0 group-hover:from-[var(--platform-color)]/5 group-hover:to-transparent transition-all duration-500 rounded-xl opacity-0 group-hover:opacity-100" />

                {/* Logo Container - White background to ensure visibility of all logos */}
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center p-2 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={platform.logoUrl}
                    alt={`${platform.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image fails
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerText = platform.name[0];
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Platform Name */}
                <span className="relative z-10 text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-200">
                  {platform.name}
                </span>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-30">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: platform.color }}
                    ></span>
                    <span className="font-bold text-white text-sm">{platform.name}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-snug text-left">
                    {platform.description}
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-r border-b border-gray-700 rotate-45"></div>
                </div>

              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformMarquee;
