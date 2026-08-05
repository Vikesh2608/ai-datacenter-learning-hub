const providers = [
  {
    logo: "☁️",
    name: "Amazon Web Services (AWS)",
    founded: "2006",
    color: "text-orange-400",
    website: "https://aws.amazon.com",
    description:
      "AWS is the world's largest cloud computing platform, offering over 240 cloud services including computing, storage, databases, AI, analytics, networking, and security.",
    services: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "Amazon EKS",
      "Amazon Bedrock",
      "AWS Lambda",
    ],
  },
  {
    logo: "🟦",
    name: "Microsoft Azure",
    founded: "2010",
    color: "text-blue-400",
    website: "https://azure.microsoft.com",
    description:
      "Microsoft Azure provides enterprise cloud services, AI platforms, virtual machines, databases, networking, and hybrid cloud solutions used by organizations worldwide.",
    services: [
      "Azure Virtual Machines",
      "Azure Kubernetes Service",
      "Azure SQL",
      "Azure OpenAI",
      "Azure AI",
      "Azure Storage",
    ],
  },
  {
    logo: "🌎",
    name: "Google Cloud Platform",
    founded: "2008",
    color: "text-green-400",
    website: "https://cloud.google.com",
    description:
      "Google Cloud Platform delivers cloud infrastructure, AI, machine learning, big data analytics, Kubernetes, and global networking built on Google's infrastructure.",
    services: [
      "Compute Engine",
      "Cloud Storage",
      "BigQuery",
      "Vertex AI",
      "GKE",
      "Cloud SQL",
    ],
  },
  {
    logo: "🏛️",
    name: "Oracle Cloud",
    founded: "2016",
    color: "text-red-400",
    website: "https://www.oracle.com/cloud/",
    description:
      "Oracle Cloud Infrastructure focuses on enterprise applications, high-performance databases, analytics, AI, and mission-critical business workloads.",
    services: [
      "Oracle Compute",
      "Oracle Database",
      "OCI AI",
      "Container Engine",
      "Block Storage",
      "Networking",
    ],
  },
  {
    logo: "💻",
    name: "IBM Cloud",
    founded: "2011",
    color: "text-cyan-400",
    website: "https://www.ibm.com/cloud",
    description:
      "IBM Cloud offers hybrid cloud, enterprise AI, Red Hat OpenShift, cybersecurity, and cloud-native application development for businesses worldwide.",
    services: [
      "Virtual Servers",
      "Watson AI",
      "Cloud Object Storage",
      "OpenShift",
      "Databases",
      "Security",
    ],
  },
  {
    logo: "🌏",
    name: "Alibaba Cloud",
    founded: "2009",
    color: "text-yellow-400",
    website: "https://www.alibabacloud.com",
    description:
      "Alibaba Cloud is one of the world's largest cloud providers, offering scalable computing, AI, networking, storage, and database services across Asia and globally.",
    services: [
      "Elastic Compute",
      "Object Storage",
      "ApsaraDB",
      "AI Platform",
      "Container Service",
      "Networking",
    ],
  },
];

export default function CloudProviders() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-blue-400">
            Major Cloud Platforms
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Leading Cloud Providers
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Modern cloud computing is powered by global providers operating
            thousands of secure data centers around the world. These companies
            offer infrastructure, Artificial Intelligence, storage, networking,
            databases, cybersecurity, and hundreds of managed cloud services.
          </p>

        </div>

        {/* Provider Cards */}

        <div className="mt-20 grid gap-10">

          {providers.map((provider) => (

            <div
              key={provider.name}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-10 transition duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >

              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

                <div className="flex-1">

                  <div className="text-6xl">
                    {provider.logo}
                  </div>

                  <h3 className={`mt-5 text-4xl font-black ${provider.color}`}>
                    {provider.name}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Founded: {provider.founded}
                  </p>

                  <p className="mt-6 leading-8 text-gray-300">
                    {provider.description}
                  </p>

                </div>

                <div className="lg:w-[360px]">

                  <h4 className="text-2xl font-bold text-white">
                    Popular Services
                  </h4>

                  <ul className="mt-6 space-y-3 text-gray-300">

                    {provider.services.map((service) => (

                      <li key={service}>
                        • {service}
                      </li>

                    ))}

                  </ul>

                  <a
                    href={provider.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
                  >
                    Official Website →
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Summary */}

        <div className="mt-24 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Which Cloud Platform Should You Learn?
          </h2>

          <p className="mt-6 text-xl leading-9 text-gray-300">

            Every cloud provider offers similar core services including
            compute, storage, networking, databases, Artificial Intelligence,
            containers, monitoring, and security. Learning the fundamentals
            of cloud computing will make it easier to work with any platform.
            Many professionals begin with AWS, Azure, or Google Cloud and
            later expand their skills across multiple providers.

          </p>

        </div>

      </div>

    </section>
  );
}