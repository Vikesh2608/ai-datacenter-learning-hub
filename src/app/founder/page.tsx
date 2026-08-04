import FounderHero from "@/components/founder/FounderHero";
import FounderMission from "@/components/founder/FounderMission";
import FounderVision from "@/components/founder/FounderVision";
import FounderSkills from "@/components/founder/FounderSkills";
import FounderStats from "@/components/founder/FounderStats";
import FounderConnect from "@/components/founder/FounderConnect";

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <FounderHero />

      <FounderMission />

      <FounderVision />

      <FounderSkills />

      <FounderStats />

      <FounderConnect />

    </main>
  );
}