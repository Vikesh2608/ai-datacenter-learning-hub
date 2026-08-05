import GPUHero from "@/components/gpu/GPUHero";
import GPUDefinition from "@/components/gpu/GPUDefinition";
import GPUArchitecture from "@/components/gpu/GPUArchitecture";
import GPUApplications from "@/components/gpu/GPUApplications";
import GPUVideos from "@/components/gpu/GPUVideos";
import GPUResources from "@/components/gpu/GPUResources";
import GPURelated from "@/components/gpu/GPURelated";

export default function GPUPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <GPUHero />

      {/* Definition */}

      <GPUDefinition />

      {/* GPU Architecture */}

      <GPUArchitecture />

      {/* Real World Applications */}

      <GPUApplications />

      {/* Video Tutorials */}

      <GPUVideos />

      {/* Official Resources */}

      <GPUResources />

      {/* Continue Learning */}

      <GPURelated />

    </main>
  );
}