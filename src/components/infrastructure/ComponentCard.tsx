import Link from "next/link";
import { ServerComponent } from "@/data/serverComponents";

interface Props {
  component: ServerComponent;
}

export default function ComponentCard({ component }: Props) {
  return (
    <Link
      href={`/learn/infrastructure/${component.slug}`}
      className="group rounded-2xl border border-slate-800 bg-slate-900 hover:border-cyan-500 transition overflow-hidden"
    >
      <div className="aspect-video bg-slate-800 flex items-center justify-center">
        <span className="text-5xl">🖥️</span>
      </div>

      <div className="p-6">
        <p className="text-cyan-400 text-sm font-semibold uppercase">
          {component.category}
        </p>

        <h3 className="mt-2 text-2xl font-bold group-hover:text-cyan-400 transition">
          {component.name}
        </h3>

        <p className="mt-4 text-gray-400 text-sm leading-7">
          {component.shortDescription}
        </p>

        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <span>{component.difficulty}</span>
          <span>{component.readTime}</span>
        </div>
      </div>
    </Link>
  );
}