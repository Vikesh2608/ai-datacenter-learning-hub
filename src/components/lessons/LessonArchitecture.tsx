interface LessonArchitectureProps {
  title: string;
  steps: {
    title: string;
    description: string;
  }[];
}

export default function LessonArchitecture({
  title,
  steps,
}: LessonArchitectureProps) {
  return (
    <section
      id="how"
      className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
    >
      <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        Lesson 3
      </p>

      <h2 className="mt-4 text-5xl font-black">
        How {title} Works
      </h2>

      <p className="mt-6 text-xl text-gray-300 leading-9">
        Understanding how {title} works is the key to mastering the
        technology. Follow the workflow below from beginning to end.
      </p>

      {/* Workflow */}

      <div className="mt-16 grid gap-8">

        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8"
          >
            <div className="flex items-center gap-6">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-2xl font-black text-black">
                {index + 1}
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-300 leading-8">
                  {step.description}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Architecture Diagram */}

      <div className="mt-20 rounded-3xl border border-cyan-500 bg-slate-950 p-10">

        <h3 className="text-3xl font-black text-cyan-400">
          Architecture Overview
        </h3>

        <div className="mt-12 overflow-x-auto">

          <div className="flex min-w-max items-center gap-6">

            <div className="rounded-xl bg-cyan-500 px-8 py-5 font-bold text-black">
              User
            </div>

            <span className="text-4xl">→</span>

            <div className="rounded-xl bg-slate-800 px-8 py-5">
              Input
            </div>

            <span className="text-4xl">→</span>

            <div className="rounded-xl bg-slate-800 px-8 py-5">
              Processing
            </div>

            <span className="text-4xl">→</span>

            <div className="rounded-xl bg-slate-800 px-8 py-5">
              Analysis
            </div>

            <span className="text-4xl">→</span>

            <div className="rounded-xl bg-slate-800 px-8 py-5">
              Output
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}