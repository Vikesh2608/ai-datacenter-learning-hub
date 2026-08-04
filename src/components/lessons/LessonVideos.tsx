interface Video {
  title: string;
  channel: string;
  description: string;
  url: string;
}

interface LessonVideosProps {
  videos: Video[];
}

export default function LessonVideos({
  videos,
}: LessonVideosProps) {
  return (
    <section
      id="videos"
      className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
    >
      <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        Lesson 4
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Recommended Videos
      </h2>

      <p className="mt-6 text-xl text-gray-300 leading-9">
        Watch carefully selected videos from industry experts,
        conferences, universities and official technology companies.
      </p>

      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {videos.map((video) => (

          <a
            key={video.url}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden hover:border-cyan-500 transition"
          >

            <div className="aspect-video bg-slate-800 flex items-center justify-center text-6xl">
              ▶️
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                {video.title}
              </h3>

              <p className="mt-3 text-cyan-400 font-semibold">
                {video.channel}
              </p>

              <p className="mt-5 text-gray-400 leading-7">
                {video.description}
              </p>

              <div className="mt-8 font-bold text-cyan-400">
                Watch Video →
              </div>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}