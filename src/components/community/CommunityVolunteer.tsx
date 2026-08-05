const volunteerRoles = [
  {
    icon: "👨‍🏫",
    title: "Educators",
    description:
      "Help improve lessons, review educational content, and recommend learning resources.",
  },
  {
    icon: "👨‍💻",
    title: "Software Engineers",
    description:
      "Contribute features, improve the platform, and help build new learning experiences.",
  },
  {
    icon: "✍️",
    title: "Technical Writers",
    description:
      "Create beginner-friendly articles, tutorials, and educational documentation.",
  },
  {
    icon: "🎨",
    title: "UI / UX Designers",
    description:
      "Design engaging interfaces, diagrams, illustrations, and accessible learning experiences.",
  },
  {
    icon: "🌐",
    title: "Translators",
    description:
      "Help make technology education available to learners in multiple languages.",
  },
  {
    icon: "🔬",
    title: "Researchers",
    description:
      "Review technical accuracy, verify sources, and suggest emerging technologies to cover.",
  },
  {
    icon: "🎓",
    title: "Students",
    description:
      "Share ideas, provide feedback, report issues, and grow alongside the community.",
  },
  {
    icon: "❤️",
    title: "Community Supporters",
    description:
      "Help promote free technology education by sharing resources and encouraging others to learn.",
  },
];

export default function CommunityVolunteer() {
  return (
    <section
      id="volunteer"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Volunteer
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Help Build the Future of Technology Education
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            The AI & Data Center Learning Hub is a community-driven educational
            initiative. If you're passionate about teaching, technology, or
            helping others learn, we'd love to welcome your ideas and
            contributions.
          </p>

        </div>

        {/* Volunteer Roles */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {volunteerRoles.map((role) => (

            <div
              key={role.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
            >

              <div className="text-6xl">
                {role.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-purple-400">
                {role.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {role.description}
              </p>

            </div>

          ))}

        </div>

        {/* Volunteer Form */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h3 className="text-3xl font-bold text-white">
            Volunteer Interest Form
          </h3>

          <p className="mt-4 text-gray-300">
            Interested in contributing? Tell us a little about yourself.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

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
                Email
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
              I would like to contribute as...
            </label>

            <select
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
            >
              <option>Educator</option>
              <option>Software Engineer</option>
              <option>Technical Writer</option>
              <option>Researcher</option>
              <option>Student</option>
              <option>Translator</option>
              <option>Designer</option>
              <option>Community Supporter</option>
            </select>

          </div>

          <div className="mt-8">

            <label className="mb-3 block font-semibold text-white">
              Tell us about yourself
            </label>

            <textarea
              rows={6}
              placeholder="Share your experience, interests, or how you'd like to help..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none focus:border-purple-500"
            />

          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5">

            <p className="max-w-xl text-gray-400">
              Volunteer registration will be available in a future update as the
              community grows.
            </p>

            <button
              disabled
              className="cursor-not-allowed rounded-xl bg-purple-500 px-8 py-4 font-bold text-white opacity-60"
            >
              Join the Community (Coming Soon)
            </button>

          </div>

        </div>

        {/* Closing Section */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Every Contribution Matters
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Whether you contribute a new lesson, improve an explanation,
            identify an error, translate content, or simply encourage someone
            to learn, you're helping make technology education more accessible.
            Together, we can build a community where knowledge is shared freely
            and curiosity is encouraged.
          </p>

        </div>

      </div>
    </section>
  );
}