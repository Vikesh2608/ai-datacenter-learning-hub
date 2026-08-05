import Link from "next/link";

const companies = [
  {
    name: "OpenAI",
    slug: "openai",
    color: "bg-green-500",
    description: "Latest Artificial Intelligence Developments",
  },
  {
    name: "NVIDIA",
    slug: "nvidia",
    color: "bg-lime-500",
    description: "GPU, AI Infrastructure & Data Center News",
  },
  {
    name: "Microsoft",
    slug: "microsoft",
    color: "bg-blue-500",
    description: "Azure AI and Cloud Computing",
  },
  {
    name: "Google",
    slug: "google",
    color: "bg-red-500",
    description: "Gemini, TPU & Google Cloud",
  },
  {
    name: "AWS",
    slug: "aws",
    color: "bg-orange-500",
    description: "Amazon Web Services & AI",
  },
  {
    name: "Meta",
    slug: "meta",
    color: "bg-indigo-500",
    description: "Open Source AI & Llama Models",
  },
  {
    name: "AMD",
    slug: "amd",
    color: "bg-pink-500",
    description: "EPYC Processors, Instinct GPUs & AI",
  },
  {
    name: "Intel",
    slug: "intel",
    color: "bg-cyan-500",
    description: "Xeon CPUs, Gaudi AI & Enterprise Computing",
  },
  {
    name: "Cisco",
    slug: "cisco",
    color: "bg-sky-500",
    description: "Networking, Ethernet & AI Infrastructure",
  },
];

export default function LiveNewsPreview() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between mb-12">

          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
              Live Industry Updates
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              AI & Data Center News
            </h2>
          </div>

          <Link
            href="/news"
            className="hidden md:inline-flex rounded-xl border border-cyan-500 px-8 py-4 hover:bg-cyan-500/10 transition"
          >
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {companies.map((company) => (
            <Link
              key={company.slug}
              href={`/news/${company.slug}`}
              className="group"
            >
              <div className="rounded-3xl border border-slate-700 bg-slate-950 p-8 h-full transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">

                <div
                  className={`w-4 h-4 rounded-full ${company.color}`}
                />

                <h3 className="mt-8 text-3xl font-bold text-white group-hover:text-cyan-400 transition">
                  {company.name}
                </h3>

                <p className="mt-6 text-xl text-gray-300 leading-8">
                  {company.description}
                </p>

                <div className="mt-10 inline-flex items-center text-cyan-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  View Latest News →
                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}