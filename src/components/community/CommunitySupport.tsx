export default function CommunitySupport() {
  return (
    <section
      id="support"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Support the Project
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Help Keep Technology Education Free
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            The AI & Data Center Learning Hub is a free educational initiative.
            Our goal is to make Artificial Intelligence and modern technology
            understandable and accessible for students, educators,
            professionals, journalists, researchers, and lifelong learners
            around the world.
          </p>

        </div>

        {/* Why Support */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">📚</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              New Lessons
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Help us create additional academies, tutorials, diagrams,
              quizzes, and educational content.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">☁️</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Platform Infrastructure
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Support website hosting, future cloud services,
              storage, and platform improvements.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🎥</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Interactive Learning
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Help fund animations, interactive labs,
              AI demonstrations, and educational visuals.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🌍</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Global Access
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Support future accessibility improvements,
              translations, and educational outreach.
            </p>

          </div>

        </div>

        {/* Support Options */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-center text-4xl font-black text-white">
            Ways You Can Help
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6 text-center">

              <div className="text-5xl">📢</div>

              <h3 className="mt-4 font-bold text-white">
                Share
              </h3>

              <p className="mt-3 text-gray-300">
                Recommend the Learning Hub to friends,
                colleagues, schools, and communities.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">

              <div className="text-5xl">💬</div>

              <h3 className="mt-4 font-bold text-white">
                Give Feedback
              </h3>

              <p className="mt-3 text-gray-300">
                Help improve existing lessons and
                suggest future academies.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">

              <div className="text-5xl">🤝</div>

              <h3 className="mt-4 font-bold text-white">
                Volunteer
              </h3>

              <p className="mt-3 text-gray-300">
                Share your skills as an educator,
                engineer, writer, designer, or researcher.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">

              <div className="text-5xl">❤️</div>

              <h3 className="mt-4 font-bold text-white">
                Financial Support
              </h3>

              <p className="mt-3 text-gray-300">
                Future support options will help sustain
                this free educational platform.
              </p>

            </div>

          </div>

        </div>

        {/* Future Support */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <div className="text-6xl">
            ❤️
          </div>

          <h2 className="mt-6 text-4xl font-black text-white">
            Support Options Coming Soon
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            As the Learning Hub grows, we'll introduce
            transparent ways for individuals and organizations
            to support ongoing development while keeping
            educational content freely available to everyone.
          </p>

          <button
            disabled
            className="mt-10 cursor-not-allowed rounded-xl bg-purple-500 px-10 py-4 text-lg font-bold text-white opacity-60"
          >
            Support the Project (Coming Soon)
          </button>

        </div>

      </div>
    </section>
  );
}