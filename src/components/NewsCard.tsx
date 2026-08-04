import Link from "next/link";

type NewsCardProps = {
  title: string;
  description: string;
  company: string;
  category: string;
  time: string;
  slug: string;
};

export default function NewsCard({
  title,
  description,
  company,
  category,
  time,
  slug,
}: NewsCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-800 bg-slate-900 hover:border-cyan-400 transition duration-300 overflow-hidden">

      <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500" />

      <div className="p-8">

        <div className="flex flex-wrap gap-3 mb-5">

          <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-cyan-300 text-sm">
            {company}
          </span>

          <span className="rounded-full bg-slate-800 px-4 py-1 text-gray-300 text-sm">
            {category}
          </span>

        </div>

        <h2 className="text-3xl font-bold leading-tight group-hover:text-cyan-400 transition">

          {title}

        </h2>

        <p className="mt-5 leading-8 text-gray-300">

          {description}

        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-gray-400 text-sm">
            🕒 {time}
          </span>

          <Link
            href={`/news/${slug}`}
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Read →
          </Link>

        </div>

      </div>

    </article>
  );
}