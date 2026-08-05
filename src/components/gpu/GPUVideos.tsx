const videos = [
  {
    title: "How GPUs Power Artificial Intelligence",
    description: "Understand why GPUs are essential for AI training and inference.",
    url: "https://www.youtube.com/results?search_query=how+gpus+power+artificial+intelligence",
  },
  {
    title: "NVIDIA GPU Architecture Explained",
    description: "Learn about CUDA Cores, Tensor Cores, RT Cores and HBM Memory.",
    url: "https://www.youtube.com/results?search_query=nvidia+gpu+architecture",
  },
  {
    title: "CUDA Programming",
    description: "Begin learning CUDA programming for GPU acceleration.",
    url: "https://www.youtube.com/results?search_query=cuda+tutorial",
  },
  {
    title: "Inside an AI Data Center",
    description: "See how GPUs are deployed inside modern AI infrastructure.",
    url: "https://www.youtube.com/results?search_query=inside+ai+data+center",
  },
];

export default function GPUVideos() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.25em] text-cyan-400 font-semibold">
            Video Library
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Recommended Videos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Continue learning through high-quality educational videos.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {videos.map((video) => (

            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-red-500 hover:shadow-xl"
            >

              <div className="text-5xl">▶️</div>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {video.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {video.description}
              </p>

              <div className="mt-6 text-red-400 font-semibold">
                Watch on YouTube →
              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}