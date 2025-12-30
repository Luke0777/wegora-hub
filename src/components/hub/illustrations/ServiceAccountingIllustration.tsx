import React from 'react';

interface ServiceAccountingIllustrationProps {
  className?: string;
}

export function ServiceAccountingIllustration({ className = "" }: ServiceAccountingIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-xs max-h-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circles */}
        <circle cx="50" cy="50" r="30" fill="#10B981" opacity="0.1" />
        <circle cx="150" cy="150" r="35" fill="#10B981" opacity="0.1" />

        {/* Main calculator/financial dashboard */}
        <g transform="translate(100, 80)">
          {/* Calculator body */}
          <rect
            x="-40"
            y="-50"
            width="80"
            height="100"
            rx="8"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="2"
          />
          
          {/* Display */}
          <rect
            x="-32"
            y="-42"
            width="64"
            height="20"
            rx="4"
            fill="#10B981"
            opacity="0.1"
          />
          
          {/* Display numbers */}
          <rect x="-25" y="-38" width="50" height="4" rx="2" fill="#10B981" opacity="0.3" />
          <rect x="-25" y="-30" width="35" height="4" rx="2" fill="#10B981" opacity="0.3" />
          
          {/* Calculator buttons grid */}
          <g transform="translate(-24, -10)">
            {/* Row 1 */}
            <rect x="0" y="0" width="12" height="10" rx="2" fill="#10B981" opacity="0.15" />
            <rect x="16" y="0" width="12" height="10" rx="2" fill="#10B981" opacity="0.15" />
            <rect x="32" y="0" width="12" height="10" rx="2" fill="#10B981" opacity="0.15" />
            
            {/* Row 2 */}
            <rect x="0" y="14" width="12" height="10" rx="2" fill="#10B981" opacity="0.15" />
            <rect x="16" y="14" width="12" height="10" rx="2" fill="#10B981" opacity="0.15" />
            <rect x="32" y="14" width="12" height="10" rx="2" fill="#10B981" opacity="0.15" />
            
            {/* Row 3 */}
            <rect x="0" y="28" width="12" height="10" rx="2" fill="#10B981" opacity="0.15" />
            <rect x="16" y="28" width="12" height="10" rx="2" fill="#10B981" opacity="0.15" />
            <rect x="32" y="28" width="12" height="10" rx="2" fill="#10B981" opacity="0.2" />
          </g>
        </g>

        {/* Financial chart */}
        <g transform="translate(140, 130)">
          {/* Chart background */}
          <rect x="-35" y="-35" width="70" height="50" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
          
          {/* Chart title bar */}
          <rect x="-30" y="-30" width="40" height="4" rx="2" fill="#10B981" opacity="0.2" />
          
          {/* Bar chart */}
          <rect x="-25" y="-10" width="8" height="15" rx="2" fill="#10B981" />
          <rect x="-13" y="-15" width="8" height="20" rx="2" fill="#10B981" opacity="0.8" />
          <rect x="-1" y="-12" width="8" height="17" rx="2" fill="#10B981" opacity="0.9" />
          <rect x="11" y="-18" width="8" height="23" rx="2" fill="#10B981" />
          <rect x="23" y="-14" width="8" height="19" rx="2" fill="#10B981" opacity="0.85" />
          
          {/* Chart labels */}
          <rect x="-25" y="7" width="8" height="2" rx="1" fill="#10B981" opacity="0.2" />
          <rect x="-13" y="7" width="8" height="2" rx="1" fill="#10B981" opacity="0.2" />
          <rect x="-1" y="7" width="8" height="2" rx="1" fill="#10B981" opacity="0.2" />
          <rect x="11" y="7" width="8" height="2" rx="1" fill="#10B981" opacity="0.2" />
          <rect x="23" y="7" width="8" height="2" rx="1" fill="#10B981" opacity="0.2" />
        </g>

        {/* Financial documents */}
        <g transform="translate(50, 120)">
          {/* Document 1 - Wirtschaftsplan */}
          <rect x="-20" y="-25" width="40" height="50" rx="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
          <rect x="-15" y="-20" width="30" height="4" rx="2" fill="#10B981" opacity="0.3" />
          <rect x="-15" y="-12" width="25" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
          <rect x="-15" y="-6" width="28" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
          <rect x="-15" y="0" width="22" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
          
          {/* Euro symbol on document */}
          <circle cx="8" cy="10" r="6" fill="#10B981" opacity="0.15" />
          <text x="8" y="13" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">€</text>
        </g>

        {/* Hausgeldabrechnung document */}
        <g transform="translate(45, 50)">
          <rect x="0" y="0" width="35" height="45" rx="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
          <rect x="4" y="4" width="27" height="3" rx="1.5" fill="#10B981" opacity="0.3" />
          <rect x="4" y="10" width="22" height="2" rx="1" fill="#10B981" opacity="0.2" />
          <rect x="4" y="15" width="25" height="2" rx="1" fill="#10B981" opacity="0.2" />
          <rect x="4" y="20" width="20" height="2" rx="1" fill="#10B981" opacity="0.2" />
          <rect x="4" y="25" width="23" height="2" rx="1" fill="#10B981" opacity="0.2" />
          
          {/* Checkmark */}
          <circle cx="27" cy="35" r="5" fill="#10B981" opacity="0.2" />
          <path d="M24,35 L26,37 L30,33" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Automated calculation arrows */}
        <g opacity="0.4">
          <path d="M70,75 Q90,85 105,75" stroke="#10B981" strokeWidth="2" fill="none" strokeDasharray="3,3" />
          <path d="M80,120 Q95,115 110,120" stroke="#10B981" strokeWidth="2" fill="none" strokeDasharray="3,3" />
          
          {/* Arrow heads */}
          <path d="M105,75 L102,77 L105,79" fill="#10B981" />
          <path d="M110,120 L107,118 L107,122" fill="#10B981" />
        </g>

        {/* Success/completion indicator */}
        <g transform="translate(170, 50)">
          <circle cx="0" cy="0" r="15" fill="#10B981" opacity="0.2" />
          <circle cx="0" cy="0" r="10" fill="#10B981" />
          <path d="M-4,0 L-1,3 L5,-3" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating decorative elements */}
        <circle cx="30" cy="30" r="2.5" fill="#10B981" opacity="0.5" />
        <circle cx="170" cy="30" r="2" fill="#10B981" opacity="0.5" />
        <circle cx="180" cy="180" r="3" fill="#10B981" opacity="0.5" />
        <circle cx="20" cy="180" r="2" fill="#10B981" opacity="0.5" />
      </svg>
    </div>
  );
}
