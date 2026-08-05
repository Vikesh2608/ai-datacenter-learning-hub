const deepLearningTopics = [
  {
    icon: "🧠",
    title: "Artificial Neural Networks (ANN)",
    color: "text-purple-400",
    description:
      "Artificial Neural Networks are inspired by the human brain. They consist of layers of interconnected nodes (neurons) that learn patterns from data.",
    examples: [
      "Pattern recognition",
      "Regression",
      "Classification",
    ],
  },
  {
    icon: "👁️",
    title: "Convolutional Neural Networks (CNN)",
    color: "text-blue-400",
    description:
      "CNNs specialize in analyzing images and videos by automatically detecting features such as edges, textures, shapes, and objects.",
    examples: [
      "Medical imaging",
      "Face recognition",
      "Self-driving cars",
    ],
  },
  {
    icon: "🔁",
    title: "Recurrent Neural Networks (RNN)",
    color: "text-green-400",
    description:
      "RNNs process sequential information where previous inputs influence future predictions, making them useful for time-based data.",
    examples: [
      "Speech recognition",
      "Language translation",
      "Time-series forecasting",
    ],
  },
  {
    icon: "✨",
    title: "Transformers",
    color: "text-pink-400",
    description:
      "Transformers revolutionized AI by processing entire sequences simultaneously using attention mechanisms, making them highly efficient for language understanding.",
    examples: [
      "ChatGPT",
      "Google Gemini",
      "Machine translation",
    ],
  },
  {
    icon: "💬",
    title: "Large Language Models (LLMs)",
    color: "text-orange-400",
    description:
      "LLMs are transformer-based deep learning models trained on massive datasets to understand and generate natural language.",
    examples: [
      "ChatGPT",
      "Claude",
      "Llama",
    ],
  },
  {
    icon: "⚡",
    title: "GPU Computing",
    color: "text-cyan-400",
    description:
      "Modern deep learning depends on GPUs because they can perform thousands of mathematical operations simultaneously, dramatically accelerating AI training and inference.",
    examples: [
      "NVIDIA H100",
      "NVIDIA B200",
      "GPU Clusters",
    ],
  },
];

export default function DeepLearning() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Deep Learning
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Teaching Machines to Learn Complex Patterns
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Deep Learning is an advanced branch of Machine Learning that uses
            neural networks with multiple layers to solve highly complex
            problems such as image recognition, speech recognition,
            natural language understanding, robotics, and generative AI.
          </p>

        </div>

        {/* Hierarchy */}

        <div className="mt-20 rounded-3xl border border-purple-500/20 bg-slate-900 p-12">

          <h3 className="text-center text-4xl font-black text-white">
            AI Learning Hierarchy
          </h3>

          <div className="mt-12 flex flex-col items-center gap-5">

            <div className="rounded-xl bg-purple-700 px-10 py-4 text-2xl font-bold text-white">
              Artificial Intelligence
            </div>

            <div className="text-4xl text-purple-400">↓</div>

            <div className="rounded-xl bg-purple-600 px-10 py-4 text-2xl font-bold text-white">
              Machine Learning
            </div>

            <div className="text-4xl text-purple-400">↓</div>

            <div className="rounded-xl bg-purple-500 px-10 py-4 text-2xl font-bold text-white">
              Deep Learning
            </div>

            <div className="text-4xl text-purple-400">↓</div>

            <div className="rounded-xl bg-pink-500 px-10 py-4 text-2xl font-bold text-white">
              Generative AI & Large Language Models
            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {deepLearningTopics.map((topic) => (

            <div
              key={topic.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
            >

              <div className="text-6xl">
                {topic.icon}
              </div>

              <h3 className={`mt-6 text-2xl font-bold ${topic.color}`}>
                {topic.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {topic.description}
              </p>

              <div className="mt-8">

                <h4 className="font-bold text-white">
                  Common Applications
                </h4>

                <ul className="mt-4 space-y-2 text-gray-300">

                  {topic.examples.map((example) => (

                    <li key={example}>
                      • {example}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

        {/* Deep Learning Workflow */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            How Deep Learning Works
          </h2>

          <div className="mt-10 grid gap-6 text-center md:grid-cols-9">

            <div>
              <div className="text-5xl">📊</div>
              <p className="mt-2 text-white font-semibold">Data</p>
            </div>

            <div className="flex items-center justify-center text-3xl text-purple-400">
              →
            </div>

            <div>
              <div className="text-5xl">🧠</div>
              <p className="mt-2 text-white font-semibold">Neural Network</p>
            </div>

            <div className="flex items-center justify-center text-3xl text-purple-400">
              →
            </div>

            <div>
              <div className="text-5xl">⚡</div>
              <p className="mt-2 text-white font-semibold">GPU Training</p>
            </div>

            <div className="flex items-center justify-center text-3xl text-purple-400">
              →
            </div>

            <div>
              <div className="text-5xl">🎯</div>
              <p className="mt-2 text-white font-semibold">Prediction</p>
            </div>

            <div className="flex items-center justify-center text-3xl text-purple-400">
              →
            </div>

            <div>
              <div className="text-5xl">🤖</div>
              <p className="mt-2 text-white font-semibold">AI Application</p>
            </div>

          </div>

        </div>

        {/* Real-World Uses */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Deep Learning in the Real World
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6">
              <div className="text-5xl">🏥</div>
              <h3 className="mt-4 font-bold text-white">Healthcare</h3>
              <p className="mt-2 text-gray-300">
                Detect diseases from medical images and assist doctors with diagnosis.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <div className="text-5xl">🚗</div>
              <h3 className="mt-4 font-bold text-white">Autonomous Vehicles</h3>
              <p className="mt-2 text-gray-300">
                Recognize roads, pedestrians, vehicles, and traffic signs.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <div className="text-5xl">💬</div>
              <h3 className="mt-4 font-bold text-white">Generative AI</h3>
              <p className="mt-2 text-gray-300">
                Generate text, images, audio, video, and software code.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <div className="text-5xl">🌾</div>
              <h3 className="mt-4 font-bold text-white">Agriculture</h3>
              <p className="mt-2 text-gray-300">
                Monitor crop health, detect pests, and support precision farming.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}