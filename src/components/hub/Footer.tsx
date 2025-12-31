import { Link } from "react-router-dom";
import { WegoraLogo } from "@/components/ui/WegoraLogo";
import { Button } from "@/components/ui/button";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <WegoraLogo variant="horizontal" size="md" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modulare Software für effiziente Immobilienverwaltung.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-foreground/80">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/unser-angebot"
                  className="text-sm text-muted-foreground hover:text-[#2463eb] transition-colors"
                >
                  Unser Angebot
                </Link>
              </li>
              <li>
                <Link
                  to="/vision"
                  className="text-sm text-muted-foreground hover:text-[#2463eb] transition-colors"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/neuigkeiten"
                  className="text-sm text-muted-foreground hover:text-[#2463eb] transition-colors"
                >
                  Neuigkeiten
                </Link>
              </li>
              <li>
                <Link
                  to="/ueber-uns"
                  className="text-sm text-muted-foreground hover:text-[#2463eb] transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-sm text-muted-foreground hover:text-[#2463eb] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-foreground/80">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[#2463eb] transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[#2463eb] transition-colors"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-[#2463eb] transition-colors"
                >
                  AGB
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-foreground/80">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <EnvelopeSimple className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#2463eb]" />
                <a
                  href="mailto:info@wegora.de"
                  className="hover:text-[#2463eb] transition-colors"
                >
                  info@wegora.de
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#2463eb]" />
                <span>+49 (0) 123 456789</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#2463eb]" />
                <span>
                  Musterstraße 123
                  <br />
                  12345 Berlin
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <Button
                size="sm"
                className="w-full bg-[#2463eb] hover:bg-[#1d4ed8] text-white"
              >
                <EnvelopeSimple className="mr-2 h-4 w-4" />
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-muted-foreground/10 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WEGORA. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
