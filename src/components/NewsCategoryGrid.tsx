import Link from "next/link";
import { newsCategories } from "@/data/newsCategories";

export default function NewsCategoryGrid() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-black mb-14">
          Browse News Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {newsCategories.map((category) => (

            <Link
              key={category.slug}
              href={`/news/${category.slug}`}
            >

              <div className="group rounded-3xl border border-slate-800 bg-slate-900 hover:border-cyan-400 transition p-8 h-full">

                <div className="text-5xl">
                  {category.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold group-hover:text-cyan-400 transition">
                  {category.title}
                </h3>

                <p className="mt-5 text-gray-300 leading-8">
                  {category.description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}