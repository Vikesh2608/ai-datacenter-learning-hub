type KeyTerm = {
  term: string;
  definition: string;
};

type KeyTermsProps = {
  terms: KeyTerm[];
};

export default function KeyTerms({ terms }: KeyTermsProps) {
  return (
    <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        📚 Key Terms
      </h2>

      <div className="space-y-6">

        {terms.map((item, index) => (

          <div
            key={index}
            className="rounded-xl border border-slate-700 p-5"
          >

            <h3 className="text-2xl font-bold text-white">
              {item.term}
            </h3>

            <p className="mt-3 text-gray-300">
              {item.definition}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}