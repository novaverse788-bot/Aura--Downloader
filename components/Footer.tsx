import React from 'react';
import { Heart, Github, Zap, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="p-2.5 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:scale-105 transition-all duration-300">
                <Zap className="h-6 w-6 text-white fill-current" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                AuraDownloader
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Free YouTube video downloader. Download videos in MP4 or MP3 format with just one click.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/novaverse788-bot" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-aura-card border border-aura-border flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:aryanraut53@gmail.com" className="w-10 h-10 rounded-full bg-aura-card border border-aura-border flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-2 gap-8">

            {/* Product */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                Product
              </h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link to="/" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link to="/terms" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/dmca" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    DMCA
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-aura-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 order-2 md:order-1">
            © {new Date().getFullYear()} AuraDownloader. All rights reserved.
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <div className="flex items-center text-sm text-gray-500 gap-1.5">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500/20 animate-pulse" />
              <span>for the web</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;