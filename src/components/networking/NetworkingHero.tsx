import Link from "next/link";

export default function NetworkingHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-8 pt-32 pb-24">

        {/* Badge */}

        <div className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-5 py-2 text-sky-300">
          🌐 Networking Academy
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-7xl">

          Computer
          <span className="text-sky-400"> Networking</span>

          <br />

          Explained

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-4xl text-xl leading-10 text-gray-300">

          Discover how computers communicate across homes,
          businesses, cloud platforms, AI data centers and the Internet.
          Learn networking from beginner to advanced using real-world
          examples and modern AI infrastructure.

        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap gap-5">

          <a
            href="https://www.cisco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-sky-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-sky-400"
          >
            Cisco Networking
          </a>

          <a
            href="https://www.cloudflare.com/learning/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-sky-500 px-8 py-4 text-lg text-white transition hover:bg-sky-500"
          >
            Cloudflare Learning
          </a>

          <a
            href="https://www.nvidia.com/en-us/networking/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-green-500 px-8 py-4 text-lg text-white transition hover:bg-green-500"
          >
            NVIDIA Networking
          </a>

          <Link
            href="/learn/cloud"
            className="rounded-xl border border-slate-700 px-8 py-4 text-lg text-white transition hover:border-sky-500 hover:bg-slate-900"
          >
            ← Previous Lesson
          </Link>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-sky-400">
              TCP/IP
            </div>
            <p className="mt-2 text-gray-300">
              Network Foundation
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-sky-400">
              800G
            </div>
            <p className="mt-2 text-gray-300">
              AI Networking
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-sky-400">
              Global
            </div>
            <p className="mt-2 text-gray-300">
              Internet Backbone
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-sky-400">
              AI
            </div>
            <p className="mt-2 text-gray-300">
              Data Center Fabrics
            </p>
          </div>

        </div>

        {/* Technologies */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-3xl font-black text-white">
            Networking Technologies You'll Learn
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3 xl:grid-cols-6">

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🌐</div>
              <h3 className="mt-3 font-bold text-sky-400">
                TCP/IP
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">📡</div>
              <h3 className="mt-3 font-bold text-sky-400">
                DNS
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🔀</div>
              <h3 className="mt-3 font-bold text-sky-400">
                Routing
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🛡️</div>
              <h3 className="mt-3 font-bold text-sky-400">
                Firewalls
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-3 font-bold text-sky-400">
                InfiniBand
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🤖</div>
              <h3 className="mt-3 font-bold text-sky-400">
                AI Fabrics
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}