import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EigentuemerFlowDiagramProps {
  className?: string;
}

// Feste Positionen - organisch angeordnet (kein perfektes Dreieck)
const CENTER = { x: 500, y: 300 };
// Bewusst asymmetrische Positionen für organisches "Cockpit"-Gefühl
const NEBENKOSTEN_POS = { x: 395, y: 115 };      // oben-links (etwas höher)
const DOKUMENTE_POS = { x: 340, y: 450 };        // unten-links (etwas mehr rechts)
const FINANZEN_POS = { x: 685, y: 335 };         // rechts (etwas tiefer und näher)

export function EigentuemerFlowDiagram({ className = "" }: EigentuemerFlowDiagramProps) {
  const [isVisible, setIsVisible] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated.current) {
        hasAnimated.current = true;
        setTimeout(() => {
          setIsVisible(true);
        }, 200);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={svgRef} className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="-50 50 1100 550"
        className="w-full h-full wegora-flow-eigentuemer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .wegora-flow-eigentuemer * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>

        {/* Dezenter innerer Kreis - very subtle for organic feel */}
        <g fill="none" strokeLinecap="round">
          <circle
            cx={CENTER.x}
            cy={CENTER.y}
            r={115}
            stroke="hsl(var(--illustration-owner))"
            strokeWidth="var(--illustration-stroke-thin)"
            strokeDasharray="6 5"
            opacity="0.15"
          />
        </g>

        {/* Zentrum: Wegora House Icon */}
        <g transform={`translate(${CENTER.x}, ${CENTER.y})`}>
          <circle cx="0" cy="0" r="67" fill="hsl(var(--illustration-owner) / 0.04)" stroke="hsl(var(--illustration-owner))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Wegora house icon - new logo style, centered */}
          <g transform="translate(-25, -41) scale(2.8)">
            {/* House Base */}
            <rect x="2" y="12" width="14" height="12" rx="2" fill="hsl(var(--illustration-owner))"/>
            {/* Roof */}
            <path d="M1 13 L9 5 L17 13 L15 13 L9 7 L3 13 Z" fill="hsl(var(--illustration-owner))"/>
          </g>
        </g>

        {/* Service 1: Nebenkosten (oben-links) */}
        <motion.g
          transform={`translate(${NEBENKOSTEN_POS.x}, ${NEBENKOSTEN_POS.y})`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        >
          <circle cx="0" cy="0" r="60" fill="hsl(var(--illustration-owner))" opacity="0.08" />
          <circle cx="0" cy="0" r="54" fill="hsl(var(--illustration-owner) / 0.03)" stroke="hsl(var(--illustration-owner))" strokeWidth="var(--illustration-stroke-default)" />
          {/* Dokument-Scan Icon - slightly bigger */}
          <g transform="scale(2.5)">
            <rect x="-6" y="-7" width="12" height="14" rx="1.2" fill="#FFFFFF" stroke="hsl(var(--illustration-owner))" strokeWidth="1.1" />
            <rect x="-4" y="-4.5" width="8" height="1.2" rx="0.5" fill="hsl(var(--illustration-owner))" opacity="0.5" />
            <rect x="-4" y="-2" width="5.5" height="1.2" rx="0.5" fill="hsl(var(--illustration-owner))" opacity="0.5" />
            <rect x="-4" y="0.5" width="7" height="1.2" rx="0.5" fill="hsl(var(--illustration-owner))" opacity="0.5" />
            <path d="M-8.5,-2 L-5,-2" stroke="hsl(var(--illustration-owner))" strokeWidth="1" opacity="0.5" />
            <path d="M-8.5,0.8 L-5,0.8" stroke="hsl(var(--illustration-owner))" strokeWidth="1" opacity="0.5" />
          </g>
          <text
            x="0"
            y="78"
            textAnchor="middle"
            fill="hsl(var(--illustration-owner))"
            fontSize="16"
            fontWeight="600"
          >
            Nebenkosten
          </text>
        </motion.g>

        {/* Service 2: Finanzen (rechts unten) */}
        <motion.g
          transform={`translate(${FINANZEN_POS.x}, ${FINANZEN_POS.y})`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.55 }}
        >
          <circle cx="0" cy="0" r="60" fill="hsl(var(--illustration-owner))" opacity="0.08" />
          <circle cx="0" cy="0" r="54" fill="hsl(var(--illustration-owner) / 0.03)" stroke="hsl(var(--illustration-owner))" strokeWidth="var(--illustration-stroke-default)" />
          {/* Balkendiagramm Icon - softer */}
          <g transform="scale(2.25)">
            <rect x="-10.4" y="-2.2" width="4" height="8" rx="0.8" fill="hsl(var(--illustration-owner))" opacity="0.7" />
            <rect x="-4.8" y="-6.4" width="4" height="12" rx="0.8" fill="hsl(var(--illustration-owner))" opacity="0.7" />
            <rect x="0.8" y="-4.8" width="4" height="10.4" rx="0.8" fill="hsl(var(--illustration-owner))" opacity="0.7" />
            <rect x="6.4" y="-8" width="4" height="13.6" rx="0.8" fill="hsl(var(--illustration-owner))" opacity="0.7" />
          </g>
          <text
            x="0"
            y="78"
            textAnchor="middle"
            fill="hsl(var(--illustration-owner))"
            fontSize="16"
            fontWeight="600"
          >
            Finanzen
          </text>
        </motion.g>

        {/* Service 3: Dokumente (links unten) */}
        <motion.g
          transform={`translate(${DOKUMENTE_POS.x}, ${DOKUMENTE_POS.y})`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        >
          <circle cx="0" cy="0" r="60" fill="hsl(var(--illustration-owner))" opacity="0.08" />
          <circle cx="0" cy="0" r="54" fill="hsl(var(--illustration-owner) / 0.03)" stroke="hsl(var(--illustration-owner))" strokeWidth="var(--illustration-stroke-default)" />
          {/* Ordner Icon - with inner lines */}
          <g transform="scale(2.25)">
            <path d="M-9,-3 L-9,7 Q-9,8 -8,8 L8,8 Q9,8 9,7 L9,-3 Q9,-4 8,-4 L2,-4 L0.5,-6.5 L-7,-6.5 Q-9,-6.5 -9,-5 Z" fill="#FFFFFF" stroke="hsl(var(--illustration-owner))" strokeWidth="1.2" />
            {/* Inner lines */}
            <rect x="-6" y="-1" width="12" height="1.1" rx="0.5" fill="hsl(var(--illustration-owner))" opacity="var(--illustration-opacity-medium)" />
            <rect x="-6" y="2" width="8" height="1.1" rx="0.5" fill="hsl(var(--illustration-owner))" opacity="var(--illustration-opacity-medium)" />
            <rect x="-6" y="5" width="10" height="1.1" rx="0.5" fill="hsl(var(--illustration-owner))" opacity="var(--illustration-opacity-medium)" />
          </g>
          <text
            x="0"
            y="78"
            textAnchor="middle"
            fill="hsl(var(--illustration-owner))"
            fontSize="16"
            fontWeight="600"
          >
            Dokumente
          </text>
        </motion.g>

        {/* Dezente Andeutung: "Weitere Module folgen" */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
        >
          <text
            x="500"
            y="595"
            textAnchor="middle"
            fill="hsl(var(--illustration-ink-muted))"
            fontSize="14"
            fontStyle="italic"
          >
            Weitere Services folgen
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
