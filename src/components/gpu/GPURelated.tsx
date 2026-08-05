import Link from "next/link";

const lessons = [
  {
    title: "Artificial Intelligence",
    href: "/learn/ai",
    emoji: "🤖",
  },
  {
    title: "Data Centers",
    href: "/learn/datacenter",
    emoji: "🏢",
  },
  {
    title: "Cloud Computing",
    href: "/learn/cloud",
    emoji: "☁️",
  },
  {
    title: "Networking",
    href: "/learn/networking",
    emoji: "🌐",
  },
  {
    title: "Machine Learning",
    href: "/learn/machine-learning",
    emoji: "🧠",
  },
];

export default function GPURelated() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.25em] text-cyan-400 font-semibold">
            Continue Learning
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Related Lessons
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Continue exploring the AI ecosystem.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {lessons.map((lesson) => (

            <Link
              key={lesson.title}
              href={lesson.href}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-cyan-500 hover:-translate-y-2"
            >

              <div className="text-6xl">
                {lesson.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {lesson.title}
              </h3>

              <div className="mt-6 font-semibold text-cyan-400">
                Learn More →
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}