import Link from "next/link";

const cards = [
  {
    emoji: "🤖",
    title: "Artificial Intelligence",
    description:
      "Learn what AI is, how it works, and why it is transforming the world.",
    href: "/learn/ai",
  },
  {
    emoji: "🏢",
    title: "Data Centers",
    description:
      "Explore the facilities that power cloud computing and AI services.",
    href: "/learn/datacenter",
  },
  {
    emoji: "⚡",
    title: "GPUs",
    description:
      "Understand why GPUs are the engine behind modern AI systems.",
    href: "/learn/gpu",
  },
  {
    emoji: "☁️",
    title: "Cloud Computing",
    description:
      "Discover AWS, Azure, Google Cloud, and how applications scale globally.",
    href: "/learn/cloud",
  },
  {
    emoji: "🌐",
    title: "Networking",
    description:
      "Learn how servers, switches, routers, and cables connect AI infrastructure.",
    href: "/learn/networking",
  },
  {
    emoji: "🧠",
    title: "Machine Learning",
    description:
      "Understand training, inference, neural networks, and large language models.",
    href: "/learn/machine-learning",
  },
];

export default function LearningCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold text-white">
          Choose Your Learning Journey
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-gray-400">
          From beginner to advanced, explore Artificial Intelligence,
          Data Center technologies and modern infrastructure through
          interactive lessons.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((card) => (

          <Link
            key={card.title}
            href={card.href}
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:scale-105 hover:border-cyan-500"
          >

            <div className="text-5xl">
              {card.emoji}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-cyan-400 group-hover:text-white">
              {card.title}
            </h3>

            <p className="mt-4 text-gray-300">
              {card.description}
            </p>

            <div className="mt-8 font-semibold text-cyan-400">
              Start Learning →
            </div>

          </Link>

        ))}

      </div>
    </section>
  );
}