export default function FounderHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        <span className="inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-semibold">
          👋 Meet the Founder
        </span>

        <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight text-white">

          Vikesh

          <span className="block text-cyan-400">
            Bairam
          </span>

        </h1>

        <p className="mt-10 max-w-4xl text-xl leading-10 text-gray-300">

          Welcome to the <strong>AI & Data Center Learning Hub</strong>.

          <br /><br />

          I created this platform with one mission:
          to make Artificial Intelligence, Data Centers,
          Cloud Computing, Networking, GPUs and modern
          infrastructure understandable for everyone.

          <br /><br />

          Whether you're a student beginning your journey,
          an engineer building AI systems,
          a journalist exploring emerging technologies,
          or simply curious about how today's digital world works,
          this platform is designed to help you learn with
          practical explanations, real-world examples and
          continuously updated technology news.

        </p>

        <div className="mt-14 flex flex-wrap gap-5">

          <a
            href="https://www.linkedin.com/in/vikesh-bairam-219769258/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Vikesh2608"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-cyan-500 px-8 py-4 font-bold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            GitHub
          </a>

          <a
            href="https://medium.com/@vikebairam"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-green-500 px-8 py-4 font-bold text-green-400 transition hover:bg-green-500/10"
          >
            Medium
          </a>

        </div>

      </div>

    </section>
  );
}