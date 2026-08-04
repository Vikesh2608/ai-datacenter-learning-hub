"use client";

import { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface Props {
  category: string;
  color?: string;
}

export default function LiveNewsCard({
  category,
  color = "#22d3ee",
}: Props) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch(
          `/api/news?category=${encodeURIComponent(category)}`
        );

        const data = await res.json();

        if (data.length > 0) {
          setArticle(data[0]);
        }
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }

    loadNews();
  }, [category]);

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        Loading...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        No news found.
      </div>
    );
  }

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-500 transition"
    >
      <div
        className="mb-6 h-4 w-4 rounded-full"
        style={{ background: color }}
      />

      <h3 className="text-3xl font-bold">{category}</h3>

      <p className="mt-6 text-lg font-semibold line-clamp-2">
        {article.title}
      </p>

      <p className="mt-4 text-gray-400 line-clamp-3">
        {article.description}
      </p>

      <div className="mt-8 flex justify-between text-sm text-cyan-400">
        <span>{article.source.name}</span>

        <span>
          {new Date(article.publishedAt).toLocaleDateString()}
        </span>
      </div>

      <p className="mt-6 font-semibold text-cyan-400">
        Read Article →
      </p>
    </a>
  );
}