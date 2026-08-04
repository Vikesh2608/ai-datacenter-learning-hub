import { GNewsResponse } from "@/types/news";

const API_KEY = process.env.GNEWS_API_KEY;

export async function getNews(query: string) {
  const url =
    `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}` +
    `&lang=en&country=us&max=10&apikey=${API_KEY}`;

  const res = await fetch(url, {
    next: {
      revalidate: 1800, // 30 minutes
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GNews.");
  }

  const data: GNewsResponse = await res.json();

  return data.articles;
}