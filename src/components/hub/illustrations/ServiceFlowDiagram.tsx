import React, { useEffect, useRef, useState } from 'react';
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
        <g opacity="0.22" stroke="#2463eb" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
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

          {/* NK Manager (center-right) */}
          <motion.path
            d="M 500 200 C 500 255, 650 245, 650 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          />

          {/* Kostenanalyse (far right) */}
          <motion.path
            d="M 500 200 C 500 245, 950 235, 950 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
          />
        </g>

        {/* Central OBJEKT - blue styling, centered between Finanzen & NK Manager */}
        <g transform="translate(500, 125)">
          {/* Circle for OBJEKT - scaled up proportionally */}
          <circle cx="0" cy="0" r="67" fill="#FFFFFF" stroke="#2563EB" strokeWidth="4.5" />

          {/* Wegora house icon - centered in circle - scaled proportionally */}
          <g transform="scale(3.15) translate(-9, -18.5)">
            {/* Simple House Base */}
            <rect x="2" y="16" width="14" height="12" rx="1" fill="#2563EB"/>
            {/* Simple House Roof */}
            <path d="M1 17 L9 9 L17 17 L15 17 L9 11 L3 17 Z" fill="#2563EB"/>
            {/* Single Window */}
            <rect x="6" y="20" width="2" height="2" rx="0.5" fill="white"/>
          </g>
        </g>

        {/* Service 1: Versammlungen (Left) */}
        <motion.g
          transform="translate(50, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        >
          {/* Background circle */}
          <circle cx="0" cy="0" r="60" fill="#3182CE" opacity="0.15" />
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#3182CE" strokeWidth="3" />
          {/* People icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <circle cx="-5.6" cy="-3.2" r="2.8" fill="none" stroke="#3182CE" strokeWidth="1.3" />
            <path d="M-8.8,3.2 Q-5.6,0.8 -2.4,3.2" stroke="#3182CE" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <circle cx="0" cy="-4" r="3.2" fill="none" stroke="#3182CE" strokeWidth="1.3" />
            <path d="M-4,4 Q0,1.6 4,4" stroke="#3182CE" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <circle cx="5.6" cy="-3.2" r="2.8" fill="none" stroke="#3182CE" strokeWidth="1.3" />
            <path d="M2.4,3.2 Q5.6,0.8 8.8,3.2" stroke="#3182CE" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#3182CE"
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
          {/* Background circle */}
          <circle cx="0" cy="0" r="60" fill="#3182CE" opacity="0.15" />
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#3182CE" strokeWidth="3" />
          {/* Chart icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <rect x="-10.4" y="-2.2" width="4" height="8" rx="0.8" fill="#3182CE" />
            <rect x="-4.8" y="-6.4" width="4" height="12" rx="0.8" fill="#3182CE" />
            <rect x="0.8" y="-4.8" width="4" height="10.4" rx="0.8" fill="#3182CE" />
            <rect x="6.4" y="-8" width="4" height="13.6" rx="0.8" fill="#3182CE" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="20"
            fontWeight="600"
          >
            Finanzen
          </text>
        </motion.g>

        {/* Service 3: NK Manager (Center-Right) */}
        <motion.g
          transform="translate(650, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.65 }}
        >
          {/* Background circle */}
          <circle cx="0" cy="0" r="60" fill="#3182CE" opacity="0.15" />
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#3182CE" strokeWidth="3" />
          {/* Document scanning icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <rect x="-8" y="-8.7" width="16" height="19.2" rx="1.6" fill="#FFFFFF" stroke="#3182CE" strokeWidth="1.3" />
            <rect x="-5.6" y="-5.6" width="11.2" height="1.6" rx="0.8" fill="#3182CE" opacity="0.4" />
            <rect x="-5.6" y="-2.4" width="8" height="1.6" rx="0.8" fill="#3182CE" opacity="0.4" />
            <rect x="-5.6" y="0.8" width="9.6" height="1.6" rx="0.8" fill="#3182CE" opacity="0.4" />
            <path d="M-12,-3.2 L-6.4,-3.2" stroke="#3182CE" strokeWidth="1.3" opacity="0.6" />
            <path d="M-12,0.8 L-6.4,0.8" stroke="#3182CE" strokeWidth="1.3" opacity="0.6" />
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="20"
            fontWeight="600"
          >
            NK Manager
          </text>
        </motion.g>

        {/* Service 4: Kostenanalyse (Right) */}
        <motion.g
          transform="translate(950, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
        >
          {/* Background circle */}
          <circle cx="0" cy="0" r="60" fill="#3182CE" opacity="0.15" />
          <circle cx="0" cy="0" r="54" fill="#FFFFFF" stroke="#3182CE" strokeWidth="3" />
          {/* Magnifying glass icon - scaled proportionally */}
          <g transform="scale(2.25)">
            <circle cx="-1.6" cy="-1.6" r="6.4" fill="none" stroke="#3182CE" strokeWidth="1.6" />
            <circle cx="-1.6" cy="-1.6" r="4" fill="#3182CE" opacity="0.1" />
            <path d="M3.2,3.2 L6.4,6.4" stroke="#3182CE" strokeWidth="1.6" strokeLinecap="round" />
            <text x="-1.6" y="0.8" textAnchor="middle" fill="#3182CE" fontSize="5.5" fontWeight="bold">€</text>
          </g>
          {/* Label */}
          <text
            x="0"
            y="90"
            textAnchor="middle"
            fill="#3182CE"
            fontSize="20"
            fontWeight="600"
          >
            Kostenanalyse
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
