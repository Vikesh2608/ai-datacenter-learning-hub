import Link from "next/link";

const lessons = [
  {
    emoji: "🤖",
    title: "Artificial Intelligence",
    description:
      "Understand the foundations of AI, intelligent systems, and modern applications.",
    href: "/learn/ai",
    color: "text-cyan-400",
  },
  {
    emoji: "🏢",
    title: "Data Centers",
    description:
      "Learn how hyperscale data centers provide the infrastructure that powers AI.",
    href: "/learn/datacenter",
    color: "text-green-400",
  },
  {
    emoji: "⚡",
    title: "GPU Computing",
    description:
      "Discover why GPUs are essential for training and running machine learning models.",
    href: "/learn/gpu",
    color: "text-yellow-400",
  },
  {
    emoji: "☁️",
    title: "Cloud Computing",
    description:
      "Explore cloud platforms used to build, train, and deploy AI applications.",
    href: "/learn/cloud",
    color: "text-sky-400",
  },
  {
    emoji: "🌐",
    title: "Networking",
    description:
      "Learn how high-speed networking connects servers, GPUs, and cloud infrastructure.",
    href: "/learn/networking",
    color: "text-indigo-400",
  },
];

export default function MachineLearningRelated() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Continue Your Journey
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Explore Related Academies
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            Machine Learning works together with AI, GPUs, cloud computing,
            networking, and data centers. Continue exploring these topics to
            understand how modern AI systems are designed, trained, and deployed.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {lessons.map((lesson) => (

            <Link
              key={lesson.title}
              href={lesson.href}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
            >

              <div className="text-6xl">
                {lesson.emoji}
              </div>

              <h3 className={`mt-6 text-2xl font-bold ${lesson.color} group-hover:text-white`}>
                {lesson.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {lesson.description}
              </p>

              <div className="mt-8 font-semibold text-purple-400">
                Continue Learning →
              </div>

            </Link>

          ))}

        </div>

        {/* Learning Path */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white text-center">
            Your AI Learning Roadmap
          </h2>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="rounded-xl bg-cyan-600 px-6 py-4 font-bold text-white">
              🤖 AI
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-green-600 px-6 py-4 font-bold text-white">
              🏢 Data Centers
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-yellow-500 px-6 py-4 font-bold text-black">
              ⚡ GPUs
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-sky-600 px-6 py-4 font-bold text-white">
              ☁️ Cloud
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white">
              🌐 Networking
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-purple-600 px-6 py-4 font-bold text-white">
              🧠 Machine Learning
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}