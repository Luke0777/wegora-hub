import { CockpitLayoutClient } from "@/components/layout/CockpitLayoutClient";

export default function CockpitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CockpitLayoutClient>{children}</CockpitLayoutClient>;
}
