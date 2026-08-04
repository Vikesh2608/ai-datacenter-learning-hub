const cards = [
  {
    emoji: "🤖",
    title: "Artificial Intelligence",
    description: "Learn what AI is, how it works, and why it is transforming the world.",
  },
  {
    emoji: "🏢",
    title: "Data Centers",
    description: "Explore the facilities that power cloud computing and AI services.",
  },
  {
    emoji: "⚡",
    title: "GPUs",
    description: "Understand why GPUs are the engine behind modern AI systems.",
  },
  {
    emoji: "☁️",
    title: "Cloud Computing",
    description: "Discover AWS, Azure, Google Cloud, and how applications scale globally.",
  },
  {
    emoji: "🌐",
    title: "Networking",
    description: "Learn how servers, switches, routers, and cables connect AI infrastructure.",
  },
  {
    emoji: "🧠",
    title: "Machine Learning",
    description: "Understand training, inference, neural networks, and large language models.",
  },
];

export default function LearningCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">
          Choose Your Learning Journey
        </h2>

        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
          From beginner to advanced, explore Artificial Intelligence and
          Data Center technologies through interactive lessons.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-500 hover:scale-105 transition duration-300"
          >
            <div className="text-5xl">{card.emoji}</div>

            <h3 className="mt-6 text-2xl font-bold text-cyan-400">
              {card.title}
            </h3>

            <p className="mt-4 text-gray-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}