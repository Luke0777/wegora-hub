import { cn } from '@/lib/utils';

interface WegoraLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  colorMode?: 'default' | 'monochrome' | 'white';
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Context dot color - blue for WEG, green for Eigentümer */
  dotContext?: 'weg' | 'eigentuemer' | 'none';
  /**
   * Dot weight context for perceptual balance.
   * - 'compact': Navigation, footers, UI contexts (base size)
   * - 'hero': Hero sections, brand statements (120% scale for visual weight)
   */
  dotWeight?: 'compact' | 'hero';
}

export function WegoraLogo({
  variant = 'horizontal',
  colorMode = 'default',
  className,
  onClick,
  size = 'md',
  dotContext = 'weg',
  dotWeight = 'compact'
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
    : { primary: 'hsl(var(--weg-500))', accent: '#F97316' };

  const textColor = colorMode === 'monochrome'
    ? 'currentColor'
    : colorMode === 'white'
    ? 'white'
    : '#0F172A';

  const windowColor = colorMode === 'white' ? '#1f2937' : '#ffffff';

  // Context dot colors - the dot that has "left" the house
  const dotColor = colorMode === 'monochrome'
    ? 'currentColor'
    : colorMode === 'white'
    ? 'white'
    : dotContext === 'eigentuemer'
    ? '#0d9488' // teal-600 for Eigentümer
    : '#2463eb'; // blue for WEG (default)

  // Dot sizes based on logo size - editorial fullstop feel
  // Hero context scales up ~135% for perceptual balance in minimal layouts
  const dotSizes = dotWeight === 'hero' ? {
    sm: 'w-[3.2px] h-[3.2px]',
    md: 'w-[4.5px] h-[4.5px]',
    lg: 'w-[6.4px] h-[6.4px]',
    xl: 'w-[9px] h-[9px]'
  } : {
    sm: 'w-[2.4px] h-[2.4px]',
    md: 'w-[3.3px] h-[3.3px]',
    lg: 'w-[4.75px] h-[4.75px]',
    xl: 'w-[6.65px] h-[6.65px]'
  };

  const LogomarkSVG = () => (
    <svg
      viewBox="0 0 18 24"
      className={sizeClasses[size]}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* House Base */}
      <rect x="2" y="12" width="14" height="12" rx="2" fill={logomarkColors.primary}/>

      {/* Roof - aligned to optical cap height */}
      <path d="M1 13 L9 5 L17 13 L15 13 L9 7 L3 13 Z" fill={logomarkColors.primary}/>

      {/* Window - temporarily hidden */}
      {/* <rect x="4.9" y="15.7" width="2.6" height="2.6" rx="1.3" fill={windowColor}/> */}
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
        "flex items-center gap-1.5",
        onClick && "cursor-pointer hover:opacity-80 transition-opacity",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? "Zur Startseite" : "Wegora Logo"}
    >
      <div className="-translate-y-2 translate-x-0.5">
        <LogomarkSVG />
      </div>

      <span
        className={cn(
          "font-semibold tracking-tight translate-y-px",
          size === 'sm' && "text-sm",
          size === 'md' && "text-xl md:text-2xl",
          size === 'lg' && "text-2xl md:text-3xl",
          size === 'xl' && "text-3xl md:text-4xl"
        )}
        style={{ color: textColor }}
      >
        W<span style={{ letterSpacing: '0.01em' }}>e</span>gora
        {/* Decision dot - like a fullstop after the 'a' */}
        {dotContext !== 'none' && (
          <span
            className={cn("inline-block rounded-full ml-[0.15em] translate-y-[0.01em]", dotSizes[size])}
            style={{ backgroundColor: dotColor }}
            aria-hidden="true"
          />
        )}
      </span>
    </div>
  );
}
