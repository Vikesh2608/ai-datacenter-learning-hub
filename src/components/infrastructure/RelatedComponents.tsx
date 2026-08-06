import Link from "next/link";

interface RelatedComponentsProps {
  related: string[];
}

export default function RelatedComponents({
  related,
}: RelatedComponentsProps) {
  return (
    <section className="mt-16">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="text-3xl font-black text-white">
          Related Components
        </h2>

        <p className="mt-3 text-gray-400">
          Continue learning by exploring components that work together
          inside modern AI servers.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {related.map((item) => (
            <Link
              key={item}
              href={`/learn/infrastructure/${item}`}
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}