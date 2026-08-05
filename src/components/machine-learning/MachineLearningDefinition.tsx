export default function MachineLearningDefinition() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Machine Learning Fundamentals
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            What is Machine Learning?
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Machine Learning (ML) is a branch of Artificial Intelligence that
            enables computers to learn from data, identify patterns, and make
            predictions or decisions without being explicitly programmed for
            every possible situation.
          </p>

        </div>

        {/* AI Hierarchy */}

        <div className="mt-20 rounded-3xl border border-purple-500/20 bg-slate-900 p-12">

          <h3 className="text-center text-4xl font-black text-white">
            The AI Learning Hierarchy
          </h3>

          <div className="mt-12 flex flex-col items-center gap-6">

            <div className="rounded-xl bg-purple-600 px-10 py-5 text-2xl font-bold text-white">
              Artificial Intelligence
            </div>

            <div className="text-4xl text-purple-400">↓</div>

            <div className="rounded-xl bg-purple-500 px-10 py-5 text-2xl font-bold text-white">
              Machine Learning
            </div>

            <div className="text-4xl text-purple-400">↓</div>

            <div className="rounded-xl bg-purple-400 px-10 py-5 text-2xl font-bold text-black">
              Deep Learning
            </div>

            <div className="text-4xl text-purple-400">↓</div>

            <div className="rounded-xl bg-pink-400 px-10 py-5 text-2xl font-bold text-black">
              Generative AI & Large Language Models
            </div>

          </div>

        </div>

        {/* Key Concepts */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">📊</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Data
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Machine learning begins with data. The more high-quality data a
              model receives, the better it can identify patterns and improve
              predictions.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🧠</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Learning
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Algorithms learn from examples instead of following only
              predefined instructions, allowing systems to improve over time.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">📈</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Prediction
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              After learning from historical data, models make predictions on
              new information they have never seen before.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🔄</div>

            <h3 className="mt-6 text-2xl font-bold text-purple-400">
              Improvement
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Machine learning models improve through retraining with additional
              data, evaluation, and continuous refinement.
            </p>

          </div>

        </div>

        {/* Everyday Examples */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Machine Learning in Everyday Life
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6">
              <div className="text-5xl">🎬</div>
              <h3 className="mt-4 font-bold text-white">
                Streaming
              </h3>
              <p className="mt-2 text-gray-300">
                Movie and music recommendations based on your viewing and listening history.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <div className="text-5xl">🛒</div>
              <h3 className="mt-4 font-bold text-white">
                Shopping
              </h3>
              <p className="mt-2 text-gray-300">
                Personalized product recommendations based on browsing and purchase patterns.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <div className="text-5xl">📧</div>
              <h3 className="mt-4 font-bold text-white">
                Email
              </h3>
              <p className="mt-2 text-gray-300">
                Spam filters automatically identify and block unwanted messages.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <div className="text-5xl">🤖</div>
              <h3 className="mt-4 font-bold text-white">
                AI Assistants
              </h3>
              <p className="mt-2 text-gray-300">
                AI assistants use machine learning to understand language and generate useful responses.
              </p>
            </div>

          </div>

        </div>

        {/* Why It Matters */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Why Machine Learning Matters
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Machine learning is transforming nearly every industry, including
            healthcare, finance, manufacturing, agriculture, transportation,
            cybersecurity, education, and scientific research. By learning from
            data, these systems help people make better decisions, automate
            repetitive tasks, and uncover insights that would be difficult to
            find manually.
          </p>

        </div>

      </div>

    </section>
  );
}