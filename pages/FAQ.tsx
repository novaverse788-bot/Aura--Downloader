import React from 'react';
import { ArrowRight, Download, Headphones, ShieldCheck, Zap, Clock } from 'lucide-react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            q: "How to download YouTube videos?",
            a: "Simply paste the YouTube URL in the search box above and click download. Select your preferred quality and format, then save the file to your device."
        },
        {
            q: "What formats are supported?",
            a: "We support MP4 for video downloads and MP3 for audio downloads. Videos are available in various qualities from 240p to 4K resolution."
        },
        {
            q: "Is it free to use?",
            a: "Yes, AuraDownloader is completely free to use. No registration or payment required."
        },
        {
            q: "Is it safe to download videos?",
            a: "Yes, our tool is safe and secure. We don't require any personal information or account login. All downloads are processed directly."
        },
        {
            q: "Can I download YouTube Shorts?",
            a: "Yes, we support YouTube Shorts. Just paste the Shorts URL and download it like any other video."
        },
        {
            q: "Where are files saved?",
            a: "Downloads are saved to your device's default download location, usually the Downloads folder. On mobile, check your Files or Photos app."
        },
        {
            q: "How long does it take?",
            a: "Most downloads complete in a few seconds. Larger high-quality files may take slightly longer depending on your internet speed."
        },
        {
            q: "Does it work on mobile?",
            a: "Yes, AuraDownloader works on both desktop and mobile browsers. Simply access the website on your phone or tablet."
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Everything you need to know about downloading YouTube videos
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid gap-4">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="group bg-aura-card rounded-xl border border-aura-border overflow-hidden transition-all hover:border-indigo-500/30"
                        >
                            <summary className="flex items-center justify-between p-6 list-none cursor-pointer focus:outline-none">
                                <span className="text-white font-semibold text-lg pr-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-sm">
                                        {idx + 1}
                                    </span>
                                    {faq.q}
                                </span>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-open:rotate-90 group-open:text-indigo-400 transition-transform flex-shrink-0" />
                            </summary>
                            <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-aura-border pt-4 ml-4">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a
                        href="/"
                        className="bg-aura-card p-6 rounded-xl border border-aura-border hover:border-indigo-500/30 transition-colors group"
                    >
                        <Download className="w-8 h-8 text-indigo-400 mb-4" />
                        <h3 className="text-white font-semibold mb-2">Download Now</h3>
                        <p className="text-gray-400 text-sm">Paste a YouTube URL and start downloading</p>
                    </a>

                    <a
                        href="/about"
                        className="bg-aura-card p-6 rounded-xl border border-aura-border hover:border-indigo-500/30 transition-colors group"
                    >
                        <ShieldCheck className="w-8 h-8 text-cyan-400 mb-4" />
                        <h3 className="text-white font-semibold mb-2">About Us</h3>
                        <p className="text-gray-400 text-sm">Learn more about AuraDownloader</p>
                    </a>

                    <a
                        href="/terms"
                        className="bg-aura-card p-6 rounded-xl border border-aura-border hover:border-indigo-500/30 transition-colors group"
                    >
                        <Zap className="w-8 h-8 text-violet-400 mb-4" />
                        <h3 className="text-white font-semibold mb-2">Terms of Service</h3>
                        <p className="text-gray-400 text-sm">Review our usage policies</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
