export default function CommunityRecognition() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Recognition & Appreciation
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Thank You for Supporting Technology Education
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            The AI & Data Center Learning Hub is built with a simple goal:
            making Artificial Intelligence and modern technology easier to
            understand for everyone. Every learner, educator, volunteer,
            contributor, and organization that supports this mission helps us
            move one step closer to that vision.
          </p>

        </div>

        {/* Recognition Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🎓</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Learners
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Thank you to every student, professional, educator, journalist,
              and lifelong learner who visits the Learning Hub to explore new
              technologies.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🤝</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Community Contributors
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Future volunteers, writers, designers, researchers, translators,
              and developers will help improve and expand this educational
              platform.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🏫</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Educational Community
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              We welcome collaboration with schools, universities, libraries,
              STEM organizations, and community groups that share our passion
              for education.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🌍</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Global Community
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Our vision is to make reliable technology education accessible
              across cultures, industries, and communities around the world.
            </p>

          </div>

        </div>

        {/* Featured In */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Featured In
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            As the AI & Data Center Learning Hub grows, this section will
            acknowledge articles, interviews, community features, educational
            collaborations, and organizations that have highlighted or shared
            this project.
          </p>

          <div className="mt-10 rounded-2xl border border-dashed border-purple-500 p-8 text-center">

            <div className="text-5xl">
              📰
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">
              Coming Soon
            </h3>

            <p className="mt-4 text-gray-300">
              Future community features and educational collaborations will be
              recognized here.
            </p>

          </div>

        </div>

        {/* Appreciation */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Our Thanks
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Thank you for being part of this journey. Whether you're exploring
            your first AI lesson, sharing constructive feedback, volunteering,
            or simply recommending the Learning Hub to others, your support
            helps make technology education more accessible.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Together, we can build a trusted learning community where curiosity,
            collaboration, and lifelong learning inspire the next generation of
            innovators.
          </p>

        </div>

      </div>

    </section>
  );
}