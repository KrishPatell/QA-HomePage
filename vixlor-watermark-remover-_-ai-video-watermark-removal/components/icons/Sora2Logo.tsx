
import React from 'react';

export const VixlorLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="var(--color-accent-blue)" stroke="none" />
    <path d="M2 17l10 5 10-5" stroke="var(--color-accent-blue)" />
    <path d="M2 12l10 5 10-5" stroke="var(--color-accent-blue)" opacity="0.6" />
  </svg>
);