const resources = [
  {
    icon: "📘",
    name: "Scikit-learn",
    color: "text-orange-400",
    description:
      "One of the world's most popular open-source machine learning libraries for Python. Excellent for beginners and professionals.",
    url: "https://scikit-learn.org",
  },
  {
    icon: "🧠",
    name: "TensorFlow",
    color: "text-orange-500",
    description:
      "Google's open-source machine learning framework for building, training, and deploying AI models.",
    url: "https://www.tensorflow.org",
  },
  {
    icon: "🔥",
    name: "PyTorch",
    color: "text-red-400",
    description:
      "Meta's deep learning framework widely used in AI research, academia, and industry.",
    url: "https://pytorch.org",
  },
  {
    icon: "🤗",
    name: "Hugging Face",
    color: "text-yellow-400",
    description:
      "Open-source platform for transformers, large language models, datasets, and AI applications.",
    url: "https://huggingface.co",
  },
  {
    icon: "🎓",
    name: "DeepLearning.AI",
    color: "text-green-400",
    description:
      "Courses and educational resources founded by Andrew Ng covering machine learning and deep learning.",
    url: "https://www.deeplearning.ai",
  },
  {
    icon: "🌐",
    name: "OpenAI",
    color: "text-cyan-400",
    description:
      "Research and educational resources about generative AI, ChatGPT, reasoning models, and AI safety.",
    url: "https://openai.com",
  },
  {
    icon: "☁️",
    name: "Google AI",
    color: "text-blue-400",
    description:
      "Research papers, tutorials, responsible AI guidance, and machine learning tools from Google.",
    url: "https://ai.google",
  },
  {
    icon: "⚡",
    name: "NVIDIA AI",
    color: "text-green-500",
    description:
      "Resources covering GPU computing, CUDA, AI infrastructure, accelerated computing, and deep learning.",
    url: "https://www.nvidia.com/en-us/ai/",
  },
  {
    icon: "💼",
    name: "Microsoft Learn AI",
    color: "text-sky-400",
    description:
      "Free learning paths covering Azure AI, machine learning, responsible AI, and cloud services.",
    url: "https://learn.microsoft.com/training/browse/?products=azure-ai",
  },
];

export default function MachineLearningResources() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Learning Resources
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Official Machine Learning Resources
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Continue your machine learning journey using trusted educational
            resources from leading universities, technology companies, and
            open-source communities.
          </p>

        </div>

        {/* Resource Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {resources.map((resource) => (

            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
            >

              <div className="text-6xl">
                {resource.icon}
              </div>

              <h3 className={`mt-6 text-2xl font-bold ${resource.color}`}>
                {resource.name}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {resource.description}
              </p>

              <div className="mt-8 font-semibold text-purple-400">
                Visit Official Website →
              </div>

            </a>

          ))}

        </div>

        {/* Learning Roadmap */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Recommended Learning Roadmap
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">📚</div>
              <h3 className="mt-4 font-bold text-white">
                Learn
              </h3>
              <p className="mt-2 text-gray-300">
                Understand ML fundamentals.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">💻</div>
              <h3 className="mt-4 font-bold text-white">
                Practice
              </h3>
              <p className="mt-2 text-gray-300">
                Build models with Python.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🧠</div>
              <h3 className="mt-4 font-bold text-white">
                Deep Learning
              </h3>
              <p className="mt-2 text-gray-300">
                Learn neural networks and transformers.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">☁️</div>
              <h3 className="mt-4 font-bold text-white">
                Deploy
              </h3>
              <p className="mt-2 text-gray-300">
                Use cloud platforms to serve models.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🚀</div>
              <h3 className="mt-4 font-bold text-white">
                Build
              </h3>
              <p className="mt-2 text-gray-300">
                Create real-world AI applications.
              </p>
            </div>

          </div>

        </div>

        {/* Final Note */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Keep Learning
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Machine learning is a rapidly evolving field. The strongest AI
            engineers continuously learn, experiment, and build projects.
            Combine theory with hands-on practice using open-source tools,
            public datasets, and cloud platforms to strengthen your skills and
            stay current with new developments.
          </p>

        </div>

      </div>

    </section>
  );
}