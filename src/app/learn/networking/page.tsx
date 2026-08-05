import NetworkingHero from "@/components/networking/NetworkingHero";
import NetworkingDefinition from "@/components/networking/NetworkingDefinition";
import NetworkingArchitecture from "@/components/networking/NetworkingArchitecture";
import NetworkingDevices from "@/components/networking/NetworkingDevices";
import NetworkingProtocols from "@/components/networking/NetworkingProtocols";
import NetworkingSecurity from "@/components/networking/NetworkingSecurity";
import NetworkingVideos from "@/components/networking/NetworkingVideos";
import NetworkingResources from "@/components/networking/NetworkingResources";
import NetworkingRelated from "@/components/networking/NetworkingRelated";

export default function NetworkingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <NetworkingHero />

      {/* Networking Fundamentals */}
      <NetworkingDefinition />

      {/* Architecture */}
      <NetworkingArchitecture />

      {/* Networking Devices */}
      <NetworkingDevices />

      {/* Protocols */}
      <NetworkingProtocols />

      {/* Security */}
      <NetworkingSecurity />

      {/* Video Tutorials */}
      <NetworkingVideos />

      {/* Official Resources */}
      <NetworkingResources />

      {/* Continue Learning */}
      <NetworkingRelated />

    </main>
  );
}