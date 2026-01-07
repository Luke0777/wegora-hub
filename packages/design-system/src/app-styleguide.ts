/**
 * Wegora App Style Guide
 * Design tokens and guidelines for cockpit/mobile app components
 *
 * This file documents the design system used across the cockpit application
 * (mobile apps and web app). The cockpit is mode-aware, switching between
 * WEG (Gemeinschaft) and Eigentümer (Owner) contexts.
 */

// =============================================================================
// COLOR SYSTEM
// =============================================================================

export const COLORS = {
  /**
   * BLUE - WEG (Wohnungseigentümergemeinschaft) mode
   * Used for: Community management, shared property contexts
   */
  blue: {
    primary: '#2463eb',           // Primary brand blue
    hover: '#1d4ed8',             // Hover state (blue-700)
    light: '#3b82f6',             // Lighter variant (blue-500)
    background: 'bg-[#2463eb]/10', // Light background tint
    backgroundSubtle: 'bg-[#2463eb]/5',
    border: 'border-[#2463eb]/20',
    text: 'text-[#2463eb]',
  },

  /**
   * TEAL - Eigentümer (Owner) mode
   * Used for: Individual property management, personal ownership contexts
   */
  teal: {
    primary: '#14B8A6',           // Teal-500
    dark: '#0d9488',              // Teal-600 (darker states)
    background: {
      solid: 'bg-teal-50',
      semiTransparent: 'bg-teal-50/80',
      subtle: 'bg-teal-50/30',
      strong: 'bg-teal-100',
    },
    border: {
      light: 'border-teal-200',
      medium: 'border-teal-300',
    },
    text: {
      primary: 'text-teal-700',
      secondary: 'text-teal-800',
      strong: 'text-teal-900',
    },
  },

  /**
   * STATUS COLORS - Semantic feedback colors
   */
  status: {
    /**
     * Orange - Warning, "Offen" (Open), action required
     */
    warning: {
      background: 'bg-orange-50',
      backgroundStrong: 'bg-orange-100',
      text: 'text-orange-700',
      textLight: 'text-orange-600',
      border: 'border-orange-200',
      borderStrong: 'border-orange-500',
      ping: 'bg-orange-400',       // For pinging animations
      hex: '#F97316',
    },

    /**
     * Green - Success, "Abgeschlossen" (Completed)
     */
    success: {
      background: 'bg-green-50',
      backgroundStrong: 'bg-green-100',
      text: 'text-green-700',
      textLight: 'text-green-600',
      hex: '#10B981',
    },

    /**
     * Red - Danger, over-budget, errors
     */
    danger: {
      background: 'bg-red-50',
      text: 'text-red-600',
      textStrong: 'text-red-700',
      hex: '#dc2626',
    },

    /**
     * Purple - Document types, special categories
     */
    info: {
      background: 'bg-purple-100',
      text: 'text-purple-700',
      border: 'border-purple-200',
      hex: '#8B5CF6',
    },

    /**
     * Rose - Cost/Expense indicators (alternative red)
     */
    expense: {
      background: 'bg-rose-50',
      backgroundStrong: 'bg-rose-100',
      text: 'text-rose-600',
      textStrong: 'text-rose-700',
      border: 'border-rose-200',
      borderStrong: 'border-rose-300',
    },
  },

  /**
   * NEUTRAL - Backgrounds and secondary elements
   */
  neutral: {
    background: 'bg-background',
    muted: 'bg-muted',
    mutedSubtle: 'bg-muted/50',
    mutedVerySubtle: 'bg-muted/30',
    foreground: 'text-foreground',
    mutedForeground: 'text-muted-foreground',
  },
} as const;

// =============================================================================
// STATUS PATTERNS
// =============================================================================

/**
 * STATUS BADGE COLORS
 * Use these for consistent status representation across the app
 */
export const STATUS_COLORS = {
  offen: {
    className: 'bg-orange-100 text-orange-700 border-orange-200',
    label: 'Offen',
  },
  in_bearbeitung: {
    className: 'bg-[#2463eb]/10 text-[#2463eb] border-[#2463eb]/20',
    label: 'In Bearbeitung',
  },
  abgeschlossen: {
    className: 'bg-green-100 text-green-700 border-green-200',
    label: 'Abgeschlossen',
  },
} as const;

/**
 * Helper function for status colors
 *
 * Usage:
 * const colorClass = getStatusColor('offen');
 * // Returns: 'bg-orange-100 text-orange-700 border-orange-200'
 */
export function getStatusColor(status: keyof typeof STATUS_COLORS): string {
  return STATUS_COLORS[status]?.className ?? 'bg-muted text-muted-foreground';
}

export function getStatusLabel(status: keyof typeof STATUS_COLORS): string {
  return STATUS_COLORS[status]?.label ?? status;
}

// =============================================================================
// BUDGET/PROGRESS COLORS
// =============================================================================

/**
 * BUDGET PROGRESS COLORS
 * Used in progress bars for budget visualization
 */
export const BUDGET_COLORS = {
  healthy: 'bg-green-500',      // 0-80% of budget
  warning: 'bg-orange-500',     // 80-100% of budget
  danger: 'bg-red-500',         // Over 100% of budget
} as const;

/**
 * Get budget color based on percentage
 *
 * Usage:
 * const colorClass = getBudgetColor(85);
 * // Returns: 'bg-orange-500'
 */
export function getBudgetColor(percentage: number): string {
  if (percentage > 100) return BUDGET_COLORS.danger;
  if (percentage > 80) return BUDGET_COLORS.warning;
  return BUDGET_COLORS.healthy;
}

// =============================================================================
// MODE-AWARE STYLING
// =============================================================================

/**
 * MODE GRADIENTS
 * Background gradients based on current mode
 */
export const MODE_GRADIENTS = {
  weg: 'from-background to-muted/30',
  eigentuemer: 'from-teal-50/30 to-background',
} as const;

/**
 * MODE ACCENT COLORS
 * Primary accent color based on mode
 */
export const MODE_ACCENTS = {
  weg: {
    primary: '#2463eb',
    background: 'bg-[#2463eb]/10',
    text: 'text-[#2463eb]',
    border: 'border-[#2463eb]/20',
    hover: 'hover:bg-[#2463eb]/20',
  },
  eigentuemer: {
    primary: '#14B8A6',
    background: 'bg-teal-50',
    text: 'text-teal-700',
    border: 'border-teal-200',
    hover: 'hover:bg-teal-100',
  },
} as const;

// =============================================================================
// ICON LIBRARY - Phosphor Icons
// =============================================================================

/**
 * PHOSPHOR ICONS
 * @phosphor-icons/react is used throughout the cockpit
 */
export const ICONS = {
  /**
   * Navigation & Structure
   */
  navigation: [
    'Buildings',          // WEG/multi-unit properties
    'House',              // Individual property/unit
    'FileText',           // Documents
    'Folder',             // Categories
    'ArrowRight',         // Forward navigation
    'CaretDown',          // Dropdowns, expand
  ],

  /**
   * Actions
   */
  actions: [
    'Check',              // Confirm
    'CheckCircle',        // Completed (use weight="fill")
    'Circle',             // Uncompleted
    'Plus',               // Add new
    'Upload',             // File upload
    'MagnifyingGlass',    // Search
    'FunnelSimple',       // Filter
  ],

  /**
   * Status & Alerts
   */
  status: [
    'Warning',            // Warning state
    'WarningCircle',      // Alert/attention
    'Clock',              // Pending, time-based
    'Lightbulb',          // Suggestions, tips
  ],

  /**
   * Finance
   */
  finance: [
    'CurrencyEur',        // Euro amounts
    'Wallet',             // Budget, funds
    'Receipt',            // Invoices, receipts
    'ChartBar',           // Statistics
    'TrendUp',            // Positive trend
    'TrendDown',          // Negative trend
    'ChartLineUp',        // Growth chart
    'Percent',            // Percentages
  ],

  /**
   * Contact & User
   */
  contact: [
    'EnvelopeSimple',     // Email
    'Phone',              // Phone number
    'User',               // Person/contact
  ],

  /**
   * Documents
   */
  documents: [
    'FilePdf',            // PDF files
    'Calendar',           // Date-related
    'CalendarBlank',      // Calendar selection
  ],
} as const;

/**
 * Icon Weight Usage:
 * - Default (outline): Most UI elements
 * - weight="fill": Active/selected states, completed items
 *
 * Example:
 * <CheckCircle className="h-5 w-5 text-green-600" weight="fill" />
 */

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const TYPOGRAPHY = {
  /**
   * Page Titles
   */
  pageTitle: {
    className: 'text-2xl sm:text-3xl font-semibold',
  },

  /**
   * Section Headers (Card Titles)
   */
  sectionTitle: {
    className: 'text-lg font-semibold',
    variant: 'text-xl font-bold',
  },

  /**
   * Body Text
   */
  body: {
    default: 'text-sm',
    medium: 'text-sm font-medium',
  },

  /**
   * Metadata / Secondary
   */
  meta: {
    className: 'text-xs text-muted-foreground',
  },

  /**
   * Large Numbers (Financial displays)
   */
  number: {
    large: 'text-3xl font-bold',
    medium: 'text-2xl font-bold',
  },

  /**
   * Completed/Disabled State
   */
  completed: {
    className: 'line-through text-muted-foreground',
  },
} as const;

// =============================================================================
// COMPONENT PATTERNS
// =============================================================================

/**
 * CARD PATTERNS
 */
export const CARD = {
  /**
   * Standard Card
   */
  default: {
    className: 'border-2 border-muted rounded-xl',
    padding: 'p-4',
  },

  /**
   * Interactive Card
   */
  interactive: {
    className: 'border-2 border-muted rounded-xl transition-colors hover:bg-muted/50',
    padding: 'p-4',
  },

  /**
   * Highlighted Card (Mode-aware)
   */
  highlighted: {
    weg: 'border-2 border-[#2463eb]/20 bg-[#2463eb]/5',
    eigentuemer: 'border-2 border-teal-200 bg-teal-50/80',
  },

  /**
   * Empty State Card
   */
  empty: {
    className: 'border-2 border-dashed border-muted rounded-xl',
    padding: 'p-8',
  },
} as const;

/**
 * INFO BAR PATTERNS
 * Context display bars showing current selection
 */
export const INFO_BAR = {
  weg: {
    container: 'rounded-xl p-3 border-2 bg-[#2463eb]/10 border-[#2463eb]/20',
    icon: 'h-4 w-4 text-[#2463eb]',
    text: 'font-medium text-[#2463eb]',
  },
  eigentuemer: {
    container: 'rounded-xl p-3 border-2 bg-teal-50/80 border-teal-200',
    icon: 'h-4 w-4 text-teal-700',
    text: 'font-medium text-teal-800',
  },
} as const;

/**
 * TASK/CASE ITEM PATTERNS
 */
export const TASK_ITEM = {
  /**
   * Pending Task
   */
  pending: {
    weg: 'bg-[#2463eb]/5 hover:bg-[#2463eb]/10',
    eigentuemer: 'bg-teal-50/50 hover:bg-teal-50',
    icon: 'text-muted-foreground',
  },

  /**
   * Completed Task
   */
  completed: {
    className: 'bg-muted/50 opacity-60',
    icon: 'text-green-600',
    text: 'line-through text-muted-foreground',
  },

  /**
   * Urgent Task
   */
  urgent: {
    className: 'bg-orange-50 border-orange-200 shadow-sm',
    icon: 'text-orange-500',
  },
} as const;

/**
 * FINANCIAL HIGHLIGHT CARD
 */
export const FINANCIAL_CARD = {
  weg: {
    container: 'p-4 rounded-xl bg-[#2463eb]/10 border border-[#2463eb]/20',
    label: 'text-sm text-[#2463eb] font-medium',
    value: 'text-3xl font-bold text-[#2463eb]',
  },
  eigentuemer: {
    container: 'p-4 rounded-xl bg-teal-100 border border-teal-300',
    label: 'text-sm text-teal-800 font-medium',
    value: 'text-3xl font-bold text-teal-900',
  },
} as const;

// =============================================================================
// PROGRESS BAR
// =============================================================================

/**
 * PROGRESS BAR PATTERN
 *
 * Usage:
 * <div className={PROGRESS_BAR.container}>
 *   <div
 *     className={`${PROGRESS_BAR.bar} ${getBudgetColor(percentage)}`}
 *     style={{ width: `${Math.min(percentage, 100)}%` }}
 *   />
 * </div>
 */
export const PROGRESS_BAR = {
  container: 'h-2.5 bg-muted rounded-full overflow-hidden',
  bar: 'h-full rounded-full transition-all',
} as const;

// =============================================================================
// SPACING & LAYOUT
// =============================================================================

export const SPACING = {
  /**
   * Page Layout
   */
  page: {
    topSpacer: 'h-24',                    // Space below nav
    container: 'max-w-7xl mx-auto',
    padding: 'px-6 sm:px-8 lg:px-12',
  },

  /**
   * Card Spacing
   */
  card: {
    padding: {
      default: 'p-4',
      large: 'p-6',
      small: 'p-3',
      compact: 'p-2',
    },
    headerBottom: 'pb-3',
    contentTop: 'pt-0',
  },

  /**
   * Grid Gaps
   */
  gap: {
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
  },
} as const;

// =============================================================================
// RESPONSIVE GRID PATTERNS
// =============================================================================

export const GRID = {
  /**
   * Standard 2-column layout
   */
  twoColumn: 'grid grid-cols-1 lg:grid-cols-2 gap-6',

  /**
   * Standard 3-column layout
   */
  threeColumn: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',

  /**
   * Cards grid (auto-fit)
   */
  cards: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',

  /**
   * Dashboard layout (2/3 + 1/3)
   */
  dashboard: 'grid grid-cols-1 lg:grid-cols-3 gap-6',
  dashboardMain: 'lg:col-span-2',
  dashboardSide: 'lg:col-span-1',
} as const;

// =============================================================================
// ANIMATION
// =============================================================================

/**
 * FRAMER MOTION PATTERNS
 * Standard animation presets for consistent motion
 */
export const ANIMATION = {
  /**
   * Fade in from below (default entry)
   */
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  },

  /**
   * Staggered list animation
   * Use with index for delay calculation
   */
  staggeredItem: (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.1 + index * 0.03 },
  }),

  /**
   * Viewport-triggered animation
   */
  whileInView: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5 },
  },
} as const;

// =============================================================================
// INTERACTION PATTERNS
// =============================================================================

export const INTERACTION = {
  /**
   * Hover Effects
   */
  hover: {
    background: 'hover:bg-muted/50',
    backgroundTeal: 'hover:bg-teal-50',
    backgroundBlue: 'hover:bg-[#2463eb]/10',
    scale: 'hover:scale-[1.02]',
    shadow: 'hover:shadow-md',
  },

  /**
   * Transitions
   */
  transition: {
    colors: 'transition-colors',
    all: 'transition-all duration-200',
    transform: 'transition-transform duration-200',
  },

  /**
   * Group Hover
   */
  groupHover: {
    underline: 'group-hover:underline',
    translate: 'group-hover:translate-x-1',
  },
} as const;

// =============================================================================
// BORDER PATTERNS
// =============================================================================

export const BORDER = {
  /**
   * Standard borders
   */
  default: 'border-2 border-muted',
  subtle: 'border border-muted',

  /**
   * Mode-specific borders
   */
  weg: 'border-2 border-[#2463eb]/20',
  eigentuemer: 'border-2 border-teal-200',

  /**
   * Dashed (empty states)
   */
  dashed: 'border-2 border-dashed border-muted',

  /**
   * Radius
   */
  radius: {
    default: 'rounded-lg',
    large: 'rounded-xl',
    full: 'rounded-full',
  },
} as const;
