import CloudHero from "@/components/cloud/CloudHero";
import CloudDefinition from "@/components/cloud/CloudDefinition";
import CloudArchitecture from "@/components/cloud/CloudArchitecture";
import CloudProviders from "@/components/cloud/CloudProviders";
import CloudServices from "@/components/cloud/CloudServices";
import CloudSecurity from "@/components/cloud/CloudSecurity";
import CloudVideos from "@/components/cloud/CloudVideos";
import CloudResources from "@/components/cloud/CloudResources";
import CloudRelated from "@/components/cloud/CloudRelated";

export default function CloudPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <CloudHero />

      <CloudDefinition />

      <CloudArchitecture />

      <CloudProviders />

      <CloudServices />

      <CloudSecurity />

      <CloudVideos />

      <CloudResources />

      <CloudRelated />

    </main>
  );
}