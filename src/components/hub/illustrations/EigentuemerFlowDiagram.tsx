import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EigentuemerFlowDiagramProps {
  className?: string;
}

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
        viewBox="-50 50 1100 520"
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

        {/* Connection lines - Teal color scheme */}
        <g opacity="0.22" stroke="#14B8A6" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Trunk */}
          <motion.path
            d="M 500 192 C 500 194, 500 197, 500 200"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0 }}
          />

          {/* NK Manager (far left) */}
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

          {/* Kostenanalyse (center-right) */}
          <motion.path
            d="M 500 200 C 500 255, 650 245, 650 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          />

          {/* Dokumente (far right) */}
          <motion.path
            d="M 500 200 C 500 245, 950 235, 950 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
          />
        </g>

        {/* Central WOHNUNG - teal styling */}
        <g transform="translate(500, 125)">
          <circle cx="0" cy="0" r="67" fill="#FFFFFF" stroke="#14B8A6" strokeWidth="4.5" />

          {/* Single apartment/unit icon */}
          <g transform="scale(3.15) translate(-9, -18.5)">
            {/* House Base */}
            <rect x="2" y="16" width="14" height="12" rx="1" fill="#14B8A6"/>
            {/* House Roof */}
            <path d="M1 17 L9 9 L17 17 L15 17 L9 11 L3 17 Z" fill="#14B8A6"/>
            {/* Window - single larger window for "individual" feel */}
            <rect x="5" y="19" width="4" height="4" rx="0.5" fill="white"/>
            {/* Door */}
            <rect x="10" y="21" width="3" height="5" rx="0.5" fill="white"/>
          </g>
        </g>

        {/* Service 1: NK Manager (Left) - Green */}
        <motion.g
          transform="translate(50, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        >
          <circle cx="0" cy="0" r="60" fill="#10B981" opacity="0.15" />
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
          {/* Document scanning icon */}
          <g transform="scale(2.25)">
            <rect x="-8" y="-8.7" width="16" height="19.2" rx="1.6" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.3" />
            <rect x="-5.6" y="-5.6" width="11.2" height="1.6" rx="0.8" fill="#10B981" opacity="0.4" />
            <rect x="-5.6" y="-2.4" width="8" height="1.6" rx="0.8" fill="#10B981" opacity="0.4" />
            <rect x="-5.6" y="0.8" width="9.6" height="1.6" rx="0.8" fill="#10B981" opacity="0.4" />
            <path d="M-12,-3.2 L-6.4,-3.2" stroke="#10B981" strokeWidth="1.3" opacity="0.6" />
            <path d="M-12,0.8 L-6.4,0.8" stroke="#10B981" strokeWidth="1.3" opacity="0.6" />
          </g>
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#10B981"
            fontSize="20"
            fontWeight="600"
          >
            NK Manager
          </text>
        </motion.g>

        {/* Service 2: Finanzen (Center-Left) - Green */}
        <motion.g
          transform="translate(350, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        >
          <circle cx="0" cy="0" r="60" fill="#10B981" opacity="0.15" />
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
          {/* Chart icon */}
          <g transform="scale(2.25)">
            <rect x="-10.4" y="-2.2" width="4" height="8" rx="0.8" fill="#10B981" />
            <rect x="-4.8" y="-6.4" width="4" height="12" rx="0.8" fill="#10B981" />
            <rect x="0.8" y="-4.8" width="4" height="10.4" rx="0.8" fill="#10B981" />
            <rect x="6.4" y="-8" width="4" height="13.6" rx="0.8" fill="#10B981" />
          </g>
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#10B981"
            fontSize="20"
            fontWeight="600"
          >
            Finanzen
          </text>
        </motion.g>

        {/* Service 3: Kostenanalyse (Center-Right) - Green */}
        <motion.g
          transform="translate(650, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.65 }}
        >
          <circle cx="0" cy="0" r="60" fill="#10B981" opacity="0.15" />
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#10B981" strokeWidth="3" />
          {/* Magnifying glass icon */}
          <g transform="scale(2.25)">
            <circle cx="-1.6" cy="-1.6" r="6.4" fill="none" stroke="#10B981" strokeWidth="1.6" />
            <circle cx="-1.6" cy="-1.6" r="4" fill="#10B981" opacity="0.1" />
            <path d="M3.2,3.2 L6.4,6.4" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" />
            <text x="-1.6" y="0.8" textAnchor="middle" fill="#10B981" fontSize="5.5" fontWeight="bold">€</text>
          </g>
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#10B981"
            fontSize="20"
            fontWeight="600"
          >
            Kostenanalyse
          </text>
        </motion.g>

        {/* Service 4: Dokumente (Right) - Teal */}
        <motion.g
          transform="translate(950, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
        >
          <circle cx="0" cy="0" r="60" fill="#14B8A6" opacity="0.15" />
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#14B8A6" strokeWidth="3" />
          {/* Folder/Documents icon */}
          <g transform="scale(2.25)">
            {/* Folder back */}
            <rect x="-10" y="-4" width="20" height="14" rx="1.5" fill="#14B8A6" opacity="0.3" />
            {/* Folder front */}
            <path d="M-10,-4 L-10,10 Q-10,11.5 -8.5,11.5 L8.5,11.5 Q10,11.5 10,10 L10,-4 Q10,-5.5 8.5,-5.5 L2,-5.5 L0,-8 L-8.5,-8 Q-10,-8 -10,-6.5 Z" fill="#14B8A6" />
            {/* Document lines */}
            <rect x="-6" y="0" width="12" height="1.2" rx="0.6" fill="white" opacity="0.6" />
            <rect x="-6" y="3" width="8" height="1.2" rx="0.6" fill="white" opacity="0.6" />
            <rect x="-6" y="6" width="10" height="1.2" rx="0.6" fill="white" opacity="0.6" />
          </g>
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#14B8A6"
            fontSize="20"
            fontWeight="600"
          >
            Dokumente
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
