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
    async function load() {
      const res = await fetch("/api/news?category=Artificial Intelligence");
      const data = await res.json();

      if (data.length) {
        setArticle(data[0]);
      }
    }

    load();
  }, []);

  if (!article) {
    return (
      <section className="h-[500px] flex items-center justify-center bg-slate-950 text-white">
        Loading latest AI news...
      </section>
    );
  }

  return (
    <section className="relative h-[700px] overflow-hidden">

      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">

        <span className="rounded-full bg-cyan-500 px-4 py-2 font-bold">
          LIVE AI NEWS
        </span>

        <h1 className="mt-8 text-6xl font-black max-w-4xl">
          {article.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-gray-300">
          {article.description}
        </p>

        <div className="mt-8 flex gap-8 text-gray-300">
          <span>{article.source.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950"
        >
          Read Full Story →
        </a>

      </div>

    </section>
  );
}
