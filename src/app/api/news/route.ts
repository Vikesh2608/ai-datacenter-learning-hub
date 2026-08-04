import { NextRequest, NextResponse } from "next/server";
import { getNews } from "@/lib/gnews";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const category =
    searchParams.get("category") || "Artificial Intelligence";

  try {
    const articles = await getNews(category);

    return NextResponse.json(articles);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch news.",
      },
      {
        status: 500,
      }
    );
  }
}