import Link from "next/link";

export default function CloudHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-8 pt-32 pb-24">

        {/* Badge */}

        <div className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-300">
          ☁️ Cloud Computing Academy
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-7xl">

          Cloud
          <span className="text-blue-400"> Computing</span>

          <br />

          Explained

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-4xl text-xl leading-10 text-gray-300">

          Learn how cloud computing powers modern applications,
          Artificial Intelligence, Data Centers, streaming platforms,
          banking systems, healthcare, manufacturing and billions of
          internet users around the world.

        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap gap-5">

          <a
            href="https://aws.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-400"
          >
            AWS
          </a>

          <a
            href="https://azure.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-blue-500 px-8 py-4 text-lg text-white transition hover:bg-blue-500"
          >
            Microsoft Azure
          </a>

          <a
            href="https://cloud.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-green-500 px-8 py-4 text-lg text-white transition hover:bg-green-500"
          >
            Google Cloud
          </a>

          <Link
            href="/learn/gpu"
            className="rounded-xl border border-slate-700 px-8 py-4 text-lg text-white transition hover:border-cyan-500 hover:bg-slate-900"
          >
            ← Previous Lesson
          </Link>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-4xl font-black text-blue-400">
              99.99%
            </div>

            <p className="mt-2 text-gray-300">
              Cloud Availability
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-4xl font-black text-blue-400">
              Global
            </div>

            <p className="mt-2 text-gray-300">
              Infrastructure
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-4xl font-black text-blue-400">
              AI
            </div>

            <p className="mt-2 text-gray-300">
              Cloud Services
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-4xl font-black text-blue-400">
              200+
            </div>

            <p className="mt-2 text-gray-300">
              Cloud Products
            </p>

          </div>

        </div>

        {/* Cloud Providers */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-3xl font-black text-white">
            Leading Cloud Providers
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3 xl:grid-cols-6">

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">☁️</div>
              <h3 className="mt-3 font-bold text-orange-400">
                AWS
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🟦</div>
              <h3 className="mt-3 font-bold text-blue-400">
                Azure
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🌎</div>
              <h3 className="mt-3 font-bold text-green-400">
                Google
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🏛️</div>
              <h3 className="mt-3 font-bold text-red-400">
                Oracle
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">💻</div>
              <h3 className="mt-3 font-bold text-cyan-400">
                IBM
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🌏</div>
              <h3 className="mt-3 font-bold text-yellow-400">
                Alibaba
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}