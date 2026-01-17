import { MarketingShellClient } from "./MarketingShellClient";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingShellClient>{children}</MarketingShellClient>;
}
