import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-8 pt-24 pb-28">

        {/* Badge */}

        <div className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-cyan-300">
          🚀 Learn the technology powering Artificial Intelligence
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl font-black leading-tight">

          Inside
          <span className="text-cyan-400"> AI</span>

          <br />

          Learning Hub

        </h1>

        {/* Subtitle */}

        <p className="mt-10 max-w-4xl text-xl leading-10 text-gray-300">

          Learn Artificial Intelligence, Data Centers,
          Cloud Computing, GPUs, Networking and the hidden
          infrastructure powering our modern digital world.

          Designed for students, engineers,
          journalists, professionals and anyone curious
          about the future of technology.

        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap gap-5">

          <Link
            href="/learn/ai"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-black hover:bg-cyan-400 transition"
          >
            🤖 Start AI Academy
          </Link>

          <Link
            href="/learn/datacenter"
            className="rounded-xl border border-cyan-500 px-8 py-4 text-lg hover:bg-cyan-500/10 transition"
          >
            🏢 Explore Data Centers
          </Link>

          <Link
            href="/articles"
            className="rounded-xl border border-slate-700 px-8 py-4 text-lg hover:border-cyan-500 transition"
          >
            📖 Read Articles
          </Link>

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-cyan-400">30+</div>
            <p className="mt-2 text-gray-300">AI Lessons</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-cyan-400">30+</div>
            <p className="mt-2 text-gray-300">Data Center Lessons</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-cyan-400">100+</div>
            <p className="mt-2 text-gray-300">Educational Articles</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-cyan-400">Daily</div>
            <p className="mt-2 text-gray-300">Industry News</p>
          </div>

        </div>

      </div>

    </section>
  );
}