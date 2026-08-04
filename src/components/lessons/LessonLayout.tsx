import { ReactNode } from "react";

interface LessonLayoutProps {
  title: string;
  subtitle: string;
  difficulty: string;
  readTime: string;
  children: ReactNode;
}

export default function LessonLayout({
  title,
  subtitle,
  difficulty,
  readTime,
  children,
}: LessonLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-slate-800">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex rounded-full border border-cyan-500 bg-cyan-500/10 px-5 py-2 text-cyan-400 font-semibold">
            AI & Data Center Academy
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-black">
            {title}
          </h1>

          <p className="mt-8 max-w-4xl text-xl text-gray-300 leading-9">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-6">

            <div className="rounded-xl bg-slate-900 border border-slate-800 px-6 py-4">

              <p className="text-sm text-gray-400">
                Difficulty
              </p>

              <p className="text-cyan-400 font-bold">
                {difficulty}
              </p>

            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 px-6 py-4">

              <p className="text-sm text-gray-400">
                Reading Time
              </p>

              <p className="text-cyan-400 font-bold">
                {readTime}
              </p>

            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 px-6 py-4">

              <p className="text-sm text-gray-400">
                Updated
              </p>

              <p className="text-cyan-400 font-bold">
                2026
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-10">

          {/* LEFT */}

          <aside className="lg:col-span-1">

            <div className="sticky top-24 rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Lesson Contents
              </h3>

              <nav className="mt-8 space-y-4">

                <a href="#definition" className="block hover:text-cyan-400">
                  📘 Definition
                </a>

                <a href="#history" className="block hover:text-cyan-400">
                  🕒 History
                </a>

                <a href="#how" className="block hover:text-cyan-400">
                  ⚙️ How it Works
                </a>

                <a href="#videos" className="block hover:text-cyan-400">
                  🎥 Videos
                </a>

                <a href="#resources" className="block hover:text-cyan-400">
                  📚 Resources
                </a>

                <a href="#quiz" className="block hover:text-cyan-400">
                  ✅ Quiz
                </a>

                <a href="#career" className="block hover:text-cyan-400">
                  💼 Career
                </a>

                <a href="#glossary" className="block hover:text-cyan-400">
                  📖 Glossary
                </a>

              </nav>

            </div>

          </aside>

          {/* RIGHT */}

          <div className="lg:col-span-3 space-y-20">

            {children}

          </div>

        </div>

      </section>

    </main>
  );
}