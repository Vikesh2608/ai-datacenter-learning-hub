import Link from "next/link";

interface Video {
  title: string;
  url: string;
}

interface Props {
  videos: Video[];
}

export default function ComponentVideos({ videos }: Props) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-white mb-6">
        Recommended Videos
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Link
            key={video.url}
            href={video.url}
            target="_blank"
            className="rounded-xl border border-slate-700 bg-slate-900 p-6 hover:border-cyan-500 transition"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              ▶ {video.title}
            </h3>

            <p className="text-slate-400 mt-3">
              Watch on YouTube
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}