import CommunityHero from "@/components/community/CommunityHero";
import CommunityMission from "@/components/community/CommunityMission";
import CommunityFeedback from "@/components/community/CommunityFeedback";
import CommunityIdeas from "@/components/community/CommunityIdeas";
import CommunityVolunteer from "@/components/community/CommunityVolunteer";
import CommunitySupport from "@/components/community/CommunitySupport";
import CommunityRoadmap from "@/components/community/CommunityRoadmap";
import CommunityRecognition from "@/components/community/CommunityRecognition";

export const metadata = {
  title: "Community | AI & Data Center Learning Hub",
  description:
    "Join the AI & Data Center Learning Hub community. Share feedback, suggest new learning topics, volunteer, support free technology education, and help shape the future of AI learning.",
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <CommunityHero />

      {/* Mission */}
      <CommunityMission />

      {/* Community Feedback */}
      <CommunityFeedback />

      {/* Suggest New Topics */}
      <CommunityIdeas />

      {/* Volunteer */}
      <CommunityVolunteer />

      {/* Support the Project */}
      <CommunitySupport />

      {/* Roadmap */}
      <CommunityRoadmap />

      {/* Recognition */}
      <CommunityRecognition />

    </main>
  );
}