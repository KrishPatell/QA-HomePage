
import React, { useState, useRef, useEffect, DragEvent } from 'react';
import Header from '../components/Header';
import TestimonialSection from '../components/TestimonialSection';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/CtaSection';
import Footer from '../components/Footer';

const UploadIcon: React.FC = () => (
    <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);

const ProcessingSpinner: React.FC = () => (
    <svg className="animate-spin h-8 w-8 text-[var(--color-accent-blue)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const processingSteps = [
    "Analyzing video frames...",
    "Detecting watermark regions...",
    "Applying temporal inpainting model...",
    "Reconstructing hidden pixels...",
    "Applying finishing touches...",
    "Finalizing your video!",
];

const ProcessingPage: React.FC = () => {
    type PageState = 'idle' | 'processing' | 'complete';
    const [pageState, setPageState] = useState<PageState>('idle');
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoUrl, setVideoUrl] = useState<string>('');
    const [isDragging, setIsDragging] = useState(false);
    const [processingStep, setProcessingStep] = useState(0);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (pageState === 'processing') {
            setProcessingStep(0);
            const interval = setInterval(() => {
                setProcessingStep(prev => {
                    if (prev < processingSteps.length - 1) {
                        return prev + 1;
                    }
                    clearInterval(interval);
                    setPageState('complete');
                    return prev;
                });
            }, 1200);
            return () => clearInterval(interval);
        }
    }, [pageState]);
    
    const handleFileSelect = (file: File | null) => {
        if (file && file.type.startsWith('video/')) {
            setVideoFile(file);
            setVideoUrl(URL.createObjectURL(file));
            setPageState('processing');
        } else {
            alert('Please select a valid video file.');
        }
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileSelect(e.target.files ? e.target.files[0] : null);
    };

    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileSelect(e.dataTransfer.files ? e.dataTransfer.files[0] : null);
    };

    const onUploadClick = () => fileInputRef.current?.click();

    const resetState = () => {
        setPageState('idle');
        setVideoFile(null);
        if (videoUrl) {
            URL.revokeObjectURL(videoUrl);
        }
        setVideoUrl('');
    }

    // A simplified version of the Before/After player
    const ResultPlayer: React.FC<{ src: string }> = ({ src }) => {
        const [sliderPosition, setSliderPosition] = useState(50);
        const containerRef = useRef<HTMLDivElement>(null);
        const isSliding = useRef(false);

        const handleMove = (clientX: number) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            setSliderPosition((x / rect.width) * 100);
        };

        const handleInteractionStart = (clientX: number) => {
            isSliding.current = true;
            handleMove(clientX);
        };
        
        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => isSliding.current && handleMove(e.clientX);
            const handleTouchMove = (e: TouchEvent) => isSliding.current && handleMove(e.touches[0].clientX);
            const handleInteractionEnd = () => { isSliding.current = false; };
            
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('mouseup', handleInteractionEnd);
            window.addEventListener('touchend', handleInteractionEnd);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('touchmove', handleTouchMove);
                window.removeEventListener('mouseup', handleInteractionEnd);
                window.removeEventListener('touchend', handleInteractionEnd);
            };
        }, []);

        return (
            <div 
              ref={containerRef} 
              className="relative w-full max-w-4xl aspect-video mx-auto rounded-xl overflow-hidden shadow-2xl select-none border-2 border-white/20"
              onMouseDown={(e) => handleInteractionStart(e.clientX)}
              onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
            >
                {/* As it's a demo, both 'before' and 'after' use the same source */}
                <div className="absolute inset-0">
                    <video src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/50 text-white text-sm font-semibold rounded-md backdrop-blur-sm">BEFORE</div>
                </div>
                <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                    <video src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-md">AFTER (DEMO)</div>
                </div>
                <div className="absolute top-0 bottom-0 w-1 bg-white/70 cursor-ew-resize backdrop-blur-sm" style={{ left: `${sliderPosition}%` }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-[var(--color-accent-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[var(--color-porcelain)] text-[var(--color-ink)] flex flex-col">
            <Header />
            
            <main className="flex-grow p-6">
                <div className="w-full max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Experience Vixlor Watermark Removal</h1>
                    <p className="mt-3 max-w-2xl mx-auto text-lg text-[var(--color-slate)]">This interactive demo simulates our pipeline so you can preview the UX. No files are uploaded; processing steps below are illustrative.</p>

                    {pageState === 'idle' && (
                        <>
                            <div
                                onDragOver={onDragOver}
                                onDragLeave={onDragLeave}
                                onDrop={onDrop}
                                onClick={onUploadClick}
                                className={`mt-10 w-full max-w-2xl mx-auto p-10 border-2 border-dashed rounded-2xl cursor-pointer transition-colors ${isDragging ? 'border-[var(--color-accent-blue)] bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
                            >
                                <UploadIcon />
                                <p className="mt-4 font-semibold text-lg">Drag & Drop your video here</p>
                                <p className="text-sm text-[var(--color-slate)]">or click to browse files</p>
                                <input type="file" ref={fileInputRef} onChange={onFileChange} accept="video/*" className="hidden" />
                            </div>

                            {/* Simulated steps explanation */}
                            <div className="mt-8 max-w-2xl mx-auto text-left bg-white border border-[var(--color-linen)] rounded-xl p-5 shadow-sm">
                                <h2 className="text-base font-semibold text-[var(--color-ink)]">What this demo simulates</h2>
                                <p className="mt-2 text-sm text-[var(--color-slate)]">We mimic the key phases of our video cleanup pipeline to showcase the experience:</p>
                                <ol className="mt-3 list-decimal list-inside space-y-1 text-sm text-[var(--color-slate)]">
                                    <li>Analyzing video frames</li>
                                    <li>Detecting watermark regions</li>
                                    <li>Applying temporal inpainting model</li>
                                    <li>Reconstructing hidden pixels</li>
                                    <li>Applying finishing touches</li>
                                    <li>Finalizing your video</li>
                                </ol>
                                <p className="mt-3 text-xs text-[var(--color-slate)]">Note: For privacy, this demo does not upload or store your video; it runs locally and uses a timed simulation.</p>
                            </div>
                        </>
                    )}

                    {pageState === 'processing' && (
                        <div className="flex flex-col items-center gap-6 mt-8">
                            <ProcessingSpinner />
                            <p className="text-xl font-semibold text-[var(--color-slate)] transition-opacity duration-300" key={processingStep}>
                                {processingSteps[processingStep]}
                            </p>
                            {videoUrl && <video src={videoUrl} className="w-48 h-auto rounded-lg shadow-lg opacity-30" muted playsInline autoPlay loop />}

                            {/* Simulated steps explanation (compact) */}
                            <div className="mt-2 max-w-md w-full text-left bg-white border border-[var(--color-linen)] rounded-lg p-4">
                                <p className="text-sm font-medium text-[var(--color-ink)]">About the steps</p>
                                <p className="mt-1 text-xs text-[var(--color-slate)]">These phases are simulated to demonstrate the UI flow.</p>
                            </div>
                        </div>
                    )}

                    {pageState === 'complete' && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Processing Complete!</h2>
                            <p className="mt-2 text-lg text-[var(--color-slate)]">Drag the slider to see the difference.</p>
                            <div className="mt-8">
                                <ResultPlayer src={videoUrl} />
                            </div>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#pricing" className="inline-flex items-center gap-2 text-base font-medium text-white px-6 py-3 rounded-lg bg-[var(--color-accent-blue)] hover:opacity-90 transition-opacity focus-ring shadow-lg">
                                    Sign Up & Get Full Quality
                                </a>
                                <button onClick={resetState} className="text-base font-medium text-[var(--color-slate)] px-6 py-3 rounded-lg hover:bg-[var(--color-linen)] transition-colors focus-ring">
                                    Try Another Video
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            {/* Shared sections from LandingPage */}
            <section className="bg-[var(--color-canvas)]">
                <div className="scroll-reveal">
                    <TestimonialSection />
                </div>
                <div id="faq" className="scroll-reveal">
                    <FaqSection />
                </div>
                <div className="scroll-reveal">
                    <FinalCTA />
                </div>
            </section>
            <Footer />
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ProcessingPage;
