
import React, { useEffect, useRef } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import BeforeAfterPlayer from './BeforeAfterSection';
import FeatureShowcase from './FeatureSection';
import PricingTable from './PricingSection';
import FaqSection from './FaqSection';
import TestimonialSection from './TestimonialSection';
import FinalCTA from './CtaSection';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

const LandingPage: React.FC = () => {
    const sectionsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const sections = document.querySelectorAll('.scroll-reveal');
        sections.forEach(section => {
          if (section instanceof HTMLElement) {
              sectionsRef.current.push(section);
              observer.observe(section);
          }
        });

        return () => {
            sectionsRef.current.forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);


  return (
    <div className="bg-[var(--color-canvas)] text-[var(--color-ink)] overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <BeforeAfterPlayer />
        <FeatureShowcase />
        <PricingTable />
        <TestimonialSection />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default LandingPage;
