
interface TransitionVisualizationProps {
  className?: string;
}

export function TransitionVisualization({ className = "" }: TransitionVisualizationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full transition-visual"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          .transition-visual .fragment {
            transform-box: fill-box;
            transform-origin: center;
          }

          /* Subtle float animation for fragments */
          .transition-visual .float {
            animation: transition-float 8s ease-in-out infinite;
          }

          .transition-visual .float-1 { animation-delay: -0.5s; }
          .transition-visual .float-2 { animation-delay: -1.2s; }
          .transition-visual .float-3 { animation-delay: -2.1s; }
          .transition-visual .float-4 { animation-delay: -3.4s; }
          .transition-visual .float-5 { animation-delay: -1.8s; }
          .transition-visual .float-6 { animation-delay: -2.7s; }
          .transition-visual .float-7 { animation-delay: -0.9s; }
          .transition-visual .float-8 { animation-delay: -3.1s; }

          @keyframes transition-float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(0, -3px); }
          }

          /* Respect motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .transition-visual .float {
              animation: none !important;
            }
          }
        `}</style>

        {/* Scattered fragments (top section) */}
        <g opacity="var(--illustration-opacity-medium)">
          {/* Fragment 1 */}
          <circle className="fragment float float-1" cx="120" cy="60" r="5" fill="none" stroke="hsl(var(--illustration-ink-muted))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Fragment 2 */}
          <circle className="fragment float float-2" cx="280" cy="45" r="6" fill="none" stroke="hsl(var(--illustration-ink-muted))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Fragment 3 */}
          <circle className="fragment float float-3" cx="190" cy="80" r="4" fill="none" stroke="hsl(var(--illustration-ink-muted))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Fragment 4 */}
          <circle className="fragment float float-4" cx="480" cy="55" r="5.5" fill="none" stroke="hsl(var(--illustration-ink-muted))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Fragment 5 */}
          <circle className="fragment float float-5" cx="520" cy="90" r="4.5" fill="none" stroke="hsl(var(--illustration-ink-muted))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Fragment 6 */}
          <circle className="fragment float float-6" cx="610" cy="50" r="6" fill="none" stroke="hsl(var(--illustration-ink-muted))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Fragment 7 */}
          <circle className="fragment float float-7" cx="680" cy="75" r="5" fill="none" stroke="hsl(var(--illustration-ink-muted))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Fragment 8 */}
          <circle className="fragment float float-8" cx="360" cy="70" r="4.5" fill="none" stroke="hsl(var(--illustration-ink-muted))" strokeWidth="var(--illustration-stroke-default)" />
        </g>

        {/* Connection lines - subtle fade from fragments to center */}
        <g opacity="var(--illustration-opacity-light)" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-thin)" fill="none">
          <path d="M 120 60 Q 200 180, 400 300" />
          <path d="M 280 45 Q 340 140, 400 300" />
          <path d="M 190 80 Q 260 170, 400 300" />
          <path d="M 480 55 Q 440 150, 400 300" />
          <path d="M 520 90 Q 460 180, 400 300" />
          <path d="M 610 50 Q 520 160, 400 300" />
          <path d="M 680 75 Q 560 180, 400 300" />
          <path d="M 360 70 Q 380 170, 400 300" />
        </g>

        {/* Central structured form (bottom) */}
        <g transform="translate(400, 320)">
          {/* Main circle - Wegora blue */}
          <circle cx="0" cy="0" r="42" fill="#FFFFFF" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-bold)" />

          {/* Inner structure indicator - subtle grid/organization symbol */}
          <g opacity="0.3" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-thin)">
            <line x1="-15" y1="0" x2="15" y2="0" />
            <line x1="0" y1="-15" x2="0" y2="15" />
          </g>

          {/* Center dot */}
          <circle cx="0" cy="0" r="3" fill="hsl(var(--illustration-weg))" />
        </g>
      </svg>
    </div>
  );
}
