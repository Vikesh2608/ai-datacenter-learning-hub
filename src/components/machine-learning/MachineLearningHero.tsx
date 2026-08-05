import Link from "next/link";

export default function MachineLearningHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.20),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-8 pt-32 pb-24">

        {/* Badge */}

        <div className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-purple-300">
          🧠 Machine Learning Academy
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-7xl">

          Machine
          <span className="text-purple-400"> Learning</span>

          <br />

          Explained

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-4xl text-xl leading-10 text-gray-300">

          Discover how computers learn from data, recognize patterns,
          make predictions, and power modern Artificial Intelligence.
          Learn Machine Learning from beginner to advanced through
          real-world examples, interactive lessons, and AI applications.

        </p>

        {/* Buttons */}

        <div className="mt-14 flex flex-wrap gap-5">

          <a
            href="https://scikit-learn.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-purple-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-purple-400"
          >
            Scikit-learn
          </a>

          <a
            href="https://www.tensorflow.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-purple-500 px-8 py-4 text-lg text-white transition hover:bg-purple-500"
          >
            TensorFlow
          </a>

          <a
            href="https://pytorch.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-orange-500 px-8 py-4 text-lg text-white transition hover:bg-orange-500"
          >
            PyTorch
          </a>

          <Link
            href="/learn/networking"
            className="rounded-xl border border-slate-700 px-8 py-4 text-lg text-white transition hover:border-purple-500 hover:bg-slate-900"
          >
            ← Previous Lesson
          </Link>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-purple-400">
              AI
            </div>
            <p className="mt-2 text-gray-300">
              Intelligent Systems
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-purple-400">
              ML
            </div>
            <p className="mt-2 text-gray-300">
              Pattern Learning
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-purple-400">
              DL
            </div>
            <p className="mt-2 text-gray-300">
              Deep Learning
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-black text-purple-400">
              LLMs
            </div>
            <p className="mt-2 text-gray-300">
              Large Language Models
            </p>
          </div>

        </div>

        {/* Topics */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-3xl font-black text-white">
            What You'll Learn
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3 xl:grid-cols-6">

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">📊</div>
              <h3 className="mt-3 font-bold text-purple-400">
                Data
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🧠</div>
              <h3 className="mt-3 font-bold text-purple-400">
                Algorithms
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🎯</div>
              <h3 className="mt-3 font-bold text-purple-400">
                Training
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">📈</div>
              <h3 className="mt-3 font-bold text-purple-400">
                Prediction
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🤖</div>
              <h3 className="mt-3 font-bold text-purple-400">
                Neural Networks
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-3 font-bold text-purple-400">
                Generative AI
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}