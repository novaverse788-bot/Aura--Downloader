import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Play,
    Download,
    X,
    ChevronDown,
    ChevronUp,
    Check,
    Copy,
    ExternalLink,
    Clock,
    User,
    ListVideo
} from 'lucide-react';
import { PlaylistResult as PlaylistResultType, PlaylistItem } from '../types';

interface PlaylistResultProps {
    data: PlaylistResultType;
    onReset: () => void;
    onDownloadItem?: (item: PlaylistItem) => void;
}

const PlaylistResult: React.FC<PlaylistResultProps> = ({ data, onReset, onDownloadItem }) => {
    const { t } = useTranslation();
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
    const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set());
    const [copied, setCopied] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    const toggleItem = (position: number) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(position)) {
            newExpanded.delete(position);
        } else {
            newExpanded.add(position);
        }
        setExpandedItems(newExpanded);
    };

    const copyToClipboard = async (text: string, itemId: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(itemId);
            setTimeout(() => setCopied(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleDownload = (item: PlaylistItem) => {
        if (onDownloadItem) {
            onDownloadItem(item);
        }
        setDownloadedItems(prev => new Set([...prev, item.id]));
    };

    const displayedItems = showAll ? data.items : data.items.slice(0, 5);
    const remainingCount = data.items.length - 5;

    return (
        <div className="w-full max-w-4xl mx-auto mt-8 animate-fade-in">
            {/* Playlist Header */}
            <div className="bg-aura-card rounded-2xl border border-aura-border overflow-hidden shadow-2xl">
                {/* Thumbnail & Info */}
                <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-80 h-48 md:h-auto flex-shrink-0">
                        {data.thumbnail ? (
                            <img
                                src={data.thumbnail}
                                alt={data.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                                <ListVideo className="w-16 h-16 text-white/50" />
                            </div>
                        )}
                        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                            <span className="text-white font-bold text-sm">{data.itemCount} videos</span>
                        </div>
                    </div>

                    <div className="flex-1 p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{data.title}</h2>
                                {data.author && (
                                    <p className="text-gray-400 flex items-center gap-2 mb-4">
                                        <User className="w-4 h-4" />
                                        {data.author}
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={onReset}
                                className="p-2 rounded-lg bg-aura-dark/50 hover:bg-aura-dark text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-4">
                            <button
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-lg font-semibold transition-all shadow-lg shadow-red-500/20"
                                onClick={() => window.open(data.url, '_blank')}
                            >
                                <Play className="w-4 h-4" />
                                Open in YouTube
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/20"
                                onClick={() => {
                                    // In a real app, this would trigger bulk download
                                    alert('Bulk download coming soon! For now, download videos individually.');
                                }}
                            >
                                <Download className="w-4 h-4" />
                                Download All
                            </button>
                        </div>
                    </div>
                </div>

                {/* Playlist Items */}
                <div className="border-t border-aura-border">
                    <div className="p-4 bg-aura-dark/30 border-b border-aura-border">
                        <h3 className="text-white font-semibold flex items-center gap-2">
                            <ListVideo className="w-5 h-5 text-red-500" />
                            Playlist Videos
                        </h3>
                    </div>

                    <div className="divide-y divide-aura-border">
                        {displayedItems.map((item) => (
                            <PlaylistItemRow
                                key={item.id}
                                item={item}
                                isExpanded={expandedItems.has(item.position)}
                                isDownloaded={downloadedItems.has(item.id)}
                                copied={copied === item.id}
                                onToggle={() => toggleItem(item.position)}
                                onCopy={() => copyToClipboard(item.url, item.id)}
                                onDownload={() => handleDownload(item)}
                            />
                        ))}

                        {!showAll && remainingCount > 0 && (
                            <button
                                onClick={() => setShowAll(true)}
                                className="w-full p-4 flex items-center justify-center gap-2 text-indigo-400 hover:text-indigo-300 hover:bg-aura-dark/50 transition-colors"
                            >
                                <ChevronDown className="w-5 h-5" />
                                Show {remainingCount} more videos
                                <ChevronDown className="w-5 h-5" />
                            </button>
                        )}

                        {showAll && data.items.length > 5 && (
                            <button
                                onClick={() => setShowAll(false)}
                                className="w-full p-4 flex items-center justify-center gap-2 text-indigo-400 hover:text-indigo-300 hover:bg-aura-dark/50 transition-colors"
                            >
                                <ChevronUp className="w-5 h-5" />
                                Show less
                                <ChevronUp className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Individual Playlist Item Row Component
interface PlaylistItemRowProps {
    item: PlaylistItem;
    isExpanded: boolean;
    isDownloaded: boolean;
    copied: boolean;
    onToggle: () => void;
    onCopy: () => void;
    onDownload: () => void;
}

const PlaylistItemRow: React.FC<PlaylistItemRowProps> = ({
    item,
    isExpanded,
    isDownloaded,
    copied,
    onToggle,
    onCopy,
    onDownload
}) => {
    return (
        <div className="group">
            <div
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-aura-dark/30 transition-colors"
                onClick={onToggle}
            >
                {/* Position Number */}
                <div className="w-8 h-8 rounded-full bg-aura-dark/50 flex items-center justify-center text-gray-400 font-medium text-sm flex-shrink-0">
                    {item.position}
                </div>

                {/* Thumbnail */}
                <div className="relative w-24 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-aura-dark">
                    {item.thumbnail ? (
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-600/20 to-purple-600/20">
                            <Play className="w-6 h-6 text-red-500/50" />
                        </div>
                    )}
                    {item.duration && (
                        <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-xs text-white">
                            {item.duration}
                        </div>
                    )}
                </div>

                {/* Title & Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate group-hover:text-red-400 transition-colors">
                        {item.title}
                    </h4>
                    {item.uploader && (
                        <p className="text-gray-500 text-sm truncate">{item.uploader}</p>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    {isDownloaded ? (
                        <span className="flex items-center gap-1 text-green-400 text-sm px-3 py-1 bg-green-500/10 rounded-lg">
                            <Check className="w-4 h-4" />
                            Downloaded
                        </span>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDownload();
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 rounded-lg text-sm font-medium transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </button>
                    )}

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onCopy();
                        }}
                        className="p-2 rounded-lg bg-aura-dark/50 hover:bg-aura-dark text-gray-400 hover:text-white transition-colors"
                        title="Copy URL"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>

                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-aura-dark/50 hover:bg-aura-dark text-gray-400 hover:text-white transition-colors"
                        title="Open in YouTube"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Expanded Details */}
            {isExpanded && (
                <div className="px-4 pb-4 pl-16 animate-fade-in">
                    <div className="bg-aura-dark/20 rounded-lg p-4 border border-aura-border/50">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span className="text-gray-500 block mb-1">Video ID</span>
                                <span className="text-white font-mono text-xs">{item.id}</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Duration</span>
                                <span className="text-white flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {item.duration || 'Unknown'}
                                </span>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Quality</span>
                                <span className="text-white">Up to 4K</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block mb-1">Format</span>
                                <span className="text-white">MP4 / MP3</span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-aura-border/50">
                            <p className="text-gray-400 text-xs mb-2">Video URL:</p>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={item.url}
                                    readOnly
                                    className="flex-1 bg-aura-black/50 text-gray-300 text-xs px-3 py-2 rounded-lg border border-aura-border font-mono truncate"
                                />
                                <button
                                    onClick={onCopy}
                                    className="flex items-center gap-1.5 px-3 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 rounded-lg text-xs font-medium transition-colors"
                                >
                                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlaylistResult;
