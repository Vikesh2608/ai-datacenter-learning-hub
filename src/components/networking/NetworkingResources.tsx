const resources = [
  {
    name: "Cisco Networking Academy",
    description:
      "Free networking courses covering CCNA, cybersecurity, networking fundamentals, and IT careers.",
    url: "https://www.netacad.com",
    color: "text-sky-400",
    icon: "🌐",
  },
  {
    name: "Cloudflare Learning Center",
    description:
      "Excellent explanations of networking, DNS, HTTP, HTTPS, CDN, DDoS protection, and Internet technologies.",
    url: "https://www.cloudflare.com/learning/",
    color: "text-orange-400",
    icon: "☁️",
  },
  {
    name: "Internet Society",
    description:
      "Learn how the Internet works through educational articles, standards, and technical resources.",
    url: "https://www.internetsociety.org",
    color: "text-green-400",
    icon: "🌍",
  },
  {
    name: "IETF",
    description:
      "Official organization responsible for Internet standards and networking protocols such as TCP/IP, HTTP, DNS, and BGP.",
    url: "https://www.ietf.org",
    color: "text-purple-400",
    icon: "📖",
  },
  {
    name: "IEEE",
    description:
      "Global engineering organization publishing networking, communications, and technology standards.",
    url: "https://www.ieee.org",
    color: "text-blue-400",
    icon: "⚙️",
  },
  {
    name: "NVIDIA Networking",
    description:
      "Official documentation covering InfiniBand, Spectrum-X Ethernet, ConnectX adapters, and AI networking.",
    url: "https://www.nvidia.com/en-us/networking/",
    color: "text-green-500",
    icon: "⚡",
  },
  {
    name: "Juniper Networks",
    description:
      "Enterprise networking technologies, routing, switching, security, and AI-driven networking.",
    url: "https://www.juniper.net",
    color: "text-cyan-400",
    icon: "🔀",
  },
  {
    name: "Wireshark",
    description:
      "The world's most popular open-source network protocol analyzer for learning and troubleshooting networking.",
    url: "https://www.wireshark.org",
    color: "text-yellow-400",
    icon: "🦈",
  },
  {
    name: "Linux Foundation",
    description:
      "Open-source networking, cloud computing, Linux, Kubernetes, and DevOps educational resources.",
    url: "https://www.linuxfoundation.org",
    color: "text-red-400",
    icon: "🐧",
  },
];

export default function NetworkingResources() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-sky-400">
            Official Learning Resources
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Continue Your Networking Journey
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            These trusted organizations provide high-quality documentation,
            tutorials, standards, certifications, and networking best practices
            used by professionals around the world.
          </p>

        </div>

        {/* Resource Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {resources.map((resource) => (

            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20"
            >

              <div className="text-6xl">
                {resource.icon}
              </div>

              <h3 className={`mt-6 text-2xl font-bold ${resource.color}`}>
                {resource.name}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {resource.description}
              </p>

              <div className="mt-8 font-semibold text-sky-400">
                Visit Official Website →
              </div>

            </a>

          ))}

        </div>

        {/* Career Path */}

        <div className="mt-24 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Networking Career Path
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🎓</div>
              <h3 className="mt-4 font-bold text-white">
                Learn
              </h3>
              <p className="mt-2 text-gray-300">
                Networking Fundamentals
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🧪</div>
              <h3 className="mt-4 font-bold text-white">
                Practice
              </h3>
              <p className="mt-2 text-gray-300">
                Labs & Simulations
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🏅</div>
              <h3 className="mt-4 font-bold text-white">
                Certify
              </h3>
              <p className="mt-2 text-gray-300">
                CCNA · Network+ · CCNP
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🚀</div>
              <h3 className="mt-4 font-bold text-white">
                Build
              </h3>
              <p className="mt-2 text-gray-300">
                Enterprise & AI Networks
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}