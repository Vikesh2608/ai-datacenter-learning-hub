import Link from "next/link";

const news = [
  {
    company: "OpenAI",
    title: "Latest Artificial Intelligence Developments",
    color: "bg-green-500",
  },
  {
    company: "NVIDIA",
    title: "GPU, AI Infrastructure & Data Center News",
    color: "bg-lime-500",
  },
  {
    company: "Microsoft",
    title: "Azure AI and Cloud Computing",
    color: "bg-blue-500",
  },
  {
    company: "Google",
    title: "Gemini, TPU & Google Cloud",
    color: "bg-red-500",
  },
  {
    company: "AWS",
    title: "Amazon Web Services & AI",
    color: "bg-orange-500",
  },
  {
    company: "Meta",
    title: "Open Source AI & Llama",
    color: "bg-indigo-500",
  },
];

export default function LiveNewsPreview() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-widest text-cyan-400 font-semibold">
              Live Industry Updates
            </p>

            <h2 className="mt-4 text-5xl font-extrabold">
              AI & Data Center News
            </h2>

          </div>

          <Link
            href="/news"
            className="rounded-xl border border-cyan-500 px-6 py-3 hover:bg-cyan-500 hover:text-black transition"
          >
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {news.map((item) => (

            <div
              key={item.company}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-6 hover:border-cyan-400 transition"
            >

              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>

              <h3 className="mt-4 text-2xl font-bold">
                {item.company}
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                {item.title}
              </p>

              <button className="mt-6 text-cyan-400 font-semibold">
                Coming Soon →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}