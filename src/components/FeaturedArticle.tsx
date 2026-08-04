import Link from "next/link";

export default function FeaturedArticle() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <p className="uppercase tracking-widest text-cyan-400 font-semibold">
              Featured Story
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-extrabold leading-tight">

              The Silent Cities
              <br />
              That Power
              <br />
              Human Civilization

            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-300">

              Every ChatGPT conversation, every online payment,
              every streamed movie, every Google search and every
              cloud application depends upon one of humanity's
              greatest engineering achievements—the modern Data Center.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/articles/the-silent-cities-that-power-human-civilization"
                className="rounded-xl bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 text-black font-bold"
              >
                Read Article →
              </Link>

              <Link
                href="/learn/datacenter"
                className="rounded-xl border border-cyan-500 px-8 py-4 hover:bg-cyan-500/10 transition"
              >
                Learn Data Centers
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="rounded-3xl border border-cyan-500 bg-slate-900 p-10">

              <div className="text-7xl text-center">
                🏢
              </div>

              <h3 className="mt-8 text-3xl font-bold text-center">

                Modern AI Data Center

              </h3>

              <div className="mt-10 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-800 p-5">

                  <div className="text-4xl">
                    🖥
                  </div>

                  <p className="mt-3 font-semibold">
                    Servers
                  </p>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <div className="text-4xl">
                    🎮
                  </div>

                  <p className="mt-3 font-semibold">
                    GPUs
                  </p>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <div className="text-4xl">
                    🌐
                  </div>

                  <p className="mt-3 font-semibold">
                    Networking
                  </p>

                </div>

                <div className="rounded-xl bg-slate-800 p-5">

                  <div className="text-4xl">
                    ❄
                  </div>

                  <p className="mt-3 font-semibold">
                    Cooling
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}