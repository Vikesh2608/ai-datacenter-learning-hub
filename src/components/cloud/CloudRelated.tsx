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
    title: "GPUs",
    href: "/learn/gpu",
  },
  {
    emoji: "🌐",
    title: "Networking",
    href: "/learn/networking",
  },
  {
    emoji: "🧠",
    title: "Machine Learning",
    href: "/learn/machine-learning",
  },
];

export default function CloudRelated() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-blue-400">
            Continue Learning
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Explore More Academies
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {lessons.map((lesson) => (

            <Link
              key={lesson.title}
              href={lesson.href}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500 hover:-translate-y-2"
            >

              <div className="text-6xl">
                {lesson.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {lesson.title}
              </h3>

              <div className="mt-6 font-semibold text-blue-400">
                Learn More →
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}