const architecture = [
  {
    icon: "📱",
    title: "User Devices",
    description:
      "Smartphones, laptops, tablets, IoT devices, and desktop computers initiate requests to websites, cloud services, and AI applications.",
  },
  {
    icon: "📡",
    title: "Wi-Fi & Local Network",
    description:
      "Home or office networks connect devices through Wi-Fi access points, Ethernet switches, and local routers before traffic leaves the building.",
  },
  {
    icon: "🌍",
    title: "Internet Service Provider",
    description:
      "Internet Service Providers (ISPs) transport your data through regional and national fiber-optic networks to the global Internet.",
  },
  {
    icon: "🌐",
    title: "Internet Backbone",
    description:
      "The Internet backbone is a worldwide network of high-capacity fiber-optic cables that interconnect countries, cloud providers, and major data centers.",
  },
  {
    icon: "🔥",
    title: "Firewall",
    description:
      "Firewalls inspect, filter, and protect incoming and outgoing traffic from unauthorized access and cyber threats.",
  },
  {
    icon: "⚖️",
    title: "Load Balancer",
    description:
      "Load balancers distribute traffic across multiple servers, improving application performance, reliability, and availability.",
  },
  {
    icon: "☁️",
    title: "Cloud Platform",
    description:
      "Cloud providers deliver computing, storage, networking, AI, and databases from hyperscale infrastructure around the world.",
  },
  {
    icon: "🏢",
    title: "Data Center",
    description:
      "Modern data centers house thousands of servers, networking devices, storage systems, and GPUs operating continuously.",
  },
  {
    icon: "🤖",
    title: "AI GPU Cluster",
    description:
      "GPU clusters connected with high-speed AI networking technologies process machine learning, deep learning, and generative AI workloads.",
  },
];

export default function NetworkingArchitecture() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-sky-400">
            Network Architecture
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            How Data Travels Across the Internet
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Every time you browse a website, stream a video, or use an AI
            assistant, your request travels through multiple networking
            components before reaching servers inside cloud data centers.
          </p>

        </div>

        {/* Network Flow */}

        <div className="mt-20 rounded-3xl border border-sky-500/20 bg-slate-900 p-12">

          <h3 className="text-center text-4xl font-black text-white">
            Internet Request Flow
          </h3>

          <div className="mt-12 grid gap-6 text-center md:grid-cols-9">

            <div>
              <div className="text-5xl">📱</div>
              <p className="mt-3 font-semibold text-white">
                User
              </p>
            </div>

            <div className="flex items-center justify-center text-4xl text-sky-400">
              →
            </div>

            <div>
              <div className="text-5xl">📡</div>
              <p className="mt-3 font-semibold text-white">
                Router
              </p>
            </div>

            <div className="flex items-center justify-center text-4xl text-sky-400">
              →
            </div>

            <div>
              <div className="text-5xl">🌍</div>
              <p className="mt-3 font-semibold text-white">
                ISP
              </p>
            </div>

            <div className="flex items-center justify-center text-4xl text-sky-400">
              →
            </div>

            <div>
              <div className="text-5xl">☁️</div>
              <p className="mt-3 font-semibold text-white">
                Cloud
              </p>
            </div>

            <div className="flex items-center justify-center text-4xl text-sky-400">
              →
            </div>

            <div>
              <div className="text-5xl">🤖</div>
              <p className="mt-3 font-semibold text-white">
                AI Server
              </p>
            </div>

          </div>

        </div>

        {/* Architecture Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {architecture.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-sky-400">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* AI Networking */}

        <div className="mt-24 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Modern AI Networking
          </h2>

          <p className="mt-6 text-xl leading-9 text-gray-300">
            Artificial Intelligence workloads require much faster networking
            than traditional enterprise applications. AI clusters exchange
            enormous amounts of data between GPUs, storage systems, and servers
            using technologies such as NVIDIA InfiniBand, Spectrum-X Ethernet,
            RoCE (RDMA over Converged Ethernet), and high-speed 100G, 200G,
            400G, and 800G Ethernet fabrics.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">⚡</div>
              <h3 className="mt-4 font-bold text-white">
                InfiniBand
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🌐</div>
              <h3 className="mt-4 font-bold text-white">
                Spectrum-X
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🔗</div>
              <h3 className="mt-4 font-bold text-white">
                RoCE
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🚀</div>
              <h3 className="mt-4 font-bold text-white">
                800G Ethernet
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}