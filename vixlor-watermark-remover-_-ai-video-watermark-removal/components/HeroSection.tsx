
import React from 'react';
import HeroCarousel from './HeroCarousel';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-center overflow-hidden air-wash-gradient">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-ink)] tracking-tighter leading-tight scroll-reveal">
                The Ultimate Vixlor Video Watermark Remover
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-[var(--color-slate)] scroll-reveal" style={{ transitionDelay: '150ms' }}>
                Effortlessly remove Sora watermarks and other distracting overlays. Our advanced temporal-aware AI delivers clean, professional-quality footage, keeping your story intact.
            </p>
        </div>
         <div className="mt-8 flex justify-center items-center gap-4 scroll-reveal" style={{ transitionDelay: '300ms' }}>
            <a href="/try" className="text-base font-medium text-white px-6 py-3 rounded-lg bg-[var(--color-accent-blue)] hover:opacity-90 transition-opacity focus-ring shadow-[0_6px_24px_rgba(46,107,255,0.15)]">
                Try Vixlor — Free Credits
            </a>
            <a href="#pricing" className="text-base font-medium text-[var(--color-slate)] px-6 py-3 rounded-lg hover:bg-[var(--color-porcelain)] transition-colors focus-ring">
                View Pricing
            </a>
        </div>
      </div>
      <div className="mt-16 md:mt-24 scroll-reveal" style={{ transitionDelay: '450ms' }}>
        <HeroCarousel />
      </div>
    </section>
  );
};

export default HeroSection;
