"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { SkipLink } from "@/components/ui/skip-link";

export function MarketingLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
        <SkipLink />
        <MarketingHeader />
        <main id="main-content" className="flex-1">{children}</main>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
