import React from 'react';

interface HubHeroIllustrationProps {
  className?: string;
}

export function HubHeroIllustration({ className = "" }: HubHeroIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full max-w-md max-h-80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circles for depth */}
        <circle cx="320" cy="80" r="60" fill="#3182CE" opacity="0.1" />
        <circle cx="100" cy="220" r="40" fill="#F97316" opacity="0.1" />
        <circle cx="300" cy="240" r="35" fill="#8B5CF6" opacity="0.1" />

        {/* Central WEGORA Platform Hub */}
        <g transform="translate(200, 150)">
          {/* Central hexagon platform */}
          <path
            d="M-30,-52 L30,-52 L60,0 L30,52 L-30,52 L-60,0 Z"
            fill="#3182CE"
            stroke="#2563EB"
            strokeWidth="3"
          />
          {/* Inner glow */}
          <path
            d="M-20,-35 L20,-35 L40,0 L20,35 L-20,35 L-40,0 Z"
            fill="#FFFFFF"
            opacity="0.2"
          />
          {/* Platform label/icon */}
          <circle cx="0" cy="0" r="15" fill="#FFFFFF" />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="12"
            fontWeight="bold"
          >
            W
          </text>
        </g>

        {/* Service 1: Accounting (Top Left) */}
        <g transform="translate(80, 80)">
          {/* Connection line to hub */}
          <path
            d="M0,0 L120,70"
            stroke="#3182CE"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="4,4"
          />
          {/* Service circle */}
          <circle cx="0" cy="0" r="35" fill="#10B981" opacity="0.15" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
          {/* Chart icon */}
          <rect x="-12" y="-5" width="5" height="10" rx="1" fill="#10B981" />
          <rect x="-5" y="-10" width="5" height="15" rx="1" fill="#10B981" />
          <rect x="2" y="-8" width="5" height="13" rx="1" fill="#10B981" />
          <rect x="9" y="-12" width="5" height="17" rx="1" fill="#10B981" />
          {/* Label */}
          <text
            x="0"
            y="50"
            textAnchor="middle"
            fill="#10B981"
            fontSize="11"
            fontWeight="600"
          >
            Accounting
          </text>
        </g>

        {/* Service 2: Nebenkosten (Top Right) */}
        <g transform="translate(320, 80)">
          {/* Connection line to hub */}
          <path
            d="M0,0 L-120,70"
            stroke="#3182CE"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="4,4"
          />
          {/* Service circle */}
          <circle cx="0" cy="0" r="35" fill="#8B5CF6" opacity="0.15" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
          {/* Document scanning icon */}
          <rect x="-10" y="-12" width="20" height="24" rx="2" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.5" />
          <rect x="-7" y="-8" width="14" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          <rect x="-7" y="-4" width="10" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          <rect x="-7" y="0" width="12" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          {/* AI scanning beam */}
          <path d="M-15,-5 L-8,-5" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
          <path d="M-15,0 L-8,0" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
          {/* Label */}
          <text
            x="0"
            y="50"
            textAnchor="middle"
            fill="#8B5CF6"
            fontSize="11"
            fontWeight="600"
          >
            Nebenkosten
          </text>
        </g>

        {/* Service 3: WEG (Bottom) */}
        <g transform="translate(200, 250)">
          {/* Connection line to hub */}
          <path
            d="M0,0 L0,-100"
            stroke="#3182CE"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="4,4"
          />
          {/* Service circle */}
          <circle cx="0" cy="0" r="35" fill="#3182CE" opacity="0.15" />
          <circle cx="0" cy="0" r="30" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />
          {/* Meeting/voting icon */}
          <rect x="-12" y="-8" width="24" height="16" rx="2" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.5" />
          {/* Meeting participants (dots) */}
          <circle cx="-6" cy="-2" r="2" fill="#3182CE" />
          <circle cx="0" cy="-2" r="2" fill="#3182CE" />
          <circle cx="6" cy="-2" r="2" fill="#3182CE" />
          {/* Voting checkmark */}
          <path d="M-3,4 L0,7 L6,0" stroke="#3182CE" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Label */}
          <text
            x="0"
            y="50"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="11"
            fontWeight="600"
          >
            WEG-Service
          </text>
        </g>

        {/* Data flow arrows (animated feel) */}
        <g opacity="0.5">
          {/* Arrow 1: Accounting to Hub */}
          <path d="M115,85 L115,80 L120,82.5 L115,85" fill="#3182CE" />
          
          {/* Arrow 2: Nebenkosten to Hub */}
          <path d="M280,85 L280,80 L275,82.5 L280,85" fill="#8B5CF6" />
          
          {/* Arrow 3: Hub to WEG */}
          <path d="M200,200 L195,200 L197.5,205 L200,200" fill="#3182CE" />
        </g>

        {/* Floating elements for visual interest */}
        <circle cx="60" cy="50" r="3" fill="#F97316" opacity="0.6" />
        <circle cx="340" cy="120" r="2" fill="#8B5CF6" opacity="0.6" />
        <circle cx="180" cy="60" r="2.5" fill="#3182CE" opacity="0.6" />
        <circle cx="320" cy="280" r="2" fill="#10B981" opacity="0.6" />

        {/* Integration indicator at center */}
        <g transform="translate(200, 150)" opacity="0.3">
          <circle cx="0" cy="0" r="70" fill="none" stroke="#3182CE" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="0" cy="0" r="55" fill="none" stroke="#3182CE" strokeWidth="1" strokeDasharray="3,3" />
        </g>
      </svg>
    </div>
  );
}
