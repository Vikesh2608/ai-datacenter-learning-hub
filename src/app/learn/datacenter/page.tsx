import Link from "next/link";

export default function DataCenterAcademy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">

        <h1 className="text-6xl font-extrabold">
          🏢 Data Center Academy
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-9">
          Discover the hidden infrastructure that powers Artificial
          Intelligence, cloud computing, streaming services,
          online banking, healthcare, scientific research,
          and modern digital life.

          Learn from beginner to advanced through structured lessons,
          diagrams, articles, quizzes, videos, and real-world examples.
        </p>

        <Link
          href="/learn/datacenter/1"
          className="inline-block mt-10 rounded-xl bg-cyan-500 px-8 py-4 text-xl font-bold text-black hover:bg-cyan-400 transition"
        >
          🚀 Start Learning
        </Link>

      </section>

      {/* Featured Article */}

      <section className="mx-auto max-w-6xl px-6 py-12">

        <div className="rounded-3xl border border-cyan-700 bg-slate-900 p-10">

          <p className="text-cyan-400 font-bold uppercase tracking-widest">
            Featured Article
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            The Silent Cities That Power Human Civilization
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Every AI conversation, every online payment,
            every streamed movie, every cloud application,
            and every scientific discovery depends upon
            one of humanity's greatest engineering achievements:
            the modern Data Center.

            Explore how these remarkable facilities quietly
            power our digital civilization.
          </p>

          <button className="mt-8 rounded-xl border border-cyan-500 px-6 py-3 hover:bg-cyan-500 hover:text-black transition">
            Read Article →
          </button>

        </div>

      </section>

      {/* Learning Path */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="text-5xl font-bold text-center">
          📚 Learning Roadmap
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {[
            "01 • Why Data Centers Exist",
            "02 • History of Data Centers",
            "03 • What is a Data Center?",
            "04 • Types of Data Centers",
            "05 • Servers",
            "06 • CPUs",
            "07 • GPUs",
            "08 • Memory",
            "09 • Storage",
            "10 • Networking",
            "11 • Fiber Optics",
            "12 • Power Systems",
            "13 • Cooling",
            "14 • Server Racks",
            "15 • AI Infrastructure",
          ].map((lesson) => (

            <div
              key={lesson}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500 transition"
            >
              <h3 className="text-2xl font-bold">
                {lesson}
              </h3>
            </div>

          ))}

        </div>

      </section>

      {/* News */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="text-5xl font-bold text-center">
          📰 Live AI Infrastructure News
        </h2>

        <p className="mt-6 text-center text-gray-400">
          Coming soon: Live news from NVIDIA, OpenAI,
          AWS, Azure, Google Cloud, Data Centers,
          Networking, Semiconductors, and AI Research.
        </p>

      </section>

    </main>
  );
}