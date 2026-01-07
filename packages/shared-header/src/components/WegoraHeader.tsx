import { useState, useRef, ReactNode } from "react";
import { WegoraLogo } from "./WegoraLogo";
import { Button } from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { UserCircle, CaretDown, House, Buildings } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface DropdownNavItem {
  label: string;
  href: string;
  description?: string;
  icon?: ReactNode;
  variant?: "weg" | "owner";
}

export interface WegoraHeaderProps {
  /** Navigation items to display */
  navItems?: NavItem[];
  /** Custom dropdown items for "Unser Angebot" - if not provided, uses default Wegora items */
  angebotItems?: DropdownNavItem[];
  /** Show the "Unser Angebot" dropdown */
  showAngebotDropdown?: boolean;
  /** Primary CTA button text */
  ctaText?: string;
  /** Primary CTA button href */
  ctaHref?: string;
  /** Show login dropdown */
  showLogin?: boolean;
  /** Custom class name */
  className?: string;
  /** Logo click handler or href */
  onLogoClick?: () => void;
  logoHref?: string;
  /** Link component to use (for React Router, Next.js, etc.) */
  LinkComponent?: React.ComponentType<{
    to?: string;
    href?: string;
    className?: string;
    children: ReactNode;
  }>;
  /** Current path for active state detection */
  currentPath?: string;
}

// Default link component (regular anchor)
const DefaultLink = ({
  to,
  href,
  children,
  className,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) => (
  <a href={to || href} className={className}>
    {children}
  </a>
);

export function WegoraHeader({
  navItems = [
    { label: "Vision", href: "/vision" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  angebotItems,
  showAngebotDropdown = true,
  ctaText = "Jetzt registrieren",
  ctaHref = "/cockpit",
  showLogin = true,
  className,
  onLogoClick,
  logoHref = "/",
  LinkComponent = DefaultLink,
  currentPath = "",
}: WegoraHeaderProps) {
  const Link = LinkComponent;

  // State for hover-based Angebot dropdown with delayed close
  const [angebotOpen, setAngebotOpen] = useState(false);
  const angebotTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAngebotMouseEnter = () => {
    if (angebotTimeoutRef.current) {
      clearTimeout(angebotTimeoutRef.current);
      angebotTimeoutRef.current = null;
    }
    setAngebotOpen(true);
  };

  const handleAngebotMouseLeave = () => {
    angebotTimeoutRef.current = setTimeout(() => {
      setAngebotOpen(false);
    }, 200);
  };

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  const navLinkClass = (path: string) => {
    return cn(
      "text-sm font-medium transition-all px-3 py-2 rounded-md",
      isActive(path)
        ? "text-weg-500 bg-weg-500/10"
        : "text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10"
    );
  };

  // Default Angebot dropdown items
  const defaultAngebotItems: DropdownNavItem[] = [
    {
      label: "Wegora WEG",
      href: "/angebot-weg",
      description: "Für WEGs, Selbstverwalter & kleine Verwaltungen",
      icon: <Buildings className="h-4 w-4 text-weg-500" />,
      variant: "weg",
    },
    {
      label: "Wegora Eigentümer",
      href: "/angebot-eigentuemer",
      description: "Für Eigentümer & Vermieter",
      icon: <House className="h-4 w-4 text-owner-500" />,
      variant: "owner",
    },
  ];

  const dropdownItems = angebotItems || defaultAngebotItems;

  const isAngebotActive = dropdownItems.some((item) => isActive(item.href));

  return (
    <header className={cn("fixed top-4 left-4 right-4 z-50", className)}>
      <div className="h-16 px-6 border-0 shadow-lg bg-background/95 backdrop-blur-sm mx-auto max-w-screen-xl rounded-lg">
        <div className="flex items-center h-full w-full gap-8">
          {/* Logo */}
          {onLogoClick ? (
            <div onClick={onLogoClick} className="cursor-pointer">
              <WegoraLogo variant="horizontal" size="md" dotWeight="hero" />
            </div>
          ) : (
            <Link to={logoHref} href={logoHref}>
              <WegoraLogo variant="horizontal" size="md" dotWeight="hero" />
            </Link>
          )}

          {/* Navigation */}
          <nav className="flex-1 flex items-center gap-2">
            {/* Angebot Dropdown */}
            {showAngebotDropdown && (
              <div
                className="relative"
                onMouseEnter={handleAngebotMouseEnter}
                onMouseLeave={handleAngebotMouseLeave}
              >
                <DropdownMenu
                  open={angebotOpen}
                  onOpenChange={setAngebotOpen}
                  modal={false}
                >
                  <DropdownMenuTrigger asChild>
                    <span
                      className={cn(
                        "text-sm font-medium transition-all px-3 py-2 rounded-md cursor-pointer flex items-center gap-1",
                        isAngebotActive
                          ? "text-weg-500 bg-weg-500/10"
                          : "text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10"
                      )}
                    >
                      Unser Angebot
                      <CaretDown className="h-3 w-3" />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-[22rem] animate-none"
                    sideOffset={0}
                    onMouseEnter={handleAngebotMouseEnter}
                    onMouseLeave={handleAngebotMouseLeave}
                  >
                    {dropdownItems.map((item) => (
                      <DropdownMenuItem
                        key={item.href}
                        asChild
                        className={cn(
                          "group",
                          item.variant === "owner"
                            ? "hover:bg-owner-500/10 focus:bg-owner-500/10"
                            : "hover:bg-weg-500/10 focus:bg-weg-500/10"
                        )}
                      >
                        <Link
                          to={item.href}
                          href={item.href}
                          className="cursor-pointer flex items-center gap-3 py-2"
                        >
                          {item.icon && (
                            <div
                              className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                                item.variant === "owner"
                                  ? "bg-owner-500/10"
                                  : "bg-weg-500/10"
                              )}
                            >
                              {item.icon}
                            </div>
                          )}
                          <div>
                            <div
                              className={cn(
                                "font-medium text-sm transition-colors whitespace-nowrap",
                                item.variant === "owner"
                                  ? "group-hover:text-owner-500"
                                  : "group-hover:text-weg-500"
                              )}
                            >
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="text-xs text-muted-foreground whitespace-nowrap">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            {/* Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                href={item.href}
                className={navLinkClass(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <Link to={ctaHref} href={ctaHref}>
            <Button
              size="sm"
              className="h-9 text-sm px-6 bg-weg-500 hover:bg-weg-600 text-white"
            >
              {ctaText}
            </Button>
          </Link>

          {showLogin && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 text-sm px-4 gap-2"
                >
                  <UserCircle className="h-5 w-5" />
                  <span>Login</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to={ctaHref} href={ctaHref} className="cursor-pointer">
                    Anmelden
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={ctaHref} href={ctaHref} className="cursor-pointer">
                    Registrieren
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
