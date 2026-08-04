"use client";

import { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  image: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export default function NewsHero() {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    async function loadNews() {
      const res = await fetch("/api/news?category=Artificial Intelligence");
      const data = await res.json();

      if (data.length > 0) {
        setArticle(data[0]);
      }
    }

    loadNews();
  }, []);

  if (!article) {
    return (
      <section className="min-h-[700px] flex items-center justify-center bg-slate-950">
        <h2 className="text-3xl font-bold text-white">
          Loading Latest AI News...
        </h2>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">

      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6 py-32">

        <span className="inline-flex rounded-full bg-cyan-500 px-5 py-2 font-bold">
          LIVE NEWS
        </span>

        <h1 className="mt-8 text-6xl font-black max-w-4xl text-white leading-tight">
          {article.title}
        </h1>

        <p className="mt-8 text-xl max-w-3xl text-gray-300 leading-9">
          {article.description}
        </p>

        <div className="mt-8 flex gap-8 text-gray-300">

          <span>{article.source.name}</span>

          <span>
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>

        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex rounded-xl bg-cyan-500 px-8 py-4 text-slate-950 font-bold hover:bg-cyan-400 transition"
        >
          Read Full Story →
        </a>

      </div>

    </section>
  );
}