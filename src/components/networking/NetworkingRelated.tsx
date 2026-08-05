import Link from "next/link";

const lessons = [
  {
    emoji: "🤖",
    title: "Artificial Intelligence",
    href: "/learn/ai",
  },
  {
    emoji: "🏢",
    title: "Data Centers",
    href: "/learn/datacenter",
  },
  {
    emoji: "⚡",
    title: "GPU Computing",
    href: "/learn/gpu",
  },
  {
    emoji: "☁️",
    title: "Cloud Computing",
    href: "/learn/cloud",
  },
  {
    emoji: "🧠",
    title: "Machine Learning",
    href: "/learn/machine-learning",
  },
];

export default function NetworkingRelated() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-sky-400 font-semibold">
            Continue Learning
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Related Academies
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            Networking is one part of the modern technology ecosystem.
            Continue your learning journey with these connected subjects.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {lessons.map((lesson) => (

            <Link
              key={lesson.title}
              href={lesson.href}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20"
            >

              <div className="text-6xl">
                {lesson.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {lesson.title}
              </h3>

              <div className="mt-8 font-semibold text-sky-400">
                Learn More →
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}