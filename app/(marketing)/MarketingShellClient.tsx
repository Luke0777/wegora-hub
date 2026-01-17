"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MarketingShell } from "@luke0777/ui";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SkipLink } from "@/components/ui/skip-link";

// Footer link groups matching Hub's original footer exactly
const footerLinkGroups = [
  {
    title: "Navigation",
    links: [
      { label: "Angebot für WEGs", href: "/angebot-weg", hoverColor: "weg" as const },
      { label: "Angebot für Eigentümer", href: "/angebot-eigentuemer", hoverColor: "owner" as const },
      { label: "Vision", href: "/vision", hoverColor: "weg" as const },
      { label: "Neuigkeiten", href: "/neuigkeiten", hoverColor: "weg" as const },
      { label: "Über uns", href: "/ueber-uns", hoverColor: "weg" as const },
      { label: "Kontakt", href: "/kontakt", hoverColor: "weg" as const },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "#", hoverColor: "weg" as const },
      { label: "Datenschutz", href: "#", hoverColor: "weg" as const },
      { label: "AGB", href: "#", hoverColor: "weg" as const },
    ],
  },
];

export function MarketingShellClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <SkipLink />
      <MarketingShell
        pathname={pathname}
        linkComponent={Link}
        footerProps={{
          linkGroups: footerLinkGroups,
          email: "info@wegora.de",
          addressLine1: "Eduardstraße 9",
          addressLine2: "45130 Essen",
          companyName: "WEGORA",
          showContactButton: true,
          contactButtonText: "Kontakt aufnehmen",
          contactButtonHref: "/kontakt",
        }}
      >
        {children}
      </MarketingShell>
      <Toaster />
    </TooltipProvider>
  );
}
