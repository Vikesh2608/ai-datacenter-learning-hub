export default function GPUArchitecture() {
  const components = [
    {
      icon: "⚡",
      title: "CUDA Cores",
      description:
        "CUDA Cores are the primary processing units inside NVIDIA GPUs. They execute millions of parallel mathematical calculations used in AI, simulations, graphics, and scientific computing.",
    },
    {
      icon: "🧠",
      title: "Tensor Cores",
      description:
        "Tensor Cores are specialized AI processors designed to accelerate deep learning operations such as matrix multiplication. They dramatically reduce AI training and inference times.",
    },
    {
      icon: "🎮",
      title: "RT Cores",
      description:
        "RT (Ray Tracing) Cores accelerate real-time lighting, reflections, and shadows. While originally built for graphics, they are increasingly used in AI-powered rendering.",
    },
    {
      icon: "💾",
      title: "HBM Memory",
      description:
        "High Bandwidth Memory (HBM) provides extremely fast data transfer between memory and GPU processors, enabling modern AI models to process enormous datasets efficiently.",
    },
    {
      icon: "🔗",
      title: "NVLink",
      description:
        "NVLink is NVIDIA's ultra-high-speed interconnect that allows multiple GPUs to communicate with each other much faster than traditional PCIe connections.",
    },
    {
      icon: "🖥️",
      title: "PCI Express",
      description:
        "PCI Express (PCIe) connects GPUs to CPUs and the rest of the system, allowing data to move efficiently between storage, memory, networking, and AI accelerators.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            GPU Architecture
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Inside a Modern AI GPU
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-gray-300">
            Modern GPUs contain billions of transistors and thousands of
            processing cores working together to accelerate Artificial
            Intelligence, Deep Learning, Scientific Computing, Cloud
            Computing, Robotics, and High-Performance Computing (HPC).
          </p>

        </div>

        {/* Component Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {components.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* AI Processing Flow */}

        <div className="mt-28">

          <h2 className="text-center text-5xl font-black text-white">
            How AI Uses a GPU
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-400">
            Every AI request follows a series of high-speed processing steps
            inside an AI server powered by GPUs.
          </p>

          <div className="mt-14 rounded-3xl border border-slate-800 bg-slate-900 p-10">

            <div className="grid gap-6 text-center md:grid-cols-7">

              <div>
                <div className="text-5xl">⌨️</div>
                <p className="mt-3 font-semibold text-white">
                  User Prompt
                </p>
              </div>

              <div className="flex items-center justify-center text-cyan-400 text-4xl">
                →
              </div>

              <div>
                <div className="text-5xl">💻</div>
                <p className="mt-3 font-semibold text-white">
                  CPU
                </p>
              </div>

              <div className="flex items-center justify-center text-cyan-400 text-4xl">
                →
              </div>

              <div>
                <div className="text-5xl">⚡</div>
                <p className="mt-3 font-semibold text-white">
                  GPU Processing
                </p>
              </div>

              <div className="flex items-center justify-center text-cyan-400 text-4xl">
                →
              </div>

              <div>
                <div className="text-5xl">🤖</div>
                <p className="mt-3 font-semibold text-white">
                  AI Response
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Key Facts */}

        <div className="mt-24 grid gap-8 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h3 className="text-5xl font-black text-cyan-400">
              1000+
            </h3>

            <p className="mt-3 text-gray-300">
              Parallel Threads
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h3 className="text-5xl font-black text-cyan-400">
              AI
            </h3>

            <p className="mt-3 text-gray-300">
              Optimized Hardware
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h3 className="text-5xl font-black text-cyan-400">
              HPC
            </h3>

            <p className="mt-3 text-gray-300">
              Scientific Computing
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h3 className="text-5xl font-black text-cyan-400">
              24/7
            </h3>

            <p className="mt-3 text-gray-300">
              Data Center Operations
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}