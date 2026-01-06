interface WegoraModularIllustrationProps {
  className?: string;
}

export function WegoraModularIllustration({ className = "" }: WegoraModularIllustrationProps) {
  // Farbpalette
  const wegBlue = '#3182CE';      // Blau für WEG
  const eigenGreen = '#14B8A6';   // Teal-500 für Eigentümer (wie Wegora Eigentümer)

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="-20 0 380 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Module 1: Wegora WEG */}
        <g transform="translate(140, 90)">
          {/* Module box - kein Rahmen, nur leichter Hintergrund wie All-in-One */}
          <rect
            x="-70"
            y="-60"
            width="140"
            height="120"
            rx="8"
            fill={wegBlue}
            opacity="0.08"
          />
          {/* Module header */}
          <rect x="-62" y="-52" width="124" height="7" rx="3" fill={wegBlue} opacity="0.15" />

          {/* Service Icons - WEG - vertikal verteilt */}
          {/* Zeile 1: Kalender (Versammlungen) */}
          <g transform="translate(0, -18)">
            <g transform="translate(-40, 0)">
              <rect x="-5" y="-6" width="10" height="9" rx="1.5" fill="none" stroke={wegBlue} strokeWidth="1" />
              <line x1="-5" y1="-2.5" x2="5" y2="-2.5" stroke={wegBlue} strokeWidth="0.8" />
              <circle cx="-2" cy="0.5" r="1.2" fill={wegBlue} />
              <circle cx="2" cy="0.5" r="1.2" fill={wegBlue} />
            </g>
            <text x="-24" y="3" fill={wegBlue} fontSize="9" fontWeight="500">Versammlungen</text>
          </g>

          {/* Zeile 2: Chart (Finanzen) */}
          <g transform="translate(0, 10)">
            <g transform="translate(-40, 0)">
              <rect x="-4" y="-1" width="2.5" height="5" rx="0.5" fill={wegBlue} />
              <rect x="-0.5" y="-4" width="2.5" height="8" rx="0.5" fill={wegBlue} />
              <rect x="2.5" y="-2.5" width="2.5" height="6.5" rx="0.5" fill={wegBlue} />
            </g>
            <text x="-24" y="3" fill={wegBlue} fontSize="9" fontWeight="500">Finanzen</text>
          </g>

          {/* Zeile 3: Dokument (Vorgänge) */}
          <g transform="translate(0, 38)">
            <g transform="translate(-40, 0)">
              <rect x="-4" y="-6" width="8" height="12" rx="1" fill="none" stroke={wegBlue} strokeWidth="1" />
              <line x1="-2" y1="-3" x2="3" y2="-3" stroke={wegBlue} strokeWidth="0.8" />
              <line x1="-2" y1="0" x2="2" y2="0" stroke={wegBlue} strokeWidth="0.8" />
              <line x1="-2" y1="3" x2="1.5" y2="3" stroke={wegBlue} strokeWidth="0.8" />
            </g>
            <text x="-24" y="3" fill={wegBlue} fontSize="9" fontWeight="500">Vorgänge</text>
          </g>

          {/* Success indicator */}
          <circle cx="57" cy="-47" r="7" fill={wegBlue} />
          <path d="M53.5,-47 L56,-44.5 L60.5,-50" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        </g>

        {/* Module 2: Wegora Eigentümer */}
        <g transform="translate(290, 90)">
          {/* Module box - kein Rahmen, nur leichter Hintergrund */}
          <rect
            x="-70"
            y="-60"
            width="140"
            height="120"
            rx="8"
            fill={eigenGreen}
            opacity="0.08"
          />
          {/* Module header */}
          <rect x="-62" y="-52" width="124" height="7" rx="3" fill={eigenGreen} opacity="0.15" />

          {/* Service Icons - Eigentümer - vertikal verteilt */}
          {/* Zeile 1: Euro (Nebenkosten) */}
          <g transform="translate(0, -18)">
            <g transform="translate(-40, 0)">
              <circle cx="0" cy="0" r="6" fill="none" stroke={eigenGreen} strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill={eigenGreen} fontSize="8" fontWeight="600">€</text>
            </g>
            <text x="-24" y="3" fill={eigenGreen} fontSize="9" fontWeight="500">Nebenkosten</text>
          </g>

          {/* Zeile 2: Dashboard (Übersicht) */}
          <g transform="translate(0, 10)">
            <g transform="translate(-40, 0)">
              <rect x="-5" y="-5" width="4.5" height="4.5" rx="0.8" fill="none" stroke={eigenGreen} strokeWidth="1" />
              <rect x="0.5" y="-5" width="4.5" height="4.5" rx="0.8" fill="none" stroke={eigenGreen} strokeWidth="1" />
              <rect x="-5" y="0.5" width="4.5" height="4.5" rx="0.8" fill="none" stroke={eigenGreen} strokeWidth="1" />
              <rect x="0.5" y="0.5" width="4.5" height="4.5" rx="0.8" fill="none" stroke={eigenGreen} strokeWidth="1" />
            </g>
            <text x="-24" y="3" fill={eigenGreen} fontSize="9" fontWeight="500">Übersicht</text>
          </g>

          {/* Zeile 3: Dokument (Dokumente) */}
          <g transform="translate(0, 38)">
            <g transform="translate(-40, 0)">
              <path d="M-3,-6 L3,-6 L5,-3.5 L5,6 L-3,6 Z" fill="none" stroke={eigenGreen} strokeWidth="1" />
              <path d="M3,-6 L3,-3.5 L5,-3.5" fill="none" stroke={eigenGreen} strokeWidth="0.8" />
            </g>
            <text x="-24" y="3" fill={eigenGreen} fontSize="9" fontWeight="500">Dokumente</text>
          </g>

          {/* Success indicator */}
          <circle cx="57" cy="-47" r="7" fill={eigenGreen} />
          <path d="M53.5,-47 L56,-44.5 L60.5,-50" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Labels - closer to boxes */}
        <text
          x="140"
          y="162"
          textAnchor="middle"
          fill={wegBlue}
          fontSize="10"
          fontWeight="600"
        >
          Wegora WEG
        </text>
        <text
          x="290"
          y="162"
          textAnchor="middle"
          fill={eigenGreen}
          fontSize="10"
          fontWeight="600"
        >
          Wegora Eigentümer
        </text>
      </svg>
    </div>
  );
}
