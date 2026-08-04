import Link from "next/link";

const cards = [
  {
    emoji: "🤖",
    title: "Artificial Intelligence",
    description:
      "Learn what Artificial Intelligence is, how it works, machine learning, deep learning, LLMs, ChatGPT and real-world AI applications.",
    href: "/learn/artificial-intelligence",
  },
  {
    emoji: "🏢",
    title: "Data Centers",
    description:
      "Explore servers, racks, cooling, power, networking and the infrastructure that powers cloud computing and AI.",
    href: "/learn/data-centers",
  },
  {
    emoji: "⚡",
    title: "GPUs",
    description:
      "Understand GPU architecture, CUDA, AI acceleration, NVIDIA GPUs and modern AI computing.",
    href: "/learn/gpu",
  },
  {
    emoji: "☁️",
    title: "Cloud Computing",
    description:
      "Learn AWS, Microsoft Azure, Google Cloud, virtualization, containers and cloud architecture.",
    href: "/learn/cloud",
  },
  {
    emoji: "🌐",
    title: "Networking",
    description:
      "Learn networking fundamentals, TCP/IP, switches, routers, VLANs, fiber optics and data center networking.",
    href: "/learn/networking",
  },
  {
    emoji: "🧠",
    title: "Machine Learning",
    description:
      "Discover supervised learning, neural networks, deep learning, transformers and modern AI models.",
    href: "/learn/machine-learning",
  },
];

export default function LearningCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-16 text-center">

        <h2 className="text-5xl font-black text-white">
          Choose Your Learning Journey
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Learn Artificial Intelligence, Data Centers, Cloud Computing,
          Networking, GPUs and Machine Learning through structured,
          beginner-friendly lessons.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {cards.map((card) => (

          <Link
            key={card.title}
            href={card.href}
            className="block rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
          >

            <div className="text-6xl">
              {card.emoji}
            </div>

            <h3 className="mt-6 text-3xl font-bold text-cyan-400">
              {card.title}
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              {card.description}
            </p>

            <div className="mt-8 flex items-center font-bold text-cyan-400">
              Start Learning
              <span className="ml-2">→</span>
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}