interface LessonDefinitionProps {
  title: string;
  definition: string;
  importance: string;
  realWorld: string;
  applications: string[];
}

export default function LessonDefinition({
  title,
  definition,
  importance,
  realWorld,
  applications,
}: LessonDefinitionProps) {
  return (
    <section
      id="definition"
      className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
    >
      <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        Lesson 1
      </p>

      <h2 className="mt-4 text-5xl font-black">
        What is {title}?
      </h2>

      <p className="mt-8 text-xl leading-9 text-gray-300">
        {definition}
      </p>

      <div className="mt-12 grid lg:grid-cols-2 gap-8">

        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8">

          <h3 className="text-2xl font-bold text-cyan-400">
            Why It Matters
          </h3>

          <p className="mt-6 leading-8 text-gray-300">
            {importance}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8">

          <h3 className="text-2xl font-bold text-cyan-400">
            Real World Example
          </h3>

          <p className="mt-6 leading-8 text-gray-300">
            {realWorld}
          </p>

        </div>

      </div>

      <div className="mt-12">

        <h3 className="text-3xl font-bold">
          Common Applications
        </h3>

        <div className="mt-8 grid md:grid-cols-2 gap-5">

          {applications.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-cyan-500 transition"
            >
              ✅ {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}