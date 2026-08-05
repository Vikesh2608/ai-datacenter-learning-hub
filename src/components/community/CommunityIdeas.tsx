const suggestedTopics = [
  "🐧 Linux Academy",
  "📦 Docker",
  "☸️ Kubernetes",
  "🔒 Cybersecurity",
  "🤖 AI Agents",
  "🧠 Generative AI",
  "🗄️ Databases",
  "📊 Data Engineering",
  "⚙️ DevOps",
  "🌍 Edge Computing",
  "🔬 Quantum Computing",
  "🚗 Autonomous Vehicles",
];

export default function CommunityIdeas() {
  return (
    <section
      id="ideas"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Community Ideas
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Help Shape Future Academies
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            The AI & Data Center Learning Hub is continuously growing.
            Tell us what technologies, tutorials, or educational content
            you'd like to see next.
          </p>

        </div>

        {/* Popular Requests */}

        <div className="mt-20">

          <h3 className="text-3xl font-bold text-white text-center">
            Popular Community Requests
          </h3>

          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-4">

            {suggestedTopics.map((topic) => (

              <div
                key={topic}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center transition hover:border-purple-500 hover:bg-slate-800"
              >
                <p className="font-semibold text-white">
                  {topic}
                </p>
              </div>

            ))}

          </div>

        </div>

        {/* Suggestion Form */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h3 className="text-3xl font-bold text-white">
            Suggest a New Topic
          </h3>

          <p className="mt-4 text-gray-300">
            Have an idea that isn't listed? We'd love to hear it.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <div>

              <label className="mb-3 block font-semibold text-white">
                Topic Name
              </label>

              <input
                type="text"
                placeholder="Example: Robotics"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
              />

            </div>

            <div>

              <label className="mb-3 block font-semibold text-white">
                Category
              </label>

              <select
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
              >
                <option>Artificial Intelligence</option>
                <option>Cloud Computing</option>
                <option>Networking</option>
                <option>Cybersecurity</option>
                <option>Programming</option>
                <option>Data Engineering</option>
                <option>Infrastructure</option>
                <option>Other</option>
              </select>

            </div>

          </div>

          <div className="mt-8">

            <label className="mb-3 block font-semibold text-white">
              Why should we build this?
            </label>

            <textarea
              rows={6}
              placeholder="Tell us why this topic would help learners..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
            />

          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">

            <p className="max-w-xl text-gray-400">
              Community topic suggestions will be enabled in an upcoming
              release. Your ideas will help guide future educational content.
            </p>

            <button
              disabled
              className="cursor-not-allowed rounded-xl bg-purple-500 px-8 py-4 font-bold text-white opacity-60"
            >
              Submit Idea (Coming Soon)
            </button>

          </div>

        </div>

        {/* Vision */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Built With the Community
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Great educational platforms evolve by listening to their learners.
            Your suggestions can influence future academies, interactive labs,
            quizzes, articles, and learning paths. Together, we can build a
            free technology resource that benefits students, educators,
            professionals, journalists, and lifelong learners around the world.
          </p>

        </div>

      </div>
    </section>
  );
}