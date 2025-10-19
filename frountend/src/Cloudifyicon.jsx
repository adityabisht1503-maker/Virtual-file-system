import React from 'react';

export default function CloudifyIcon({ size = 40, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cloud shape */}
      <path 
        d="M75 45c0-2.5-0.5-5-1.5-7.2C70.8 28.5 61.5 22 50 22c-9.7 0-18.2 5.5-22.5 13.5C25.5 35.2 24 35 22.5 35 15.6 35 10 40.6 10 47.5S15.6 60 22.5 60h50c8.3 0 15-6.7 15-15s-6.7-15-15-15c-0.8 0-1.7 0.1-2.5 0.2z" 
        fill="url(#gradient1)"
      />
      
      {/* Data/Upload arrow */}
      <path 
        d="M50 75V45M50 45L42 53M50 45L58 53" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Data dots */}
      <circle cx="38" cy="48" r="2.5" fill="white" opacity="0.8"/>
      <circle cx="62" cy="48" r="2.5" fill="white" opacity="0.8"/>
      <circle cx="50" cy="38" r="2.5" fill="white" opacity="0.8"/>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient1" x1="10" y1="22" x2="87.5" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d6efd"/>
          <stop offset="100%" stopColor="#6610f2"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Alternative simpler version
export function CloudifyIconSimple({ size = 90, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Letter C shaped cloud */}
      <path 
        d="M70 30C60 20 35 20 25 35C20 40 18 46 18 52C18 65 28 75 42 75C50 75 57 72 62 67" 
        stroke="url(#gradient2)" 
        strokeWidth="8" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Inner detail */}
      <path 
        d="M65 40C60 35 50 33 43 38" 
        stroke="url(#gradient2)" 
        strokeWidth="5" 
        strokeLinecap="round"
        opacity="0.6"
        fill="none"
      />
      
      <defs>
        <linearGradient id="gradient2" x1="18" y1="25" x2="70" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d6efd"/>
          <stop offset="100%" stopColor="#6610f2"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Usage example with text
export function CloudifyLogo({ size = 10 }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <CloudifyIcon size={size} />
      <span className="fw-bold fs-4 text-primary">Cloudify</span>
    </div>
  );
}