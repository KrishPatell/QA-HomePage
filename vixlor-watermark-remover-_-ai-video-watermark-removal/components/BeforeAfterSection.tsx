import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterPlayer: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => isDragging.current && handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => isDragging.current && handleMove(e.touches[0].clientX);

    const handleMouseUp = () => { isDragging.current = false; };
    const handleTouchEnd = () => { isDragging.current = false; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMove]);


  return (
    <section id="demo" className="py-16 md:py-24 bg-[var(--color-canvas)]">
      <div className="max-w-5xl mx-auto px-6 text-center scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] tracking-tight">Experience the difference.</h2>
        <p className="mt-4 text-lg md:text-xl text-[var(--color-slate)]">Drag the slider to see the seamless removal in action.</p>
        
        <div 
          ref={containerRef} 
          className="relative mt-12 w-full aspect-video mx-auto rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(18,22,28,0.1)] select-none border border-[var(--color-linen)]"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Before Video */}
          <div className="absolute inset-0">
            <video 
              src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/save.mp4" 
              title="Before watermark removal" 
              className="w-full h-full object-cover pointer-events-none" 
              autoPlay 
              muted 
              loop 
              playsInline 
            />
            <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/40 text-white text-sm font-semibold rounded-md backdrop-blur-sm">BEFORE</div>
          </div>
          
          {/* After Video (clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <video 
              src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/SaveTwitter.Net_bEALvYJY2TNidQ6D_(512p)-vmake.mp4" 
              title="After watermark removal" 
              className="w-full h-full object-cover pointer-events-none" 
              autoPlay 
              muted 
              loop 
              playsInline 
            />
            <div className="absolute top-3 left-3 px-2 py-0.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-md">AFTER</div>
          </div>
          
          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white/50 cursor-ew-resize backdrop-blur-sm" 
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
              <svg className="w-6 h-6 text-[var(--color-accent-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterPlayer;