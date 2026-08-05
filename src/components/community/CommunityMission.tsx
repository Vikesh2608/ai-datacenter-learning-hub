export default function CommunityMission() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Our Mission
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Technology Should Be Understood by Everyone
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Artificial Intelligence is transforming healthcare, education,
            manufacturing, agriculture, transportation, finance, scientific
            research, and everyday life. Understanding these technologies should
            not be limited to engineers or computer scientists—it should be
            accessible to everyone.
          </p>

        </div>

        {/* Mission, Vision, Community */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🎯</div>

            <h3 className="mt-6 text-3xl font-bold text-purple-400">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              To provide free, accurate, and beginner-friendly educational
              resources that help people understand Artificial Intelligence,
              Data Centers, GPU Computing, Cloud Computing, Networking, Machine
              Learning, and the technologies shaping our future.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🌍</div>

            <h3 className="mt-6 text-3xl font-bold text-purple-400">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              To build an open educational platform where students, educators,
              professionals, journalists, researchers, and curious learners can
              discover reliable technology knowledge regardless of their
              background or experience.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🤝</div>

            <h3 className="mt-6 text-3xl font-bold text-purple-400">
              Community
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              We believe learning grows stronger when people ask questions,
              share ideas, contribute resources, provide constructive feedback,
              and help others understand technology in an inclusive and
              respectful environment.
            </p>

          </div>

        </div>

        {/* Core Values */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-center text-4xl font-black text-white">
            Our Core Values
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6 text-center">

              <div className="text-5xl">📚</div>

              <h3 className="mt-4 font-bold text-white">
                Education
              </h3>

              <p className="mt-3 text-gray-300">
                Make complex technology easier to understand.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">

              <div className="text-5xl">🌐</div>

              <h3 className="mt-4 font-bold text-white">
                Accessibility
              </h3>

              <p className="mt-3 text-gray-300">
                Keep learning open and available to everyone.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">

              <div className="text-5xl">🤝</div>

              <h3 className="mt-4 font-bold text-white">
                Collaboration
              </h3>

              <p className="mt-3 text-gray-300">
                Encourage respectful discussions and shared learning.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">

              <div className="text-5xl">🚀</div>

              <h3 className="mt-4 font-bold text-white">
                Innovation
              </h3>

              <p className="mt-3 text-gray-300">
                Inspire curiosity about emerging technologies.
              </p>

            </div>

          </div>

        </div>

        {/* Community Invitation */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            You're Invited to Help Shape This Platform
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            The AI & Data Center Learning Hub is designed to grow alongside its
            community. Your ideas, feedback, and experiences can help improve
            existing lessons, inspire new academies, and make technology
            education more valuable for learners around the world.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Whether you're a student taking your first steps into AI, an
            educator looking for teaching resources, an engineer sharing
            practical knowledge, or simply someone curious about technology,
            your participation is welcome.
          </p>

        </div>

      </div>

    </section>
  );
}