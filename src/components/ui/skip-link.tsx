"use client";

import { cn } from "@/lib/utils";

interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * SkipLink - Accessibility component for keyboard navigation
 *
 * Allows keyboard users to skip repetitive navigation and jump directly to main content.
 * Visually hidden by default, appears on focus.
 *
 * @example
 * <SkipLink /> // Links to #main-content by default
 * <SkipLink href="#sidebar">Zur Seitenleiste springen</SkipLink>
 */
export function SkipLink({
  href = "#main-content",
  children = "Zum Inhalt springen",
  className,
}: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        // Visually hidden by default
        "sr-only",
        // Visible on focus
        "focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]",
        // Styling matching design system
        "focus:bg-background focus:text-foreground",
        "focus:px-4 focus:py-2 focus:rounded-md",
        "focus:border focus:border-input focus:shadow-lg",
        // Focus ring
        "focus:outline-none focus:ring-[3px] focus:ring-ring/50",
        // Typography
        "focus:text-sm focus:font-medium",
        className
      )}
    >
      {children}
    </a>
  );
}
