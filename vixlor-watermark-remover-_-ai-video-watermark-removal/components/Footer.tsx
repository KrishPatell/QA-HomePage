
import React from 'react';
import { VixlorLogo } from './icons/Sora2Logo';

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const Footer: React.FC = () => {
    const linkSections = [
        {
            title: 'Product',
            links: [
                { label: 'Home', href: '#' },
                { label: 'Features', href: '#features' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Demo', href: '#' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'FAQ', href: '#faq' },
                { label: 'Blog', href: '#' },
                { label: 'Contact Us', href: '#' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' },
            ],
        },
    ];

    const socialLinks = [
        { label: 'Twitter', href: '#', icon: TwitterIcon },
        { label: 'Instagram', href: '#', icon: InstagramIcon },
        { label: 'LinkedIn', href: '#', icon: LinkedInIcon },
    ];

    return (
        <footer className="bg-white">
            <div className="max-w-[1200px] mx-auto py-16 px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-4 lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 focus-ring rounded-md mb-4 w-fit">
                            <VixlorLogo className="h-7 w-auto" />
                            <span className="font-semibold text-xl text-[var(--color-ink)]">Vixlor</span>
                        </a>
                        <p className="text-base text-[var(--color-slate)] max-w-xs">
                            AI-powered video cleanup for creators and professionals.
                        </p>
                    </div>
                    {linkSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-base text-[var(--color-ink)] mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-base text-[var(--color-slate)] hover:text-[var(--color-accent-blue)] transition-colors focus-ring rounded-sm">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 border-t border-[var(--color-linen)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-base text-[var(--color-slate)] text-center sm:text-left">
                        © {new Date().getFullYear()} Vixlor. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a key={link.label} href={link.href} aria-label={link.label} className="text-[var(--color-slate)] hover:text-[var(--color-accent-blue)] transition-colors focus-ring rounded-sm">
                                <link.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
