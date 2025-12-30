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

        {/* Meeting participants (simplified avatars) */}
        <g transform="translate(60, 75)">
          {/* Participant 1 */}
          <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.5" />
          <circle cx="-2" cy="-1" r="1" fill="#3182CE" />
          <circle cx="2" cy="-1" r="1" fill="#3182CE" />
          <path d="M-2,2 Q0,3 2,2" stroke="#3182CE" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>

        <g transform="translate(100, 70)">
          {/* Participant 2 */}
          <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.5" />
          <circle cx="-2" cy="-1" r="1" fill="#3182CE" />
          <circle cx="2" cy="-1" r="1" fill="#3182CE" />
          <path d="M-2,2 Q0,3 2,2" stroke="#3182CE" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>

        <g transform="translate(140, 75)">
          {/* Participant 3 */}
          <circle cx="0" cy="0" r="8" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.5" />
          <circle cx="-2" cy="-1" r="1" fill="#3182CE" />
          <circle cx="2" cy="-1" r="1" fill="#3182CE" />
          <path d="M-2,2 Q0,3 2,2" stroke="#3182CE" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>

        {/* Digital voting interface */}
        <g transform="translate(50, 140)">
          {/* Voting device/tablet */}
          <rect x="-20" y="-25" width="40" height="50" rx="4" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />
          
          {/* Screen header */}
          <rect x="-15" y="-20" width="30" height="4" rx="2" fill="#3182CE" opacity="0.2" />
          
          {/* Voting options */}
          <g transform="translate(0, -8)">
            {/* Option 1: Dafür (thumbs up) */}
            <rect x="-15" y="0" width="30" height="12" rx="3" fill="#10B981" opacity="0.2" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="-8" cy="6" r="3" fill="#10B981" />
            <path d="M-8,9 L-8,5 L-6,3 L-6,5 L-4,5 L-4,9 L-8,9" fill="#FFFFFF" strokeWidth="0.5" />
            <text x="3" y="8" fill="#10B981" fontSize="6" fontWeight="600">Dafür</text>
            
            {/* Option 2: Dagegen (thumbs down) */}
            <rect x="-15" y="16" width="30" height="12" rx="3" fill="#E53E3E" opacity="0.2" stroke="#E53E3E" strokeWidth="1.5" />
            <circle cx="-8" cy="22" r="3" fill="#E53E3E" />
            <path d="M-8,19 L-8,23 L-6,25 L-6,23 L-4,23 L-4,19 L-8,19" fill="#FFFFFF" strokeWidth="0.5" />
            <text x="0" y="24" fill="#E53E3E" fontSize="6" fontWeight="600">Dagegen</text>
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
          <circle cx="10" cy="20" r="6" fill="#10B981" opacity="0.2" />
          <path d="M7,20 L9,22 L13,18" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
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
