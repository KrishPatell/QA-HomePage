
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined;
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file as VITE_CLERK_PUBLISHABLE_KEY');
}

// Allow Clerk to use our custom pushState router
const navigate = (to: string) => {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
};
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} navigate={navigate}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
