interface ServiceWEGIllustrationProps {
  className?: string;
  color?: string;
}

export function ServiceWEGIllustration({ className = "", color }: ServiceWEGIllustrationProps) {
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
        {/* Main meeting/calendar card */}
        <g transform="translate(100, 90)">
          {/* Card background */}
          <rect
            x="-45"
            y="-50"
            width="90"
            height="100"
            rx="6"
            fill="#FFFFFF"
            stroke={mainColor}
            strokeWidth="var(--illustration-stroke-default)"
          />

          {/* Calendar header bar */}
          <rect x="-40" y="-45" width="80" height="12" rx="3" fill={mainColor} opacity="0.15" />

          {/* Calendar dots in header */}
          <circle cx="-32" cy="-39" r="2" fill={mainColor} opacity="0.4" />
          <circle cx="-24" cy="-39" r="2" fill={mainColor} opacity="0.4" />
          <circle cx="-16" cy="-39" r="2" fill={mainColor} opacity="0.4" />

          {/* Meeting agenda items with checkboxes */}
          <g transform="translate(-35, -22)">
            {/* Item 1 - completed */}
            <rect x="0" y="0" width="10" height="10" rx="2" fill={mainColor} opacity="var(--illustration-opacity-light)" stroke={mainColor} strokeWidth="1" />
            <path d="M2.5,5 L4,6.5 L7.5,3.5" stroke={mainColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <rect x="14" y="2" width="45" height="3" rx="1.5" fill={mainColor} opacity="0.25" />
            <rect x="14" y="6" width="30" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />

            {/* Item 2 - completed */}
            <rect x="0" y="18" width="10" height="10" rx="2" fill={mainColor} opacity="var(--illustration-opacity-light)" stroke={mainColor} strokeWidth="1" />
            <path d="M2.5,23 L4,24.5 L7.5,21.5" stroke={mainColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <rect x="14" y="20" width="50" height="3" rx="1.5" fill={mainColor} opacity="0.25" />
            <rect x="14" y="24" width="35" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />

            {/* Item 3 - in progress */}
            <rect x="0" y="36" width="10" height="10" rx="2" fill={mainColor} opacity="var(--illustration-opacity-subtle)" stroke={mainColor} strokeWidth="1" />
            <circle cx="5" cy="41" r="2.5" fill={mainColor} opacity="var(--illustration-opacity-medium)" />
            <rect x="14" y="38" width="40" height="3" rx="1.5" fill={mainColor} opacity="0.2" />
            <rect x="14" y="42" width="28" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />

            {/* Item 4 - pending */}
            <rect x="0" y="54" width="10" height="10" rx="2" fill="none" stroke={mainColor} strokeWidth="1" opacity="var(--illustration-opacity-medium)" />
            <rect x="14" y="56" width="48" height="3" rx="1.5" fill={mainColor} opacity="0.15" />
            <rect x="14" y="60" width="32" height="2" rx="1" fill={mainColor} opacity="0.1" />
          </g>
        </g>

        {/* Document/Protocol indicator - moved closer and enlarged */}
        <g transform="translate(155, 135) scale(1.15)">
          <rect x="-18" y="-22" width="36" height="44" rx="4" fill="#FFFFFF" stroke={mainColor} strokeWidth="var(--illustration-stroke-thin)" />
          <rect x="-13" y="-17" width="26" height="3" rx="1.5" fill={mainColor} opacity="0.3" />
          <rect x="-13" y="-11" width="20" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="-13" y="-6" width="23" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="-13" y="-1" width="18" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="-13" y="4" width="21" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />

          {/* Document checkmark */}
          <circle cx="8" cy="14" r="5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <path d="M5.5,14 L7,15.5 L10.5,12" stroke={mainColor} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>

        {/* Success indicator */}
        <g transform="translate(160, 55)">
          <circle cx="0" cy="0" r="12" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <circle cx="0" cy="0" r="8" fill={mainColor} />
          <path d="M-3,0 L-1,2 L4,-3" stroke="#FFFFFF" strokeWidth="var(--illustration-stroke-thin)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  );
}
