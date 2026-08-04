type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type TimelineProps = {
  title?: string;
  subtitle?: string;
  items: TimelineItem[];
};

export default function Timeline({
  title = "📅 Timeline",
  subtitle = "Follow the evolution of this technology over time.",
  items,
}: TimelineProps) {
  return (
    <section className="my-20">

      <div className="text-center mb-14">

        <h2 className="text-5xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-5 text-xl text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>

      </div>

      <div className="relative border-l-4 border-cyan-500 ml-6">

        {items.map((item, index) => (

          <div
            key={index}
            className="relative mb-12 ml-10"
          >

            <div className="absolute -left-[52px] top-1 w-8 h-8 rounded-full bg-cyan-500 border-4 border-slate-950"></div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-400 transition">

              <p className="text-cyan-400 font-bold text-lg">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-8">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}