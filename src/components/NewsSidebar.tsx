import Link from "next/link";
import { newsCategories } from "@/data/newsCategories";

export default function NewsSidebar() {
  return (
    <aside className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold mb-6">
        Categories
      </h2>

      <div className="space-y-3">

        {newsCategories.map((category) => (

          <Link
            key={category.slug}
            href={`/news/${category.slug}`}
            className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 hover:border-cyan-400 transition"
          >

            <span className="text-2xl">
              {category.icon}
            </span>

            <div>

              <h3 className="font-semibold">
                {category.title}
              </h3>

              <p className="text-sm text-gray-400">
                {category.description}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </aside>
  );
}