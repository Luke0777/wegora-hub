import React from 'react';

interface ServiceNebenkostenIllustrationProps {
  className?: string;
}

export function ServiceNebenkostenIllustration({ className = "" }: ServiceNebenkostenIllustrationProps) {
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
        <circle cx="155" cy="145" r="50" fill="#10B981" opacity="0.1" />

        {/* Invoice/Document being scanned */}
        <g transform="translate(100, 80)">
          {/* Main invoice document */}
          <rect
            x="-35"
            y="-45"
            width="70"
            height="90"
            rx="6"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="2"
          />
          
          {/* Invoice header */}
          <rect x="-28" y="-38" width="56" height="6" rx="3" fill="#10B981" opacity="0.3" />
          <rect x="-28" y="-28" width="40" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
          
          {/* Invoice line items */}
          <g transform="translate(-25, -15)">
            {/* Item 1 - umlagefähig */}
            <rect x="0" y="0" width="45" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
            <circle cx="52" cy="1.5" r="4" fill="#10B981" opacity="0.2" />
            <path d="M50,1.5 L51.5,3 L54,0.5" stroke="#10B981" strokeWidth="1" fill="none" strokeLinecap="round" />
            
            {/* Item 2 - umlagefähig */}
            <rect x="0" y="8" width="40" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
            <circle cx="52" cy="9.5" r="4" fill="#10B981" opacity="0.2" />
            <path d="M50,9.5 L51.5,11 L54,8.5" stroke="#10B981" strokeWidth="1" fill="none" strokeLinecap="round" />
            
            {/* Item 3 - nicht umlagefähig */}
            <rect x="0" y="16" width="42" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
            <circle cx="52" cy="17.5" r="4" fill="#E53E3E" opacity="0.2" />
            <path d="M50,15.5 L54,19.5 M54,15.5 L50,19.5" stroke="#E53E3E" strokeWidth="1" strokeLinecap="round" />
            
            {/* Item 4 - umlagefähig */}
            <rect x="0" y="24" width="38" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
            <circle cx="52" cy="25.5" r="4" fill="#10B981" opacity="0.2" />
            <path d="M50,25.5 L51.5,27 L54,24.5" stroke="#10B981" strokeWidth="1" fill="none" strokeLinecap="round" />
            
            {/* Item 5 - umlagefähig */}
            <rect x="0" y="32" width="43" height="3" rx="1.5" fill="#10B981" opacity="0.2" />
            <circle cx="52" cy="33.5" r="4" fill="#10B981" opacity="0.2" />
            <path d="M50,33.5 L51.5,35 L54,32.5" stroke="#10B981" strokeWidth="1" fill="none" strokeLinecap="round" />
          </g>
          
          {/* Total amount at bottom */}
          <rect x="-28" y="28" width="56" height="8" rx="4" fill="#10B981" opacity="0.1" />
          <rect x="-22" y="31" width="30" height="2" rx="1" fill="#10B981" opacity="0.3" />
        </g>

        {/* AI Scanning beam */}
        <g transform="translate(60, 80)">
          {/* Scanning lines moving across document */}
          <path d="M0,-20 L50,-20" stroke="#10B981" strokeWidth="2" opacity="0.6" strokeDasharray="4,2" />
          <path d="M0,-10 L50,-10" stroke="#10B981" strokeWidth="2" opacity="0.4" strokeDasharray="4,2" />
          <path d="M0,0 L50,0" stroke="#10B981" strokeWidth="2" opacity="0.6" strokeDasharray="4,2" />
          <path d="M0,10 L50,10" stroke="#10B981" strokeWidth="2" opacity="0.4" strokeDasharray="4,2" />
        </g>

        {/* AI Brain/Chip indicator */}
        <g transform="translate(40, 140)">
          {/* AI chip */}
          <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#10B981" opacity="0.2" stroke="#10B981" strokeWidth="2" />
          <circle cx="0" cy="0" r="8" fill="#10B981" />
          <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">AI</text>
          
          {/* Chip connections */}
          <path d="M-15,-8 L-20,-8" stroke="#10B981" strokeWidth="1.5" />
          <path d="M-15,0 L-20,0" stroke="#10B981" strokeWidth="1.5" />
          <path d="M-15,8 L-20,8" stroke="#10B981" strokeWidth="1.5" />
          <path d="M15,-8 L20,-8" stroke="#10B981" strokeWidth="1.5" />
          <path d="M15,0 L20,0" stroke="#10B981" strokeWidth="1.5" />
          <path d="M15,8 L20,8" stroke="#10B981" strokeWidth="1.5" />
        </g>

        {/* Classification tags */}
        <g transform="translate(155, 150)">
          {/* Umlagefähig tag */}
          <rect x="-35" y="-15" width="70" height="14" rx="7" fill="#10B981" opacity="0.2" stroke="#10B981" strokeWidth="1.5" />
          <text x="0" y="-8" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="600" dominantBaseline="middle">umlagefähig</text>

          {/* Nicht umlagefähig tag */}
          <rect x="-35" y="5" width="70" height="14" rx="7" fill="#E53E3E" opacity="0.2" stroke="#E53E3E" strokeWidth="1.5" />
          <text x="0" y="12" textAnchor="middle" fill="#E53E3E" fontSize="7" fontWeight="600" dominantBaseline="middle">nicht umlagefähig</text>
        </g>

        {/* Magnifying glass icon (analysis) */}
        <g transform="translate(165, 50)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="#10B981" strokeWidth="2" />
          <circle cx="0" cy="0" r="8" fill="#10B981" opacity="0.1" />
          <path d="M9,9 L16,16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          
          {/* Magnified content indicator */}
          <text x="0" y="3" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">€</text>
        </g>

        {/* Data flow arrows */}
        <g opacity="0.4">
          <path d="M65,100 Q50,120 50,135" stroke="#10B981" strokeWidth="2" fill="none" strokeDasharray="3,3" />
          <path d="M135,100 Q150,120 150,130" stroke="#10B981" strokeWidth="2" fill="none" strokeDasharray="3,3" />
          
          {/* Arrow heads */}
          <path d="M50,135 L47,132 L53,132" fill="#10B981" />
          <path d="M150,130 L147,127 L153,127" fill="#10B981" />
        </g>

        {/* Transparency shield (for tenants) */}
        <g transform="translate(35, 50)">
          {/* Shield shape */}
          <path
            d="M0,-15 L10,-12 L10,0 Q10,8 0,12 Q-10,8 -10,0 L-10,-12 Z"
            fill="#10B981"
            opacity="0.2"
            stroke="#10B981"
            strokeWidth="1.5"
          />
          {/* Check mark inside shield */}
          <path d="M-4,0 L-1,3 L5,-3" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Success indicator */}
        <g transform="translate(170, 185)">
          <circle cx="0" cy="0" r="12" fill="#10B981" opacity="0.2" />
          <circle cx="0" cy="0" r="8" fill="#10B981" />
          <path d="M-3,0 L-1,2 L4,-3" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating decorative elements */}
        <circle cx="25" cy="30" r="2.5" fill="#10B981" opacity="0.5" />
        <circle cx="175" cy="25" r="2" fill="#10B981" opacity="0.5" />
        <circle cx="185" cy="185" r="3" fill="#10B981" opacity="0.5" />
        <circle cx="15" cy="180" r="2" fill="#10B981" opacity="0.5" />
      </svg>
    </div>
  );
}
