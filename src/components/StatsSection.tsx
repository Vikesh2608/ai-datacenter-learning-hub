const stats = [
  {
    value: "30+",
    title: "AI Lessons",
    description:
      "Structured lessons covering Artificial Intelligence from beginner to advanced.",
    icon: "🤖",
  },
  {
    value: "30+",
    title: "Data Center Lessons",
    description:
      "Learn servers, GPUs, networking, storage, cooling, power and AI infrastructure.",
    icon: "🏢",
  },
  {
    value: "100+",
    title: "Future Articles",
    description:
      "In-depth educational articles written for students, engineers and technology enthusiasts.",
    icon: "📖",
  },
  {
    value: "Daily",
    title: "Industry News",
    description:
      "Follow the latest developments in AI, Cloud Computing, GPUs and Data Centers.",
    icon: "📰",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-widest text-cyan-400 font-semibold">
            Platform Vision
          </p>

          <h2 className="mt-4 text-5xl font-extrabold">
            Learn the Technology Behind Modern AI
          </h2>

          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-9">
            Inside AI is designed to make Artificial Intelligence,
            Data Centers, Cloud Computing and AI Infrastructure
            understandable for students, professionals,
            journalists and curious learners around the world.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-400 transition"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-extrabold text-cyan-400">
                {item.value}
              </h3>

              <h4 className="mt-4 text-2xl font-bold">
                {item.title}
              </h4>

              <p className="mt-5 leading-8 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}