interface ServiceAccountingIllustrationProps {
  className?: string;
  color?: string;
}

export function ServiceAccountingIllustration({ className = "", color }: ServiceAccountingIllustrationProps) {
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
        aria-label="Illustration: Finanzverwaltung"
      >
        {/* Main calculator/financial dashboard */}
        <g transform="translate(100, 80)">
          {/* Calculator body */}
          <rect
            x="-40"
            y="-50"
            width="80"
            height="100"
            rx="8"
            fill="#FFFFFF"
            stroke={mainColor}
            strokeWidth="var(--illustration-stroke-default)"
          />

          {/* Display */}
          <rect
            x="-32"
            y="-42"
            width="64"
            height="20"
            rx="4"
            fill={mainColor}
            opacity="var(--illustration-opacity-subtle)"
          />

          {/* Display numbers */}
          <rect x="-25" y="-38" width="50" height="4" rx="2" fill={mainColor} opacity="0.3" />
          <rect x="-25" y="-30" width="35" height="4" rx="2" fill={mainColor} opacity="0.3" />

          {/* Calculator buttons grid */}
          <g transform="translate(-24, -10)">
            {/* Row 1 */}
            <rect x="0" y="0" width="12" height="10" rx="2" fill={mainColor} opacity="0.25" />
            <rect x="16" y="0" width="12" height="10" rx="2" fill={mainColor} opacity="0.25" />
            <rect x="32" y="0" width="12" height="10" rx="2" fill={mainColor} opacity="0.3" />

            {/* Row 2 */}
            <rect x="0" y="14" width="12" height="10" rx="2" fill={mainColor} opacity="0.25" />
            <rect x="16" y="14" width="12" height="10" rx="2" fill={mainColor} opacity="0.25" />
            <rect x="32" y="14" width="12" height="10" rx="2" fill={mainColor} opacity="0.3" />

            {/* Row 3 */}
            <rect x="0" y="28" width="12" height="10" rx="2" fill={mainColor} opacity="0.25" />
            <rect x="16" y="28" width="12" height="10" rx="2" fill={mainColor} opacity="0.25" />
            <rect x="32" y="28" width="12" height="10" rx="2" fill={mainColor} opacity="0.35" />
          </g>
        </g>

        {/* Financial chart */}
        <g transform="translate(140, 130)">
          {/* Chart background */}
          <rect x="-35" y="-35" width="70" height="50" rx="6" fill="#FFFFFF" stroke={mainColor} strokeWidth="var(--illustration-stroke-default)" />

          {/* Chart title bar */}
          <rect x="-30" y="-30" width="40" height="4" rx="2" fill={mainColor} opacity="var(--illustration-opacity-light)" />

          {/* Bar chart */}
          <rect x="-25" y="-10" width="8" height="15" rx="2" fill={mainColor} />
          <rect x="-13" y="-15" width="8" height="20" rx="2" fill={mainColor} opacity="0.8" />
          <rect x="-1" y="-12" width="8" height="17" rx="2" fill={mainColor} opacity="0.9" />
          <rect x="11" y="-18" width="8" height="23" rx="2" fill={mainColor} />
          <rect x="23" y="-14" width="8" height="19" rx="2" fill={mainColor} opacity="0.85" />

          {/* Chart labels */}
          <rect x="-25" y="7" width="8" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="-13" y="7" width="8" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="-1" y="7" width="8" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="11" y="7" width="8" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="23" y="7" width="8" height="2" rx="1" fill={mainColor} opacity="var(--illustration-opacity-light)" />
        </g>

        {/* Financial documents */}
        <g transform="translate(50, 120)">
          {/* Document 1 - Wirtschaftsplan */}
          <rect x="-20" y="-25" width="40" height="50" rx="4" fill="#FFFFFF" stroke={mainColor} strokeWidth="var(--illustration-stroke-default)" />
          <rect x="-15" y="-20" width="30" height="4" rx="2" fill={mainColor} opacity="0.3" />
          <rect x="-15" y="-12" width="25" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="-15" y="-6" width="28" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
          <rect x="-15" y="0" width="22" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />

          {/* Euro symbol on document */}
          <circle cx="8" cy="10" r="6" fill={mainColor} opacity="0.15" />
          <text x="8" y="13" textAnchor="middle" fill={mainColor} fontSize="8" fontWeight="bold">€</text>
        </g>

        {/* Success/completion indicator */}
        <g transform="translate(170, 50)">
          <circle cx="0" cy="0" r="15" fill={color ? mainColor : "hsl(var(--illustration-success))"} opacity="var(--illustration-opacity-light)" />
          <circle cx="0" cy="0" r="10" fill={color ? mainColor : "hsl(var(--illustration-success))"} />
          <path d="M-4,0 L-1,3 L5,-3" stroke="#FFFFFF" strokeWidth="var(--illustration-stroke-default)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  );
}
