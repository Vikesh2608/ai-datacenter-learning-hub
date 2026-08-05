const videos = [
  {
    title: "Networking Fundamentals",
    description:
      "Learn the basics of computer networking, including LAN, WAN, switches, routers, and how devices communicate.",
    url: "https://www.youtube.com/results?search_query=computer+networking+fundamentals",
  },
  {
    title: "TCP/IP Explained",
    description:
      "Understand the TCP/IP model and how data travels across the Internet.",
    url: "https://www.youtube.com/results?search_query=tcp+ip+explained",
  },
  {
    title: "CCNA Complete Course",
    description:
      "Cisco CCNA networking concepts for beginners and aspiring network engineers.",
    url: "https://www.youtube.com/results?search_query=ccna+course",
  },
  {
    title: "DNS Explained",
    description:
      "Learn how Domain Name System (DNS) converts domain names into IP addresses.",
    url: "https://www.youtube.com/results?search_query=dns+explained",
  },
  {
    title: "Network Switching & Routing",
    description:
      "Understand how switches and routers work together in enterprise networks.",
    url: "https://www.youtube.com/results?search_query=network+switching+routing",
  },
  {
    title: "Fiber Optic Networking",
    description:
      "Discover how fiber optic cables power modern Internet infrastructure.",
    url: "https://www.youtube.com/results?search_query=fiber+optic+networking",
  },
  {
    title: "Cloud Networking",
    description:
      "Learn networking inside AWS, Microsoft Azure, and Google Cloud.",
    url: "https://www.youtube.com/results?search_query=cloud+networking",
  },
  {
    title: "AI Networking",
    description:
      "Explore modern networking technologies that connect AI GPU clusters and data centers.",
    url: "https://www.youtube.com/results?search_query=nvidia+ai+networking",
  },
];

export default function NetworkingVideos() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-sky-400">
            Video Learning
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Recommended Networking Videos
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            Learn networking from industry experts through free educational
            videos covering networking fundamentals, cloud networking,
            cybersecurity, and modern AI infrastructure.
          </p>

        </div>

        {/* Video Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {videos.map((video) => (

            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20"
            >

              <div className="text-6xl">
                ▶️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {video.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {video.description}
              </p>

              <div className="mt-8 font-semibold text-red-400">
                Watch on YouTube →
              </div>

            </a>

          ))}

        </div>

        {/* Learning Tips */}

        <div className="mt-24 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Learning Tip
          </h2>

          <p className="mt-6 text-xl leading-9 text-gray-300">
            Start with networking fundamentals such as TCP/IP, routing,
            switching, and DNS. Once you understand these concepts,
            move on to cloud networking, cybersecurity, and AI networking.
            This progression builds a strong foundation for careers in
            IT, cloud computing, data centers, and artificial intelligence.
          </p>

        </div>

      </div>

    </section>
  );
}