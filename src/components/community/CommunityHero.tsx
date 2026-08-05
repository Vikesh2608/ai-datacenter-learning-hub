import Link from "next/link";

export default function CommunityHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-8 pt-24 pb-28">

        {/* Badge */}

        <div className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-purple-300">
          🌍 Building a Global Technology Learning Community
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
          Join Our
          <span className="text-purple-400"> Community</span>
        </h1>

        {/* Subtitle */}

        <p className="mt-10 max-w-4xl text-xl leading-10 text-gray-300">
          Technology grows stronger when people learn together.

          The AI & Data Center Learning Hub is an open educational community
          where students, educators, engineers, journalists, researchers,
          policymakers, and lifelong learners can share ideas, inspire one
          another, and make Artificial Intelligence understandable for everyone.
        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap gap-5">

          <Link
            href="#feedback"
            className="rounded-xl bg-purple-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-purple-400"
          >
            💬 Leave Feedback
          </Link>

          <Link
            href="#ideas"
            className="rounded-xl border border-purple-500 px-8 py-4 text-lg text-white transition hover:bg-purple-500"
          >
            💡 Suggest a Topic
          </Link>

          <Link
            href="#volunteer"
            className="rounded-xl border border-slate-700 px-8 py-4 text-lg text-white transition hover:border-purple-500 hover:bg-slate-900"
          >
            🤝 Become a Volunteer
          </Link>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-4xl font-black text-purple-400">
              6
            </div>

            <p className="mt-2 text-gray-300">
              Learning Academies
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-4xl font-black text-purple-400">
              Free
            </div>

            <p className="mt-2 text-gray-300">
              Educational Platform
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-4xl font-black text-purple-400">
              Open
            </div>

            <p className="mt-2 text-gray-300">
              Community Driven
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-4xl font-black text-purple-400">
              Global
            </div>

            <p className="mt-2 text-gray-300">
              For Everyone
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}