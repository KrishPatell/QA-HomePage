
import React, { FormEvent, useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import ProcessingPage from './pages/ProcessingPage';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);
        
        // Also handle clicks on links
        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (anchor && anchor.hostname === window.location.hostname) {
                const url = new URL(anchor.href);
                if (url.pathname !== window.location.pathname) {
                    e.preventDefault();
                    window.history.pushState({}, '', url.pathname);
                    onLocationChange();
                }
            }
        };
        
        document.addEventListener('click', handleLinkClick);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
            document.removeEventListener('click', handleLinkClick);
        };
    }, []);
    
    const renderPage = () => {
        switch (path) {
            case '/try':
                return <ProcessingPage />;
            default:
                return <LandingPage />;
        }
    };

    return (
        <>
            {renderPage()}
            <Analytics />
        </>
    );
};

export default App;
