"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { WegoraLogo } from "@/components/ui/WegoraLogo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  House,
  Buildings,
  CaretDown,
  List,
  X,
} from "@phosphor-icons/react";

export function MarketingHeader() {
  const pathname = usePathname();

  // State for hover-based Angebot dropdown with delayed close
  const [angebotOpen, setAngebotOpen] = useState(false);
  const angebotTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    if (path === "/cockpit") {
      return pathname === "/cockpit";
    }
    return pathname === path || pathname.startsWith(path + "/");
  };

  const navLinkClass = (path: string) => {
    return `text-sm font-medium transition-all px-3 py-2 rounded-md ${
      isActive(path)
        ? "text-weg-500 bg-weg-500/10"
        : "text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10"
    }`;
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="h-16 px-4 md:px-6 border-0 shadow-lg bg-background/95 backdrop-blur-sm mx-auto max-w-screen-xl rounded-lg">
        <div className="flex items-center h-full w-full gap-4 md:gap-8">
          <Link href="/">
            <WegoraLogo variant="horizontal" size="md" dotWeight="hero" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center gap-2">
            {/* Angebot Dropdown with two equal entries */}
            <div
              className="relative"
              onMouseEnter={handleAngebotMouseEnter}
              onMouseLeave={handleAngebotMouseLeave}
            >
              <DropdownMenu open={angebotOpen} onOpenChange={setAngebotOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                  <span
                    className={`text-sm font-medium transition-all px-3 py-2 rounded-md cursor-pointer flex items-center gap-1 ${
                      (isActive("/angebot-weg") || isActive("/angebot-eigentuemer"))
                        ? "text-weg-500 bg-weg-500/10"
                        : "text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10"
                    }`}
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
                  <DropdownMenuItem asChild className="group hover:bg-weg-500/10 focus:bg-weg-500/10">
                    <Link href="/angebot-weg" className="cursor-pointer flex items-center gap-3 py-2">
                      <div className="w-8 h-8 bg-weg-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Buildings className="h-4 w-4 text-weg-500" />
                      </div>
                      <div>
                        <div className="font-medium text-sm group-hover:text-weg-500 transition-colors whitespace-nowrap">Wegora WEG</div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">Für WEGs, Selbstverwalter & kleine Verwaltungen</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="group hover:bg-owner-500/10 focus:bg-owner-500/10">
                    <Link href="/angebot-eigentuemer" className="cursor-pointer flex items-center gap-3 py-2">
                      <div className="w-8 h-8 bg-owner-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <House className="h-4 w-4 text-owner-500" />
                      </div>
                      <div>
                        <div className="font-medium text-sm group-hover:text-owner-500 transition-colors whitespace-nowrap">Wegora Eigentümer</div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">Für Eigentümer & Vermieter</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link href="/vision" className={navLinkClass("/vision")}>
              Vision
            </Link>
            <Link href="/ueber-uns" className={navLinkClass("/ueber-uns")}>
              Über uns
            </Link>
            <Link href="/kontakt" className={navLinkClass("/kontakt")}>
              Kontakt
            </Link>
          </nav>

          {/* Spacer for mobile */}
          <div className="flex-1 lg:hidden" />

          {/* Desktop Auth Buttons */}
          <Link
            href="/cockpit"
            className="hidden md:block text-sm font-medium text-foreground/80 hover:text-weg-500 hover:bg-weg-500/10 transition-all px-3 py-2 rounded-md"
          >
            Anmelden
          </Link>
          <Link href="/cockpit" className="hidden sm:block">
            <Button
              size="sm"
              className="h-10 text-sm px-6 bg-weg-500 hover:bg-weg-600 text-white rounded-lg"
            >
              Registrieren
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <List className="h-5 w-5" />
                )}
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 lg:hidden">
              <DropdownMenuItem asChild>
                <Link href="/angebot-weg" className="cursor-pointer flex items-center gap-3 py-2">
                  <Buildings className="h-4 w-4 text-weg-500" />
                  <span>Wegora WEG</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/angebot-eigentuemer" className="cursor-pointer flex items-center gap-3 py-2">
                  <House className="h-4 w-4 text-owner-500" />
                  <span>Wegora Eigentümer</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vision" className="cursor-pointer">
                  Vision
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ueber-uns" className="cursor-pointer">
                  Über uns
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/kontakt" className="cursor-pointer">
                  Kontakt
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="md:hidden">
                <Link href="/cockpit" className="cursor-pointer">
                  Anmelden
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="sm:hidden">
                <Link href="/cockpit" className="cursor-pointer font-medium text-weg-500">
                  Registrieren
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
