import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningCards from "@/components/LearningCards";
import HowAIJourney from "@/components/HowAIJourney";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Learning Academies */}
      <LearningCards />

      {/* Interactive AI Journey */}
      <HowAIJourney />

    </main>
  );
}