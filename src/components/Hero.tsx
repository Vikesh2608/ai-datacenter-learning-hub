export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <p className="mb-4 rounded-full border border-cyan-500 px-4 py-1 text-sm text-cyan-400">
        🌍 Public Learning Platform
      </p>

      <h1 className="text-5xl font-extrabold md:text-7xl">
        AI & Data Center Learning Hub
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-cyan-400 md:text-4xl">
        Explore • Understand • Innovate
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
        Making Artificial Intelligence and Data Center technologies
        understandable for everyone—from children and students to
        professionals, educators, and journalists.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400 transition">
          Start Learning
        </button>

        <button className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-300 hover:bg-cyan-500 hover:text-black transition">
          Latest AI News
        </button>

        <button className="rounded-xl border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition">
          Explore Data Centers
        </button>

      </div>

    </section>
  );
}