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
            rx="var(--illustration-radius-lg)"
            fill="hsl(var(--illustration-warning))"
            opacity="var(--illustration-opacity-light)"
            stroke="hsl(var(--illustration-warning))"
            strokeWidth="var(--illustration-stroke-default)"
          />

          {/* Overlapping feature boxes (chaos) */}
          <rect x="-60" y="-45" width="50" height="30" rx="var(--illustration-radius-md)" fill="#FFFFFF" stroke="hsl(var(--illustration-warning))" strokeWidth="var(--illustration-stroke-thin)" />
          <rect x="-30" y="-35" width="50" height="30" rx="var(--illustration-radius-md)" fill="#FFFFFF" stroke="hsl(var(--illustration-danger))" strokeWidth="var(--illustration-stroke-thin)" />
          <rect x="0" y="-40" width="50" height="30" rx="var(--illustration-radius-md)" fill="#FFFFFF" stroke="hsl(var(--illustration-warning))" strokeWidth="var(--illustration-stroke-thin)" />

          <rect x="-50" y="-5" width="50" height="30" rx="var(--illustration-radius-md)" fill="#FFFFFF" stroke="hsl(var(--illustration-danger))" strokeWidth="var(--illustration-stroke-thin)" />
          <rect x="-20" y="0" width="50" height="30" rx="var(--illustration-radius-md)" fill="#FFFFFF" stroke="hsl(var(--illustration-warning))" strokeWidth="var(--illustration-stroke-thin)" />
          <rect x="10" y="-10" width="50" height="30" rx="var(--illustration-radius-md)" fill="#FFFFFF" stroke="hsl(var(--illustration-danger))" strokeWidth="var(--illustration-stroke-thin)" />

          <rect x="-55" y="25" width="50" height="25" rx="var(--illustration-radius-md)" fill="#FFFFFF" stroke="hsl(var(--illustration-warning))" strokeWidth="var(--illustration-stroke-thin)" />
          <rect x="-10" y="30" width="50" height="25" rx="var(--illustration-radius-md)" fill="#FFFFFF" stroke="hsl(var(--illustration-danger))" strokeWidth="var(--illustration-stroke-thin)" />

          {/* Tangled connecting lines (complexity) */}
          <g opacity="var(--illustration-opacity-medium)">
            <path d="M-35,-25 Q-10,-15 15,-20" stroke="hsl(var(--illustration-danger))" strokeWidth="var(--illustration-stroke-thin)" fill="none" />
            <path d="M-25,10 Q0,5 25,8" stroke="hsl(var(--illustration-warning))" strokeWidth="var(--illustration-stroke-thin)" fill="none" />
            <path d="M-30,40 Q5,35 15,45" stroke="hsl(var(--illustration-danger))" strokeWidth="var(--illustration-stroke-thin)" fill="none" />
            <path d="M-50,-30 L-20,15" stroke="hsl(var(--illustration-warning))" strokeWidth="1" />
            <path d="M20,-25 L-10,35" stroke="hsl(var(--illustration-danger))" strokeWidth="1" />
          </g>
        </g>

        {/* Warning indicator - same style as success checkmarks in Wegora boxes */}
        <g transform="translate(150, 100)">
          <circle cx="67" cy="-47" r="7" fill="hsl(var(--illustration-danger))" />
          <rect x="66" y="-52" width="2" height="7" rx="1" fill="#FFFFFF" />
          <circle cx="67" cy="-42" r="1.2" fill="#FFFFFF" />
        </g>

        {/* Label */}
        <text
          x="150"
          y="175"
          textAnchor="middle"
          fill="hsl(var(--illustration-warning))"
          fontSize="10"
          fontWeight="600"
        >
          All-in-One-System
        </text>
      </svg>
    </div>
  );
}
