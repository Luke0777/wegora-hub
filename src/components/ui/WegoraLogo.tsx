import React from 'react';
import { cn } from '@/lib/utils';

interface WegoraLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  colorMode?: 'default' | 'monochrome' | 'white';
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function WegoraLogo({ 
  variant = 'horizontal', 
  colorMode = 'default',
  className,
  onClick,
  size = 'md'
}: WegoraLogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8 md:h-9',
    lg: 'h-14',
    xl: 'h-20'
  };

  // For monochrome mode, we use currentColor
  const logomarkColors = colorMode === 'monochrome' 
    ? { primary: 'currentColor', accent: 'currentColor' }
    : colorMode === 'white'
    ? { primary: 'white', accent: 'white' }
    : { primary: '#2563EB', accent: '#F97316' };

  const textColor = colorMode === 'monochrome' 
    ? 'currentColor'
    : colorMode === 'white'
    ? 'white'
    : '#0F172A';

  const windowColor = colorMode === 'white' ? '#1f2937' : 'white';
  const documentBg = colorMode === 'white' ? '#1f2937' : 'white';
  const checkmarkStroke = colorMode === 'white' ? '#1f2937' : 'white';

  const LogomarkSVG = () => (
    <svg
      viewBox="0 0 32 32"
      className={sizeClasses[size]}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g id="logomark" transform="translate(1, 2)">
        {/* Simple House Base with refined rounded corners */}
        <rect x="2" y="16" width="14" height="12" rx="2" fill={logomarkColors.primary}/>
        
        {/* Simple House Roof */}
        <path d="M1 17 L9 9 L17 17 L15 17 L9 11 L3 17 Z" fill={logomarkColors.primary}/>
        
        {/* Single Window with proper rounding */}
        <rect x="6" y="20" width="2" height="2" rx="1" fill={windowColor}/>
        
        {/* Minimal Document/Checkmark Element */}
        <g transform="translate(18, 14)">
          {/* Simple Document with 2px stroke */}
          <rect x="0" y="0" width="8" height="10" rx="2" fill={documentBg} stroke={logomarkColors.accent} strokeWidth="2"/>
          
          {/* Single Checkmark circle */}
          <circle cx="2.5" cy="4" r="1.5" fill={logomarkColors.accent}/>
          <path d="M1.8 4 L2.2 4.4 L3.2 3.4" stroke={checkmarkStroke} strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Simple line indicator */}
          <rect x="4.5" y="3.5" width="2.5" height="1" rx="0.5" fill={logomarkColors.accent} opacity="0.4"/>
        </g>
      </g>
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div
        className={cn("flex-shrink-0", onClick && "cursor-pointer hover:opacity-80 transition-opacity", className)}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        aria-label={onClick ? "Zur Startseite" : "Wegora Logo"}
      >
        <LogomarkSVG />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div 
        className={cn(
          "flex flex-col items-center gap-2",
          onClick && "cursor-pointer hover:opacity-80 transition-opacity",
          className
        )}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        aria-label={onClick ? "Zur Startseite" : "Wegora Logo"}
      >
        <LogomarkSVG />
        
        <span 
          className={cn(
            "font-semibold text-sm",
            size === 'sm' && "text-xs",
            size === 'lg' && "text-base",
            size === 'xl' && "text-lg"
          )}
          style={{ color: textColor, letterSpacing: '-0.01em' }}
        >
          Wegora
        </span>
      </div>
    );
  }

  // Default horizontal variant
  return (
    <div 
      className={cn(
        "flex items-center gap-3",
        onClick && "cursor-pointer hover:opacity-80 transition-opacity",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? "Zur Startseite" : "Wegora Logo"}
    >
      <div className="relative -translate-y-[6px]">
        <LogomarkSVG />
      </div>
      
      <span 
        className={cn(
          "font-semibold tracking-tight",
          size === 'sm' && "text-sm",
          size === 'md' && "text-xl md:text-2xl",
          size === 'lg' && "text-2xl md:text-3xl",
          size === 'xl' && "text-3xl md:text-4xl"
        )}
        style={{ color: textColor }}
      >
        Wegora
      </span>
    </div>
  );
}
