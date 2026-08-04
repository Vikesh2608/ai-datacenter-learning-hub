import Link from "next/link";

const articles = [
  {
    title: "The Silent Cities That Power Human Civilization",
    description:
      "Discover why data centers became the invisible foundation of our digital world and Artificial Intelligence.",
    read: "12 min read",
    href: "/articles/the-silent-cities-that-power-human-civilization",
  },
  {
    title: "Why the Cloud Is Not in the Sky",
    description:
      "Understand what cloud computing really is and why everything still runs inside physical buildings.",
    read: "10 min read",
    href: "#",
  },
  {
    title: "The Journey of an AI Prompt",
    description:
      "Follow a ChatGPT request from your keyboard all the way to an AI data center and back.",
    read: "15 min read",
    href: "#",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h1 className="text-6xl font-extrabold">
            📖 Inside AI Articles
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-9">
            Original educational articles about Artificial Intelligence,
            Data Centers, Cloud Computing, GPUs, Networking,
            and the technologies powering modern civilization.
          </p>

        </div>

        <div className="mt-20 space-y-8">

          {articles.map((article) => (

            <Link
              key={article.title}
              href={article.href}
              className="block rounded-3xl border border-slate-800 bg-slate-900 p-10 hover:border-cyan-500 transition"
            >

              <p className="text-cyan-400 font-semibold">
                {article.read}
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {article.title}
              </h2>

              <p className="mt-5 text-gray-300 text-lg leading-8">
                {article.description}
              </p>

              <p className="mt-8 text-cyan-400 font-bold">
                Read Article →
              </p>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}