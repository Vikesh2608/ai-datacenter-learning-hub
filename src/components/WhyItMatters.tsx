type WhyItMattersProps = {
  points: string[];
};

export default function WhyItMatters({
  points,
}: WhyItMattersProps) {
  return (
    <section className="mt-16 rounded-2xl border border-cyan-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        🌍 Why This Matters
      </h2>

      <div className="space-y-4">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex gap-3 items-start"
          >
            <span className="text-2xl">✔️</span>

            <p className="text-lg text-gray-300">
              {point}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}