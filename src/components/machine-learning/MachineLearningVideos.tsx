const videos = [
  {
    title: "Machine Learning Full Course",
    description:
      "A complete beginner-friendly introduction covering the fundamentals of machine learning, algorithms, datasets, training, and evaluation.",
    url: "https://www.youtube.com/results?search_query=machine+learning+full+course",
  },
  {
    title: "Andrew Ng Machine Learning",
    description:
      "One of the world's most respected introductions to machine learning by Professor Andrew Ng.",
    url: "https://www.youtube.com/results?search_query=Andrew+Ng+Machine+Learning",
  },
  {
    title: "Deep Learning Explained",
    description:
      "Understand neural networks, deep learning, and how modern AI systems are trained.",
    url: "https://www.youtube.com/results?search_query=deep+learning+explained",
  },
  {
    title: "Neural Networks Explained",
    description:
      "Learn how artificial neural networks work and why they power modern AI.",
    url: "https://www.youtube.com/results?search_query=neural+networks+explained",
  },
  {
    title: "Large Language Models (LLMs)",
    description:
      "Discover how ChatGPT, Claude, Gemini, and other LLMs are built using transformer architectures.",
    url: "https://www.youtube.com/results?search_query=large+language+models+explained",
  },
  {
    title: "TensorFlow Tutorial",
    description:
      "Official TensorFlow tutorials for building machine learning applications.",
    url: "https://www.youtube.com/results?search_query=TensorFlow+tutorial",
  },
  {
    title: "PyTorch Tutorial",
    description:
      "Learn PyTorch, one of the most popular deep learning frameworks used by researchers and industry.",
    url: "https://www.youtube.com/results?search_query=PyTorch+tutorial",
  },
  {
    title: "Scikit-learn Tutorial",
    description:
      "Learn classical machine learning algorithms using the Scikit-learn Python library.",
    url: "https://www.youtube.com/results?search_query=scikit+learn+tutorial",
  },
];

export default function MachineLearningVideos() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Video Learning
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Recommended Machine Learning Videos
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            Learn from leading educators, researchers, and technology
            organizations through free educational videos covering machine
            learning, deep learning, neural networks, and modern AI.
          </p>

        </div>

        {/* Video Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {videos.map((video) => (

            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20"
            >

              <div className="text-6xl">
                ▶️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {video.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {video.description}
              </p>

              <div className="mt-8 font-semibold text-red-400">
                Watch on YouTube →
              </div>

            </a>

          ))}

        </div>

        {/* Learning Path */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Suggested Learning Path
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">📚</div>
              <h3 className="mt-4 font-bold text-white">
                Fundamentals
              </h3>
              <p className="mt-2 text-gray-300">
                Learn AI, data, and basic machine learning concepts.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🧠</div>
              <h3 className="mt-4 font-bold text-white">
                Algorithms
              </h3>
              <p className="mt-2 text-gray-300">
                Explore regression, classification, clustering, and neural networks.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">⚡</div>
              <h3 className="mt-4 font-bold text-white">
                Deep Learning
              </h3>
              <p className="mt-2 text-gray-300">
                Study CNNs, transformers, GPUs, and large language models.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🚀</div>
              <h3 className="mt-4 font-bold text-white">
                Build Projects
              </h3>
              <p className="mt-2 text-gray-300">
                Apply your knowledge by creating real-world AI applications.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}