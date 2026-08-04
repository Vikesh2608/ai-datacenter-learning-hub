import NewsHero from "@/components/news/NewsHero";
import BreakingNews from "@/components/BreakingNews";
import FeaturedArticle from "@/components/FeaturedArticle";
import NewsCategoryGrid from "@/components/NewsCategoryGrid";
import LiveNewsCard from "@/components/live/LiveNewsCard";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <NewsHero />

      {/* Breaking News */}
      <BreakingNews />

      {/* Featured Story */}
      <FeaturedArticle />

      {/* Latest Live Company News */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.25em] font-semibold">
            Live Industry Updates
          </p>

          <h2 className="mt-4 text-5xl font-black">
            AI & Data Center News
          </h2>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl">
            Live headlines from OpenAI, NVIDIA, Microsoft, Google,
            AMD, Intel, AWS, Meta and the global AI infrastructure
            ecosystem.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          <LiveNewsCard
            category="OpenAI"
            color="#22c55e"
          />

          <LiveNewsCard
            category="NVIDIA"
            color="#84cc16"
          />

          <LiveNewsCard
            category="Microsoft"
            color="#3b82f6"
          />

          <LiveNewsCard
            category="Google"
            color="#ef4444"
          />

          <LiveNewsCard
            category="AWS"
            color="#f97316"
          />

          <LiveNewsCard
            category="Meta"
            color="#8b5cf6"
          />

          <LiveNewsCard
            category="AMD"
            color="#f43f5e"
          />

          <LiveNewsCard
            category="Intel"
            color="#60a5fa"
          />

          <LiveNewsCard
            category="Data Center"
            color="#06b6d4"
          />

        </div>

      </section>

      {/* Categories */}

      <NewsCategoryGrid />

      {/* Footer */}

      <section className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl font-black">
            AI & Data Center Learning Hub
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            More than a news website. Learn Artificial Intelligence,
            Data Centers, Cloud Computing, GPUs, Networking,
            Semiconductors, Cybersecurity and the technology powering
            the future.
          </p>

        </div>

      </section>

    </main>
  );
}