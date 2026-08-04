import NewsHero from "@/components/NewsHero";
import BreakingNews from "@/components/BreakingNews";
import FeaturedArticle from "@/components/FeaturedArticle";
import LiveNewsPreview from "@/components/LiveNewsPreview";
import NewsCategoryGrid from "@/components/NewsCategoryGrid";
import NewsSidebar from "@/components/NewsSidebar";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <NewsHero />

      <BreakingNews />

      <FeaturedArticle />

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-10">

        <div className="lg:col-span-3">

          <LiveNewsPreview />

        </div>

        <NewsSidebar />

      </section>

      <NewsCategoryGrid />

    </main>
  );
}