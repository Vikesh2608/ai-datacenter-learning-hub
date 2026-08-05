import Link from "next/link";

export default function GPUHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-8 pt-32 pb-24">

        {/* Badge */}

        <div className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-cyan-300">
          ⚡ GPU Academy
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-7xl">
          Graphics Processing
          <br />
          <span className="text-cyan-400">Units (GPUs)</span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-4xl text-xl leading-10 text-gray-300">
          Discover how GPUs power Artificial Intelligence, Machine Learning,
          Deep Learning, scientific computing, cloud infrastructure and modern
          AI data centers.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-5">

          <a
            href="https://www.nvidia.com/en-us/data-center/"
            target="_blank"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-black transition hover:bg-cyan-400"
          >
            NVIDIA Data Center →
          </a>

          <a
            href="https://developer.nvidia.com/cuda-zone"
            target="_blank"
            className="rounded-xl border border-cyan-500 px-8 py-4 text-lg text-white transition hover:bg-cyan-500 hover:text-black"
          >
            CUDA Documentation
          </a>

          <Link
            href="/learn/ai"
            className="rounded-xl border border-slate-700 px-8 py-4 text-lg text-white transition hover:border-cyan-500 hover:bg-slate-900"
          >
            ← Back to AI
          </Link>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-cyan-400">
              16,000+
            </div>

            <p className="mt-2 text-gray-300">
              CUDA Cores
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-cyan-400">
              8
            </div>

            <p className="mt-2 text-gray-300">
              GPU Platforms
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-cyan-400">
              AI
            </div>

            <p className="mt-2 text-gray-300">
              Training & Inference
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-cyan-400">
              HPC
            </div>

            <p className="mt-2 text-gray-300">
              Scientific Computing
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}