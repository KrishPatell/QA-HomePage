
import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { VixlorLogo } from './icons/Sora2Logo';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-[var(--color-linen)]' : 'bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex-1 flex justify-start">
              <a href="/" className="flex items-center gap-2 focus-ring rounded-md">
                <VixlorLogo className="h-6 w-auto" />
                <span className="font-semibold text-lg text-[var(--color-ink)]">Vixlor</span>
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-base font-medium text-[var(--color-slate)] hover:text-[var(--color-ink)] hover:bg-[var(--color-linen)] px-4 py-2 rounded-md transition-all duration-200 focus-ring"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <div className="flex-1 flex justify-end">
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <a href="#signin" className="text-base font-medium text-[var(--color-slate)] px-4 py-2 rounded-lg border border-transparent hover:border-[var(--color-linen)] hover:bg-[var(--color-linen)] transition-all focus-ring">Login</a>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton appearance={{ elements: { avatarBox: 'h-8 w-8' } }} />
                  </SignedIn>
                  <a href="/try" className="text-base font-medium text-white px-4 py-2 rounded-lg bg-[var(--color-accent-blue)] transition-all duration-200 focus-ring shadow-[0_4px_14px_rgba(46,107,255,0.2)] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(46,107,255,0.25)]">
                    Try Vixlor — Free Credits
                  </a>
                </div>

                <div className="md:hidden">
                  <button 
                    onClick={() => setIsMenuOpen(true)} 
                    className="p-2 -mr-2 inline-flex items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-linen)] focus-ring"
                    aria-label="Open main menu"
                  >
                    <MenuIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[var(--color-canvas)] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between h-[72px] px-6 border-b border-[var(--color-linen)]">
              <a href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                <VixlorLogo className="h-6 w-auto" />
                <span className="font-semibold text-lg text-[var(--color-ink)]">Vixlor</span>
              </a>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 -mr-2 inline-flex items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-linen)] focus-ring"
                aria-label="Close menu"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow p-6 flex flex-col">
              <nav className="flex flex-col gap-2 text-left">
                  {navLinks.map(link => (
                    <a 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)} 
                      className="text-base font-medium text-[var(--color-ink)] p-3 rounded-md hover:bg-[var(--color-linen)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
              </nav>
              <div className="mt-auto pt-6 border-t border-[var(--color-linen)]">
                <a href="/try" onClick={() => setIsMenuOpen(false)} className="w-full block text-center text-base font-medium text-white px-5 py-3 rounded-lg bg-[var(--color-accent-blue)] focus-ring">
                  Try Vixlor — Free Credits
                </a>
                <div className="block text-center mt-4">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <a href="#signin" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-[var(--color-slate)] p-3 rounded-md hover:bg-[var(--color-linen)] transition-colors inline-block">Login</a>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center justify-center p-2">
                      <UserButton appearance={{ elements: { avatarBox: 'h-8 w-8' } }} />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
