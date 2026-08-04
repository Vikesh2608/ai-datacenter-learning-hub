type Video = {
  title: string;
  channel: string;
  url: string;
};

const videos: Video[] = [
  {
    title: "What is Artificial Intelligence?",
    channel: "IBM Technology",
    url: "https://www.youtube.com/results?search_query=IBM+Technology+What+is+Artificial+Intelligence",
  },
  {
    title: "Artificial Intelligence Explained",
    channel: "DeepLearning.AI",
    url: "https://www.youtube.com/results?search_query=DeepLearning.AI+Artificial+Intelligence",
  },
  {
    title: "How ChatGPT Works",
    channel: "3Blue1Brown",
    url: "https://www.youtube.com/results?search_query=3Blue1Brown+Large+Language+Models",
  },
];

export default function YouTubeSection() {
  return (
    <section className="mt-20">

      <h2 className="text-4xl font-bold text-cyan-400">
        🎥 Recommended Videos
      </h2>

      <p className="mt-4 text-gray-400">
        Learn from some of the world's best AI educators.
      </p>

      <div className="grid gap-6 mt-10">

        {videos.map((video) => (

          <a
            key={video.title}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 bg-slate-900 p-6 hover:border-cyan-400 transition"
          >

            <h3 className="text-2xl font-semibold text-white">
              {video.title}
            </h3>

            <p className="text-cyan-400 mt-2">
              {video.channel}
            </p>

            <p className="mt-4 text-gray-400">
              Click to watch on YouTube →
            </p>

          </a>

        ))}

      </div>

    </section>
  );
}