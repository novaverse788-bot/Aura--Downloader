import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollButtons: React.FC = () => {
    const [showTop, setShowTop] = useState(false);
    const [showBottom, setShowBottom] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setShowTop(scrollY > 300);
            setShowBottom(scrollY + windowHeight < documentHeight - 300);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
            {/* Scroll to Top */}
            <button
                onClick={scrollToTop}
                className={`w-12 h-12 rounded-xl bg-aura-card/80 backdrop-blur-md border border-aura-border flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 shadow-2xl group ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                title="Scroll to Top"
            >
                <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Scroll to Bottom */}
            <button
                onClick={scrollToBottom}
                className={`w-12 h-12 rounded-xl bg-aura-card/80 backdrop-blur-md border border-aura-border flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 shadow-2xl group ${showBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                title="Scroll to Bottom"
            >
                <ChevronDown className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
            </button>
        </div>
    );
};

export default ScrollButtons;
