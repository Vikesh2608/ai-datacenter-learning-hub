export default function CommunityFeedback() {
  return (
    <section
      id="feedback"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Community Feedback
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            Your feedback helps improve the AI & Data Center Learning Hub.
            Tell us what you enjoyed, what could be improved, or what topics
            you'd like us to cover next.
          </p>

        </div>

        {/* Feedback Form */}

        <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <label className="mb-3 block font-semibold text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
              />

            </div>

            <div>

              <label className="mb-3 block font-semibold text-white">
                Email (Optional)
              </label>

              <input
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
              />

            </div>

          </div>

          <div className="mt-8">

            <label className="mb-3 block font-semibold text-white">
              I am a...
            </label>

            <select
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
            >
              <option>Student</option>
              <option>Teacher</option>
              <option>Engineer</option>
              <option>Researcher</option>
              <option>Journalist</option>
              <option>Developer</option>
              <option>Business Professional</option>
              <option>Technology Enthusiast</option>
              <option>Other</option>
            </select>

          </div>

          <div className="mt-8">

            <label className="mb-3 block font-semibold text-white">
              Overall Experience
            </label>

            <div className="flex flex-wrap gap-3 text-3xl">

              <button className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-purple-500">
                ⭐
              </button>

              <button className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-purple-500">
                ⭐⭐
              </button>

              <button className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-purple-500">
                ⭐⭐⭐
              </button>

              <button className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-purple-500">
                ⭐⭐⭐⭐
              </button>

              <button className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-purple-500">
                ⭐⭐⭐⭐⭐
              </button>

            </div>

          </div>

          <div className="mt-8">

            <label className="mb-3 block font-semibold text-white">
              Your Feedback
            </label>

            <textarea
              rows={7}
              placeholder="Share your thoughts, suggestions, or ideas..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
            />

          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">

            <p className="max-w-xl text-gray-400">
              Feedback submission will be enabled in an upcoming update.
              We appreciate your interest in helping improve this educational platform.
            </p>

            <button
              disabled
              className="cursor-not-allowed rounded-xl bg-purple-500 px-8 py-4 font-bold text-white opacity-60"
            >
              Submit Feedback (Coming Soon)
            </button>

          </div>

        </div>

        {/* Why Feedback Matters */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-5xl">
              💡
            </div>

            <h3 className="mt-5 text-2xl font-bold text-purple-400">
              Better Lessons
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              Your ideas help us improve existing academies and create clearer explanations.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-5xl">
              🚀
            </div>

            <h3 className="mt-5 text-2xl font-bold text-purple-400">
              New Topics
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              Community suggestions influence future academies and educational resources.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-5xl">
              🤝
            </div>

            <h3 className="mt-5 text-2xl font-bold text-purple-400">
              Shared Learning
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              Every thoughtful suggestion contributes to a stronger learning experience for everyone.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}