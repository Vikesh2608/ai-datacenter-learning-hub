type DiagramCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function DiagramCard({
  title,
  description,
  children,
}: DiagramCardProps) {
  return (
    <section className="mt-16 rounded-2xl border border-cyan-700 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-cyan-400">
        🖼 {title}
      </h2>

      <p className="mt-4 text-gray-300">
        {description}
      </p>

      <div className="mt-10 rounded-xl border border-slate-700 bg-slate-950 p-8 overflow-x-auto">

        {children}

      </div>

    </section>
  );
}