const applications = [
  {
    icon: "🏥",
    title: "Healthcare",
    color: "text-red-400",
    description:
      "Machine learning helps doctors detect diseases, analyze medical images, predict patient outcomes, accelerate drug discovery, and support personalized treatment plans.",
    examples: [
      "Cancer detection",
      "Medical imaging",
      "Drug discovery",
      "Patient risk prediction",
    ],
  },
  {
    icon: "💰",
    title: "Finance",
    color: "text-green-400",
    description:
      "Banks and financial institutions use machine learning to detect fraud, evaluate credit risk, automate trading strategies, and improve customer service.",
    examples: [
      "Fraud detection",
      "Credit scoring",
      "Stock analysis",
      "Risk management",
    ],
  },
  {
    icon: "🛒",
    title: "Retail & E-Commerce",
    color: "text-yellow-400",
    description:
      "Online retailers analyze customer behavior to recommend products, forecast demand, optimize inventory, and personalize shopping experiences.",
    examples: [
      "Product recommendations",
      "Demand forecasting",
      "Dynamic pricing",
      "Inventory optimization",
    ],
  },
  {
    icon: "🚗",
    title: "Transportation",
    color: "text-blue-400",
    description:
      "Machine learning powers autonomous driving, intelligent traffic management, route optimization, and predictive vehicle maintenance.",
    examples: [
      "Self-driving vehicles",
      "Traffic prediction",
      "Navigation",
      "Fleet optimization",
    ],
  },
  {
    icon: "🌾",
    title: "Agriculture",
    color: "text-lime-400",
    description:
      "Farmers use machine learning to monitor crop health, predict yields, detect pests, optimize irrigation, and improve sustainable farming practices.",
    examples: [
      "Crop monitoring",
      "Precision farming",
      "Pest detection",
      "Yield prediction",
    ],
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    color: "text-orange-400",
    description:
      "Factories use machine learning to improve quality, predict equipment failures, automate inspections, and optimize production processes.",
    examples: [
      "Predictive maintenance",
      "Quality inspection",
      "Production optimization",
      "Robot automation",
    ],
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    color: "text-cyan-400",
    description:
      "Machine learning identifies suspicious activity, detects cyberattacks, prevents fraud, and improves network security through continuous monitoring.",
    examples: [
      "Threat detection",
      "Malware analysis",
      "Anomaly detection",
      "Identity protection",
    ],
  },
  {
    icon: "🎓",
    title: "Education",
    color: "text-purple-400",
    description:
      "Educational platforms personalize learning, recommend study materials, automate assessments, and help students learn at their own pace.",
    examples: [
      "Adaptive learning",
      "Personalized tutoring",
      "Automatic grading",
      "Learning analytics",
    ],
  },
  {
    icon: "🤖",
    title: "Generative AI",
    color: "text-pink-400",
    description:
      "Modern AI assistants generate text, images, software code, music, audio, and video using advanced machine learning models.",
    examples: [
      "Chat assistants",
      "Image generation",
      "Code generation",
      "Content creation",
    ],
  },
];

export default function MachineLearningApplications() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Real-World Applications
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Machine Learning in Everyday Life
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Machine learning is transforming industries across the world. From
            healthcare and agriculture to finance and generative AI, it helps
            people solve complex problems, automate repetitive tasks, and make
            better decisions using data.
          </p>

        </div>

        {/* Application Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {applications.map((application) => (

            <div
              key={application.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
            >

              <div className="text-6xl">
                {application.icon}
              </div>

              <h3 className={`mt-6 text-3xl font-bold ${application.color}`}>
                {application.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {application.description}
              </p>

              <div className="mt-8">

                <h4 className="text-xl font-bold text-white">
                  Examples
                </h4>

                <ul className="mt-4 space-y-2 text-gray-300">

                  {application.examples.map((example) => (

                    <li key={example}>
                      • {example}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

        {/* Everyday Examples */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            You Use Machine Learning Every Day
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🎬</div>
              <h3 className="mt-4 font-bold text-white">Streaming</h3>
              <p className="mt-2 text-gray-300">
                Personalized movie and music recommendations.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">📱</div>
              <h3 className="mt-4 font-bold text-white">Smartphones</h3>
              <p className="mt-2 text-gray-300">
                Face unlock, voice assistants, translation, and photography.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">🛍️</div>
              <h3 className="mt-4 font-bold text-white">Online Shopping</h3>
              <p className="mt-2 text-gray-300">
                Product recommendations and personalized experiences.
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">💬</div>
              <h3 className="mt-4 font-bold text-white">AI Assistants</h3>
              <p className="mt-2 text-gray-300">
                Natural conversations, writing help, and problem solving.
              </p>
            </div>

          </div>

        </div>

        {/* Future */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            The Future of Machine Learning
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Machine learning continues to evolve rapidly alongside advances in
            computing power, cloud infrastructure, and GPUs. Future systems are
            expected to support more capable robotics, smarter healthcare,
            improved climate modeling, precision agriculture, scientific
            discovery, and increasingly helpful AI assistants that work
            alongside people to solve complex challenges.
          </p>

        </div>

      </div>

    </section>
  );
}