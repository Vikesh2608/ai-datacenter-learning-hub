interface Resource {
  name: string;
  description: string;
  url: string;
}

interface LessonResourcesProps {
  resources: Resource[];
}

export default function LessonResources({
  resources,
}: LessonResourcesProps) {
  return (
    <section
      id="resources"
      className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
    >
      <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        Lesson 5
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Official Resources
      </h2>

      <p className="mt-6 text-xl text-gray-300">
        Learn directly from trusted industry documentation.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-8">

        {resources.map((resource) => (

          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8 hover:border-cyan-500 transition"
          >

            <h3 className="text-2xl font-bold text-cyan-400">
              {resource.name}
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              {resource.description}
            </p>

            <p className="mt-8 font-bold text-cyan-400">
              Visit Resource →
            </p>

          </a>

        ))}

      </div>

    </section>
  );
}