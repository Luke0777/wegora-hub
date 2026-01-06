interface WegoraModularIllustrationProps {
  className?: string;
}

export function WegoraModularIllustration({ className = "" }: WegoraModularIllustrationProps) {
  // WICHTIG: Feste Mindestgrößen (400x200) sind erforderlich, damit die Illustration
  // nicht durch CSS-Vererbung oder Flex-Container geschrumpft wird.
  // Diese Werte NICHT entfernen oder auf w-full/h-full ändern!
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ minWidth: '400px', minHeight: '200px' }}>
      <svg
        viewBox="-20 0 380 200"
        width="400"
        height="200"
        style={{ minWidth: '400px', minHeight: '200px' }}
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
            fill="hsl(var(--illustration-weg))"
            opacity="0.08"
          />
          {/* Module header */}
          <rect x="-62" y="-52" width="124" height="7" rx="3" fill="hsl(var(--illustration-weg))" opacity="var(--illustration-opacity-light)" />

          {/* Service Icons - WEG - vertikal verteilt */}
          {/* Zeile 1: Kalender (Versammlungen) */}
          <g transform="translate(0, -18)">
            <g transform="translate(-40, 0)">
              <rect x="-5" y="-6" width="10" height="9" rx="1.5" fill="none" stroke="hsl(var(--illustration-weg))" strokeWidth="1" />
              <line x1="-5" y1="-2.5" x2="5" y2="-2.5" stroke="hsl(var(--illustration-weg))" strokeWidth="0.8" />
              <circle cx="-2" cy="0.5" r="1.2" fill="hsl(var(--illustration-weg))" />
              <circle cx="2" cy="0.5" r="1.2" fill="hsl(var(--illustration-weg))" />
            </g>
            <text x="-24" y="3" fill="hsl(var(--illustration-weg))" fontSize="9" fontWeight="500">Versammlungen</text>
          </g>

          {/* Zeile 2: Chart (Finanzen) */}
          <g transform="translate(0, 10)">
            <g transform="translate(-40, 0)">
              <rect x="-4" y="-1" width="2.5" height="5" rx="0.5" fill="hsl(var(--illustration-weg))" />
              <rect x="-0.5" y="-4" width="2.5" height="8" rx="0.5" fill="hsl(var(--illustration-weg))" />
              <rect x="2.5" y="-2.5" width="2.5" height="6.5" rx="0.5" fill="hsl(var(--illustration-weg))" />
            </g>
            <text x="-24" y="3" fill="hsl(var(--illustration-weg))" fontSize="9" fontWeight="500">Finanzen</text>
          </g>

          {/* Zeile 3: Dokument (Vorgänge) */}
          <g transform="translate(0, 38)">
            <g transform="translate(-40, 0)">
              <rect x="-4" y="-6" width="8" height="12" rx="1" fill="none" stroke="hsl(var(--illustration-weg))" strokeWidth="1" />
              <line x1="-2" y1="-3" x2="3" y2="-3" stroke="hsl(var(--illustration-weg))" strokeWidth="0.8" />
              <line x1="-2" y1="0" x2="2" y2="0" stroke="hsl(var(--illustration-weg))" strokeWidth="0.8" />
              <line x1="-2" y1="3" x2="1.5" y2="3" stroke="hsl(var(--illustration-weg))" strokeWidth="0.8" />
            </g>
            <text x="-24" y="3" fill="hsl(var(--illustration-weg))" fontSize="9" fontWeight="500">Vorgänge</text>
          </g>

          {/* Success indicator */}
          <circle cx="57" cy="-47" r="7" fill="hsl(var(--illustration-weg))" />
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
            fill="hsl(var(--illustration-owner))"
            opacity="0.08"
          />
          {/* Module header */}
          <rect x="-62" y="-52" width="124" height="7" rx="3" fill="hsl(var(--illustration-owner))" opacity="var(--illustration-opacity-light)" />

          {/* Service Icons - Eigentümer - vertikal verteilt */}
          {/* Zeile 1: Euro (Nebenkosten Manager) */}
          <g transform="translate(0, -18)">
            <g transform="translate(-40, 0)">
              <circle cx="0" cy="0" r="6" fill="none" stroke="hsl(var(--illustration-owner))" strokeWidth="1" />
              <text x="0" y="3" textAnchor="middle" fill="hsl(var(--illustration-owner))" fontSize="8" fontWeight="600">€</text>
            </g>
            <text x="-24" y="3" fill="hsl(var(--illustration-owner))" fontSize="7" fontWeight="500">NK Manager</text>
          </g>

          {/* Zeile 2: Chart (Finanzen) */}
          <g transform="translate(0, 10)">
            <g transform="translate(-40, 0)">
              <rect x="-4" y="-1" width="2.5" height="5" rx="0.5" fill="hsl(var(--illustration-owner))" />
              <rect x="-0.5" y="-4" width="2.5" height="8" rx="0.5" fill="hsl(var(--illustration-owner))" />
              <rect x="2.5" y="-2.5" width="2.5" height="6.5" rx="0.5" fill="hsl(var(--illustration-owner))" />
            </g>
            <text x="-24" y="3" fill="hsl(var(--illustration-owner))" fontSize="9" fontWeight="500">Finanzen</text>
          </g>

          {/* Zeile 3: Dokument (Dokumente) */}
          <g transform="translate(0, 38)">
            <g transform="translate(-40, 0)">
              <path d="M-3,-6 L3,-6 L5,-3.5 L5,6 L-3,6 Z" fill="none" stroke="hsl(var(--illustration-owner))" strokeWidth="1" />
              <path d="M3,-6 L3,-3.5 L5,-3.5" fill="none" stroke="hsl(var(--illustration-owner))" strokeWidth="0.8" />
            </g>
            <text x="-24" y="3" fill="hsl(var(--illustration-owner))" fontSize="9" fontWeight="500">Dokumente</text>
          </g>

          {/* Success indicator */}
          <circle cx="57" cy="-47" r="7" fill="hsl(var(--illustration-owner))" />
          <path d="M53.5,-47 L56,-44.5 L60.5,-50" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Labels - closer to boxes */}
        <text
          x="140"
          y="162"
          textAnchor="middle"
          fill="hsl(var(--illustration-weg))"
          fontSize="10"
          fontWeight="600"
        >
          Wegora WEG
        </text>
        <text
          x="290"
          y="162"
          textAnchor="middle"
          fill="hsl(var(--illustration-owner))"
          fontSize="10"
          fontWeight="600"
        >
          Wegora Eigentümer
        </text>
      </svg>
    </div>
  );
}
