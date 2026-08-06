interface Props {
  title: string;
  description: string;
  difficulty: string;
  readTime: string;
}

export default function ComponentOverview({
  title,
  description,
  difficulty,
  readTime,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <p className="uppercase tracking-widest text-cyan-400 text-sm font-semibold">
        Overview
      </p>

      <h2 className="mt-4 text-4xl font-black">
        {title}
      </h2>

      <p className="mt-6 text-lg text-gray-300 leading-8">
        {description}
      </p>

      <div className="mt-8 flex gap-8">

        <div>
          <p className="text-cyan-400 text-sm">Difficulty</p>
          <p className="font-semibold">{difficulty}</p>
        </div>

        <div>
          <p className="text-cyan-400 text-sm">Estimated Reading</p>
          <p className="font-semibold">{readTime}</p>
        </div>

      </div>

    </section>
  );
}