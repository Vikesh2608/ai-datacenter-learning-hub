const videos = [
  {
    title: "Cloud Computing Explained",
    description:
      "A beginner-friendly introduction to cloud computing concepts and terminology.",
    url: "https://www.youtube.com/results?search_query=cloud+computing+explained",
  },
  {
    title: "AWS Tutorial for Beginners",
    description:
      "Learn the fundamentals of Amazon Web Services.",
    url: "https://www.youtube.com/results?search_query=aws+tutorial+for+beginners",
  },
  {
    title: "Microsoft Azure Fundamentals",
    description:
      "Understand Azure services and cloud infrastructure.",
    url: "https://www.youtube.com/results?search_query=azure+fundamentals",
  },
  {
    title: "Google Cloud Platform",
    description:
      "Learn the basics of Google Cloud Platform.",
    url: "https://www.youtube.com/results?search_query=google+cloud+tutorial",
  },
  {
    title: "Docker & Kubernetes",
    description:
      "Understand containers and Kubernetes in cloud environments.",
    url: "https://www.youtube.com/results?search_query=docker+kubernetes+tutorial",
  },
  {
    title: "Cloud Architecture",
    description:
      "Learn how modern cloud applications are designed.",
    url: "https://www.youtube.com/results?search_query=cloud+architecture",
  },
];

export default function CloudVideos() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-blue-400">
            Video Learning
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Recommended Videos
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl text-gray-300">
            Continue learning from trusted cloud educators and official
            cloud providers.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {videos.map((video) => (

            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-red-500 hover:-translate-y-2"
            >

              <div className="text-6xl">▶️</div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {video.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {video.description}
              </p>

              <div className="mt-8 font-semibold text-red-400">
                Watch on YouTube →
              </div>

            </a>

          ))}

        </div>

      </div>
    </section>
  );
}