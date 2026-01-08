"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { CockpitModeProvider } from "@/context/CockpitModeContext";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { Footer } from "@/components/hub/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <CockpitModeProvider>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
          <MarketingHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </CockpitModeProvider>
    </TooltipProvider>
  );
}
