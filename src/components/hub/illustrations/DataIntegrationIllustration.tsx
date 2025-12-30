import React from 'react';

interface DataIntegrationIllustrationProps {
  className?: string;
}

export function DataIntegrationIllustration({ className = "" }: DataIntegrationIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 300 200"
        className="w-full h-full max-w-sm max-h-48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circles for depth */}
        <circle cx="80" cy="50" r="35" fill="#3182CE" opacity="0.1" />
        <circle cx="200" cy="120" r="40" fill="#3182CE" opacity="0.1" />
        <circle cx="250" cy="60" r="25" fill="#3182CE" opacity="0.1" />

        {/* Central Database Hub */}
        <g transform="translate(150, 100)">
          {/* Database cylinder */}
          <ellipse cx="0" cy="-20" rx="45" ry="10" fill="#3182CE" opacity="0.3" />
          <rect x="-45" y="-20" width="90" height="40" fill="#3182CE" opacity="0.2" />
          <ellipse cx="0" cy="20" rx="45" ry="10" fill="#3182CE" opacity="0.3" />
          
          {/* Inner database details */}
          <ellipse cx="0" cy="-10" rx="38" ry="8" fill="#3182CE" opacity="0.1" />
          <ellipse cx="0" cy="0" rx="38" ry="8" fill="#3182CE" opacity="0.1" />
          <ellipse cx="0" cy="10" rx="38" ry="8" fill="#3182CE" opacity="0.1" />
          
          {/* Database icon/label */}
          <circle cx="0" cy="0" r="12" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />
          <rect x="-4" y="-4" width="8" height="8" rx="1" fill="#3182CE" opacity="0.3" />
          <rect x="-2" y="-2" width="4" height="4" rx="0.5" fill="#3182CE" />
        </g>

        {/* Service Nodes around the database */}
        
        {/* Accounting Service Node (Top Left) */}
        <g transform="translate(60, 50)">
          <circle cx="0" cy="0" r="25" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="20" fill="#10B981" opacity="0.1" />
          {/* Chart icon */}
          <rect x="-8" y="-2" width="3" height="8" rx="0.5" fill="#10B981" />
          <rect x="-3" y="-5" width="3" height="11" rx="0.5" fill="#10B981" />
          <rect x="2" y="-4" width="3" height="10" rx="0.5" fill="#10B981" />
          {/* Label */}
          <text x="0" y="40" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="600">Accounting</text>
        </g>

        {/* Nebenkosten Service Node (Top Right) */}
        <g transform="translate(240, 50)">
          <circle cx="0" cy="0" r="25" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="20" fill="#8B5CF6" opacity="0.1" />
          {/* Document icon */}
          <rect x="-6" y="-8" width="12" height="16" rx="1.5" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="1.5" />
          <rect x="-4" y="-5" width="8" height="1.5" rx="0.75" fill="#8B5CF6" opacity="0.4" />
          <rect x="-4" y="-2" width="6" height="1.5" rx="0.75" fill="#8B5CF6" opacity="0.4" />
          {/* AI badge */}
          <circle cx="5" cy="-5" r="3" fill="#8B5CF6" />
          <text x="5" y="-3" textAnchor="middle" fill="#FFFFFF" fontSize="4" fontWeight="bold">AI</text>
          {/* Label */}
          <text x="0" y="40" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontWeight="600">Nebenkosten</text>
        </g>

        {/* WEG Service Node (Bottom) */}
        <g transform="translate(150, 170)">
          <circle cx="0" cy="0" r="25" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="20" fill="#3182CE" opacity="0.1" />
          {/* Meeting icon */}
          <rect x="-8" y="-5" width="16" height="10" rx="1.5" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.5" />
          <circle cx="-4" cy="-1" r="1.5" fill="#3182CE" />
          <circle cx="0" cy="-1" r="1.5" fill="#3182CE" />
          <circle cx="4" cy="-1" r="1.5" fill="#3182CE" />
          {/* Checkmark */}
          <path d="M-2,3 L0,5 L4,0" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Label */}
          <text x="0" y="40" textAnchor="middle" fill="#3182CE" fontSize="10" fontWeight="600">WEG-Service</text>
        </g>

        {/* Data Flow Arrows - Bidirectional */}
        <g opacity="0.6">
          {/* Accounting to Database */}
          <path d="M80,60 Q115,75 135,85" stroke="#10B981" strokeWidth="2.5" fill="none" />
          <path d="M135,85 L132,82 L132,88" fill="#10B981" />
          {/* Database to Accounting */}
          <path d="M130,82 Q110,70 85,58" stroke="#10B981" strokeWidth="2" fill="none" strokeDasharray="4,4" />
          <path d="M85,58 L88,55 L88,61" fill="#10B981" />
          
          {/* Nebenkosten to Database */}
          <path d="M220,60 Q185,75 165,85" stroke="#8B5CF6" strokeWidth="2.5" fill="none" />
          <path d="M165,85 L168,82 L168,88" fill="#8B5CF6" />
          {/* Database to Nebenkosten */}
          <path d="M170,82 Q190,70 215,58" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeDasharray="4,4" />
          <path d="M215,58 L212,55 L212,61" fill="#8B5CF6" />
          
          {/* WEG to Database */}
          <path d="M150,145 L150,130" stroke="#3182CE" strokeWidth="2.5" fill="none" />
          <path d="M150,130 L147,133 L153,133" fill="#3182CE" />
          {/* Database to WEG */}
          <path d="M155,125 L155,140" stroke="#3182CE" strokeWidth="2" fill="none" strokeDasharray="4,4" />
          <path d="M155,140 L152,137 L158,137" fill="#3182CE" />
        </g>

        {/* User/Login Icon (showing single access point) */}
        <g transform="translate(30, 100)">
          {/* User icon */}
          <circle cx="0" cy="0" r="15" fill="#FFFFFF" stroke="#3182CE" strokeWidth="2" />
          <circle cx="0" cy="-3" r="5" fill="#3182CE" opacity="0.3" />
          <path
            d="M-8,8 Q-8,0 0,0 Q8,0 8,8"
            fill="#3182CE"
            opacity="0.3"
          />
          {/* Login arrow to database */}
          <path d="M18,0 L50,0" stroke="#3182CE" strokeWidth="2" strokeDasharray="3,3" opacity="0.5" />
          <path d="M50,0 L46,-3 L46,3" fill="#3182CE" opacity="0.5" />
          {/* Label */}
          <text x="0" y="30" textAnchor="middle" fill="#3182CE" fontSize="9" fontWeight="600">Ein Login</text>
        </g>

        {/* Sync/Integration indicators */}
        <g transform="translate(270, 100)">
          {/* Cloud sync icon */}
          <path
            d="M-10,5 Q-10,0 -5,0 Q-2,-5 5,-5 Q12,-5 15,0 Q20,0 20,5 Q20,10 15,10 L-5,10 Q-10,10 -10,5 Z"
            fill="#3182CE"
            opacity="0.3"
            stroke="#3182CE"
            strokeWidth="1.5"
          />
          {/* Sync arrows */}
          <g transform="translate(5, 18)">
            <path d="M-5,0 Q0,-3 5,0" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M5,0 L3,-2 L7,-2" fill="#3182CE" />
            <path d="M5,5 Q0,8 -5,5" stroke="#3182CE" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M-5,5 L-3,7 L-7,7" fill="#3182CE" />
          </g>
          {/* Label */}
          <text x="5" y="35" textAnchor="middle" fill="#3182CE" fontSize="9" fontWeight="600">Sync</text>
        </g>

        {/* Data sharing indicators (connecting lines between services) */}
        <g opacity="0.2">
          <path d="M85,50 Q150,30 215,50" stroke="#3182CE" strokeWidth="1" fill="none" strokeDasharray="2,2" />
          <path d="M80,65 Q115,90 135,100" stroke="#10B981" strokeWidth="1" fill="none" strokeDasharray="2,2" />
          <path d="M220,65 Q185,90 165,100" stroke="#8B5CF6" strokeWidth="1" fill="none" strokeDasharray="2,2" />
        </g>

        {/* Labels/Annotations */}
        <g transform="translate(150, 50)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="11"
            fontWeight="600"
            opacity="0.7"
          >
            Gemeinsame Datenbasis
          </text>
        </g>

        {/* Floating decorative elements */}
        <circle cx="30" cy="30" r="2" fill="#3182CE" opacity="0.6" />
        <circle cx="270" cy="30" r="1.5" fill="#10B981" opacity="0.6" />
        <circle cx="270" cy="180" r="2.5" fill="#8B5CF6" opacity="0.6" />
        <circle cx="20" cy="180" r="2" fill="#3182CE" opacity="0.6" />
      </svg>
    </div>
  );
}
