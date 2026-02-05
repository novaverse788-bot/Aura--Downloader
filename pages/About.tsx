import React from 'react';
import { Shield, Zap, Heart, Download, Headphones, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About AuraDownloader
          </h1>
          <p className="text-xl text-gray-400">
            The fastest and easiest way to download YouTube videos and music for free
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-aura-card border border-aura-border rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-red-400" />
            </span>
            Our Mission
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            We built AuraDownloader to make YouTube video downloading simple, fast, and completely free.
            Our goal is to provide users with a hassle-free way to save their favorite videos and music
            for offline viewing and listening.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you want to save educational content, music videos, tutorials, or YouTube Shorts,
            our tool makes it easy with just a few clicks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-aura-card border border-aura-border rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="p-3 bg-green-500/10 rounded-lg mb-4 w-fit">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-400">Download videos in seconds with our optimized servers</p>
          </div>

          <div className="bg-aura-card border border-aura-border rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="p-3 bg-blue-500/10 rounded-lg mb-4 w-fit">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Secure & Private</h3>
            <p className="text-sm text-gray-400">No registration required. Your data stays yours.</p>
          </div>

          <div className="bg-aura-card border border-aura-border rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="p-3 bg-purple-500/10 rounded-lg mb-4 w-fit">
              <Download className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Multiple Qualities</h3>
            <p className="text-sm text-gray-400">Choose from 4K, 1080p, 720p, 480p, 360p, and more</p>
          </div>

          <div className="bg-aura-card border border-aura-border rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="p-3 bg-orange-500/10 rounded-lg mb-4 w-fit">
              <Headphones className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">MP3 Support</h3>
            <p className="text-sm text-gray-400">Extract audio from videos and save as MP3</p>
          </div>

          <div className="bg-aura-card border border-aura-border rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="p-3 bg-cyan-500/10 rounded-lg mb-4 w-fit">
              <Smartphone className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Mobile Friendly</h3>
            <p className="text-sm text-gray-400">Works on desktop and mobile browsers</p>
          </div>

          <div className="bg-aura-card border border-aura-border rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
            <div className="p-3 bg-pink-500/10 rounded-lg mb-4 w-fit">
              <Heart className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Free</h3>
            <p className="text-sm text-gray-400">No hidden fees, no subscriptions, no limits</p>
          </div>
        </div>

        {/* Supported Content Types */}
        <div className="bg-gradient-to-br from-red-600/10 via-pink-600/5 to-purple-600/10 border border-red-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </span>
            What You Can Download
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Regular YouTube Videos", status: "available" },
              { name: "YouTube Playlists", status: "coming-soon" },
              { name: "YouTube Shorts", status: "available" },
              { name: "Music Videos", status: "available" },
              { name: "Live Streams (VODs)", status: "available" },
              { name: "Music Playlists", status: "coming-soon" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-300">
                <span className={`w-2 h-2 rounded-full ${item.status === 'coming-soon' ? 'bg-yellow-400' : 'bg-green-400'}`}></span>
                {item.status === 'coming-soon' ? (
                  <span className="text-yellow-400">{item.name} (Coming Soon)</span>
                ) : (
                  <span>{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-aura-dark border-l-4 border-yellow-500/50 p-6 rounded-r-lg">
          <h3 className="text-lg font-bold text-white mb-2">⚠️ Important Notice</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            AuraDownloader is designed for personal, non-commercial use only. Please respect
            content creators' rights and only download videos that you have permission to save.
            We do not support downloading copyrighted content without authorization.
            By using our service, you agree to use it responsibly.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
