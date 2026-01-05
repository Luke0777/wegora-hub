import React from 'react';

interface WegoraModularIllustrationProps {
  className?: string;
}

export function WegoraModularIllustration({ className = "" }: WegoraModularIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 300 200"
        className="w-full h-full max-w-xl max-h-96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Three Clean, Separated Service Modules */}
        
        {/* Module 1: Accounting */}
        <g transform="translate(60, 60)">
          {/* Clean module box */}
          <rect
            x="-35"
            y="-30"
            width="70"
            height="60"
            rx="8"
            fill="#FFFFFF"
            stroke="#10B981"
            strokeWidth="2"
          />
          {/* Module header */}
          <rect x="-30" y="-25" width="60" height="6" rx="3" fill="#10B981" opacity="0.2" />
          {/* Chart icon */}
          <rect x="-18" y="-8" width="4" height="12" rx="1" fill="#10B981" />
          <rect x="-10" y="-13" width="4" height="17" rx="1" fill="#10B981" />
          <rect x="-2" y="-10" width="4" height="14" rx="1" fill="#10B981" />
          <rect x="6" y="-15" width="4" height="19" rx="1" fill="#10B981" />
          {/* Success indicator */}
          <circle cx="22" cy="-22" r="6" fill="#10B981" />
          <path d="M19,-22 L21,-20 L25,-24" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Label */}
          <text
            x="0"
            y="45"
            textAnchor="middle"
            fill="#10B981"
            fontSize="10"
            fontWeight="600"
          >
            Accounting
          </text>
        </g>

        {/* Module 2: Nebenkosten */}
        <g transform="translate(150, 60)">
          {/* Clean module box */}
          <rect
            x="-35"
            y="-30"
            width="70"
            height="60"
            rx="8"
            fill="#FFFFFF"
            stroke="#8B5CF6"
            strokeWidth="2"
          />
          {/* Module header */}
          <rect x="-30" y="-25" width="60" height="6" rx="3" fill="#8B5CF6" opacity="0.2" />
          {/* Document + AI icon */}
          <rect x="-15" y="-15" width="20" height="24" rx="2" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.5" />
          <rect x="-12" y="-11" width="14" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          <rect x="-12" y="-7" width="10" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          <rect x="-12" y="-3" width="12" height="2" rx="1" fill="#8B5CF6" opacity="0.4" />
          {/* AI chip indicator */}
          <circle cx="8" cy="-8" r="5" fill="#8B5CF6" />
          <text x="8" y="-5" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold">AI</text>
          {/* Success indicator */}
          <circle cx="22" cy="-22" r="6" fill="#8B5CF6" />
          <path d="M19,-22 L21,-20 L25,-24" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Label */}
          <text
            x="0"
            y="45"
            textAnchor="middle"
            fill="#8B5CF6"
            fontSize="10"
            fontWeight="600"
          >
            Nebenkosten
          </text>
        </g>

        {/* Module 3: WEG */}
        <g transform="translate(240, 60)">
          {/* Clean module box */}
          <rect
            x="-35"
            y="-30"
            width="70"
            height="60"
            rx="8"
            fill="#FFFFFF"
            stroke="#3182CE"
            strokeWidth="2"
          />
          {/* Module header */}
          <rect x="-30" y="-25" width="60" height="6" rx="3" fill="#3182CE" opacity="0.2" />
          {/* Meeting icon - centered dots */}
          <rect x="-20" y="-10" width="26" height="16" rx="2" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.5" />
          <circle cx="-14" cy="-2" r="2" fill="#3182CE" />
          <circle cx="-7" cy="-2" r="2" fill="#3182CE" />
          <circle cx="0" cy="-2" r="2" fill="#3182CE" />
          {/* Voting checkmark - right of box */}
          <path d="M12,-2 L16,2 L24,-6" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Success indicator */}
          <circle cx="22" cy="-22" r="6" fill="#3182CE" />
          <path d="M19,-22 L21,-20 L25,-24" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Label */}
          <text
            x="0"
            y="45"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="10"
            fontWeight="600"
          >
            Versammlungen
          </text>
        </g>

        {/* Clean connecting lines showing integration */}
        <g opacity="0.3">
          <path d="M95,60 L115,60" stroke="#3182CE" strokeWidth="2" strokeDasharray="4,4" />
          <path d="M185,60 L205,60" stroke="#3182CE" strokeWidth="2" strokeDasharray="4,4" />
        </g>

        {/* Central data hub indicator */}
        <g transform="translate(150, 140)">
          {/* Database cylinder */}
          <ellipse cx="0" cy="0" rx="40" ry="8" fill="#3182CE" opacity="0.2" />
          <rect x="-40" y="0" width="80" height="20" fill="#3182CE" opacity="0.15" />
          <ellipse cx="0" cy="20" rx="40" ry="8" fill="#3182CE" opacity="0.2" />
          {/* Data label */}
          <text
            x="0"
            y="40"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="10"
            fontWeight="600"
          >
            Gemeinsame Datenbasis
          </text>
        </g>

        {/* Data flow arrows from modules to central hub */}
        <g opacity="0.4">
          <path d="M60,90 L60,110 Q60,125 75,130" stroke="#10B981" strokeWidth="1.5" fill="none" />
          <path d="M150,90 L150,125" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
          <path d="M240,90 L240,110 Q240,125 225,130" stroke="#3182CE" strokeWidth="1.5" fill="none" />
          
          {/* Arrow heads */}
          <path d="M75,130 L72,127 L75,125" fill="#10B981" />
          <path d="M150,125 L147,122 L153,122" fill="#8B5CF6" />
          <path d="M225,130 L228,127 L225,125" fill="#3182CE" />
        </g>

        {/* Efficiency indicators */}
        <g transform="translate(260, 150)">
          {/* Speed lines */}
          <path d="M0,0 L15,0" stroke="#3182CE" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
          <path d="M0,5 L12,5" stroke="#3182CE" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
          <path d="M0,10 L8,10" stroke="#3182CE" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
        </g>

        {/* Clean connecting flow lines in background */}
        <g opacity="0.15">
          <path d="M70 100 Q110 95 140 105" stroke="#3182CE" strokeWidth="1" fill="none" strokeDasharray="4,4" />
          <path d="M160 105 Q190 95 230 100" stroke="#3182CE" strokeWidth="1" fill="none" strokeDasharray="4,4" />
        </g>
      </svg>
    </div>
  );
}
