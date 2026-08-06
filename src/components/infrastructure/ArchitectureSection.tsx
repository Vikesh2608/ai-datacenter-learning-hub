interface ArchitectureSectionProps {
  architecture: string;
}

export default function ArchitectureSection({
  architecture,
}: ArchitectureSectionProps) {
  return (
    <section className="mt-16">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Architecture
        </p>

        <h2 className="mt-4 text-3xl font-black text-white">
          Component Architecture
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          {architecture}
        </p>

      </div>
    </section>
  );
}