import React from 'react';

interface HubHeroIllustrationProps {
  className?: string;
}

export function HubHeroIllustration({ className = "" }: HubHeroIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines - drawn FIRST (behind everything) */}
        <g>
          {/* Connection line: Finanzen to hub */}
          <path
            d="M90,84 L200,150"
            stroke="#3182CE"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
          {/* Connection line: NK Manager to hub */}
          <path
            d="M310,84 L200,150"
            stroke="#3182CE"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
          {/* Connection line: Versammlungen to hub */}
          <path
            d="M126,211 L200,150"
            stroke="#3182CE"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
          {/* Connection line: Kostenanalyse to hub */}
          <path
            d="M274,211 L200,150"
            stroke="#3182CE"
            strokeWidth="1.5"
            opacity="0.2"
            strokeDasharray="4,4"
          />
        </g>

        {/* Scope rings - drawn second (behind circles) */}
        <g transform="translate(200, 150)">
          {/* Outer ring - system boundary (solid, very subtle) - increased spacing for breathing room */}
          <circle cx="0" cy="0" r="125" fill="none" stroke="#3182CE" strokeWidth="1" opacity="0.06" />
          {/* Inner ring - shared scope (dashed, subtle) */}
          <circle cx="0" cy="0" r="70" fill="none" stroke="#3182CE" strokeWidth="1" strokeDasharray="3,3" opacity="0.22" />
        </g>

        {/* Central Object - Wegora House Icon (from header) */}
        <g transform="translate(200, 150)">
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
        <g transform="translate(90, 84)">
          {/* Service circle */}
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
          {/* Chart icon - centered (moved left) */}
          <rect x="-13" y="-3" width="5" height="10" rx="1" fill="#10B981" />
          <rect x="-6" y="-8" width="5" height="15" rx="1" fill="#10B981" />
          <rect x="1" y="-6" width="5" height="13" rx="1" fill="#10B981" />
          <rect x="8" y="-10" width="5" height="17" rx="1" fill="#10B981" />
          {/* Label */}
          <text
            x="0"
            y="50"
            textAnchor="middle"
            fill="#10B981"
            fontSize="10"
            fontWeight="600"
          >
            Finanzen
          </text>
        </g>

        {/* Service 2: Wegora NK Manager (Top Right) */}
        <g transform="translate(310, 84)">
          {/* Service circle */}
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
          {/* Document scanning icon - optically centered */}
          <rect x="-10" y="-11" width="20" height="24" rx="2" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.5" />
          <rect x="-7" y="-7" width="14" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          <rect x="-7" y="-3" width="10" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          <rect x="-7" y="1" width="12" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          {/* AI scanning beam */}
          <path d="M-15,-4 L-8,-4" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
          <path d="M-15,1 L-8,1" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
          {/* Label */}
          <text
            x="0"
            y="50"
            textAnchor="middle"
            fill="#8B5CF6"
            fontSize="10"
            fontWeight="600"
          >
            NK Manager
          </text>
        </g>

        {/* Service 3: Wegora Versammlungen (Bottom Left) */}
        <g transform="translate(126, 217)">
          {/* Service circle */}
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />
          {/* People icon - clean group symbolizing meetings/assemblies */}
          <g transform="translate(0, 0)">
            {/* Person 1 (left) */}
            <circle cx="-7" cy="-4" r="3.5" fill="none" stroke="#3182CE" strokeWidth="1.5" />
            <path d="M-11,4 Q-7,1 -3,4" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Person 2 (center, slightly larger/forward) */}
            <circle cx="0" cy="-5" r="4" fill="none" stroke="#3182CE" strokeWidth="1.5" />
            <path d="M-5,5 Q0,2 5,5" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Person 3 (right) */}
            <circle cx="7" cy="-4" r="3.5" fill="none" stroke="#3182CE" strokeWidth="1.5" />
            <path d="M3,4 Q7,1 11,4" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="50"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="10"
            fontWeight="600"
          >
            Versammlungen
          </text>
        </g>

        {/* Service 4: Wegora Kostenanalyse (Bottom Right) */}
        <g transform="translate(274, 217)">
          {/* Service circle */}
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#F97316" strokeWidth="2" />
          {/* Magnifying glass icon - optically centered */}
          <circle cx="-2" cy="-2" r="8" fill="none" stroke="#F97316" strokeWidth="2" />
          <circle cx="-2" cy="-2" r="5" fill="#F97316" opacity="0.1" />
          <path d="M4,4 L8,8" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
          {/* Euro symbol inside magnifying glass */}
          <text x="-2" y="1" textAnchor="middle" fill="#F97316" fontSize="6" fontWeight="bold">€</text>
          {/* Label */}
          <text
            x="0"
            y="50"
            textAnchor="middle"
            fill="#F97316"
            fontSize="10"
            fontWeight="600"
          >
            Kostenanalyse
          </text>
        </g>
      </svg>
    </div>
  );
}
