import Link from "next/link";
import LiveNewsCard from "@/components/live/LiveNewsCard";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <Link
            href="/news"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to All News
          </Link>

          <p className="mt-10 uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Live Company Coverage
          </p>

          <h1 className="mt-6 text-6xl font-black">
            {category}
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-400 leading-9">
            Stay updated with the latest developments,
            announcements, product launches and industry
            news related to{" "}
            <span className="text-cyan-400 font-semibold">
              {category}
            </span>.
          </p>

        </div>

      </section>

      {/* Featured Story */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-black mb-10">
          Featured {category} Story
        </h2>

        <LiveNewsCard
          category={category}
          color="#06b6d4"
        />

      </section>

      {/* Latest News */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-black mb-10">
          Latest {category} News
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <LiveNewsCard
            category={category}
            color="#22c55e"
          />

          <LiveNewsCard
            category={category}
            color="#3b82f6"
          />

          <LiveNewsCard
            category={category}
            color="#8b5cf6"
          />

          <LiveNewsCard
            category={category}
            color="#f97316"
          />

          <LiveNewsCard
            category={category}
            color="#ef4444"
          />

          <LiveNewsCard
            category={category}
            color="#06b6d4"
          />

        </div>

      </section>

      {/* Continue Learning */}

      <section className="border-t border-slate-800 bg-slate-900 py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Learn More
          </p>

          <h2 className="mt-5 text-5xl font-black">
            Continue Your Learning Journey
          </h2>

          <p className="mt-8 text-xl text-gray-300">
            Explore our academies to understand the technologies
            behind today's headlines.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="/learn/ai"
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 text-black font-bold"
            >
              AI Academy
            </Link>

            <Link
              href="/learn/datacenter"
              className="rounded-xl border border-cyan-500 px-8 py-4 hover:bg-cyan-500/10 transition"
            >
              Data Center Academy
            </Link>

            <Link
              href="/learn/cloud"
              className="rounded-xl border border-cyan-500 px-8 py-4 hover:bg-cyan-500/10 transition"
            >
              Cloud Academy
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}