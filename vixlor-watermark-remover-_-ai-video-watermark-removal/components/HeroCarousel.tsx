import React from 'react';

// Define the type for a carousel item.
type CarouselItem = {
  id: number;
  creator: string;
  description: string;
  src: string;
  views: string;
};

// A simple verified check icon component.
const CheckCircleIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-500 ml-1 flex-shrink-0">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
);

// Card component to display a single video with view count and creator info.
const Card: React.FC<{ item: CarouselItem }> = ({ item }) => (
  <div className="relative flex-shrink-0 w-40 md:w-48">
    {/* View Count Badge */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-md">
        {item.views} Views
    </div>
    
    {/* Video Card */}
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(18,22,28,0.08)] border border-black/5">
      <video
        src={item.src}
        title={item.creator}
        className="w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
      
      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 p-3 pointer-events-none w-full text-white">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center font-bold text-lg text-cyan-300 border-2 border-white/20">
                {item.creator.charAt(0)}
            </div>
            <div className="overflow-hidden">
                <div className="flex items-center">
                    <span className="font-semibold text-sm truncate">{item.creator}</span>
                    <CheckCircleIcon />
                </div>
            </div>
        </div>
        <p className="text-sm mt-1.5 truncate">{item.description}</p>
      </div>
    </div>
  </div>
);


// Base list of videos with updated, more accurate information.
const baseVideos: Omit<CarouselItem, 'id'>[] = [
    { 
        creator: "Amply Awesome", 
        description: "This Class Confused Their Pr...",
        views: "117.8M",
        src: "https://pub-af595d5658084c1db74f624e385553fe.r2.dev/ssstwitter.com_1759682659698.mp4" 
    },
    { 
        creator: "Beast Philanthropy",
        description: "12 Million.. road to 20",
        views: "12.3M",
        src: "https://pub-af595d5658084c1db74f624e385553fe.r2.dev/12%20Million..%20road%20to%2020%20%F0%9F%8E%A5%20%F0%9F%8D%BF.mp4" 
    },
    { 
        creator: "GQ", 
        description: "Kim Kardashian at MOTY",
        views: "25.1M",
        src: "https://pub-af595d5658084c1db74f624e385553fe.r2.dev/Kim%20Kardashian%20Stuns%20on%20the%20GQ%20MOTY%20Red%20Carpet.mp4" 
    },
    { 
        creator: "Concert Moments", 
        description: "Epic Stage Performance",
        views: "8.9M",
        src: "https://pub-af595d5658084c1db74f624e385553fe.r2.dev/ssstwitter.com_1759682733412.mp4" 
    },
    { 
        creator: "Fact Finder", 
        description: "Did you know this?",
        views: "42.6M",
        src: "https://pub-af595d5658084c1db74f624e385553fe.r2.dev/Did%20you%20know%20this.mp4" 
    },
    { 
        creator: "Skate Life", 
        description: "Downtown Skateboarding",
        views: "15.2M",
        src: "https://pub-af595d5658084c1db74f624e385553fe.r2.dev/videoplayback%20(2).mp4" 
    },
    { 
        creator: "Beauty Glow", 
        description: "My Nightly Skincare Routine",
        views: "5.7M",
        src: "https://pub-af595d5658084c1db74f624e385553fe.r2.dev/videoplayback%20(3).mp4" 
    },
];

// Create the full list for the marquee, duplicating the base list and ensuring unique IDs.
const videos: CarouselItem[] = [
    ...baseVideos.map((video, index) => ({ ...video, id: index + 1 })),
    ...baseVideos.map((video, index) => ({ ...video, id: index + 1 + baseVideos.length })),
];


const HeroCarousel: React.FC = () => {
  return (
    <div className="relative">
      {/* Fades on the sides for a seamless look */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[var(--color-canvas)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[var(--color-canvas)] to-transparent z-10 pointer-events-none"></div>
      
      {/* pt-6 provides space for the view count badges to not get clipped by overflow-hidden */}
      <div className="flex overflow-hidden space-x-6 pt-6">
        {/* Marquee effect with two sets of videos for a continuous loop */}
        <div className="flex space-x-6 animate-marquee">
          {videos.map((item) => (
            <Card key={`a-${item.id}-${item.src}`} item={item} />
          ))}
        </div>
        <div className="flex space-x-6 animate-marquee" aria-hidden="true">
          {videos.map((item) => (
            <Card key={`b-${item.id}-${item.src}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;