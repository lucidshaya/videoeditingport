import { useState, useRef } from "react";
import { Play, X, Download, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

type Category = "all" | "reels" | "longform" | "animation";
type Subcategory = string;

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  subcategory: Subcategory;
  duration: string;
  videoUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  // Short-Form (Reels)
  { id: 1, title: "Reel 1", category: "reels", subcategory: "Social Media", duration: "0:30", videoUrl: "/videos/reel_0129.mp4" },

  // Long-Form (2 Real items)
  { id: 4, title: "Explainer Video 1", category: "longform", subcategory: "Documentary", duration: "12:30", videoUrl: "/videos/LongformVideo.mp4" },
  { id: 5, title: "Explainer Video 2", category: "longform", subcategory: "Sci-Fi Short Film", duration: "8:45", videoUrl: "/videos/LongformVideo2.mp4" },

  // Animation (1 Real item)
  { id: 6, title: "AI Video Creation 1", category: "animation", subcategory: "3D Character", duration: "0:20", videoUrl: "/videos/animationvideo.mov" },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "reels", label: "Short-Form" },
  { key: "longform", label: "Explainer Videos" },
  { key: "animation", label: "AI Video Creations" },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-4">PORTFOLIO</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects spanning short-form content, documentaries, and motion design
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.key
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedVideo(item)}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent
          className={`p-0 bg-black border-none overflow-hidden ${selectedVideo?.category === 'reels' ? 'max-w-md aspect-[9/16]' : 'max-w-4xl aspect-video'
            }`}
        >
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            <X size={20} />
          </DialogClose>
          {selectedVideo && selectedVideo.videoUrl && (
            <>
              <a
                href={selectedVideo.videoUrl}
                download
                className="absolute top-4 right-16 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
                title="Download Video"
              >
                <Download size={20} />
              </a>
              <a
                href={selectedVideo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-28 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
                title="Open in New Tab"
              >
                <ExternalLink size={20} />
              </a>
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const PortfolioCard = ({ item, index, onClick }: { item: PortfolioItem; index: number; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isReel = item.category === 'reels';

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked or failed, strict error handling not critical for hover preview
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in cursor-pointer ${isReel ? 'row-span-2' : ''
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail / Video Preview */}
      <div className={`overflow-hidden bg-black/10 ${isReel ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <video
          ref={videoRef}
          src={item.videoUrl}
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
            <Play size={24} className="ml-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {item.subcategory}
          </Badge>
          <span className="text-muted-foreground text-xs font-mono">{item.duration}</span>
        </div>
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

