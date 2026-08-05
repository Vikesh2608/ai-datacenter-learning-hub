const roadmap = [
  {
    status: "Completed",
    color: "bg-green-500",
    items: [
      "🤖 Artificial Intelligence Academy",
      "🏢 Data Center Academy",
      "⚡ GPU Computing Academy",
      "☁️ Cloud Computing Academy",
      "🌐 Networking Academy",
      "🧠 Machine Learning Academy",
    ],
  },
  {
    status: "In Development",
    color: "bg-yellow-500",
    items: [
      "🐧 Linux Academy",
      "📦 Docker Academy",
      "☸️ Kubernetes Academy",
      "🔒 Cybersecurity Academy",
      "🤖 AI Agents Academy",
    ],
  },
  {
    status: "Future Vision",
    color: "bg-purple-500",
    items: [
      "🎓 Interactive Quizzes",
      "🏆 Learning Certificates",
      "🧪 Hands-on Labs",
      "💬 Community Discussions",
      "📱 Mobile Application",
      "🌎 Multi-language Support",
      "♿ Accessibility Improvements",
      "🎥 Interactive Videos",
      "📰 Technology News Dashboard",
      "🤝 Community Contributors",
    ],
  },
];

export default function CommunityRoadmap() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Roadmap
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Building the Future Together
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            The AI & Data Center Learning Hub is continuously evolving.
            This roadmap shows what has already been built, what is
            currently under development, and the long-term vision for
            creating a free technology education platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {roadmap.map((section) => (

            <div
              key={section.status}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >

              <div
                className={`inline-block rounded-full px-4 py-2 text-white font-bold ${section.color}`}
              >
                {section.status}
              </div>

              <ul className="mt-8 space-y-4">

                {section.items.map((item) => (

                  <li
                    key={item}
                    className="rounded-xl bg-slate-800 p-4 text-gray-300"
                  >
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* Community Message */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Every Suggestion Shapes the Roadmap
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            This roadmap is not fixed. As our community grows, feedback from
            students, educators, engineers, researchers, journalists, and
            lifelong learners will help determine which academies, tools, and
            educational experiences are built next.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Together, we can build a trusted learning platform that helps make
            Artificial Intelligence and modern technology understandable and
            accessible for everyone.
          </p>

        </div>

      </div>

    </section>
  );
}