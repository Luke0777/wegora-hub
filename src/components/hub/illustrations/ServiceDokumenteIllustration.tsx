interface ServiceDokumenteIllustrationProps {
  className?: string;
  color?: string;
}

export function ServiceDokumenteIllustration({ className = "", color }: ServiceDokumenteIllustrationProps) {
  // Use passed color or fall back to area-accent (auto-switches based on data-area)
  const mainColor = color || "hsl(var(--illustration-area-accent))";

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-xs max-h-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main document box/container */}
        <g transform="translate(100, 88)">
          {/* Main box */}
          <rect
            x="-40"
            y="-45"
            width="80"
            height="90"
            rx="6"
            fill="#FFFFFF"
            stroke={mainColor}
            strokeWidth="var(--illustration-stroke-default)"
          />

          {/* Document inside - main */}
          <g transform="translate(-25, -30)">
            <rect x="0" y="0" width="50" height="60" rx="3" fill="#FFFFFF" stroke={mainColor} strokeWidth="var(--illustration-stroke-thin)" />
            <rect x="6" y="8" width="38" height="4" rx="2" fill={mainColor} opacity="0.3" />
            <rect x="6" y="16" width="30" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <rect x="6" y="23" width="34" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <rect x="6" y="30" width="28" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <rect x="6" y="37" width="32" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          </g>
        </g>

        {/* Search/Find magnifying glass */}
        <g transform="translate(45, 55)">
          <circle cx="0" cy="0" r="14" fill="none" stroke={mainColor} strokeWidth="var(--illustration-stroke-default)" />
          <circle cx="0" cy="0" r="9" fill={mainColor} opacity="var(--illustration-opacity-subtle)" />
          <path d="M10,10 L18,18" stroke={mainColor} strokeWidth="2.5" strokeLinecap="round" />

          {/* Document lines inside magnifier */}
          <rect x="-5" y="-4" width="10" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-medium)" />
          <rect x="-5" y="0" width="7" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-medium)" />
          <rect x="-5" y="4" width="9" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-medium)" />
        </g>

        {/* Upload/Cloud storage indicator */}
        <g transform="translate(155, 55)">
          {/* Cloud shape */}
          <path
            d="M-12,5 Q-18,5 -18,-2 Q-18,-8 -12,-10 Q-10,-16 -2,-16 Q6,-16 8,-10 Q14,-8 14,-2 Q14,5 8,5 Z"
            fill={mainColor}
            opacity="var(--illustration-opacity-light)"
            stroke={mainColor}
            strokeWidth="var(--illustration-stroke-thin)"
          />
          {/* Upload arrow */}
          <path d="M-2,2 L-2,-6 M-6,-3 L-2,-7 L2,-3" stroke={mainColor} strokeWidth="var(--illustration-stroke-thin)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Share/Security lock - enlarged +15% */}
        <g transform="translate(40, 150) scale(1.15)">
          {/* Lock body */}
          <rect x="-12" y="-6" width="24" height="18" rx="3" fill={mainColor} opacity="var(--illustration-opacity-light)" stroke={mainColor} strokeWidth="var(--illustration-stroke-thin)" />
          {/* Lock shackle */}
          <path d="M-6,-6 L-6,-12 Q-6,-18 0,-18 Q6,-18 6,-12 L6,-6" stroke={mainColor} strokeWidth="var(--illustration-stroke-default)" fill="none" strokeLinecap="round" />
          {/* Keyhole */}
          <circle cx="0" cy="2" r="3" fill={mainColor} />
          <rect x="-1.5" y="2" width="3" height="5" fill={mainColor} />
        </g>

        {/* Success indicator */}
        <g transform="translate(155, 100)">
          <circle cx="0" cy="0" r="12" fill={color ? mainColor : "hsl(var(--illustration-success))"} opacity="var(--illustration-opacity-light)" />
          <circle cx="0" cy="0" r="8" fill={color ? mainColor : "hsl(var(--illustration-success))"} />
          <path d="M-3,0 L-1,2 L4,-3" stroke="#FFFFFF" strokeWidth="var(--illustration-stroke-thin)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  );
}
