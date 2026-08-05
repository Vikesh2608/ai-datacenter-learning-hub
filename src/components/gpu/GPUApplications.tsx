const applications = [
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "GPUs train and run Large Language Models (LLMs) like ChatGPT, Gemini, Claude, and many other AI systems by processing billions of calculations simultaneously.",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    description:
      "Medical researchers use GPUs to analyze medical images, accelerate drug discovery, identify diseases earlier, and improve patient care using AI-powered diagnostics.",
  },
  {
    icon: "🚗",
    title: "Autonomous Vehicles",
    description:
      "Self-driving vehicles process camera feeds, LiDAR, radar, and sensor data in real time using GPU acceleration to make safe driving decisions.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    description:
      "Factories use AI-powered GPUs for predictive maintenance, quality inspection, robotics, and automation to improve production efficiency.",
  },
  {
    icon: "🌾",
    title: "Smart Agriculture",
    description:
      "GPUs help farmers analyze satellite imagery, monitor crops, optimize irrigation, detect plant diseases, and improve food production using Artificial Intelligence.",
  },
  {
    icon: "🌦️",
    title: "Weather Forecasting",
    description:
      "Meteorologists use GPU-powered supercomputers to simulate climate models, predict severe weather, and improve disaster preparedness.",
  },
  {
    icon: "🚀",
    title: "Space Research",
    description:
      "Organizations such as NASA use GPU clusters for spacecraft simulations, satellite imagery analysis, astronomical research, and deep-space exploration.",
  },
  {
    icon: "🧬",
    title: "Scientific Research",
    description:
      "Universities and research laboratories accelerate molecular simulations, genomics, physics, chemistry, and biomedical research with GPU computing.",
  },
  {
    icon: "🎮",
    title: "Gaming & Graphics",
    description:
      "GPUs were originally created for graphics rendering and continue to power realistic gaming, ray tracing, virtual reality, and visual effects.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    description:
      "Cloud providers such as AWS, Microsoft Azure, and Google Cloud deploy GPU servers to deliver AI services and high-performance computing worldwide.",
  },
  {
    icon: "💬",
    title: "Generative AI",
    description:
      "Modern AI assistants generate text, images, code, audio, and video using massive GPU clusters hosted inside data centers.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description:
      "Security teams use GPUs for threat detection, malware analysis, anomaly detection, encryption, and protecting critical digital infrastructure.",
  },
];

export default function GPUApplications() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.25em] text-cyan-400 font-semibold">
            Real World Applications
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Where GPUs Are Used
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-gray-300">
            GPUs have evolved far beyond gaming. Today they power Artificial
            Intelligence, healthcare, scientific research, manufacturing,
            agriculture, cloud computing, autonomous vehicles, cybersecurity,
            and many of the technologies shaping our future.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {applications.map((app) => (

            <div
              key={app.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20"
            >

              <div className="text-6xl">
                {app.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-cyan-400">
                {app.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {app.description}
              </p>

            </div>

          ))}

        </div>

        {/* Why It Matters */}

        <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Why GPUs Matter
          </h2>

          <p className="mt-6 text-xl leading-9 text-gray-300">
            Nearly every major Artificial Intelligence breakthrough—from
            Large Language Models and autonomous vehicles to medical
            research and climate modeling—depends on GPU computing.
            As AI continues to grow, GPUs will remain one of the most
            important technologies powering innovation across every
            industry.
          </p>

        </div>

      </div>

    </section>
  );
}