interface ServiceVorgaengeIllustrationProps {
  className?: string;
  color?: string;
}

export function ServiceVorgaengeIllustration({ className = "", color }: ServiceVorgaengeIllustrationProps) {
  // Use passed color or fall back to area-accent (auto-switches based on data-area)
  const mainColor = color || "hsl(var(--illustration-area-accent))";

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-xs max-h-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Illustration: Vorgangsverwaltung"
      >
        {/* Main clipboard/task board */}
        <g transform="translate(100, 95)">
          {/* Clipboard body */}
          <rect
            x="-40"
            y="-45"
            width="80"
            height="95"
            rx="6"
            fill="#FFFFFF"
            stroke={mainColor}
            strokeWidth="var(--illustration-stroke-default)"
          />

          {/* Clipboard clip */}
          <rect x="-15" y="-52" width="30" height="12" rx="3" fill={mainColor} opacity="0.3" />
          <rect x="-10" y="-55" width="20" height="6" rx="2" fill={mainColor} />

          {/* Task items with checkboxes */}
          <g transform="translate(-30, -30)">
            {/* Task 1 - completed */}
            <rect x="0" y="0" width="12" height="12" rx="2" fill={mainColor} opacity="var(--illustration-opacity-light)" stroke={mainColor} strokeWidth="1" />
            <path d="M3,6 L5,8 L9,4" stroke={mainColor} strokeWidth="var(--illustration-stroke-thin)" fill="none" strokeLinecap="round" />
            <rect x="18" y="3" width="35" height="3" rx="1.5" fill={mainColor} opacity="0.3" />

            {/* Task 2 - completed */}
            <rect x="0" y="18" width="12" height="12" rx="2" fill={mainColor} opacity="var(--illustration-opacity-light)" stroke={mainColor} strokeWidth="1" />
            <path d="M3,24 L5,26 L9,22" stroke={mainColor} strokeWidth="var(--illustration-stroke-thin)" fill="none" strokeLinecap="round" />
            <rect x="18" y="21" width="40" height="3" rx="1.5" fill={mainColor} opacity="0.3" />

            {/* Task 3 - in progress */}
            <rect x="0" y="36" width="12" height="12" rx="2" fill={mainColor} opacity="var(--illustration-opacity-subtle)" stroke={mainColor} strokeWidth="1" />
            <circle cx="6" cy="42" r="3" fill={mainColor} opacity="var(--illustration-opacity-medium)" />
            <rect x="18" y="39" width="32" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />

            {/* Task 4 - pending */}
            <rect x="0" y="54" width="12" height="12" rx="2" fill="none" stroke={mainColor} strokeWidth="1" opacity="var(--illustration-opacity-medium)" />
            <rect x="18" y="57" width="38" height="3" rx="1.5" fill={mainColor} opacity="0.15" />
          </g>
        </g>

        {/* Status indicator - top right (simplified, no text) */}
        <g transform="translate(160, 55)">
          <circle cx="0" cy="0" r="14" fill={mainColor} opacity="0.15" stroke={mainColor} strokeWidth="var(--illustration-stroke-thin)" />
          {/* Progress pie */}
          <path
            d="M0,-8 A8,8 0 1,1 -5.6,5.6"
            stroke={mainColor}
            strokeWidth="var(--illustration-stroke-bold)"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Success checkmark */}
        <g transform="translate(160, 150)">
          <circle cx="0" cy="0" r="10" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <circle cx="0" cy="0" r="6" fill={mainColor} />
          <path d="M-2,0 L-0.5,1.5 L3,-2" stroke="#FFFFFF" strokeWidth="var(--illustration-stroke-thin)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  );
}
