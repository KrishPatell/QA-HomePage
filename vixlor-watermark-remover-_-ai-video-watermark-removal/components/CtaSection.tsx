
import React from 'react';

// A component for the geometric shapes in the background
const DecoShape: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`aspect-square rounded-2xl bg-white/10 absolute ${className}`} />
);

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-porcelain)]">
      <div className="max-w-6xl mx-auto px-6 scroll-reveal">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-accent-blue)] to-[#2558d4] text-center p-12 md:p-16 shadow-2xl">
          {/* Decorative background shapes and grid */}
          <div className="absolute inset-0 z-0 opacity-50">
            <DecoShape className="w-64 -top-20 -left-20 rotate-[30deg]" />
            <DecoShape className="w-48 -bottom-16 -right-12 rotate-[15deg]" />
            <DecoShape className="w-32 top-12 -right-16 rotate-[45deg] opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                Ready to create flawless videos?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-blue-100">
                Get started with the best Vixlor Video Watermark Remover today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/try" 
                  className="w-full sm:w-auto inline-flex items-center justify-center text-base font-semibold text-[var(--color-accent-blue)] bg-white px-8 py-3 rounded-lg transition-transform duration-200 hover:scale-105 focus-ring shadow-lg"
                >
                    Try Vixlor — Free Credits
                </a>
                <a 
                  href="#demo" 
                  className="w-full sm:w-auto inline-flex items-center justify-center text-base font-semibold text-white bg-white/10 px-8 py-3 rounded-lg border border-white/20 transition-colors hover:bg-white/20 focus-ring"
                >
                    See The Demo
                </a>
            </div>
            <p className="mt-6 text-sm text-blue-200">
                First 3 exports free. No credit card required.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
