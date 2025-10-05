import React, { useState } from 'react';

const features = [
    {
        title: "Temporal Inpainting",
        description: "Removes marks and rebuilds hidden pixels frame-by-frame without jitter or artifacts.",
        image: "https://b2633864.smushcdn.com/2633864/wp-content/uploads/2020/05/opencv_inpainting_header.jpg?lossy=2&strip=1&webp=1",
    },
    {
        title: "Smart Detection",
        description: "Learns your watermark, then tracks its position, rotation, and opacity through complex motion.",
        image: "https://p.cdn.izhaoli.cn/gc/web/static/20250530/imgs/img-AI-Video-Watermark-Remover.webp",
    },
    {
        title: "GPU-Accelerated",
        description: "Queue multiple clips and export faster than real-time with our optimized processing pipeline.",
        image: "https://i.pcmag.com/imagery/articles/01lTyBxcS2L9vruDcS4D2Ho-1..v1692729678.png",
    },
];

const FeatureShowcase: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-16 md:py-24 bg-[var(--color-porcelain)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] tracking-tight">Engineered for a flawless finish.</h2>
            <p className="mt-4 text-lg md:text-xl text-[var(--color-slate)]">Discover the technology that makes Vixlor the leading Sora Watermark Remover and AI video cleanup tool.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start scroll-reveal">
          {/* Left: Feature List */}
          <div className="md:w-1/3 w-full flex flex-col gap-4">
            {features.map((feature, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-lg transition-colors duration-200 focus-ring ${activeIndex === index ? 'bg-[var(--color-canvas)] shadow-sm' : 'hover:bg-[var(--color-canvas)]/50'}`}
              >
                <h3 className={`font-semibold text-xl ${activeIndex === index ? 'text-[var(--color-ink)]' : 'text-[var(--color-slate)]'}`}>{feature.title}</h3>
                <p className={`mt-2 text-base ${activeIndex === index ? 'text-[var(--color-slate)]' : 'text-[var(--color-slate)]/80'}`}>{feature.description}</p>
              </button>
            ))}
          </div>

          {/* Right: Image Showcase */}
          <div className="md:w-2/3 w-full aspect-[5/4] relative">
            <div className="bg-[var(--color-canvas)] p-2 rounded-xl shadow-[0_10px_30px_rgba(18,22,28,0.1)] border border-[var(--color-linen)]">
                <div className="aspect-[10/7] relative overflow-hidden rounded-lg">
                    {features.map((feature, index) => (
                        <img 
                            key={index}
                            src={feature.image} 
                            alt={feature.title} 
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;