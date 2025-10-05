
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6" role="dialog" aria-live="polite" aria-label="Cookie consent">
            <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-lg border border-[var(--color-linen)] rounded-xl shadow-2xl p-6 transition-all duration-300 transform animate-slide-up">
                <div className="sm:flex sm:items-start sm:gap-6">
                    <div className="flex-grow">
                        <h3 className="font-bold text-lg text-[var(--color-ink)]">We value your privacy</h3>
                        <p className="mt-2 text-base text-[var(--color-slate)]">
                            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex-shrink-0 flex sm:flex-col gap-3">
                        <button
                            onClick={handleAccept}
                            className="w-full sm:w-auto text-base font-medium text-white px-5 py-2.5 rounded-lg bg-[var(--color-accent-blue)] hover:opacity-90 transition-opacity focus-ring"
                            aria-label="Accept cookies"
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleDecline}
                            className="w-full sm:w-auto text-base font-medium text-[var(--color-slate)] px-5 py-2.5 rounded-lg hover:bg-[var(--color-linen)] transition-colors focus-ring"
                            aria-label="Decline cookies"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-slide-up {
                    animation: slide-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
            `}</style>
        </div>
    );
};

export default CookieConsent;
