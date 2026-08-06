import { notFound } from "next/navigation";

import {
  serverComponents,
} from "@/data/serverComponents";

import ComponentOverview from "@/components/infrastructure/ComponentOverview";
import ArchitectureSection from "@/components/infrastructure/ArchitectureSection";
import RelatedComponents from "@/components/infrastructure/RelatedComponents";
import ComponentVideos from "@/components/infrastructure/ComponentVideos";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ComponentPage({
  params,
}: Props) {
  const { slug } = await params;

  const component = serverComponents.find(
    (item) => item.slug === slug
  );

  if (!component) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">

        <div className="max-w-7xl mx-auto px-8 py-20">

          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            AI Infrastructure Academy
          </p>

          <h1 className="mt-6 text-6xl font-black">
            {component.name}
          </h1>

          <p className="mt-8 max-w-4xl text-xl text-gray-400 leading-9">
            {component.shortDescription}
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">

        <ComponentOverview
          title={component.name}
          description={component.overview}
          difficulty={component.difficulty}
          readTime={component.readTime}
        />

        <ArchitectureSection
          architecture={component.architecture}
        />

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-black">
            Why It Matters
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            {component.whyItMatters}
          </p>

        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-black">
            How It Works
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            {component.howItWorks}
          </p>

        </section>

       <RelatedComponents
  related={component.related}
/>

<ComponentVideos
  videos={component.videos}
/>

      </section>

    </main>
  );
}