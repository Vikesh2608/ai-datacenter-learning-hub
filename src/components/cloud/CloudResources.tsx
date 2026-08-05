const resources = [
  {
    name: "Amazon Web Services",
    url: "https://aws.amazon.com",
  },
  {
    name: "Microsoft Azure",
    url: "https://azure.microsoft.com",
  },
  {
    name: "Google Cloud",
    url: "https://cloud.google.com",
  },
  {
    name: "Oracle Cloud",
    url: "https://www.oracle.com/cloud/",
  },
  {
    name: "IBM Cloud",
    url: "https://www.ibm.com/cloud",
  },
  {
    name: "Alibaba Cloud",
    url: "https://www.alibabacloud.com",
  },
  {
    name: "Docker",
    url: "https://www.docker.com",
  },
  {
    name: "Kubernetes",
    url: "https://kubernetes.io",
  },
  {
    name: "Linux Foundation",
    url: "https://www.linuxfoundation.org",
  },
];

export default function CloudResources() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Official Resources
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Continue Learning
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {resources.map((resource) => (

            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
            >

              <h3 className="text-2xl font-bold text-blue-400">
                {resource.name}
              </h3>

              <p className="mt-5 text-gray-300">
                Official Documentation
              </p>

              <div className="mt-8 font-semibold text-blue-400">
                Visit Website →
              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}