import Link from "next/link";

const categories = [
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    description:
      "Learn what AI is, how it works, and where it is used today.",
    href: "/learn/ai",
  },
  {
    title: "Data Centers",
    icon: "🏢",
    description:
      "Explore the infrastructure powering cloud computing and AI.",
    href: "/learn/datacenter",
  },
  {
    title: "GPUs",
    icon: "⚡",
    description:
      "Understand how GPUs accelerate AI training and inference.",
    href: "/learn/gpu",
  },
  {
    title: "Cloud Computing",
    icon: "☁️",
    description:
      "Learn AWS, Azure, Google Cloud, and scalable applications.",
    href: "/learn/cloud",
  },
  {
    title: "Networking",
    icon: "🌐",
    description:
      "Discover how servers, switches, routers, and networks connect.",
    href: "/learn/networking",
  },
  {
    title: "Machine Learning",
    icon: "🧠",
    description:
      "Understand machine learning algorithms and neural networks.",
    href: "/learn/machine-learning",
  },
];

export default function LearningCategories() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            Explore Learning Categories
          </h2>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Choose a technology and start learning from beginner to
            advanced with structured lessons, videos, quizzes and
            practical resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400 hover:-translate-y-2"
            >
              <div className="text-6xl">{category.icon}</div>

              <h3 className="mt-6 text-3xl font-bold text-cyan-400 group-hover:text-white">
                {category.title}
              </h3>

              <p className="mt-6 text-gray-300 leading-8">
                {category.description}
              </p>

              <div className="mt-8 font-semibold text-cyan-400">
                Start Learning →
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}