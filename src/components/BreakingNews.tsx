const breaking = [
  {
    title:
      "OpenAI continues expanding enterprise AI adoption across industries.",
  },
  {
    title:
      "NVIDIA Blackwell GPU systems accelerate next-generation AI infrastructure.",
  },
  {
    title:
      "Major hyperscale data centers continue rapid global expansion.",
  },
];

export default function BreakingNews() {
  return (
    <section className="py-16 border-y border-slate-800 bg-slate-900">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center gap-4 mb-8">

          <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

          <h2 className="text-3xl font-black">
            Breaking News
          </h2>

        </div>

        <div className="space-y-5">

          {breaking.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-6 hover:border-cyan-400 transition"
            >
              {item.title}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}