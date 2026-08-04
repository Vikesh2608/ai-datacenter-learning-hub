type Video = {
  title: string;
  url: string;
};

type Props = {
  title?: string;
  videos: Video[];
};

export default function YouTubeResources({
  title = "🎥 Recommended Videos",
  videos,
}: Props) {
  return (
    <section className="mt-16 rounded-3xl border border-red-500/20 bg-slate-900 p-8">
      <h2 className="text-3xl font-bold text-white">{title}</h2>

      <p className="mt-3 text-gray-400">
        Continue learning with these carefully selected educational videos.
      </p>

      <div className="mt-8 space-y-4">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-slate-700 p-5 hover:border-red-500 hover:bg-slate-800 transition"
          >
            <div>
              <h3 className="font-semibold text-lg">{video.title}</h3>
              <p className="text-gray-400 text-sm">
                Opens YouTube in a new tab
              </p>
            </div>

            <span className="text-red-500 text-2xl">▶</span>
          </a>
        ))}
      </div>
    </section>
  );
}