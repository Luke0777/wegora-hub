import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ServiceFlowDiagramProps {
  className?: string;
}

export function ServiceFlowDiagram({ className = "" }: ServiceFlowDiagramProps) {
  const [isVisible, setIsVisible] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated.current) {
        hasAnimated.current = true;
        // Add 200ms delay before starting animation
        setTimeout(() => {
          setIsVisible(true);
        }, 200);
        // Remove listener after first scroll
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={svgRef} className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="-50 50 1100 520"
        className="w-full h-full wegora-flow"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          /* Respect motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .wegora-flow * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>

        {/* Connection lines - Pure single-curve Béziers with vertical entry */}
        <g opacity="0.5" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-default)" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Trunk: smooth curve into junction */}
          <motion.path
            d="M 500 192 C 500 194, 500 197, 500 200"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
          />

          {/* Fan-out: Centered at x=500 */}

          {/* Versammlungen (far left) */}
          <motion.path
            d="M 500 200 C 500 245, 50 235, 50 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          />

          {/* Finanzen (center-left) */}
          <motion.path
            d="M 500 200 C 500 255, 350 245, 350 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          />

          {/* Dokumente (center-right) */}
          <motion.path
            d="M 500 200 C 500 255, 650 245, 650 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          />

          {/* Vorgänge (far right) */}
          <motion.path
            d="M 500 200 C 500 245, 950 235, 950 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
          />
        </g>

        {/* Central Wegora House Icon - blue styling */}
        <g transform="translate(500, 125)">
          {/* Circle background */}
          <circle cx="0" cy="0" r="67" fill="hsl(var(--illustration-weg) / 0.04)" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-default)" />

          {/* Wegora house icon - new logo style, centered */}
          <g transform="translate(-25, -41) scale(2.8)">
            {/* House Base */}
            <rect x="2" y="12" width="14" height="12" rx="2" fill="hsl(var(--illustration-weg))"/>
            {/* Roof */}
            <path d="M1 13 L9 5 L17 13 L15 13 L9 7 L3 13 Z" fill="hsl(var(--illustration-weg))"/>
          </g>
        </g>

        {/* Service 1: Versammlungen (Left) */}
        <motion.g
          transform="translate(50, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        >
          {/* Background circle - subtle outer glow */}
          <circle cx="0" cy="0" r="60" fill="hsl(var(--illustration-weg))" opacity="0.08" />
          <circle cx="0" cy="0" r="54" fill="hsl(var(--illustration-weg) / 0.03)" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-default)" />
          {/* People icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <circle cx="-5.6" cy="-3.2" r="2.8" fill="none" stroke="hsl(var(--illustration-weg))" strokeWidth="1.3" />
            <path d="M-8.8,3.2 Q-5.6,0.8 -2.4,3.2" stroke="hsl(var(--illustration-weg))" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <circle cx="0" cy="-4" r="3.2" fill="none" stroke="hsl(var(--illustration-weg))" strokeWidth="1.3" />
            <path d="M-4,4 Q0,1.6 4,4" stroke="hsl(var(--illustration-weg))" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <circle cx="5.6" cy="-3.2" r="2.8" fill="none" stroke="hsl(var(--illustration-weg))" strokeWidth="1.3" />
            <path d="M2.4,3.2 Q5.6,0.8 8.8,3.2" stroke="hsl(var(--illustration-weg))" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="hsl(var(--illustration-weg))"
            fontSize="20"
            fontWeight="600"
          >
            Versammlungen
          </text>
        </motion.g>

        {/* Service 2: Finanzen (Center-Left) */}
        <motion.g
          transform="translate(350, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        >
          {/* Background circle - subtle outer glow */}
          <circle cx="0" cy="0" r="60" fill="hsl(var(--illustration-weg))" opacity="0.08" />
          <circle cx="0" cy="0" r="54" fill="hsl(var(--illustration-weg) / 0.03)" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-default)" />
          {/* Chart icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <rect x="-10.4" y="-2.2" width="4" height="8" rx="0.8" fill="hsl(var(--illustration-weg))" opacity="0.7" />
            <rect x="-4.8" y="-6.4" width="4" height="12" rx="0.8" fill="hsl(var(--illustration-weg))" opacity="0.7" />
            <rect x="0.8" y="-4.8" width="4" height="10.4" rx="0.8" fill="hsl(var(--illustration-weg))" opacity="0.7" />
            <rect x="6.4" y="-8" width="4" height="13.6" rx="0.8" fill="hsl(var(--illustration-weg))" opacity="0.7" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="hsl(var(--illustration-weg))"
            fontSize="20"
            fontWeight="600"
          >
            Finanzen
          </text>
        </motion.g>

        {/* Service 3: Dokumente (Center-Right) */}
        <motion.g
          transform="translate(650, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.65 }}
        >
          {/* Background circle - subtle outer glow */}
          <circle cx="0" cy="0" r="60" fill="hsl(var(--illustration-weg))" opacity="0.08" />
          <circle cx="0" cy="0" r="54" fill="hsl(var(--illustration-weg) / 0.03)" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-default)" />
          {/* Ordner Icon - with inner lines */}
          <g transform="scale(2.25)">
            <path d="M-9,-3 L-9,7 Q-9,8 -8,8 L8,8 Q9,8 9,7 L9,-3 Q9,-4 8,-4 L2,-4 L0.5,-6.5 L-7,-6.5 Q-9,-6.5 -9,-5 Z" fill="#FFFFFF" stroke="hsl(var(--illustration-weg))" strokeWidth="1.2" />
            {/* Inner lines */}
            <rect x="-6" y="-1" width="12" height="1.1" rx="0.5" fill="hsl(var(--illustration-weg))" opacity="var(--illustration-opacity-medium)" />
            <rect x="-6" y="2" width="8" height="1.1" rx="0.5" fill="hsl(var(--illustration-weg))" opacity="var(--illustration-opacity-medium)" />
            <rect x="-6" y="5" width="10" height="1.1" rx="0.5" fill="hsl(var(--illustration-weg))" opacity="var(--illustration-opacity-medium)" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="hsl(var(--illustration-weg))"
            fontSize="20"
            fontWeight="600"
          >
            Dokumente
          </text>
        </motion.g>

        {/* Service 4: Vorgänge (Right) */}
        <motion.g
          transform="translate(950, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
        >
          {/* Background circle - subtle outer glow */}
          <circle cx="0" cy="0" r="60" fill="hsl(var(--illustration-weg))" opacity="0.08" />
          <circle cx="0" cy="0" r="54" fill="hsl(var(--illustration-weg) / 0.03)" stroke="hsl(var(--illustration-weg))" strokeWidth="var(--illustration-stroke-default)" />
          {/* Clipboard/Task icon - scaled proportionally */}
          <g transform="scale(2.25)">
            {/* Clipboard base */}
            <rect x="-7" y="-8" width="14" height="18" rx="1.5" fill="#FFFFFF" stroke="hsl(var(--illustration-weg))" strokeWidth="1.3" />
            {/* Clipboard clip */}
            <rect x="-3.5" y="-10" width="7" height="4" rx="1" fill="hsl(var(--illustration-weg))" />
            {/* Checklist lines */}
            <rect x="-4" y="-3" width="2" height="2" rx="0.4" fill="hsl(var(--illustration-weg))" />
            <rect x="0" y="-3" width="6" height="1.5" rx="0.5" fill="hsl(var(--illustration-weg))" opacity="0.5" />
            <rect x="-4" y="1" width="2" height="2" rx="0.4" fill="hsl(var(--illustration-weg))" />
            <rect x="0" y="1" width="5" height="1.5" rx="0.5" fill="hsl(var(--illustration-weg))" opacity="0.5" />
            <rect x="-4" y="5" width="2" height="2" rx="0.4" fill="hsl(var(--illustration-weg))" />
            <rect x="0" y="5" width="4" height="1.5" rx="0.5" fill="hsl(var(--illustration-weg))" opacity="0.5" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="hsl(var(--illustration-weg))"
            fontSize="20"
            fontWeight="600"
          >
            Vorgänge
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
