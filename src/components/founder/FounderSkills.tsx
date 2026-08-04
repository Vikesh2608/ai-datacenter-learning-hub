export default function FounderSkills() {
  const skills = [
    "Artificial Intelligence",
    "Data Centers",
    "Cloud Computing",
    "GPU Infrastructure",
    "Networking",
    "Software Engineering",
    "Open Source",
    "Technical Education",
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-12">
          Areas of Focus
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center hover:border-cyan-400 transition"
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}