type LessonSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function LessonSection({
  title,
  children,
}: LessonSectionProps) {
  return (
    <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">

      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
        {title}
      </h2>

      <div className="text-lg leading-9 text-gray-300">
        {children}
      </div>

    </section>
  );
}