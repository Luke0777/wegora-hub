import React from 'react';

interface HubHeroIllustrationProps {
  className?: string;
}

export function HubHeroIllustration({ className = "" }: HubHeroIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        /* Phase 1: Central Object + Rings (0-700ms) */
        .hero-object {
          opacity: 0;
          animation: fadeIn 700ms ease-out forwards;
        }
        
        .hero-rings {
          opacity: 0;
          animation: fadeIn 700ms ease-out forwards;
        }
        
        /* Phase 2: Connection Lines (900-1300ms) */
        .hero-lines {
          opacity: 0;
          animation: fadeIn 400ms ease-out 900ms forwards;
        }
        
        /* Phase 3: Services sequential (1300-2800ms) - softer, slower */
        /* Finanzen (top-left) - first */
        .hero-service-1 {
          opacity: 0;
          animation: fadeIn 600ms ease-out 1300ms forwards;
        }
        
        /* NK Manager (top-right) - second */
        .hero-service-3 {
          opacity: 0;
          animation: fadeIn 600ms ease-out 1600ms forwards;
        }
        
        /* Kostenanalyse (bottom-right) - third */
        .hero-service-4 {
          opacity: 0;
          animation: fadeIn 600ms ease-out 1900ms forwards;
        }
        
        /* Versammlungen (bottom-left) - fourth */
        .hero-service-2 {
          opacity: 0;
          animation: fadeIn 600ms ease-out 2200ms forwards;
        }
      `}</style>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines - drawn FIRST (behind everything) */}
        <g className="hero-lines">
          {/* Connection line: Finanzen to hub */}
          <path
            d="M107,57 L200,150"
            stroke="#3182CE"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
          {/* Connection line: NK Manager to hub */}
          <path
            d="M293,57 L200,150"
            stroke="#3182CE"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
          {/* Connection line: Versammlungen to hub */}
          <path
            d="M107,243 L200,150"
            stroke="#3182CE"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
          {/* Connection line: Kostenanalyse to hub */}
          <path
            d="M293,243 L200,150"
            stroke="#3182CE"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
        </g>

        {/* Scope rings - drawn second (behind circles) */}
        <g transform="translate(200, 150)" className="hero-rings">
          {/* Outer ring - system boundary (solid, very subtle) - increased spacing for breathing room */}
          <circle cx="0" cy="0" r="125" fill="none" stroke="#3182CE" strokeWidth="1" opacity="0.06" />
          {/* Inner ring - shared scope (dashed, subtle) */}
          <circle cx="0" cy="0" r="70" fill="none" stroke="#3182CE" strokeWidth="1" strokeDasharray="3,3" opacity="0.22" />
        </g>

        {/* Central Object - Wegora House Icon (from header) */}
        <g transform="translate(200, 150)" className="hero-object">
          {/* Circle container - white background, matches service circle style */}
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
          
          {/* Wegora house icon - properly centered in circle */}
          <g transform="scale(1.4) translate(-9, -18.5)">
            {/* Simple House Base */}
            <rect x="2" y="16" width="14" height="12" rx="1" fill="#2563EB"/>
            {/* Simple House Roof */}
            <path d="M1 17 L9 9 L17 17 L15 17 L9 11 L3 17 Z" fill="#2563EB"/>
            {/* Single Window */}
            <rect x="6" y="20" width="2" height="2" rx="0.5" fill="white"/>
          </g>
          {/* Optional label */}
          <text
            x="0"
            y="48"
            textAnchor="middle"
            fill="#2563EB"
            fontSize="10"
            fontWeight="600"
            opacity="0.75"
          >
            Objekt
          </text>
        </g>

        {/* Service 1: Wegora Finanzen (Top Left) */}
        <g transform="translate(107, 57)" className="hero-service-1">
          {/* Service circle - 80% of central object */}
          <circle cx="0" cy="0" r="24" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
          {/* Chart icon - scaled proportionally */}
          <rect x="-10.4" y="-2.2" width="4" height="8" rx="0.8" fill="#10B981" />
          <rect x="-4.8" y="-6.4" width="4" height="12" rx="0.8" fill="#10B981" />
          <rect x="0.8" y="-4.8" width="4" height="10.4" rx="0.8" fill="#10B981" />
          <rect x="6.4" y="-8" width="4" height="13.6" rx="0.8" fill="#10B981" />
          {/* Label */}
          <text
            x="0"
            y="40"
            textAnchor="middle"
            fill="#10B981"
            fontSize="9"
            fontWeight="600"
          >
            Finanzen
          </text>
        </g>

        {/* Service 2: Wegora NK Manager (Top Right) */}
        <g transform="translate(293, 57)" className="hero-service-3">
          {/* Service circle - 80% of central object */}
          <circle cx="0" cy="0" r="24" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
          {/* Document scanning icon - scaled proportionally */}
          <rect x="-8" y="-8.7" width="16" height="19.2" rx="1.6" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.3" />
          <rect x="-5.6" y="-5.6" width="11.2" height="1.6" rx="0.8" fill="#8B5CF6" opacity="0.4" />
          <rect x="-5.6" y="-2.4" width="8" height="1.6" rx="0.8" fill="#8B5CF6" opacity="0.4" />
          <rect x="-5.6" y="0.8" width="9.6" height="1.6" rx="0.8" fill="#8B5CF6" opacity="0.4" />
          {/* AI scanning beam */}
          <path d="M-12,-3.2 L-6.4,-3.2" stroke="#8B5CF6" strokeWidth="1.3" opacity="0.6" />
          <path d="M-12,0.8 L-6.4,0.8" stroke="#8B5CF6" strokeWidth="1.3" opacity="0.6" />
          {/* Label */}
          <text
            x="0"
            y="40"
            textAnchor="middle"
            fill="#8B5CF6"
            fontSize="9"
            fontWeight="600"
          >
            NK Manager
          </text>
        </g>

        {/* Service 3: Wegora Versammlungen (Bottom Left) */}
        <g transform="translate(107, 243)" className="hero-service-2">
          {/* Service circle - 80% of central object */}
          <circle cx="0" cy="0" r="24" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />
          {/* People icon - scaled proportionally */}
          <g transform="translate(0, 0)">
            {/* Person 1 (left) */}
            <circle cx="-5.6" cy="-3.2" r="2.8" fill="none" stroke="#3182CE" strokeWidth="1.3" />
            <path d="M-8.8,3.2 Q-5.6,0.8 -2.4,3.2" stroke="#3182CE" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            {/* Person 2 (center, slightly larger/forward) */}
            <circle cx="0" cy="-4" r="3.2" fill="none" stroke="#3182CE" strokeWidth="1.3" />
            <path d="M-4,4 Q0,1.6 4,4" stroke="#3182CE" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            {/* Person 3 (right) */}
            <circle cx="5.6" cy="-3.2" r="2.8" fill="none" stroke="#3182CE" strokeWidth="1.3" />
            <path d="M2.4,3.2 Q5.6,0.8 8.8,3.2" stroke="#3182CE" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="40"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="9"
            fontWeight="600"
          >
            Versammlungen
          </text>
        </g>

        {/* Service 4: Wegora Kostenanalyse (Bottom Right) */}
        <g transform="translate(293, 243)" className="hero-service-4">
          {/* Service circle - 80% of central object */}
          <circle cx="0" cy="0" r="24" fill="#FFFFFF" stroke="#F97316" strokeWidth="2" />
          {/* Magnifying glass icon - scaled proportionally */}
          <circle cx="-1.6" cy="-1.6" r="6.4" fill="none" stroke="#F97316" strokeWidth="1.6" />
          <circle cx="-1.6" cy="-1.6" r="4" fill="#F97316" opacity="0.1" />
          <path d="M3.2,3.2 L6.4,6.4" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" />
          {/* Euro symbol inside magnifying glass */}
          <text x="-1.6" y="0.8" textAnchor="middle" fill="#F97316" fontSize="5.5" fontWeight="bold">€</text>
          {/* Label */}
          <text
            x="0"
            y="40"
            textAnchor="middle"
            fill="#F97316"
            fontSize="9"
            fontWeight="600"
          >
            Kostenanalyse
          </text>
        </g>
      </svg>
    </div>
  );
}
