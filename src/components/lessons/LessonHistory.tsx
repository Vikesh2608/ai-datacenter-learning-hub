interface LessonHistoryProps {
  title: string;
  timeline: {
    year: string;
    title: string;
    description: string;
  }[];
}

export default function LessonHistory({
  title,
  timeline,
}: LessonHistoryProps) {
  return (
    <section
      id="history"
      className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
    >
      <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        Lesson 2
      </p>

      <h2 className="mt-4 text-5xl font-black">
        History of {title}
      </h2>

      <p className="mt-6 text-xl text-gray-300 leading-9">
        Understanding the evolution of {title} helps explain how modern
        technology has developed and why it continues to shape industries
        around the world.
      </p>

      <div className="mt-12 space-y-8">

        {timeline.map((item) => (

          <div
            key={item.year}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8"
          >

            <div className="flex flex-wrap items-center gap-4">

              <div className="rounded-full bg-cyan-500 text-black px-5 py-2 font-bold">
                {item.year}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

            </div>

            <p className="mt-6 text-gray-300 leading-8">
              {item.description}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}