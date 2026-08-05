const learningTypes = [
  {
    icon: "📚",
    title: "Supervised Learning",
    color: "text-green-400",
    description:
      "Supervised learning uses labeled data, where the correct answer is already known. The model learns by comparing its predictions with the correct labels.",
    examples: [
      "Email spam detection",
      "House price prediction",
      "Medical diagnosis",
      "Image classification",
    ],
  },
  {
    icon: "🔍",
    title: "Unsupervised Learning",
    color: "text-blue-400",
    description:
      "Unsupervised learning works with unlabeled data. The model discovers hidden patterns, similarities, or groups without knowing the correct answers beforehand.",
    examples: [
      "Customer segmentation",
      "Market basket analysis",
      "Fraud detection",
      "Data clustering",
    ],
  },
  {
    icon: "⚖️",
    title: "Semi-Supervised Learning",
    color: "text-yellow-400",
    description:
      "Semi-supervised learning combines a small amount of labeled data with a much larger amount of unlabeled data to improve learning efficiency.",
    examples: [
      "Medical imaging",
      "Speech recognition",
      "Document classification",
      "Image recognition",
    ],
  },
  {
    icon: "🎮",
    title: "Reinforcement Learning",
    color: "text-purple-400",
    description:
      "Reinforcement learning teaches an agent through rewards and penalties. The system learns by interacting with an environment and improving over time.",
    examples: [
      "Robotics",
      "Game playing",
      "Autonomous vehicles",
      "Resource optimization",
    ],
  },
];

export default function MachineLearningTypes() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Learning Approaches
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Types of Machine Learning
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Machine learning is not a single technique. Different learning
            approaches are used depending on the type of data available and
            the problem being solved.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {learningTypes.map((type) => (

            <div
              key={type.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
            >

              <div className="text-6xl">
                {type.icon}
              </div>

              <h3 className={`mt-6 text-3xl font-bold ${type.color}`}>
                {type.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {type.description}
              </p>

              <div className="mt-8">

                <h4 className="text-xl font-bold text-white">
                  Common Applications
                </h4>

                <ul className="mt-4 space-y-2 text-gray-300">

                  {type.examples.map((example) => (

                    <li key={example}>
                      • {example}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

        {/* Comparison Table */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Comparing the Four Learning Types
          </h2>

          <div className="mt-10 overflow-x-auto">

            <table className="min-w-full border-collapse">

              <thead>

                <tr className="border-b border-slate-700">

                  <th className="p-4 text-left text-purple-400">Learning Type</th>
                  <th className="p-4 text-left text-purple-400">Uses Labels?</th>
                  <th className="p-4 text-left text-purple-400">Primary Goal</th>

                </tr>

              </thead>

              <tbody className="text-gray-300">

                <tr className="border-b border-slate-800">
                  <td className="p-4">Supervised</td>
                  <td className="p-4">✅ Yes</td>
                  <td className="p-4">Prediction & Classification</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-4">Unsupervised</td>
                  <td className="p-4">❌ No</td>
                  <td className="p-4">Find Hidden Patterns</td>
                </tr>

                <tr className="border-b border-slate-800">
                  <td className="p-4">Semi-Supervised</td>
                  <td className="p-4">⚠️ Partially</td>
                  <td className="p-4">Improve Learning with Limited Labels</td>
                </tr>

                <tr>
                  <td className="p-4">Reinforcement</td>
                  <td className="p-4">🏆 Rewards</td>
                  <td className="p-4">Decision Making & Optimization</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Summary */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Choosing the Right Approach
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            The choice of learning method depends on your data and your goal.
            If you have labeled examples, supervised learning is often a good
            choice. If you're exploring unknown patterns, unsupervised learning
            can be valuable. Semi-supervised learning helps when labeled data is
            scarce, while reinforcement learning is well suited for systems that
            improve through interaction and feedback.
          </p>

        </div>

      </div>

    </section>
  );
}