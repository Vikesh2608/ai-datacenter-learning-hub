import LiveNewsCard from "@/components/live/LiveNewsCard";

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.category);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Live Industry Coverage
          </p>

          <h1 className="mt-6 text-6xl font-black">
            {category}
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-400 leading-9">
            Live news, analysis and industry updates about{" "}
            <span className="text-cyan-400 font-semibold">
              {category}
            </span>.
            Articles update automatically from GNews.
          </p>

        </div>

      </section>

      {/* Featured */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <LiveNewsCard
          category={category}
          color="#06b6d4"
        />

      </section>

      {/* More Articles */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-black mb-10">
          More {category} News
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

    </main>
  );
}