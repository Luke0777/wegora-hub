interface ServiceNebenkostenIllustrationProps {
  className?: string;
  color?: string;
}

export function ServiceNebenkostenIllustration({ className = "", color }: ServiceNebenkostenIllustrationProps) {
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
        {/* Invoice/Document being scanned */}
        <g transform="translate(100, 90)">
          {/* Main invoice document */}
          <rect
            x="-35"
            y="-45"
            width="70"
            height="90"
            rx="6"
            fill="#FFFFFF"
            stroke={mainColor}
            strokeWidth="var(--illustration-stroke-default)"
          />

          {/* Invoice header */}
          <rect x="-28" y="-38" width="56" height="6" rx="3" fill={mainColor} opacity="0.3" />
          <rect x="-28" y="-28" width="40" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />

          {/* Invoice line items */}
          <g transform="translate(-25, -15)">
            {/* Item 1 - umlagefähig */}
            <rect x="0" y="0" width="45" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <circle cx="52" cy="1.5" r="4" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <path d="M50,1.5 L51.5,3 L54,0.5" stroke={mainColor} strokeWidth="1" fill="none" strokeLinecap="round" />

            {/* Item 2 - umlagefähig */}
            <rect x="0" y="8" width="40" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <circle cx="52" cy="9.5" r="4" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <path d="M50,9.5 L51.5,11 L54,8.5" stroke={mainColor} strokeWidth="1" fill="none" strokeLinecap="round" />

            {/* Item 3 - nicht umlagefähig */}
            <rect x="0" y="16" width="42" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <circle cx="52" cy="17.5" r="4" fill={color ? mainColor : "hsl(var(--illustration-danger))"} opacity="var(--illustration-opacity-light)" />
            <path d="M50,15.5 L54,19.5 M54,15.5 L50,19.5" stroke={color ? mainColor : "hsl(var(--illustration-danger))"} strokeWidth="1" strokeLinecap="round" />

            {/* Item 4 - umlagefähig */}
            <rect x="0" y="24" width="38" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <circle cx="52" cy="25.5" r="4" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <path d="M50,25.5 L51.5,27 L54,24.5" stroke={mainColor} strokeWidth="1" fill="none" strokeLinecap="round" />

            {/* Item 5 - umlagefähig */}
            <rect x="0" y="32" width="43" height="3" rx="1.5" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <circle cx="52" cy="33.5" r="4" fill={mainColor} opacity="var(--illustration-opacity-light)" />
            <path d="M50,33.5 L51.5,35 L54,32.5" stroke={mainColor} strokeWidth="1" fill="none" strokeLinecap="round" />
          </g>

          {/* Total amount at bottom */}
          <rect x="-28" y="28" width="56" height="8" rx="4" fill={mainColor} opacity="var(--illustration-opacity-subtle)" />
          <rect x="-22" y="31" width="30" height="2" rx="1" fill={mainColor} opacity="0.3" />
        </g>


        {/* Magnifying glass icon (analysis) */}
        <g transform="translate(165, 50)">
          <circle cx="0" cy="0" r="12" fill="none" stroke={mainColor} strokeWidth="var(--illustration-stroke-default)" />
          <circle cx="0" cy="0" r="8" fill={mainColor} opacity="var(--illustration-opacity-subtle)" />
          <path d="M9,9 L16,16" stroke={mainColor} strokeWidth="var(--illustration-stroke-default)" strokeLinecap="round" />

          {/* Magnified content indicator */}
          <text x="0" y="3" textAnchor="middle" fill={mainColor} fontSize="8" fontWeight="bold">€</text>
        </g>

        {/* Success indicator */}
        <g transform="translate(155, 115)">
          <circle cx="0" cy="0" r="12" fill={color ? mainColor : "hsl(var(--illustration-success))"} opacity="var(--illustration-opacity-light)" />
          <circle cx="0" cy="0" r="8" fill={color ? mainColor : "hsl(var(--illustration-success))"} />
          <path d="M-3,0 L-1,2 L4,-3" stroke="#FFFFFF" strokeWidth="var(--illustration-stroke-thin)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  );
}
