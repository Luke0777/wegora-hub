import React from 'react';

interface ServiceFlowDiagramProps {
  className?: string;
}

export function ServiceFlowDiagram({ className = "" }: ServiceFlowDiagramProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="-50 0 1100 520"
        className="w-full h-full wegora-flow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          /* Base line style */
          .wegora-flow .flow-line {
            transform-box: fill-box;
            transform-origin: center;
            will-change: transform;
          }

          /* Drift animation on branch lines */
          .wegora-flow .drift {
            animation-name: wegora-drift;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          /* Offset timings for organic feel */
          .wegora-flow .drift-1 { animation-duration: 12s; animation-delay: -1.3s; }
          .wegora-flow .drift-2 { animation-duration: 11s; animation-delay: -4.7s; }
          .wegora-flow .drift-3 { animation-duration: 13s; animation-delay: -7.1s; }
          .wegora-flow .drift-4 { animation-duration: 10.5s; animation-delay: -2.9s; }

          /* Subtle drift keyframes */
          @keyframes wegora-drift {
            0%   { transform: translate(0px, 0px); }
            25%  { transform: translate(1px, -0.5px); }
            50%  { transform: translate(0px, 0.8px); }
            75%  { transform: translate(-1px, -0.3px); }
            100% { transform: translate(0px, 0px); }
          }

          /* Respect motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .wegora-flow .drift {
              animation: none !important;
              transform: none !important;
            }
          }

          /* Desktop-only animation */
          @media (max-width: 1024px) {
            .wegora-flow .drift {
              animation: none !important;
            }
          }
        `}</style>

        {/* Connection lines - Pure single-curve Béziers with vertical entry */}
        <g opacity="0.22" stroke="#2463eb" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Trunk: smooth curve into junction - stays stable */}
          <path className="flow-line trunk" d="M 500 192 C 500 194, 500 197, 500 200" />
          
          {/* Fan-out: Centered at x=500, with subtle breathing animation */}
          
          {/* Versammlungen (far left) */}
          <path className="flow-line drift drift-1" d="M 500 200 C 500 245, 50 235, 50 306" />
          
          {/* Finanzen (center-left) */}
          <path className="flow-line drift drift-2" d="M 500 200 C 500 255, 350 245, 350 306" />
          
          {/* NK Manager (center-right) */}
          <path className="flow-line drift drift-3" d="M 500 200 C 500 255, 650 245, 650 306" />
          
          {/* Kostenanalyse (far right) */}
          <path className="flow-line drift drift-4" d="M 500 200 C 500 245, 950 235, 950 306" />
        </g>

        {/* Central OBJEKT - blue styling, centered between Finanzen & NK Manager */}
        <g transform="translate(500, 125)">
          {/* Circle for OBJEKT - scaled up proportionally */}
          <circle cx="0" cy="0" r="67" fill="#FFFFFF" stroke="#2563EB" strokeWidth="4.5" />
          
          {/* Wegora house icon - centered in circle - scaled proportionally */}
          <g transform="scale(3.15) translate(-9, -18.5)">
            {/* Simple House Base */}
            <rect x="2" y="16" width="14" height="12" rx="1" fill="#2563EB"/>
            {/* Simple House Roof */}
            <path d="M1 17 L9 9 L17 17 L15 17 L9 11 L3 17 Z" fill="#2563EB"/>
            {/* Single Window */}
            <rect x="6" y="20" width="2" height="2" rx="0.5" fill="white"/>
          </g>
        </g>

        {/* Service 1: Versammlungen (Left) - Full-width card grid alignment */}
        <g transform="translate(50, 360)">
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#3182CE" strokeWidth="4.5" />
          {/* People icon - scaled proportionally */}
          <g transform="scale(2.25)">
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
            y="90"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="20"
            fontWeight="600"
          >
            Versammlungen
          </text>
        </g>

        {/* Service 2: Finanzen (Center-Left) - Full-width card grid alignment */}
        <g transform="translate(350, 360)">
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#10B981" strokeWidth="4.5" />
          {/* Chart icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <rect x="-10.4" y="-2.2" width="4" height="8" rx="0.8" fill="#10B981" />
            <rect x="-4.8" y="-6.4" width="4" height="12" rx="0.8" fill="#10B981" />
            <rect x="0.8" y="-4.8" width="4" height="10.4" rx="0.8" fill="#10B981" />
            <rect x="6.4" y="-8" width="4" height="13.6" rx="0.8" fill="#10B981" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#10B981"
            fontSize="20"
            fontWeight="600"
          >
            Finanzen
          </text>
        </g>

        {/* Service 3: NK Manager (Center-Right) - Full-width card grid alignment */}
        <g transform="translate(650, 360)">
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="4.5" />
          {/* Document scanning icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <rect x="-8" y="-8.7" width="16" height="19.2" rx="1.6" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.3" />
            <rect x="-5.6" y="-5.6" width="11.2" height="1.6" rx="0.8" fill="#8B5CF6" opacity="0.4" />
            <rect x="-5.6" y="-2.4" width="8" height="1.6" rx="0.8" fill="#8B5CF6" opacity="0.4" />
            <rect x="-5.6" y="0.8" width="9.6" height="1.6" rx="0.8" fill="#8B5CF6" opacity="0.4" />
            {/* AI scanning beam */}
            <path d="M-12,-3.2 L-6.4,-3.2" stroke="#8B5CF6" strokeWidth="1.3" opacity="0.6" />
            <path d="M-12,0.8 L-6.4,0.8" stroke="#8B5CF6" strokeWidth="1.3" opacity="0.6" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#8B5CF6"
            fontSize="20"
            fontWeight="600"
          >
            NK Manager
          </text>
        </g>

        {/* Service 4: Kostenanalyse (Right) - Full-width card grid alignment */}
        <g transform="translate(950, 360)">
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#F97316" strokeWidth="4.5" />
          {/* Magnifying glass icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <circle cx="-1.6" cy="-1.6" r="6.4" fill="none" stroke="#F97316" strokeWidth="1.6" />
            <circle cx="-1.6" cy="-1.6" r="4" fill="#F97316" opacity="0.1" />
            <path d="M3.2,3.2 L6.4,6.4" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" />
            {/* Euro symbol inside magnifying glass */}
            <text x="-1.6" y="0.8" textAnchor="middle" fill="#F97316" fontSize="5.5" fontWeight="bold">€</text>
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#F97316"
            fontSize="20"
            fontWeight="600"
          >
            Kostenanalyse
          </text>
        </g>
      </svg>
    </div>
  );
}
