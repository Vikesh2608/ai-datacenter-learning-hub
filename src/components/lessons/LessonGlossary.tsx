interface GlossaryTerm {
  term: string;
  definition: string;
}

interface LessonGlossaryProps {
  glossary: GlossaryTerm[];
}

export default function LessonGlossary({
  glossary,
}: LessonGlossaryProps) {

  return (
    <section
      id="glossary"
      className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
    >

      <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        Glossary
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Key Terms
      </h2>

      <div className="mt-12 space-y-6">

        {glossary.map((item) => (

          <div
            key={item.term}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
          >

            <h3 className="text-2xl font-bold text-cyan-400">
              {item.term}
            </h3>

            <p className="mt-4 text-gray-300">
              {item.definition}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}