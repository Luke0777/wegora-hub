interface ServiceVorgaengeIllustrationProps {
  className?: string;
  color?: string;
}

export function ServiceVorgaengeIllustration({ className = "", color = "#8B5CF6" }: ServiceVorgaengeIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-xs max-h-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circles */}
        <circle cx="45" cy="55" r="30" fill={color} opacity="0.1" />
        <circle cx="160" cy="150" r="35" fill={color} opacity="0.1" />

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
            stroke={color}
            strokeWidth="2"
          />

          {/* Clipboard clip */}
          <rect x="-15" y="-52" width="30" height="12" rx="3" fill={color} opacity="0.3" />
          <rect x="-10" y="-55" width="20" height="6" rx="2" fill={color} />

          {/* Task items with checkboxes */}
          <g transform="translate(-30, -30)">
            {/* Task 1 - completed */}
            <rect x="0" y="0" width="12" height="12" rx="2" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
            <path d="M3,6 L5,8 L9,4" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="18" y="3" width="35" height="3" rx="1.5" fill={color} opacity="0.3" />

            {/* Task 2 - completed */}
            <rect x="0" y="18" width="12" height="12" rx="2" fill={color} opacity="0.2" stroke={color} strokeWidth="1" />
            <path d="M3,24 L5,26 L9,22" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <rect x="18" y="21" width="40" height="3" rx="1.5" fill={color} opacity="0.3" />

            {/* Task 3 - in progress */}
            <rect x="0" y="36" width="12" height="12" rx="2" fill={color} opacity="0.1" stroke={color} strokeWidth="1" />
            <circle cx="6" cy="42" r="3" fill={color} opacity="0.5" />
            <rect x="18" y="39" width="32" height="3" rx="1.5" fill={color} opacity="0.2" />

            {/* Task 4 - pending */}
            <rect x="0" y="54" width="12" height="12" rx="2" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
            <rect x="18" y="57" width="38" height="3" rx="1.5" fill={color} opacity="0.15" />
          </g>
        </g>

        {/* Status indicator - top right */}
        <g transform="translate(160, 55)">
          <circle cx="0" cy="0" r="14" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
          {/* Progress pie */}
          <path
            d="M0,-8 A8,8 0 1,1 -5.6,5.6"
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <text x="0" y="3" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold">75%</text>
        </g>

        {/* Communication/chat bubble - bottom left */}
        <g transform="translate(40, 155)">
          <path
            d="M-15,-12 L15,-12 Q20,-12 20,-7 L20,5 Q20,10 15,10 L5,10 L0,16 L0,10 L-15,10 Q-20,10 -20,5 L-20,-7 Q-20,-12 -15,-12 Z"
            fill={color}
            opacity="0.2"
            stroke={color}
            strokeWidth="1.5"
          />
          {/* Message lines */}
          <rect x="-12" y="-6" width="20" height="2" rx="1" fill={color} opacity="0.4" />
          <rect x="-12" y="-1" width="14" height="2" rx="1" fill={color} opacity="0.4" />
          <rect x="-12" y="4" width="17" height="2" rx="1" fill={color} opacity="0.4" />
        </g>

        {/* Arrow/flow indicator */}
        <g transform="translate(155, 105)">
          <path
            d="M-8,0 L8,0 M4,-4 L8,0 L4,4"
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Success checkmark */}
        <g transform="translate(160, 180)">
          <circle cx="0" cy="0" r="10" fill={color} opacity="0.2" />
          <circle cx="0" cy="0" r="6" fill={color} />
          <path d="M-2,0 L-0.5,1.5 L3,-2" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Floating decorative elements */}
        <circle cx="25" cy="35" r="2" fill={color} opacity="0.5" />
        <circle cx="175" cy="30" r="2.5" fill={color} opacity="0.4" />
        <circle cx="20" cy="175" r="2.5" fill={color} opacity="0.5" />
        <circle cx="180" cy="175" r="2" fill={color} opacity="0.4" />
      </svg>
    </div>
  );
}
