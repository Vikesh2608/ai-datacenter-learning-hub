export default function FounderStats() {
  const stats = [
    {
      value: "10+",
      label: "Learning Modules",
    },
    {
      value: "24/7",
      label: "Technology News",
    },
    {
      value: "100%",
      label: "Free Learning",
    },
    {
      value: "∞",
      label: "Continuous Growth",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Platform at a Glance
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center hover:border-cyan-500 transition"
            >
              <div className="text-5xl font-black text-cyan-400">
                {stat.value}
              </div>

              <div className="mt-4 text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}