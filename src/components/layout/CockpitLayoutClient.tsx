"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { CockpitModeProvider } from "@/context/CockpitModeContext";
import { CockpitHeader } from "@/components/layout/CockpitHeader";
import { SkipLink } from "@/components/ui/skip-link";

export function CockpitLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <CockpitModeProvider>
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
          <SkipLink />
          <CockpitHeader />
          <main id="main-content" className="flex-1">{children}</main>
        </div>
        <Toaster />
      </CockpitModeProvider>
    </TooltipProvider>
  );
}
