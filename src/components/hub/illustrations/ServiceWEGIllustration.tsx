import React from 'react';

interface ServiceWEGIllustrationProps {
  className?: string;
}

export function ServiceWEGIllustration({ className = "" }: ServiceWEGIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-xs max-h-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circles */}
        <circle cx="50" cy="50" r="30" fill="#3182CE" opacity="0.1" />
        <circle cx="150" cy="150" r="35" fill="#3182CE" opacity="0.1" />

        {/* Meeting table/podium */}
        <g transform="translate(100, 80)">
          {/* Table/Meeting space */}
          <rect
            x="-50"
            y="-15"
            width="100"
            height="30"
            rx="6"
            fill="#FFFFFF"
            stroke="#3182CE"
            strokeWidth="2"
          />
          <rect
            x="-45"
            y="-10"
            width="90"
            height="20"
            rx="4"
            fill="#3182CE"
            opacity="0.1"
          />
          
          {/* Meeting agenda/document on table */}
          <rect x="-30" y="-5" width="60" height="10" rx="2" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.5" />
          <rect x="-26" y="-2" width="25" height="2" rx="1" fill="#3182CE" opacity="0.3" />
          <rect x="-26" y="1" width="20" height="1" rx="0.5" fill="#3182CE" opacity="0.2" />
        </g>

        {/* Meeting participants (simplified circles without faces) */}
        <g transform="translate(60, 75)">
          <circle cx="0" cy="0" r="8" fill="#3182CE" opacity="0.3" stroke="#3182CE" strokeWidth="1.5" />
        </g>

        <g transform="translate(100, 70)">
          <circle cx="0" cy="0" r="8" fill="#3182CE" opacity="0.3" stroke="#3182CE" strokeWidth="1.5" />
        </g>

        <g transform="translate(140, 75)">
          <circle cx="0" cy="0" r="8" fill="#3182CE" opacity="0.3" stroke="#3182CE" strokeWidth="1.5" />
        </g>

        {/* Digital voting interface */}
        <g transform="translate(50, 140)">
          {/* Voting device/tablet - same height as Protokoll (60px) */}
          <rect x="-20" y="-30" width="40" height="60" rx="4" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />

          {/* Abstimmung label - same height as Protokoll */}
          <text x="0" y="-35" textAnchor="middle" fill="#3182CE" fontSize="7" fontWeight="600">Abstimmung</text>

          {/* Voting options - two rows of small badges */}
          <g transform="translate(0, -12)">
            {/* Row 1 */}
            <rect x="-16" y="0" width="14" height="6" rx="3" fill="#10B981" opacity="0.2" stroke="#10B981" strokeWidth="1" />
            <text x="-9" y="3" textAnchor="middle" fill="#10B981" fontSize="4" fontWeight="600" dominantBaseline="middle">Dafür</text>
            <rect x="2" y="0" width="16" height="6" rx="3" fill="#E53E3E" opacity="0.2" stroke="#E53E3E" strokeWidth="1" />
            <text x="10" y="3" textAnchor="middle" fill="#E53E3E" fontSize="3.5" fontWeight="600" dominantBaseline="middle">Dagegen</text>

            {/* Row 2 */}
            <rect x="-16" y="10" width="14" height="6" rx="3" fill="#10B981" opacity="0.2" stroke="#10B981" strokeWidth="1" />
            <text x="-9" y="13" textAnchor="middle" fill="#10B981" fontSize="4" fontWeight="600" dominantBaseline="middle">Dafür</text>
            <rect x="2" y="10" width="16" height="6" rx="3" fill="#E53E3E" opacity="0.2" stroke="#E53E3E" strokeWidth="1" />
            <text x="10" y="13" textAnchor="middle" fill="#E53E3E" fontSize="3.5" fontWeight="600" dominantBaseline="middle">Dagegen</text>

            {/* Row 3 */}
            <rect x="-16" y="20" width="14" height="6" rx="3" fill="#10B981" opacity="0.2" stroke="#10B981" strokeWidth="1" />
            <text x="-9" y="23" textAnchor="middle" fill="#10B981" fontSize="4" fontWeight="600" dominantBaseline="middle">Dafür</text>
            <rect x="2" y="20" width="16" height="6" rx="3" fill="#E53E3E" opacity="0.2" stroke="#E53E3E" strokeWidth="1" />
            <text x="10" y="23" textAnchor="middle" fill="#E53E3E" fontSize="3.5" fontWeight="600" dominantBaseline="middle">Dagegen</text>
          </g>
        </g>

        {/* Protocol/document generation */}
        <g transform="translate(150, 140)">
          {/* Generated protocol document */}
          <rect x="-20" y="-30" width="40" height="60" rx="4" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />
          
          {/* Document header */}
          <rect x="-15" y="-25" width="30" height="5" rx="2.5" fill="#3182CE" opacity="0.3" />
          <rect x="-15" y="-17" width="22" height="2" rx="1" fill="#3182CE" opacity="0.2" />
          
          {/* Document content */}
          <rect x="-15" y="-10" width="28" height="2" rx="1" fill="#3182CE" opacity="0.15" />
          <rect x="-15" y="-6" width="25" height="2" rx="1" fill="#3182CE" opacity="0.15" />
          <rect x="-15" y="-2" width="27" height="2" rx="1" fill="#3182CE" opacity="0.15" />
          <rect x="-15" y="2" width="23" height="2" rx="1" fill="#3182CE" opacity="0.15" />
          <rect x="-15" y="6" width="26" height="2" rx="1" fill="#3182CE" opacity="0.15" />
          <rect x="-15" y="10" width="24" height="2" rx="1" fill="#3182CE" opacity="0.15" />
          
          {/* Checkmark for completed */}
          <circle cx="10" cy="25" r="6" fill="#10B981" opacity="0.2" />
          <path d="M7,25 L9,27 L13,23" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* "Protokoll" label */}
          <text x="0" y="-35" textAnchor="middle" fill="#3182CE" fontSize="7" fontWeight="600">Protokoll</text>
        </g>

        {/* Tagesordnung (agenda) */}
        <g transform="translate(100, 35)">
          {/* Agenda icon */}
          <rect x="-15" y="-15" width="30" height="30" rx="3" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.5" />
          
          {/* Checklist items */}
          <circle cx="-8" cy="-8" r="2" fill="#10B981" />
          <path d="M-9.5,-8 L-7.5,-6 L-6,-9.5" stroke="#FFFFFF" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <rect x="-3" y="-9" width="10" height="1.5" rx="0.75" fill="#3182CE" opacity="0.2" />
          
          <circle cx="-8" cy="-1" r="2" fill="#10B981" />
          <path d="M-9.5,-1 L-7.5,1 L-6,-2.5" stroke="#FFFFFF" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <rect x="-3" y="-2" width="8" height="1.5" rx="0.75" fill="#3182CE" opacity="0.2" />
          
          <circle cx="-8" cy="6" r="2" fill="#3182CE" opacity="0.3" />
          <rect x="-3" y="5" width="9" height="1.5" rx="0.75" fill="#3182CE" opacity="0.2" />
        </g>

        {/* Live status indicator */}
        <g transform="translate(160, 30)">
          <circle cx="0" cy="0" r="8" fill="#E53E3E" opacity="0.2" />
          <circle cx="0" cy="0" r="4" fill="#E53E3E" />
          <text x="12" y="3" fill="#E53E3E" fontSize="7" fontWeight="600">LIVE</text>
        </g>

        {/* Data flow arrows */}
        <g opacity="0.4">
          <path d="M100,105 Q100,120 85,130" stroke="#3182CE" strokeWidth="2" fill="none" strokeDasharray="3,3" />
          <path d="M100,105 Q100,115 130,125" stroke="#3182CE" strokeWidth="2" fill="none" strokeDasharray="3,3" />
          
          {/* Arrow heads */}
          <path d="M85,130 L82,127 L88,127" fill="#3182CE" />
          <path d="M130,125 L127,122 L133,122" fill="#3182CE" />
        </g>

        {/* Success indicator */}
        <g transform="translate(35, 175)">
          <circle cx="0" cy="0" r="12" fill="#3182CE" opacity="0.2" />
          <circle cx="0" cy="0" r="8" fill="#3182CE" />
          <path d="M-3,0 L-1,2 L4,-3" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating decorative elements */}
        <circle cx="25" cy="30" r="2.5" fill="#3182CE" opacity="0.5" />
        <circle cx="175" cy="25" r="2" fill="#3182CE" opacity="0.5" />
        <circle cx="185" cy="185" r="3" fill="#3182CE" opacity="0.5" />
        <circle cx="15" cy="105" r="2" fill="#3182CE" opacity="0.5" />
      </svg>
    </div>
  );
}
