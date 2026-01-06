export function ServiceNebenkostenCheckIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Document/Invoice */}
      <rect
        x="40"
        y="30"
        width="120"
        height="100"
        rx="8"
        fill="#F9FAFB"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      
      {/* Document lines */}
      <line x1="55" y1="50" x2="110" y2="50" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="65" x2="140" y2="65" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      <line x1="55" y1="80" x2="130" y2="80" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      
      {/* Magnifying glass - analysis symbol */}
      <circle
        cx="130"
        cy="95"
        r="18"
        fill="#10B981"
        fillOpacity="0.1"
        stroke="#10B981"
        strokeWidth="2.5"
      />
      <circle
        cx="130"
        cy="95"
        r="12"
        fill="none"
        stroke="#10B981"
        strokeWidth="2"
      />
      <line
        x1="140"
        y1="105"
        x2="148"
        y2="113"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Comparison - neutral solution indicator */}
      <g transform="translate(25, 87)">
        {/* Down arrow (cost optimization - positive) */}
        <circle cx="0" cy="0" r="10" fill="#10B981" fillOpacity="0.2" />
        <path
          d="M 0 -4 L 0 4 M -3 1 L 0 4 L 3 1"
          stroke="#10B981"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      
      {/* Voucher/Offer tag */}
      <g transform="translate(160, 45)">
        <rect
          x="0"
          y="0"
          width="30"
          height="20"
          rx="4"
          fill="#10B981"
          fillOpacity="0.15"
          stroke="#10B981"
          strokeWidth="1.5"
        />
        <circle cx="8" cy="10" r="2" fill="#10B981" />
        <circle cx="22" cy="10" r="2" fill="#10B981" />
        <line x1="12" y1="10" x2="18" y2="10" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      
      {/* Checkmark - verification symbol */}
      <g transform="translate(170, 110)">
        <circle cx="0" cy="0" r="12" fill="#10B981" fillOpacity="0.15" />
        <path
          d="M -4 0 L -1 3 L 5 -4"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
