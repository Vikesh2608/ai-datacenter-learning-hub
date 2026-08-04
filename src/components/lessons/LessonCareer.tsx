interface LessonCareerProps {
  roles: string[];
}

export default function LessonCareer({
  roles,
}: LessonCareerProps) {

  return (
    <section
      id="career"
      className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
    >

      <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        Careers
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Career Opportunities
      </h2>

      <div className="mt-12 grid md:grid-cols-2 gap-6">

        {roles.map((role) => (

          <div
            key={role}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
          >
            💼 {role}
          </div>

        ))}

      </div>

    </section>
  );
}