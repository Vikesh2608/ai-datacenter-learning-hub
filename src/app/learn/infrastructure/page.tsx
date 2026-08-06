import InfrastructureHero from "@/components/infrastructure/InfrastructureHero";
import ComponentGrid from "@/components/infrastructure/ComponentGrid";

export const metadata = {
  title: "AI Infrastructure Academy",
  description:
    "Learn every component inside modern AI servers.",
};

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <InfrastructureHero />

      <ComponentGrid />

    </main>
  );
}