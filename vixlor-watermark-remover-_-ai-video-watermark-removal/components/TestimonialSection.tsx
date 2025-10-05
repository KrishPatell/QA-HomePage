
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.514 6.542c0-.584.63-.956 1.144-.642l9.028 5.467c.504.305.504.979 0 1.284l-9.028 5.467c-.514.313-1.144-.058-1.144-.642V6.542Z" fill="currentColor"/>
    </svg>
);

const testimonials = [
    { name: "Sarah L.", role: "Documentary Filmmaker", text: "Vixlor is a game-changer. I used to spend hours manually cloning out watermarks, and the results were always hit or miss. Now, I get perfect, artifact-free videos in minutes.", avatarId: "sarah" },
    { name: "Mike P.", role: "YouTuber", text: "This tool saved my latest project. The temporal-aware AI is no joke – it handled complex motion shots flawlessly. My subscribers didn't notice a thing.", avatarId: "mike" },
    { name: "Jessica Chen", role: "Social Media Manager", text: "Finally, a reliable way to clean up user-generated content for brand campaigns. Vixlor is fast, easy to use, and the quality is unmatched.", avatarId: "jessica" },
    { name: "Tom Alvarez", role: "Wedding Videographer", text: "Removing distracting logos from venue shots used to be a nightmare. Vixlor handles it beautifully, maintaining the cinematic quality of my footage.", avatarId: "tom" },
    { name: "Emily R.", role: "VFX Student", text: "I'm blown away by the technology. It's an incredible tool for learning about inpainting and object removal. The results are truly professional-grade.", avatarId: "emily" },
    { name: "David Kim", role: "Real Estate Agent", text: "My property videos look so much cleaner now. Removing competitor logos or accidental reflections is a breeze. Highly recommended!", avatarId: "david" },
    { name: "Chloe Garcia", role: "Indie Game Developer", text: "Perfect for cleaning up gameplay trailers. Vixlor removes UI elements and watermarks without affecting the fluid motion of the game.", avatarId: "chloe" },
    // FIX: Corrected a typo in the object key from `name:t` to `name`.
    { name: "Ben Carter", role: "Archivist", text: "We use Vixlor to restore old footage that has network watermarks. The quality of restoration is amazing, it's like they were never there.", avatarId: "ben" },
    { name: "Olivia Martinez", role: "Marketing Director", text: "The batch processing feature is a lifesaver. We can queue up dozens of clips and have them ready for our ad campaigns in no time.", avatarId: "olivia" },
    { name: "Alex Johnson", role: "Freelance Editor", text: "I was skeptical at first, but Vixlor exceeded all my expectations. It's now an essential part of my toolkit. Worth every penny.", avatarId: "alex" }
];

const testimonialList = [...testimonials, ...testimonials]; // Duplicate for seamless scroll

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white w-full">
        <div className="flex items-center gap-1 text-[var(--color-accent-bronze)]">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
        </div>
        <blockquote className="mt-4">
            <p className="text-base text-[var(--color-slate)]">
                "{testimonial.text}"
            </p>
        </blockquote>
        <figcaption className="mt-5 flex items-center gap-4">
            <img src={`https://i.pravatar.cc/150?u=${testimonial.avatarId}`} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover"/>
            <div>
                <div className="font-semibold text-[var(--color-ink)]">{testimonial.name}</div>
                <div className="text-[var(--color-slate)] text-sm">{testimonial.role}</div>
            </div>
        </figcaption>
    </div>
);


const TestimonialSection: React.FC = () => {
    return (
        <section className="relative py-16 md:py-24 bg-[var(--color-porcelain)] overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-blue-50 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-30"></div>
            </div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10 scroll-reveal">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left: CTA */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-ink)] tracking-tight">
                            Join thousands of happy creators.
                        </h2>
                        <p className="mt-5 text-lg text-[var(--color-slate)] max-w-md mx-auto lg:mx-0">
                            See why professionals and enthusiasts alike trust Vixlor to deliver flawless, watermark-free videos every time.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <a href="/try" className="text-base font-medium text-white px-6 py-3 rounded-lg bg-[var(--color-accent-blue)] transition-all duration-200 focus-ring shadow-[0_4px_14px_rgba(46,107,255,0.2)] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(46,107,255,0.25)]">
                                Sign Up — It's Free
                            </a>
                            <a href="#demo" className="inline-flex items-center justify-center gap-2 text-base font-medium text-[var(--color-slate)] px-6 py-3 rounded-lg bg-white border border-[var(--color-linen)] hover:bg-[var(--color-porcelain)] transition-colors focus-ring shadow-sm">
                                <PlayIcon className="w-5 h-5" />
                                See The Demo
                            </a>
                        </div>
                    </div>
                    {/* Right: Testimonial Marquee */}
                    <div className="lg:w-1/2 w-full h-[450px] relative">
                         <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[var(--color-porcelain)] to-transparent z-10 pointer-events-none" />
                        <div className="h-full overflow-hidden">
                            <div className="group flex flex-col gap-4 animate-scroll-y hover:[animation-play-state:paused]">
                                {testimonialList.map((testimonial, index) => (
                                    <TestimonialCard key={index} testimonial={testimonial} />
                                ))}
                            </div>
                        </div>
                         <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[var(--color-porcelain)] to-transparent z-10 pointer-events-none" />
                    </div>
                </div>
            </div>
            <style>{`
                .bg-dot-pattern {
                    background-image: radial-gradient(circle at 1px 1px, var(--color-linen) 1px, transparent 0);
                    background-size: 24px 24px;
                }
                 @keyframes scroll-y {
                    from { transform: translateY(0); }
                    to { transform: translateY(calc(-50% - ${0.5 * testimonials.length}rem)); }
                }
                .animate-scroll-y {
                    animation: scroll-y 80s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default TestimonialSection;
