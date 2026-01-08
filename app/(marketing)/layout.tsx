import { MarketingLayoutClient } from "@/components/layout/MarketingLayoutClient";
import { Footer } from "@/components/hub/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketingLayoutClient>
      {children}
      <Footer />
    </MarketingLayoutClient>
  );
}
