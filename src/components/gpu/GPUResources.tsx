const resources = [
  {
    name: "NVIDIA",
    description: "Official NVIDIA AI & GPU platform.",
    url: "https://www.nvidia.com/",
  },
  {
    name: "CUDA",
    description: "NVIDIA CUDA Developer Zone.",
    url: "https://developer.nvidia.com/cuda-zone",
  },
  {
    name: "TensorRT",
    description: "AI inference optimization platform.",
    url: "https://developer.nvidia.com/tensorrt",
  },
  {
    name: "PyTorch",
    description: "Deep Learning framework.",
    url: "https://pytorch.org/",
  },
  {
    name: "TensorFlow",
    description: "Google's Machine Learning framework.",
    url: "https://tensorflow.org/",
  },
  {
    name: "AMD AI",
    description: "AMD GPU Computing.",
    url: "https://www.amd.com/",
  },
  {
    name: "Intel AI",
    description: "Intel AI Solutions.",
    url: "https://www.intel.com/",
  },
];

export default function GPUResources() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.25em] text-cyan-400 font-semibold">
            Official Documentation
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Learning Resources
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {resources.map((resource) => (

            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-500 transition"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {resource.name}
              </h3>

              <p className="mt-4 text-gray-300">
                {resource.description}
              </p>

              <div className="mt-6 font-semibold text-cyan-400">
                Visit Website →
              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}