import dynamic from "next/dynamic";

const CockpitPage = dynamic(
  () => import("@/components/cockpit/CockpitPage").then((mod) => mod.CockpitPage),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Laden...</div>
      </div>
    ),
  }
);

export default function Page() {
  return <CockpitPage />;
}
