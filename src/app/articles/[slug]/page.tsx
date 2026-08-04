import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

import DidYouKnow from "@/components/DidYouKnow";
import Timeline from "@/components/Timeline";
import AIJourneyExplorer from "@/components/AIJourneyExplorer";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="max-w-5xl mx-auto px-8 py-20">

        <p className="text-cyan-400 font-semibold uppercase">
          {article.category} • {article.readingTime}
        </p>

        <h1 className="mt-4 text-6xl font-extrabold">
          {article.title}
        </h1>

        <p className="mt-8 text-2xl text-gray-300 leading-10">
          {article.hero}
        </p>

        <div className="mt-10 flex flex-wrap gap-8 text-gray-400">

          <span>✍ {article.author}</span>

          <span>📅 {article.published}</span>

        </div>

      </section>

      {/* Introduction */}

      <section className="max-w-4xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-cyan-400">
          Imagine This...
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-300">
          {article.introduction}
        </p>

      </section>

      <DidYouKnow
        fact={article.facts[0]}
      />

      <AIJourneyExplorer />

      <section className="max-w-4xl mx-auto px-8">

        {article.sections.map((section) => (

          <div
            key={section.title}
            className="py-16"
          >

            <h2 className="text-4xl font-bold text-cyan-400">
              {section.title}
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              {section.content}
            </p>

          </div>

        ))}

      </section>

      <Timeline
        title="History of Data Centers"
        subtitle="The evolution of modern computing infrastructure."
        items={article.timeline}
      />

    </main>
  );
}