/**
 * Wegora Component Library
 * Documentation for reusable UI components
 *
 * This file documents the shared component library used across
 * both hub/marketing pages and cockpit/app components.
 */

// =============================================================================
// COMPONENT OVERVIEW
// =============================================================================

/**
 * AVAILABLE COMPONENTS
 *
 * Base UI Components (src/components/ui/):
 * - Button - Primary action component with variants
 * - Card - Container component for content sections
 * - Badge - Status labels and tags
 * - DropdownMenu - Popover menus and navigation
 * - WegoraLogo - Brand logo component
 *
 * Layout Components (src/components/hub/):
 * - HubLayout - Main layout wrapper with header/footer
 * - Footer - Site footer with navigation
 *
 * All components are built with:
 * - React + TypeScript
 * - Tailwind CSS for styling
 * - Radix UI primitives for accessibility
 * - class-variance-authority (cva) for variant management
 */

// =============================================================================
// BUTTON COMPONENT
// =============================================================================

/**
 * BUTTON
 * Path: src/components/ui/button.tsx
 *
 * Primary action component with multiple variants and sizes.
 */
export const BUTTON = {
  /**
   * Import
   */
  import: `import { Button } from "@/components/ui/button";`,

  /**
   * Variants
   */
  variants: {
    default: 'Text button with hover background',
    primary: 'Filled primary color button (blue)',
    outline: 'Bordered button with transparent background',
    secondary: 'Secondary filled button',
    ghost: 'Minimal button with hover state only',
    link: 'Underlined text link style',
    destructive: 'Red danger/delete actions',
  },

  /**
   * Sizes
   */
  sizes: {
    default: 'h-9 px-4 py-2 - Standard size',
    sm: 'h-8 px-3 - Compact size for dense UIs',
    lg: 'h-10 px-6 - Large prominent buttons',
    icon: 'size-9 - Square icon-only button',
  },

  /**
   * Usage Examples
   */
  examples: {
    primary: `<Button className="bg-[weg-500] hover:bg-[weg-600] text-white">
  Jetzt registrieren
</Button>`,

    outline: `<Button variant="outline" size="sm" className="h-9 text-sm px-4 gap-2">
  <UserCircle className="h-5 w-5" />
  <span>Login</span>
</Button>`,

    ghost: `<Button variant="ghost" size="sm" className="h-9 px-3 gap-2">
  <Buildings className="h-4 w-4" />
  <span>Objekt wählen</span>
  <CaretDown className="h-3 w-3" />
</Button>`,

    teal: `<Button variant="outline" size="sm" className="border-owner-500 text-owner-500 hover:bg-owner-500/10">
  Zum Service
</Button>`,
  },

  /**
   * Props
   */
  props: {
    variant: 'ButtonVariant - Visual style variant',
    size: 'ButtonSize - Size preset',
    asChild: 'boolean - Render as child element (for Link wrapper)',
    className: 'string - Additional CSS classes',
    disabled: 'boolean - Disabled state',
  },
} as const;

// =============================================================================
// CARD COMPONENT
// =============================================================================

/**
 * CARD
 * Path: src/components/ui/card.tsx
 *
 * Container component for content sections with header, content, and footer slots.
 */
export const CARD = {
  /**
   * Import
   */
  import: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";`,

  /**
   * Subcomponents
   */
  subcomponents: {
    Card: 'Main container with border, shadow, and rounded corners',
    CardHeader: 'Top section for title and description',
    CardTitle: 'Heading text within header',
    CardDescription: 'Secondary text within header',
    CardContent: 'Main content area',
    CardFooter: 'Bottom section for actions',
    CardAction: 'Action slot positioned in header',
  },

  /**
   * Usage Examples
   */
  examples: {
    basic: `<Card>
  <CardHeader>
    <CardTitle>Service Name</CardTitle>
    <CardDescription>Service description text</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content goes here */}
  </CardContent>
</Card>`,

    withBorder: `<Card className="border-2 border-muted">
  <CardHeader className="pb-3">
    <CardTitle className="text-lg font-semibold">Section Title</CardTitle>
  </CardHeader>
  <CardContent className="pt-0">
    {/* Content */}
  </CardContent>
</Card>`,

    highlighted: `<Card
  className="border-2 hover:shadow-xl transition-all duration-300"
  style={{ borderColor: "hsl(var(--owner-500) / 0.12)" }}
>
  {/* Teal-highlighted card */}
</Card>`,

    interactive: `<Card className="border-2 border-muted hover:bg-muted/50 transition-colors cursor-pointer">
  {/* Clickable card */}
</Card>`,
  },

  /**
   * Common Patterns
   */
  patterns: {
    serviceBadge: `{/* Badge positioned at top of card */}
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
  <Badge variant="outline" className="text-[10px] px-3 py-1 bg-owner-50 text-owner-500 border-owner-200">
    Coming Soon
  </Badge>
</div>`,

    emptyState: `<Card className="border-2 border-dashed border-muted p-8 text-center">
  <p className="text-muted-foreground">No items found</p>
</Card>`,
  },
} as const;

// =============================================================================
// BADGE COMPONENT
// =============================================================================

/**
 * BADGE
 * Path: src/components/ui/badge.tsx
 *
 * Status labels, tags, and small informational elements.
 */
export const BADGE = {
  /**
   * Import
   */
  import: `import { Badge } from "@/components/ui/badge";`,

  /**
   * Variants
   */
  variants: {
    default: 'Filled primary color',
    secondary: 'Filled secondary color',
    outline: 'Bordered with transparent background',
    destructive: 'Red danger variant',
  },

  /**
   * Custom Styling Examples
   */
  examples: {
    comingSoon: `<Badge
  variant="outline"
  className="text-[10px] px-3 py-1 bg-owner-50 text-owner-500 border-owner-200 shadow-sm"
>
  Coming Soon
</Badge>`,

    planned: `<Badge
  variant="outline"
  className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground border-border"
>
  Geplant
</Badge>`,

    platform: `<Badge
  variant="outline"
  className="text-[10px] px-2 py-0.5 bg-owner-500/10 text-owner-500 border-owner-500/20"
>
  Mobile App
</Badge>`,

    status: {
      offen: `<Badge className="bg-orange-100 text-orange-700 border-orange-200">
  Offen
</Badge>`,
      inBearbeitung: `<Badge className="bg-[weg-500]/10 text-[weg-500] border-[weg-500]/20">
  In Bearbeitung
</Badge>`,
      abgeschlossen: `<Badge className="bg-green-100 text-green-700 border-green-200">
  Abgeschlossen
</Badge>`,
    },

    comparison: `{/* Comparison section badges */}
<Badge
  className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full"
  style={{ backgroundColor: "#F97316", color: "#FFFFFF" }}
>
  Bestehende Lösungen
</Badge>

<Badge
  className="px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full"
  style={{ backgroundColor: "#3182CE", color: "#FFFFFF" }}
>
  Wegora Ansatz
</Badge>`,
  },
} as const;

// =============================================================================
// DROPDOWN MENU COMPONENT
// =============================================================================

/**
 * DROPDOWN MENU
 * Path: src/components/ui/dropdown-menu.tsx
 *
 * Popover menus for navigation and actions.
 * Built on Radix UI DropdownMenu primitive.
 */
export const DROPDOWN_MENU = {
  /**
   * Import
   */
  import: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";`,

  /**
   * Subcomponents
   */
  subcomponents: {
    DropdownMenu: 'Root container managing open state',
    DropdownMenuTrigger: 'Element that triggers the dropdown',
    DropdownMenuContent: 'Popover container for menu items',
    DropdownMenuItem: 'Individual menu item',
  },

  /**
   * Usage Examples
   */
  examples: {
    basic: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="sm">
      <UserCircle className="h-5 w-5" />
      <span>Login</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-48">
    <DropdownMenuItem asChild>
      <Link to="/login" className="cursor-pointer">
        Anmelden
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/register" className="cursor-pointer">
        Registrieren
      </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,

    withIcons: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="sm" className="h-9 px-3 gap-2">
      <Buildings className="h-4 w-4" />
      <span>Objekt wählen</span>
      <CaretDown className="h-3 w-3" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="w-52">
    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
      Alle Objekte
    </div>
    {objects.map((obj) => (
      <DropdownMenuItem
        key={obj.id}
        onClick={() => selectObject(obj.id)}
        className="cursor-pointer flex items-center justify-between"
      >
        <span>{obj.name}</span>
        {selected === obj.id && <Check className="h-4 w-4 text-owner-600" />}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>`,

    hoverTrigger: `{/* Hover-based dropdown with delayed close */}
const [open, setOpen] = useState(false);
const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

const handleMouseEnter = () => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  setOpen(true);
};

const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(() => setOpen(false), 200);
};

<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
    <DropdownMenuTrigger asChild>
      <span className="cursor-pointer">Hover Menu</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Items */}
    </DropdownMenuContent>
  </DropdownMenu>
</div>`,
  },
} as const;

// =============================================================================
// WEGORA LOGO COMPONENT
// =============================================================================

/**
 * WEGORA LOGO
 * Path: src/components/ui/WegoraLogo.tsx
 *
 * Brand logo component with multiple variants and context-aware styling.
 */
export const WEGORA_LOGO = {
  /**
   * Import
   */
  import: `import { WegoraLogo } from "@/components/ui/WegoraLogo";`,

  /**
   * Props
   */
  props: {
    variant: "'horizontal' | 'stacked' | 'icon-only' - Layout variant",
    colorMode: "'default' | 'monochrome' | 'white' - Color scheme",
    size: "'sm' | 'md' | 'lg' | 'xl' - Size preset",
    dotContext: "'weg' | 'eigentuemer' | 'none' - Context dot color",
    dotWeight: "'compact' | 'hero' - Dot size scaling",
    onClick: '() => void - Click handler (makes logo interactive)',
    className: 'string - Additional CSS classes',
  },

  /**
   * Size Reference
   */
  sizes: {
    sm: 'h-6 - Footer, small contexts',
    md: 'h-8 md:h-9 - Header navigation (default)',
    lg: 'h-14 - Hero sections',
    xl: 'h-20 - Landing pages',
  },

  /**
   * Dot Context
   */
  dotContext: {
    weg: 'weg-500 (blue) - WEG/community pages',
    eigentuemer: '#006666 (teal) - Individual owner pages',
    none: 'No dot - neutral contexts',
  },

  /**
   * Dot Weight
   */
  dotWeight: {
    compact: 'Base size - footers, small UI contexts',
    hero: '120% scale - header navigation, hero sections',
  },

  /**
   * Usage Examples
   */
  examples: {
    header: `<Link to="/">
  <WegoraLogo variant="horizontal" size="md" dotWeight="hero" />
</Link>`,

    headerClickable: `<WegoraLogo
  variant="horizontal"
  size="md"
  dotWeight="hero"
  onClick={() => navigate('/')}
/>`,

    eigentuemerPage: `<WegoraLogo
  size="lg"
  dotContext="eigentuemer"
  dotWeight="hero"
/>`,

    footer: `<WegoraLogo
  variant="horizontal"
  size="md"
  dotContext="none"
/>`,

    footerWhite: `<WegoraLogo
  variant="stacked"
  colorMode="white"
  size="sm"
  dotContext="none"
/>`,
  },
} as const;

// =============================================================================
// HEADER COMPONENT
// =============================================================================

/**
 * HEADER (within HubLayout)
 * Path: src/components/hub/HubLayout.tsx
 *
 * Fixed navigation header with logo, navigation links, and auth controls.
 * Adapts between marketing site navigation and cockpit navigation.
 */
export const HEADER = {
  /**
   * Structure
   */
  structure: `<header className="fixed top-4 left-4 right-4 z-50">
  <div className="h-16 px-6 border-0 shadow-lg bg-background/95 backdrop-blur-sm mx-auto max-w-screen-xl rounded-lg">
    <div className="flex items-center h-full w-full gap-8">
      {/* Logo */}
      <Link to="/">
        <WegoraLogo variant="horizontal" size="md" dotWeight="hero" />
      </Link>

      {/* Navigation */}
      <nav className="flex-1 flex items-center gap-2">
        {/* Nav links */}
      </nav>

      {/* Auth buttons */}
      <div className="flex items-center gap-2">
        {/* Login/Register buttons */}
      </div>
    </div>
  </div>
</header>`,

  /**
   * Navigation Link Styling
   */
  navLinkClass: `const navLinkClass = (path: string) => {
  return \`text-sm font-medium transition-all px-3 py-2 rounded-md \${
    isActive(path)
      ? "text-[weg-500] bg-[weg-500]/10"
      : "text-foreground/80 hover:text-[weg-500] hover:bg-[weg-500]/10"
  }\`;
};`,

  /**
   * Mode-Aware Cockpit Navigation
   */
  cockpitNavLinkClass: `const cockpitNavLinkClass = (path: string) => {
  const activeColor = mode === "eigentuemer" ? "text-owner-600" : "text-[weg-500]";
  const activeBg = mode === "eigentuemer" ? "bg-owner-600/10" : "bg-[weg-500]/10";
  const hoverColor = mode === "eigentuemer" ? "hover:text-owner-600" : "hover:text-[weg-500]";
  const hoverBg = mode === "eigentuemer" ? "hover:bg-owner-600/10" : "hover:bg-[weg-500]/10";

  return \`text-sm font-medium transition-all px-3 py-2 rounded-md flex items-center gap-2 \${
    isActive(path)
      ? \`\${activeColor} \${activeBg}\`
      : \`text-foreground/80 \${hoverColor} \${hoverBg}\`
  }\`;
};`,

  /**
   * Key Patterns
   */
  patterns: {
    floatingHeader: 'Fixed with rounded corners, shadow, and blur backdrop',
    modeToggle: 'Toggle between WEG and Eigentümer modes in cockpit',
    hoverDropdown: 'Delayed-close hover dropdown for navigation',
  },
} as const;

// =============================================================================
// FOOTER COMPONENT
// =============================================================================

/**
 * FOOTER
 * Path: src/components/hub/Footer.tsx
 *
 * Site footer with logo, navigation links, legal links, and contact info.
 */
export const FOOTER = {
  /**
   * Import
   */
  import: `import { Footer } from "@/components/hub/Footer";`,

  /**
   * Usage
   */
  usage: `{/* Typically included in HubLayout */}
{!isCockpit && <Footer />}`,

  /**
   * Structure
   */
  structure: `<footer className="border-t border-muted-foreground/10" style={{ background: "linear-gradient(...)" }}>
  <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Company Info with Logo */}
      {/* Navigation Links */}
      {/* Legal Links */}
      {/* Contact Info with CTA */}
    </div>

    {/* Bottom Bar with Copyright */}
    <div className="pt-8 border-t border-muted-foreground/10 text-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} WEGORA. Alle Rechte vorbehalten.
      </p>
    </div>
  </div>
</footer>`,

  /**
   * Link Styling
   */
  linkClass: 'text-sm text-muted-foreground hover:text-[weg-500] transition-colors',
  tealLinkClass: 'text-sm text-muted-foreground hover:text-owner-500 transition-colors',

  /**
   * Section Heading
   */
  sectionHeading: 'font-semibold mb-4 text-sm uppercase tracking-wide text-foreground/80',
} as const;

// =============================================================================
// MODE TOGGLE COMPONENT
// =============================================================================

/**
 * MODE TOGGLE (within HubLayout header)
 *
 * Toggle switch for WEG/Eigentümer mode in cockpit.
 */
export const MODE_TOGGLE = {
  /**
   * Structure
   */
  structure: `<div className="flex items-center bg-muted rounded-lg p-0.5">
  <button
    onClick={() => switchMode("weg")}
    className={\`px-3 py-1.5 text-xs font-medium rounded-md transition-all \${
      mode === "weg"
        ? "bg-white text-[weg-500] shadow-sm"
        : "text-muted-foreground hover:text-foreground"
    }\`}
  >
    Meine WEG
  </button>
  <button
    onClick={() => switchMode("eigentuemer")}
    className={\`px-3 py-1.5 text-xs font-medium rounded-md transition-all \${
      mode === "eigentuemer"
        ? "bg-white text-owner-600 shadow-sm"
        : "text-muted-foreground hover:text-foreground"
    }\`}
  >
    Meine Wohnungen
  </button>
</div>`,

  /**
   * Styling
   */
  container: 'flex items-center bg-muted rounded-lg p-0.5',
  activeWeg: 'bg-white text-[weg-500] shadow-sm',
  activeEigentuemer: 'bg-white text-owner-600 shadow-sm',
  inactive: 'text-muted-foreground hover:text-foreground',
} as const;

// =============================================================================
// LOGIN/AUTH COMPONENTS
// =============================================================================

/**
 * LOGIN DROPDOWN
 *
 * Authentication dropdown in header with login/register options.
 */
export const LOGIN_DROPDOWN = {
  /**
   * Structure
   */
  structure: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="sm" className="h-9 text-sm px-4 gap-2">
      <UserCircle className="h-5 w-5" />
      <span>Login</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-48">
    <DropdownMenuItem asChild>
      <Link to="/login" className="cursor-pointer">
        Anmelden
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/register" className="cursor-pointer">
        Registrieren
      </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,

  /**
   * Register Button (Primary CTA)
   */
  registerButton: `<Link to="/register">
  <Button
    size="sm"
    className="h-9 text-sm px-6 bg-[weg-500] hover:bg-[weg-600] text-white"
  >
    Jetzt registrieren
  </Button>
</Link>`,

  /**
   * User Menu (Logged In)
   */
  userMenu: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="sm" className="h-9 text-sm px-4 gap-2">
      <UserCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Max Mustermann</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-48">
    <DropdownMenuItem asChild>
      <Link to="/" className="cursor-pointer flex items-center gap-2">
        <SignOut className="h-4 w-4" />
        Abmelden
      </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
} as const;

// =============================================================================
// NAVIGATION PATTERNS
// =============================================================================

/**
 * NAVIGATION PATTERNS
 *
 * Common navigation patterns used across the application.
 */
export const NAVIGATION = {
  /**
   * Marketing Site Links
   */
  marketingLinks: [
    { path: '/angebot-weg', label: 'Angebot für WEGs' },
    { path: '/angebot-eigentuemer', label: 'Angebot für Eigentümer' },
    { path: '/vision', label: 'Vision' },
    { path: '/ueber-uns', label: 'Über uns' },
    { path: '/kontakt', label: 'Kontakt' },
  ],

  /**
   * WEG Mode Navigation
   */
  wegNavItems: [
    { path: '/cockpit/objekte', label: 'Objekte', icon: 'Buildings' },
    { path: '/cockpit/vorgaenge', label: 'Vorgänge', icon: 'Folder' },
    { path: '/cockpit/dokumente', label: 'Dokumente', icon: 'FileText' },
    { path: '/cockpit/finanzen', label: 'Finanzen', icon: 'CurrencyEur', hasDropdown: true },
  ],

  /**
   * Eigentümer Mode Navigation
   */
  eigentuemerNavItems: [
    { path: '/cockpit/vorgaenge', label: 'Vorgänge', icon: 'Folder' },
    { path: '/cockpit/dokumente', label: 'Dokumente', icon: 'FileText' },
    { path: '/cockpit/mieter', label: 'Mieter', icon: 'User' },
    { path: '/cockpit/finanzen', label: 'Finanzen', icon: 'CurrencyEur', hasDropdown: true },
    { path: '/cockpit/optimierung', label: 'Optimierung', icon: 'Lightbulb', inDropdown: true },
  ],

  /**
   * Active State Detection
   */
  isActive: `const isActive = (path: string) => {
  if (path === "/cockpit") {
    return location.pathname === "/cockpit";
  }
  return location.pathname === path || location.pathname.startsWith(path + "/");
};`,
} as const;

// =============================================================================
// LAYOUT COMPONENT
// =============================================================================

/**
 * HUB LAYOUT
 * Path: src/components/hub/HubLayout.tsx
 *
 * Main layout wrapper providing header, main content area, and footer.
 */
export const HUB_LAYOUT = {
  /**
   * Import
   */
  import: `import { HubLayout } from "@/components/hub/HubLayout";`,

  /**
   * Usage
   */
  usage: `<HubLayout>
  <YourPageContent />
</HubLayout>`,

  /**
   * Structure
   */
  structure: `<div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
  {/* Fixed Header */}
  <header className="fixed top-4 left-4 right-4 z-50">
    {/* Navigation content */}
  </header>

  {/* Main Content */}
  <main className="flex-1">
    {children}
  </main>

  {/* Footer (hidden in cockpit) */}
  {!isCockpit && <Footer />}
</div>`,

  /**
   * Features
   */
  features: [
    'Fixed floating header with blur backdrop',
    'Automatic scroll-to-top on navigation',
    'Mode-aware navigation (marketing vs cockpit)',
    'Conditional footer (hidden in cockpit)',
    'Context selectors (Object/Unit dropdowns)',
    'Mode toggle (WEG/Eigentümer)',
  ],
} as const;
