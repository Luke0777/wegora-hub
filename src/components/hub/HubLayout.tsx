import { Link, useLocation } from "react-router-dom";
import { WegoraLogo } from "@/components/ui/WegoraLogo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserCircle } from "@phosphor-icons/react";
import { Footer } from "./Footer";

interface HubLayoutProps {
  children: React.ReactNode;
}

export function HubLayout({ children }: HubLayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => {
    return `text-sm font-medium transition-all px-3 py-2 rounded-md ${
      isActive(path)
        ? "text-[#2463eb] bg-[#2463eb]/10"
        : "text-foreground/80 hover:text-[#2463eb] hover:bg-[#2463eb]/10"
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      {/* Navigation Header */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div className="h-16 px-6 border-0 shadow-lg bg-background/95 backdrop-blur-sm mx-auto max-w-screen-xl rounded-lg">
          <div className="flex items-center h-full w-full gap-8">
            <Link to="/">
              <WegoraLogo variant="horizontal" size="md" />
            </Link>
            
            <nav className="flex-1 flex items-center gap-2">
              <Link to="/unser-angebot" className={navLinkClass("/unser-angebot")}>
                Unser Angebot
              </Link>
              <Link to="/vision" className={navLinkClass("/vision")}>
                Vision
              </Link>
              <Link to="/neuigkeiten" className={navLinkClass("/neuigkeiten")}>
                Neuigkeiten
              </Link>
              <Link to="/ueber-uns" className={navLinkClass("/ueber-uns")}>
                Über uns
              </Link>
              <Link to="/kontakt" className={navLinkClass("/kontakt")}>
                Kontakt
              </Link>
            </nav>

            {/* Jetzt registrieren CTA */}
            <Button
              size="sm"
              className="h-9 text-sm px-6 bg-[#2463eb] hover:bg-[#1d4ed8] text-white"
            >
              Jetzt registrieren
            </Button>

            {/* Login Dropdown */}
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
                  <a
                    href="#"
                    className="cursor-pointer"
                  >
                    Anmelden
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="#"
                    className="cursor-pointer"
                  >
                    Registrieren
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
