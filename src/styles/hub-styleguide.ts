/**
 * Wegora Hub Style Guide
 * Design tokens and guidelines for hub/marketing pages
 *
 * This file documents the design system used across all public-facing
 * marketing pages. Services should align with these tokens for consistency.
 */

// =============================================================================
// COLOR SYSTEM
// =============================================================================

export const COLORS = {
  /**
   * BLUE - Primary brand color for WEG (Wohnungseigentümergemeinschaft) context
   * Used for: primary actions, WEG-related highlights, navigation accents
   */
  blue: {
    primary: '#2463eb',      // Main brand blue - buttons, links, primary actions
    hover: '#1d4ed8',        // Hover state (blue-700)
    light: '#3b82f6',        // Lighter variant (blue-500)
    background: '#F8FAFF',   // Very light blue tint for card backgrounds
    border: 'rgba(47, 102, 255, 0.25)',  // Subtle blue border
    borderHover: 'rgba(47, 102, 255, 0.4)',
  },

  /**
   * TEAL - Eigentümer (individual owner) context
   * Used for: Eigentümer-specific services, success states, secondary CTAs
   */
  teal: {
    primary: '#14B8A6',      // Main teal (teal-500) - service cards, badges
    dark: '#0d9488',         // Darker variant (teal-600) - logo dot, hover states
    light: '#2dd4bf',        // Lighter variant (teal-400)
    background: '#ccfbf1',   // Very light teal for badge backgrounds
    border: '#99f6e4',       // Light teal border
    muted: '#5eead4',        // Muted teal accent
  },

  /**
   * TEXT GREY HIERARCHY
   * Based on Slate palette with subtle blue undertone for warmth
   * Use CSS variables for runtime theming: hsl(var(--text-secondary))
   */
  text: {
    /**
     * Primary - Main body text, headings
     * CSS: Use `text-foreground` or explicit `#1A1A1A`
     */
    primary: '#1A1A1A',

    /**
     * Secondary - Subheadings, descriptions, body subtext
     * CSS Variable: --text-secondary: 215 16% 47%
     * Usage: style={{ color: "hsl(var(--text-secondary))" }}
     */
    secondary: '#64748b',    // Slate 500

    /**
     * Tertiary - Eyebrow labels, hints, metadata
     * CSS Variable: --text-tertiary: 215 20% 65%
     * Usage: style={{ color: "hsl(var(--text-tertiary))" }}
     */
    tertiary: '#94a3b8',     // Slate 400

    /**
     * Muted - Disabled states, placeholders, very subtle text
     * CSS Variable: --text-muted: 215 14% 75%
     * Usage: style={{ color: "hsl(var(--text-muted))" }}
     */
    muted: '#b4bcc9',        // Slate 300
  },

  /**
   * ACCENT - Orange highlight for special emphasis
   * Used sparingly for: logomark accent, urgent CTAs
   */
  accent: {
    orange: '#F97316',       // Orange-500 - logomark, special highlights
  },
} as const;

// =============================================================================
// TEXT HIERARCHY USAGE GUIDE
// =============================================================================

/**
 * TEXT USAGE PATTERNS
 *
 * | Level     | Use Case                                    | CSS Usage                                        |
 * |-----------|---------------------------------------------|--------------------------------------------------|
 * | Primary   | Headings, important body text               | className="text-foreground" or color="#1A1A1A"   |
 * | Secondary | Subheadlines, descriptions, explanatory     | style={{ color: "hsl(var(--text-secondary))" }} |
 * | Tertiary  | Eyebrow labels, hints, metadata, timestamps | style={{ color: "hsl(var(--text-tertiary))" }}  |
 * | Muted     | Disabled states, placeholders, trade-offs   | style={{ color: "hsl(var(--text-muted))" }}     |
 *
 * ANTI-PATTERNS TO AVOID:
 * - Using opacity hacks like `opacity: 0.6` on black text
 * - Hardcoded hex values like `#6a9ed4` or `#7a9fcf`
 * - Mixing tailwind grays (gray-400, gray-500) with slate tokens
 */

export const TEXT_USAGE = {
  eyebrow: 'style={{ color: "hsl(var(--text-tertiary))" }}',
  subheadline: 'style={{ color: "hsl(var(--text-secondary))" }}',
  bodyText: 'className="text-muted-foreground"',
  quietLabel: 'style={{ color: "hsl(var(--text-muted))" }}',
} as const;

// =============================================================================
// ICON LIBRARY - Phosphor Icons
// =============================================================================

/**
 * PHOSPHOR ICONS
 * We use @phosphor-icons/react for all iconography.
 * Install: npm install @phosphor-icons/react
 *
 * Weight conventions:
 * - "regular" (default): Standard icons for most UI elements
 * - "bold": Emphasized icons, scroll indicators, important actions
 * - "fill": Filled variants for active/selected states
 */

export const ICONS = {
  /**
   * Navigation & Wayfinding
   */
  navigation: [
    'ArrowRight',    // CTAs, forward navigation
    'ArrowLeft',     // Back navigation, breadcrumbs
    'CaretDown',     // Scroll indicators, dropdowns
  ],

  /**
   * Domain/Business Icons
   */
  domain: [
    'House',         // Home, property
    'Buildings',     // WEG, multi-unit properties
  ],

  /**
   * Actions & Features
   */
  actions: [
    'CheckCircle',   // Feature lists, success states
    'EnvelopeSimple', // Email, contact
    'MapPin',        // Location, address
  ],

  /**
   * Content & Data
   */
  content: [
    'FileText',      // Documents, reports
    'ChartBar',      // Analytics, finances
  ],

  /**
   * Concepts & Abstract
   */
  concepts: [
    'Brain',         // AI, intelligence
    'Lock',          // Security, privacy
    'Lightbulb',     // Ideas, insights
    'Gear',          // Settings, configuration
    'Path',          // Journey, roadmap
    'Rocket',        // Launch, future
    'Layout',        // Dashboard, overview
  ],
} as const;

/**
 * Icon Usage Example:
 *
 * import { CheckCircle } from "@phosphor-icons/react";
 *
 * <CheckCircle
 *   className="w-4 h-4"
 *   style={{ color: COLORS.teal.primary }}
 *   weight="regular"
 * />
 */

// =============================================================================
// LOGO COMPONENT
// =============================================================================

/**
 * WEGORA LOGO
 * Component: src/components/ui/WegoraLogo.tsx
 *
 * The logo adapts to context (WEG vs Eigentümer) via the dot color.
 */

export const LOGO = {
  /**
   * Variants
   */
  variants: {
    horizontal: 'Default - icon + text side by side',
    stacked: 'Vertical layout - icon above text',
    iconOnly: 'Just the house logomark',
  },

  /**
   * Color Modes
   */
  colorModes: {
    default: 'Full color (blue logo, dark text)',
    monochrome: 'Uses currentColor (inherits parent)',
    white: 'White on dark backgrounds',
  },

  /**
   * Sizes
   */
  sizes: {
    sm: 'h-6 - Footer, small contexts',
    md: 'h-8 md:h-9 - Header navigation (default)',
    lg: 'h-14 - Hero sections',
    xl: 'h-20 - Landing pages',
  },

  /**
   * Dot Context
   * The dot after "Wegora" indicates the current context:
   */
  dotContext: {
    weg: '#2463eb (blue) - WEG/community pages',
    eigentuemer: '#0d9488 (teal) - Individual owner pages',
    none: 'No dot - neutral contexts',
  },

  /**
   * Dot Weight
   * Contextual scaling for perceptual balance.
   * The dot must feel like a confident full stop, not incidental punctuation.
   */
  dotWeight: {
    compact: 'Base size - footers, small UI contexts',
    hero: '120% scale - header navigation, hero sections, brand statements',
  },
} as const;

/**
 * Logo Usage Examples:
 *
 * // Header navigation - 20% larger dot for visual presence
 * <WegoraLogo size="md" dotContext="weg" dotWeight="hero" onClick={() => navigate('/')} />
 *
 * // Eigentümer page hero
 * <WegoraLogo size="lg" dotContext="eigentuemer" dotWeight="hero" />
 *
 * // Footer (monochrome on dark, compact dot)
 * <WegoraLogo variant="stacked" colorMode="white" size="sm" dotContext="none" />
 */

// =============================================================================
// CARD STATES
// =============================================================================

/**
 * SERVICE CARD STATES
 * Used in AngebotWEGPage and AngebotEigentuemerPage for service cards
 */

export const CARD_STATES = {
  /**
   * Active/Coming Soon state - full color
   */
  active: {
    illustrationColor: COLORS.teal.primary, // or COLORS.blue.primary for WEG
    badgeClasses: 'bg-[#ccfbf1] text-[#14B8A6] border-[#99f6e4]',
    checkIconColor: COLORS.teal.primary,
  },

  /**
   * Planned/Geplant state - desaturated
   */
  planned: {
    illustrationColor: 'hsl(215, 14%, 75%)', // matches --text-muted
    badgeClasses: 'bg-muted text-muted-foreground border-border',
    checkIconColor: 'hsl(215, 14%, 75%)',
    contentOpacity: 'opacity-85',
    listOpacity: 'opacity-80',
  },
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const TYPOGRAPHY = {
  /**
   * Hero Headlines
   * Large, impactful headlines for hero sections
   */
  heroHeadline: {
    className: 'text-[clamp(36px,4.5vw,64px)] font-semibold tracking-tight',
    style: { lineHeight: '1.15', fontWeight: 600, color: '#1A1A1A' },
  },

  /**
   * Section Headlines
   */
  sectionHeadline: {
    className: 'text-2xl sm:text-3xl lg:text-4xl font-bold',
  },

  /**
   * Eyebrow Labels
   * Small uppercase labels above headlines
   */
  eyebrow: {
    className: 'text-[clamp(12px,1.2vw,14px)] font-medium',
    style: { color: 'hsl(var(--text-tertiary))' },
  },

  /**
   * Subheadlines
   */
  subheadline: {
    className: 'text-[clamp(18px,2vw,22px)] leading-[1.6]',
    style: { color: 'hsl(var(--text-secondary))' },
  },
} as const;

// =============================================================================
// DIVIDERS
// =============================================================================

/**
 * DIVIDERS
 * Subtle horizontal lines used to separate content sections
 * Provides visual breathing room and rhythm
 */

export const DIVIDERS = {
  /**
   * Section Divider - Short centered line
   * Used between eyebrow and headline, or before section titles
   */
  section: {
    className: 'w-8 h-px mx-auto',
    style: { background: '#CBD5E1' },
    usage: `<div className="w-8 h-px mx-auto mb-8" style={{ background: '#CBD5E1' }} />`,
  },

  /**
   * Content Divider - Medium width
   * Used in VisionPage between philosophical statements
   */
  content: {
    className: 'w-12 h-px mx-auto',
    style: { background: 'hsl(220 15% 85%)' },
    usage: `<div className="w-12 h-px mx-auto" style={{ background: "hsl(220 15% 85%)" }} />`,
  },

  /**
   * Full Width Border - Footer/section separators
   * Used at top of footer, between major sections
   */
  fullWidth: {
    className: 'border-t border-muted-foreground/10',
    usage: `<div className="pt-8 border-t border-muted-foreground/10">`,
  },

  /**
   * Muted Border - Subtle section break
   */
  muted: {
    className: 'border-t border-muted',
    usage: `<div className="pt-8 border-t border-muted">`,
  },
} as const;

/**
 * Divider Usage Examples:
 *
 * // Eyebrow with divider
 * <div className="mb-8">
 *   <p className="text-[12px] font-medium tracking-[0.08em] uppercase mb-3" style={{ color: '#6B7A99' }}>
 *     Unser Ansatz
 *   </p>
 *   <div className="w-8 h-px mx-auto" style={{ background: '#CBD5E1' }} />
 * </div>
 *
 * // Divider before section title
 * <div className="w-8 h-px mx-auto mb-8" style={{ background: '#CBD5E1' }} />
 * <h2 className="text-2xl font-bold">Section Title</h2>
 */

// =============================================================================
// CHIPS (Platform Badges / Tags)
// =============================================================================

/**
 * CHIPS
 * Small inline badges indicating platform availability, status, or categories
 */

export const CHIPS = {
  /**
   * Platform Chips - Active state
   * Shows which platforms a service is available on
   */
  platform: {
    weg: {
      className: 'text-[10px] px-2 py-0.5 bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20',
      usage: `<Badge variant="outline" className="text-[10px] px-2 py-0.5 bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20">
  Mobile App
</Badge>`,
    },
    eigentuemer: {
      className: 'text-[10px] px-2 py-0.5 bg-[#14B8A6]/10 text-teal-500 border-[#14B8A6]/20',
      usage: `<Badge variant="outline" className="text-[10px] px-2 py-0.5 bg-[#14B8A6]/10 text-teal-500 border-[#14B8A6]/20">
  Web-App
</Badge>`,
    },
  },

  /**
   * Platform Chips - Disabled/Planned state
   * For services not yet available
   */
  platformDisabled: {
    className: 'text-[10px] px-2 py-0.5 bg-muted text-muted-foreground border-border',
    usage: `<Badge variant="outline" className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground border-border">
  Web-App
</Badge>`,
  },

  /**
   * Status Chips
   * Service availability status
   */
  status: {
    comingSoon: {
      className: 'text-[10px] px-3 py-1 bg-[#ccfbf1] text-[#14B8A6] border-[#99f6e4] shadow-sm',
      label: 'Coming Soon',
    },
    planned: {
      className: 'text-[10px] px-3 py-1 bg-muted text-muted-foreground border-border',
      label: 'Geplant',
    },
    beta: {
      className: 'text-[10px] px-3 py-1 bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20',
      label: 'Beta',
    },
  },

  /**
   * Comparison Chips
   * Large rounded badges for comparison sections
   */
  comparison: {
    problem: {
      className: 'px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full',
      style: { backgroundColor: '#F97316', color: '#FFFFFF' },
      label: 'Bestehende Lösungen',
    },
    solution: {
      className: 'px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full',
      style: { backgroundColor: '#3182CE', color: '#FFFFFF' },
      label: 'Wegora Ansatz',
    },
  },
} as const;

/**
 * Chip Usage Examples:
 *
 * // Service card with platform chips
 * <div className="flex flex-wrap gap-1.5 justify-center mb-3">
 *   {service.availability?.map((platform, i) => (
 *     <Badge
 *       key={i}
 *       variant="outline"
 *       className={service.badge === "Geplant"
 *         ? CHIPS.platformDisabled.className
 *         : CHIPS.platform.eigentuemer.className
 *       }
 *     >
 *       {platform}
 *     </Badge>
 *   ))}
 * </div>
 *
 * // Status badge at top of card
 * <Badge variant="outline" className={CHIPS.status.comingSoon.className}>
 *   {CHIPS.status.comingSoon.label}
 * </Badge>
 */

// =============================================================================
// CTA (Call-to-Action) PATTERNS
// =============================================================================

/**
 * CTA BUTTONS
 * Consistent button patterns for different contexts and actions
 */

export const CTA = {
  /**
   * Primary CTA - Main action buttons
   * Full brand color background
   */
  primary: {
    weg: {
      className: 'bg-[#2463eb] hover:bg-[#1d4ed8] text-white',
      usage: `<Button className="bg-[#2463eb] hover:bg-[#1d4ed8] text-white">
  Jetzt registrieren
</Button>`,
    },
    eigentuemer: {
      className: 'bg-teal-500 hover:bg-teal-600 text-white',
      usage: `<Button className="bg-teal-500 hover:bg-teal-600 text-white">
  Zum Service
</Button>`,
    },
  },

  /**
   * Secondary CTA - Outlined buttons
   * For less prominent actions
   */
  secondary: {
    weg: {
      className: 'border-[#2463eb] text-[#2463eb] hover:bg-[#2463eb]/10',
      usage: `<Button variant="outline" className="border-[#2463eb] text-[#2463eb] hover:bg-[#2463eb]/10">
  Mehr erfahren
</Button>`,
    },
    eigentuemer: {
      className: 'border-teal-500 text-teal-500 hover:bg-teal-500/10',
      usage: `<Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-500/10">
  Zum Service
</Button>`,
    },
  },

  /**
   * Muted CTA - Semi-transparent for softer appearance
   */
  muted: {
    weg: {
      className: 'bg-[#2463eb]/90 hover:bg-[#2463eb] text-white',
      usage: `<Button className="px-5 py-2.5 h-auto bg-[#2463eb]/90 hover:bg-[#2463eb] text-white text-[13px] font-medium">
  <Buildings className="mr-1.5 h-4 w-4" weight="duotone" />
  WEG-Module
</Button>`,
    },
    eigentuemer: {
      className: 'bg-teal-500/90 hover:bg-teal-500 text-white',
      usage: `<Button className="px-5 py-2.5 h-auto bg-teal-500/90 hover:bg-teal-500 text-white text-[13px] font-medium">
  <House className="mr-1.5 h-4 w-4" weight="duotone" />
  Eigentümer-Module
</Button>`,
    },
  },

  /**
   * Text Link CTA - Inline text links with arrow
   * For card footers and subtle navigation
   */
  textLink: {
    weg: {
      className: 'text-[#2463eb] hover:text-[#1d4ed8] font-medium inline-flex items-center group',
      usage: `<Link to="/angebot-weg" className="text-[#2463eb] hover:text-[#1d4ed8] font-medium inline-flex items-center group">
  Versammlungen, Finanzen, Dokumente
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>`,
    },
    eigentuemer: {
      className: 'text-teal-600 hover:text-teal-700 font-medium inline-flex items-center group',
      usage: `<Link to="/angebot-eigentuemer" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center group">
  Nebenkosten, Dokumente, Finanzen
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>`,
    },
  },

  /**
   * Header CTAs
   * Specific sizes for navigation header
   */
  header: {
    register: {
      className: 'h-9 text-sm px-6 bg-[#2463eb] hover:bg-[#1d4ed8] text-white',
      usage: `<Button size="sm" className="h-9 text-sm px-6 bg-[#2463eb] hover:bg-[#1d4ed8] text-white">
  Jetzt registrieren
</Button>`,
    },
    login: {
      className: 'h-9 text-sm px-4 gap-2',
      usage: `<Button variant="outline" size="sm" className="h-9 text-sm px-4 gap-2">
  <UserCircle className="h-5 w-5" />
  <span>Login</span>
</Button>`,
    },
  },

  /**
   * Footer CTA
   * Contact button in footer
   */
  footer: {
    className: 'w-full bg-[#2463eb] hover:bg-[#1d4ed8] text-white',
    usage: `<Button size="sm" className="w-full bg-[#2463eb] hover:bg-[#1d4ed8] text-white">
  <EnvelopeSimple className="mr-2 h-4 w-4" />
  Kontakt aufnehmen
</Button>`,
  },
} as const;

/**
 * CTA Layout Patterns:
 *
 * // Dual CTA Section (WEG + Eigentümer side by side)
 * <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
 *   <Link to="/angebot-weg">
 *     <Button className={CTA.muted.weg.className}>
 *       <Buildings className="mr-1.5 h-4 w-4" weight="duotone" />
 *       WEG-Module
 *     </Button>
 *   </Link>
 *   <Link to="/angebot-eigentuemer">
 *     <Button className={CTA.muted.eigentuemer.className}>
 *       <House className="mr-1.5 h-4 w-4" weight="duotone" />
 *       Eigentümer-Module
 *     </Button>
 *   </Link>
 * </div>
 *
 * // Card Footer with Text Link
 * <div className="mt-auto">
 *   <Link to="/angebot-weg" className={CTA.textLink.weg.className}>
 *     Learn more
 *     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
 *   </Link>
 * </div>
 */

// =============================================================================
// ILLUSTRATION GUIDELINES
// =============================================================================

/**
 * ILLUSTRATION SYSTEM
 *
 * All illustrations use CSS custom properties defined in index.css
 * This ensures consistency across all diagrams and service illustrations.
 *
 * Core Principles:
 * 1. Context-aware coloring (WEG = blue, Eigentümer = teal)
 * 2. Consistent stroke widths (3 levels only)
 * 3. Standardized opacity levels for depth
 * 4. Unified border radius tokens
 * 5. White fill for main shapes, color for accents
 */

export const ILLUSTRATIONS = {
  // ===========================================================================
  // CSS VARIABLE TOKENS (defined in index.css)
  // ===========================================================================

  /**
   * COLOR TOKENS
   * Use CSS variables for automatic context switching
   */
  colors: {
    /**
     * Area-specific accent colors
     * These switch automatically based on data-area attribute
     */
    areaAccent: 'hsl(var(--illustration-area-accent))',
    areaSecondary: 'hsl(var(--illustration-area-secondary))',

    /**
     * Fixed context colors (use when you need explicit control)
     */
    weg: 'hsl(var(--illustration-weg))',           // 214 60% 58% - Soft Blue
    owner: 'hsl(var(--illustration-owner))',       // 174 72% 40% - Teal (#14B8A6)

    /**
     * Semantic colors (for UI states, NOT for area identification)
     */
    success: 'hsl(var(--illustration-success))',   // #10B981 - Green checkmarks
    warning: 'hsl(var(--illustration-warning))',   // #F97316 - Orange alerts
    danger: 'hsl(var(--illustration-danger))',     // #E53E3E - Red errors
    info: 'hsl(var(--illustration-info))',         // #3182CE - Info blue
    purple: 'hsl(var(--illustration-purple))',     // #8B5CF6 - Vorgänge accent

    /**
     * Neutral colors
     */
    ink: 'hsl(var(--illustration-ink))',           // Foreground color
    inkMuted: 'hsl(var(--illustration-ink-muted))', // Muted text
    surface: 'hsl(var(--illustration-surface))',   // Background
    border: 'hsl(var(--illustration-border))',     // Border color
  },

  /**
   * STROKE WIDTHS
   * Only use these 3 levels for consistency
   */
  strokes: {
    thin: 'var(--illustration-stroke-thin)',       // 1.5 - Detail lines, secondary strokes
    default: 'var(--illustration-stroke-default)', // 2 - Primary strokes, main outlines
    bold: 'var(--illustration-stroke-bold)',       // 3 - Emphasis, connection lines
  },

  /**
   * BORDER RADIUS
   * Consistent rounding for illustration elements
   */
  radius: {
    sm: 'var(--illustration-radius-sm)',           // 2 - Small elements, badges
    md: 'var(--illustration-radius-md)',           // 4 - Cards, buttons
    lg: 'var(--illustration-radius-lg)',           // 8 - Large containers
  },

  /**
   * OPACITY LEVELS
   * For creating depth and visual hierarchy
   */
  opacity: {
    subtle: 'var(--illustration-opacity-subtle)',   // 0.1 - Background decorations
    light: 'var(--illustration-opacity-light)',     // 0.2 - Secondary elements
    medium: 'var(--illustration-opacity-medium)',   // 0.4 - Supporting elements
    strong: 'var(--illustration-opacity-strong)',   // 0.6 - Prominent decorations
  },

  // ===========================================================================
  // COMPONENT PATTERNS
  // ===========================================================================

  /**
   * SERVICE ILLUSTRATION COMPONENT
   * Standard interface for all service illustrations
   */
  componentInterface: `interface ServiceIllustrationProps {
  className?: string;
  color?: string;  // Override color (for "Geplant" state)
}

export function ServiceXxxIllustration({ className = "", color }: ServiceIllustrationProps) {
  // Use passed color or fall back to area-accent (auto-switches based on data-area)
  const mainColor = color || "hsl(var(--illustration-area-accent))";

  return (
    <div className={\`w-full h-full flex items-center justify-center \${className}\`}>
      <svg viewBox="0 0 200 200" className="w-full h-full max-w-xs max-h-xs" fill="none">
        {/* Illustration content */}
      </svg>
    </div>
  );
}`,

  /**
   * SVG CONTAINER PATTERN
   */
  svgContainer: {
    viewBox: '0 0 200 200',
    className: 'w-full h-full max-w-xs max-h-xs',
    fill: 'none',
  },

  // ===========================================================================
  // SHAPE PATTERNS
  // ===========================================================================

  /**
   * CARD/DOCUMENT SHAPE
   * White fill with colored stroke
   */
  card: `<rect
  x="-40" y="-50" width="80" height="100" rx="8"
  fill="#FFFFFF"
  stroke={mainColor}
  strokeWidth="var(--illustration-stroke-default)"
/>`,

  /**
   * CIRCLE NODE
   * For service icons in flow diagrams
   */
  circleNode: {
    outer: `<circle cx="0" cy="0" r="60" fill={color} opacity="0.08" />`,
    inner: `<circle cx="0" cy="0" r="54" fill={\`\${color} / 0.03\`} stroke={color} strokeWidth="var(--illustration-stroke-default)" />`,
  },

  /**
   * CENTRAL HUB
   * Wegora house icon pattern
   */
  centralHub: `<g transform="translate(CENTER_X, CENTER_Y)">
  {/* Circle background */}
  <circle cx="0" cy="0" r="67" fill={\`\${color} / 0.04\`} stroke={color} strokeWidth="var(--illustration-stroke-default)" />

  {/* Wegora house icon - new logo style */}
  <g transform="translate(-25, -41) scale(2.8)">
    {/* House Base */}
    <rect x="2" y="12" width="14" height="12" rx="2" fill={color}/>
    {/* Roof */}
    <path d="M1 13 L9 5 L17 13 L15 13 L9 7 L3 13 Z" fill={color}/>
  </g>
</g>`,

  /**
   * CONTENT LINES
   * Placeholder lines for document/card content
   */
  contentLines: `{/* Content lines with decreasing widths */}
<rect x="-15" y="-20" width="30" height="4" rx="2" fill={color} opacity="0.3" />
<rect x="-15" y="-12" width="25" height="3" rx="1.5" fill={color} opacity="var(--illustration-opacity-light)" />
<rect x="-15" y="-6" width="28" height="3" rx="1.5" fill={color} opacity="var(--illustration-opacity-light)" />
<rect x="-15" y="0" width="22" height="3" rx="1.5" fill={color} opacity="var(--illustration-opacity-light)" />`,

  /**
   * SUCCESS INDICATOR
   * Checkmark in circle
   */
  successIndicator: `<g transform="translate(X, Y)">
  <circle cx="0" cy="0" r="15" fill={successColor} opacity="var(--illustration-opacity-light)" />
  <circle cx="0" cy="0" r="10" fill={successColor} />
  <path d="M-4,0 L-1,3 L5,-3" stroke="#FFFFFF" strokeWidth="var(--illustration-stroke-default)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
</g>`,

  /**
   * BAR CHART
   * Financial/analytics visualization
   */
  barChart: `<g transform="scale(2.25)">
  <rect x="-10.4" y="-2.2" width="4" height="8" rx="0.8" fill={color} />
  <rect x="-4.8" y="-6.4" width="4" height="12" rx="0.8" fill={color} opacity="0.8" />
  <rect x="0.8" y="-4.8" width="4" height="10.4" rx="0.8" fill={color} opacity="0.9" />
  <rect x="6.4" y="-8" width="4" height="13.6" rx="0.8" fill={color} />
</g>`,

  /**
   * FOLDER ICON
   * Document/file container
   */
  folderIcon: `<g transform="scale(2.25)">
  <path d="M-9,-3 L-9,7 Q-9,8 -8,8 L8,8 Q9,8 9,7 L9,-3 Q9,-4 8,-4 L2,-4 L0.5,-6.5 L-7,-6.5 Q-9,-6.5 -9,-5 Z" fill="#FFFFFF" stroke={color} strokeWidth="1.2" />
  {/* Inner lines */}
  <rect x="-6" y="-1" width="12" height="1.1" rx="0.5" fill={color} opacity="var(--illustration-opacity-medium)" />
  <rect x="-6" y="2" width="8" height="1.1" rx="0.5" fill={color} opacity="var(--illustration-opacity-medium)" />
  <rect x="-6" y="5" width="10" height="1.1" rx="0.5" fill={color} opacity="var(--illustration-opacity-medium)" />
</g>`,

  /**
   * CLIPBOARD/TASK ICON
   * For Vorgänge/tasks
   */
  clipboardIcon: `<g transform="scale(2.25)">
  {/* Clipboard base */}
  <rect x="-7" y="-8" width="14" height="18" rx="1.5" fill="#FFFFFF" stroke={color} strokeWidth="1.3" />
  {/* Clipboard clip */}
  <rect x="-3.5" y="-10" width="7" height="4" rx="1" fill={color} />
  {/* Checklist lines */}
  <rect x="-4" y="-3" width="2" height="2" rx="0.4" fill={color} />
  <rect x="0" y="-3" width="6" height="1.5" rx="0.5" fill={color} opacity="0.5" />
  <rect x="-4" y="1" width="2" height="2" rx="0.4" fill={color} />
  <rect x="0" y="1" width="5" height="1.5" rx="0.5" fill={color} opacity="0.5" />
  <rect x="-4" y="5" width="2" height="2" rx="0.4" fill={color} />
  <rect x="0" y="5" width="4" height="1.5" rx="0.5" fill={color} opacity="0.5" />
</g>`,

  /**
   * PEOPLE/MEETING ICON
   * For Versammlungen
   */
  peopleIcon: `<g transform="scale(2.25)">
  {/* Left person */}
  <circle cx="-5.6" cy="-3.2" r="2.8" fill="none" stroke={color} strokeWidth="1.3" />
  <path d="M-8.8,3.2 Q-5.6,0.8 -2.4,3.2" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
  {/* Center person (slightly forward) */}
  <circle cx="0" cy="-4" r="3.2" fill="none" stroke={color} strokeWidth="1.3" />
  <path d="M-4,4 Q0,1.6 4,4" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
  {/* Right person */}
  <circle cx="5.6" cy="-3.2" r="2.8" fill="none" stroke={color} strokeWidth="1.3" />
  <path d="M2.4,3.2 Q5.6,0.8 8.8,3.2" stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round" />
</g>`,

  // ===========================================================================
  // FLOW DIAGRAM PATTERNS
  // ===========================================================================

  /**
   * CONNECTION LINES
   * Bézier curves for flow diagrams
   */
  connectionLines: {
    style: `opacity="0.5" stroke={color} strokeWidth="var(--illustration-stroke-default)" fill="none" strokeLinecap="round" strokeLinejoin="round"`,
    bezierCurve: `<motion.path
  d="M START_X START_Y C CONTROL1_X CONTROL1_Y, CONTROL2_X CONTROL2_Y, END_X END_Y"
  initial={{ pathLength: 0 }}
  animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
  transition={{ duration: 0.4, ease: "easeOut", delay: DELAY }}
/>`,
  },

  /**
   * SERVICE LABEL
   * Text label below service icons
   */
  serviceLabel: `<text
  x="0"
  y="90"
  textAnchor="middle"
  fill={color}
  fontSize="20"
  fontWeight="600"
>
  {label}
</text>`,

  /**
   * ANIMATION PATTERN
   * Framer Motion for flow diagrams
   */
  animation: {
    fadeIn: `initial={{ opacity: 0 }}
animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
transition={{ duration: 0.3, ease: "easeOut", delay: DELAY }}`,
    pathDraw: `initial={{ pathLength: 0 }}
animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
transition={{ duration: 0.4, ease: "easeOut", delay: DELAY }}`,
  },

  /**
   * REDUCED MOTION
   * Always include this style block in animated SVGs
   */
  reducedMotion: `<style>{\`
  @media (prefers-reduced-motion: reduce) {
    .illustration-class * {
      animation: none !important;
      transition: none !important;
    }
  }
\`}</style>`,

  // ===========================================================================
  // GRAYED OUT / PLANNED STATE
  // ===========================================================================

  /**
   * PLANNED/GEPLANT STATE
   * Pass color prop to desaturate illustrations
   */
  plannedState: {
    color: 'hsl(215, 14%, 75%)',  // matches --text-muted
    usage: `<ServiceIllustration
  className="w-full max-w-[180px] h-auto"
  color={service.badge === "Geplant" ? "hsl(215, 14%, 75%)" : service.color}
/>`,
  },
} as const;

/**
 * ILLUSTRATION CHECKLIST
 *
 * When creating a new illustration, ensure:
 *
 * 1. [ ] Use CSS variables for colors (not hardcoded hex)
 * 2. [ ] Accept `color` prop for override (Geplant state)
 * 3. [ ] Use only 3 stroke widths: thin (1.5), default (2), bold (3)
 * 4. [ ] Use opacity tokens for depth hierarchy
 * 5. [ ] White (#FFFFFF) fill for main shapes
 * 6. [ ] Consistent viewBox (usually 200x200 for service icons)
 * 7. [ ] Include className prop for sizing
 * 8. [ ] Wrap in flex container for centering
 * 9. [ ] Use transform groups for positioning/scaling
 * 10. [ ] Include reduced-motion media query for animations
 *
 * File Location: src/components/hub/illustrations/
 * Naming: ServiceXxxIllustration.tsx or XxxFlowDiagram.tsx
 */

/**
 * COMPLETE SERVICE ILLUSTRATION TEMPLATE
 *
 * Copy this template when creating new service illustrations:
 */
export const ILLUSTRATION_TEMPLATE = `interface ServiceXxxIllustrationProps {
  className?: string;
  color?: string;
}

export function ServiceXxxIllustration({ className = "", color }: ServiceXxxIllustrationProps) {
  const mainColor = color || "hsl(var(--illustration-area-accent))";

  return (
    <div className={\`w-full h-full flex items-center justify-center \${className}\`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-xs max-h-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main container/card */}
        <g transform="translate(100, 100)">
          <rect
            x="-40"
            y="-50"
            width="80"
            height="100"
            rx="8"
            fill="#FFFFFF"
            stroke={mainColor}
            strokeWidth="var(--illustration-stroke-default)"
          />

          {/* Content placeholder lines */}
          <rect x="-32" y="-42" width="64" height="20" rx="4" fill={mainColor} opacity="var(--illustration-opacity-subtle)" />
          <rect x="-25" y="-38" width="50" height="4" rx="2" fill={mainColor} opacity="0.3" />
          <rect x="-25" y="-30" width="35" height="4" rx="2" fill={mainColor} opacity="0.3" />
        </g>

        {/* Success indicator (optional) */}
        <g transform="translate(160, 60)">
          <circle cx="0" cy="0" r="15" fill={color ? mainColor : "hsl(var(--illustration-success))"} opacity="var(--illustration-opacity-light)" />
          <circle cx="0" cy="0" r="10" fill={color ? mainColor : "hsl(var(--illustration-success))"} />
          <path d="M-4,0 L-1,3 L5,-3" stroke="#FFFFFF" strokeWidth="var(--illustration-stroke-default)" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}`;

/**
 * FLOW DIAGRAM TEMPLATE
 *
 * For creating hub/service flow diagrams with animations:
 */
export const FLOW_DIAGRAM_TEMPLATE = `import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface XxxFlowDiagramProps {
  className?: string;
}

export function XxxFlowDiagram({ className = "" }: XxxFlowDiagramProps) {
  const [isVisible, setIsVisible] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated.current) {
        hasAnimated.current = true;
        setTimeout(() => setIsVisible(true), 200);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color token
  const color = "hsl(var(--illustration-weg))"; // or --illustration-owner

  return (
    <div ref={svgRef} className={\`w-full h-full flex items-center justify-center \${className}\`}>
      <svg viewBox="-50 50 1100 520" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <style>{\`
          @media (prefers-reduced-motion: reduce) {
            .flow-diagram * { animation: none !important; transition: none !important; }
          }
        \`}</style>

        {/* Connection lines */}
        <g opacity="0.5" stroke={color} strokeWidth="var(--illustration-stroke-default)" fill="none">
          <motion.path
            d="M 500 200 C 500 255, 350 245, 350 306"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          />
        </g>

        {/* Central hub */}
        <g transform="translate(500, 125)">
          <circle cx="0" cy="0" r="67" fill={\`\${color} / 0.04\`} stroke={color} strokeWidth="var(--illustration-stroke-default)" />
          {/* Add Wegora house icon here */}
        </g>

        {/* Service nodes */}
        <motion.g
          transform="translate(350, 360)"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        >
          <circle cx="0" cy="0" r="60" fill={color} opacity="0.08" />
          <circle cx="0" cy="0" r="54" fill={\`\${color} / 0.03\`} stroke={color} strokeWidth="var(--illustration-stroke-default)" />
          {/* Add icon content here */}
          <text x="0" y="90" textAnchor="middle" fill={color} fontSize="20" fontWeight="600">
            Service Name
          </text>
        </motion.g>
      </svg>
    </div>
  );
}`;
