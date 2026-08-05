const services = [
  {
    icon: "💻",
    title: "Compute",
    description:
      "Compute services provide virtual machines, CPUs, GPUs, containers, and serverless computing to run applications in the cloud.",
    examples: ["Amazon EC2", "Azure Virtual Machines", "Google Compute Engine"],
  },
  {
    icon: "💾",
    title: "Storage",
    description:
      "Cloud storage securely stores files, backups, images, videos, AI datasets, and application data while scaling automatically.",
    examples: ["Amazon S3", "Azure Blob Storage", "Google Cloud Storage"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    description:
      "Managed databases eliminate infrastructure management while providing high availability, backups, and automatic scaling.",
    examples: ["Amazon RDS", "Cloud SQL", "Azure SQL"],
  },
  {
    icon: "🌐",
    title: "Networking",
    description:
      "Networking services securely connect cloud resources using virtual networks, load balancers, DNS, VPNs, and firewalls.",
    examples: ["VPC", "Load Balancer", "Cloud DNS"],
  },
  {
    icon: "📦",
    title: "Containers",
    description:
      "Containers package applications and their dependencies so they run consistently across development, testing, and production environments.",
    examples: ["Docker", "Amazon ECS", "Azure Container Apps"],
  },
  {
    icon: "☸️",
    title: "Kubernetes",
    description:
      "Kubernetes automatically deploys, scales, monitors, and manages containerized applications across cloud infrastructure.",
    examples: ["Amazon EKS", "Azure AKS", "Google GKE"],
  },
  {
    icon: "⚡",
    title: "Serverless",
    description:
      "Serverless computing allows developers to run code without managing servers. The cloud provider automatically provisions resources.",
    examples: ["AWS Lambda", "Azure Functions", "Cloud Functions"],
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Cloud AI services provide machine learning, speech recognition, computer vision, generative AI, and natural language processing.",
    examples: ["Amazon Bedrock", "Azure OpenAI", "Vertex AI"],
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "Analytics services process massive datasets to generate business insights, dashboards, reports, and predictive analytics.",
    examples: ["BigQuery", "Amazon Redshift", "Azure Synapse"],
  },
  {
    icon: "🔒",
    title: "Security",
    description:
      "Cloud security services protect applications using identity management, encryption, firewalls, monitoring, and threat detection.",
    examples: ["IAM", "Key Vault", "Cloud Armor"],
  },
  {
    icon: "📡",
    title: "Monitoring",
    description:
      "Monitoring services track application health, infrastructure performance, system logs, and security events in real time.",
    examples: ["CloudWatch", "Azure Monitor", "Cloud Monitoring"],
  },
  {
    icon: "🔄",
    title: "DevOps",
    description:
      "DevOps services automate software development, testing, deployment, and continuous integration/continuous delivery (CI/CD).",
    examples: ["GitHub Actions", "Azure DevOps", "Cloud Build"],
  },
];

export default function CloudServices() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-blue-400">
            Cloud Services
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Core Cloud Services
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Cloud providers deliver hundreds of services, but most of them
            belong to a few fundamental categories. Understanding these
            categories helps you understand any cloud platform.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >

              <div className="text-6xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-blue-400">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {service.description}
              </p>

              <div className="mt-8">

                <h4 className="font-bold text-white">
                  Popular Examples
                </h4>

                <ul className="mt-4 space-y-2 text-gray-300">

                  {service.examples.map((example) => (

                    <li key={example}>
                      • {example}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

        {/* Cloud Service Layers */}

        <div className="mt-24 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            How Cloud Services Work Together
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">👤</div>
              <h3 className="mt-4 font-bold text-white">
                User
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">☁️</div>
              <h3 className="mt-4 font-bold text-white">
                Cloud Platform
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">⚙️</div>
              <h3 className="mt-4 font-bold text-white">
                Cloud Services
              </h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-6 text-center">
              <div className="text-5xl">📱</div>
              <h3 className="mt-4 font-bold text-white">
                Applications
              </h3>
            </div>

          </div>

          <p className="mt-10 text-center text-lg leading-8 text-gray-300">
            Every application you use—from streaming movies and online banking
            to Artificial Intelligence and cloud storage—relies on multiple
            cloud services working together behind the scenes.
          </p>

        </div>

      </div>

    </section>
  );
}