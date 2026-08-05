const architecture = [
  {
    icon: "🌍",
    title: "Internet",
    description:
      "Users connect securely over the internet from anywhere in the world using computers, tablets, and mobile devices.",
  },
  {
    icon: "⚖️",
    title: "Load Balancer",
    description:
      "Load balancers distribute incoming traffic across multiple servers, improving availability, reliability, and application performance.",
  },
  {
    icon: "💻",
    title: "Virtual Machines",
    description:
      "Virtual Machines (VMs) allow multiple operating systems to run independently on shared physical servers, improving efficiency and scalability.",
  },
  {
    icon: "📦",
    title: "Containers",
    description:
      "Containers package applications with everything they need to run consistently across development, testing, and production environments.",
  },
  {
    icon: "☸️",
    title: "Kubernetes",
    description:
      "Kubernetes automates container deployment, scaling, networking, monitoring, and self-healing across cloud environments.",
  },
  {
    icon: "🗄️",
    title: "Databases",
    description:
      "Cloud databases securely store structured and unstructured information while providing high availability, backups, and disaster recovery.",
  },
  {
    icon: "💾",
    title: "Storage",
    description:
      "Cloud storage provides scalable object, block, and file storage that can grow automatically as business needs increase.",
  },
  {
    icon: "🌐",
    title: "Networking",
    description:
      "Virtual networks securely connect cloud resources through subnets, routers, VPNs, firewalls, and private networking services.",
  },
  {
    icon: "🤖",
    title: "AI Services",
    description:
      "Cloud providers offer managed Artificial Intelligence services including machine learning, computer vision, speech recognition, and generative AI.",
  },
];

export default function CloudArchitecture() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.25em] font-semibold text-blue-400">
            Cloud Architecture
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            How Cloud Computing Works
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Every time you open a website, stream a movie, use an AI assistant,
            or access cloud storage, your request travels through multiple cloud
            components before reaching the application.
          </p>

        </div>

        {/* Flow Diagram */}

        <div className="mt-20 rounded-3xl border border-blue-500/20 bg-slate-900 p-12">

          <h3 className="text-center text-3xl font-black text-white">
            Cloud Request Flow
          </h3>

          <div className="mt-12 grid gap-6 text-center md:grid-cols-7">

            <div>
              <div className="text-5xl">👤</div>
              <p className="mt-3 font-semibold text-white">
                User
              </p>
            </div>

            <div className="flex items-center justify-center text-4xl text-blue-400">
              →
            </div>

            <div>
              <div className="text-5xl">🌍</div>
              <p className="mt-3 font-semibold text-white">
                Internet
              </p>
            </div>

            <div className="flex items-center justify-center text-4xl text-blue-400">
              →
            </div>

            <div>
              <div className="text-5xl">☁️</div>
              <p className="mt-3 font-semibold text-white">
                Cloud Platform
              </p>
            </div>

            <div className="flex items-center justify-center text-4xl text-blue-400">
              →
            </div>

            <div>
              <div className="text-5xl">📱</div>
              <p className="mt-3 font-semibold text-white">
                Application
              </p>
            </div>

          </div>

        </div>

        {/* Architecture Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {architecture.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-blue-400">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* Cloud Layers */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Layers of Cloud Infrastructure
          </h2>

          <div className="mt-10 space-y-6">

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-2xl font-bold text-blue-400">
                🌍 User Layer
              </h3>
              <p className="mt-3 text-gray-300">
                Users access cloud applications using browsers, mobile apps,
                APIs, and enterprise software.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-2xl font-bold text-blue-400">
                ☁️ Application Layer
              </h3>
              <p className="mt-3 text-gray-300">
                Business applications, AI services, analytics platforms,
                websites, and APIs run on scalable cloud infrastructure.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-2xl font-bold text-blue-400">
                💻 Compute Layer
              </h3>
              <p className="mt-3 text-gray-300">
                Virtual machines, containers, Kubernetes clusters, and serverless
                computing execute workloads dynamically.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6">
              <h3 className="text-2xl font-bold text-blue-400">
                🏢 Physical Infrastructure
              </h3>
              <p className="mt-3 text-gray-300">
                Thousands of servers, GPUs, storage systems, networking devices,
                cooling systems, and power infrastructure operate inside
                hyperscale data centers.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}