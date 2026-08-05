import NewsHero from "@/components/news/NewsHero";
import FeaturedArticle from "@/components/news/FeaturedArticle";
import LiveNewsPreview from "@/components/news/LiveNewsPreview";
import Newsletter from "@/components/news/Newsletter";

export const metadata = {
  title: "AI & Technology News | AI & Data Center Learning Hub",
  description:
    "Stay informed with the latest developments in Artificial Intelligence, Data Centers, GPUs, Cloud Computing, Networking, Machine Learning, Cybersecurity, and emerging technologies.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <NewsHero />

      {/* Featured Article */}
      <FeaturedArticle />

      {/* Live News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-12">

            <p className="uppercase tracking-widest text-cyan-400 font-semibold">
              Latest Technology News
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Live AI & Technology Updates
            </h2>

            <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto">
              Stay informed with the latest developments from OpenAI,
              NVIDIA, AMD, Intel, Google, Microsoft, AWS,
              Cloud Computing, Data Centers and Artificial Intelligence.
            </p>

          </div>

          <LiveNewsPreview />

        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

    </main>
  );
}