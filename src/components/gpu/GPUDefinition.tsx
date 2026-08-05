export default function GPUDefinition() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
            GPU Fundamentals
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            What is a GPU?
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-gray-300">
            A Graphics Processing Unit (GPU) is a specialized processor
            designed to perform thousands of calculations simultaneously.
            Originally developed for graphics rendering, GPUs are now the
            foundation of Artificial Intelligence, Deep Learning,
            Scientific Computing, Robotics, Medical Research and modern
            Data Centers.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-5xl">⚡</div>

            <h3 className="mt-6 text-3xl font-bold text-cyan-400">
              Massive Parallel Computing
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              GPUs contain thousands of small processing cores that can
              execute many operations simultaneously, making them ideal
              for Artificial Intelligence and Machine Learning.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-5xl">🤖</div>

            <h3 className="mt-6 text-3xl font-bold text-cyan-400">
              AI Acceleration
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Training Large Language Models such as ChatGPT, Gemini,
              Claude and other modern AI systems requires enormous GPU
              computing power to process billions of mathematical
              operations.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-5xl">🌍</div>

            <h3 className="mt-6 text-3xl font-bold text-cyan-400">
              Real-World Applications
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              GPUs are used in healthcare, autonomous vehicles,
              manufacturing, robotics, weather prediction, scientific
              simulations, cybersecurity and cloud computing around the
              world.
            </p>

          </div>

        </div>

        {/* CPU vs GPU */}

        <div className="mt-20">

          <h2 className="mb-10 text-center text-5xl font-black text-white">
            CPU vs GPU
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* CPU */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-3xl font-bold text-blue-400">
                💻 CPU
              </h3>

              <ul className="mt-8 space-y-4 text-lg text-gray-300">

                <li>• Few powerful cores</li>

                <li>• Sequential processing</li>

                <li>• Handles operating systems</li>

                <li>• Excellent for general computing</li>

                <li>• Optimized for single-thread performance</li>

              </ul>

            </div>

            {/* GPU */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-3xl font-bold text-cyan-400">
                ⚡ GPU
              </h3>

              <ul className="mt-8 space-y-4 text-lg text-gray-300">

                <li>• Thousands of processing cores</li>

                <li>• Massive parallel processing</li>

                <li>• AI & Deep Learning acceleration</li>

                <li>• High-performance scientific computing</li>

                <li>• Optimized for billions of simultaneous calculations</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}