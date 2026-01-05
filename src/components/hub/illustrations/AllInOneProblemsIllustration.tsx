import React from 'react';

interface AllInOneProblemsIllustrationProps {
  className?: string;
}

export function AllInOneProblemsIllustration({ className = "" }: AllInOneProblemsIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 300 200"
        className="w-full h-full max-w-xl max-h-96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large bloated monolithic box */}
        <g transform="translate(150, 100)">
          {/* Main bloated system box */}
          <rect
            x="-80"
            y="-60"
            width="160"
            height="120"
            rx="8"
            fill="#F97316"
            opacity="0.2"
            stroke="#F97316"
            strokeWidth="2"
          />
          
          {/* Overlapping feature boxes (chaos) */}
          <rect x="-60" y="-45" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" />
          <rect x="-30" y="-35" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#E53E3E" strokeWidth="1.5" />
          <rect x="0" y="-40" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" />
          
          <rect x="-50" y="-5" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#E53E3E" strokeWidth="1.5" />
          <rect x="-20" y="0" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" />
          <rect x="10" y="-10" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#E53E3E" strokeWidth="1.5" />
          
          <rect x="-55" y="25" width="50" height="25" rx="4" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" />
          <rect x="-10" y="30" width="50" height="25" rx="4" fill="#FFFFFF" stroke="#E53E3E" strokeWidth="1.5" />
          
          {/* Tangled connecting lines (complexity) */}
          <g opacity="0.4">
            <path d="M-35,-25 Q-10,-15 15,-20" stroke="#E53E3E" strokeWidth="1.5" fill="none" />
            <path d="M-25,10 Q0,5 25,8" stroke="#F97316" strokeWidth="1.5" fill="none" />
            <path d="M-30,40 Q5,35 15,45" stroke="#E53E3E" strokeWidth="1.5" fill="none" />
            <path d="M-50,-30 L-20,15" stroke="#F97316" strokeWidth="1" />
            <path d="M20,-25 L-10,35" stroke="#E53E3E" strokeWidth="1" />
          </g>
        </g>

        {/* Warning/alert symbols */}
        <g transform="translate(35, 110)">
          <circle cx="0" cy="0" r="10" fill="#E53E3E" opacity="0.2" />
          <rect x="-1" y="-6" width="2" height="8" rx="1" fill="#E53E3E" />
          <circle cx="0" cy="4" r="1.5" fill="#E53E3E" />
        </g>

        <g transform="translate(270, 95)">
          <circle cx="0" cy="0" r="8" fill="#F97316" opacity="0.2" />
          <rect x="-1" y="-5" width="2" height="6" rx="1" fill="#F97316" />
          <circle cx="0" cy="3" r="1" fill="#F97316" />
        </g>

        {/* Complexity arrows pointing in all directions */}
        <g opacity="0.3">
          <path d="M150,40 L140,35 L145,38 L150,40" fill="#E53E3E" />
          <path d="M150,160 L140,165 L145,162 L150,160" fill="#F97316" />
          <path d="M70,100 L65,90 L68,95 L70,100" fill="#E53E3E" />
          <path d="M230,100 L235,90 L232,95 L230,100" fill="#F97316" />
        </g>

        {/* Chaotic connecting lines in background */}
        <g opacity="0.15">
          <path d="M60 80 Q120 60 180 90" stroke="#E53E3E" strokeWidth="1" fill="none" strokeDasharray="2,2" />
          <path d="M100 120 Q150 140 200 110" stroke="#F97316" strokeWidth="1" fill="none" strokeDasharray="2,2" />
        </g>

        {/* Label */}
        <text
          x="150"
          y="175"
          textAnchor="middle"
          fill="#F97316"
          fontSize="10"
          fontWeight="600"
        >
          All-in-One-System
        </text>
      </svg>
    </div>
  );
}
