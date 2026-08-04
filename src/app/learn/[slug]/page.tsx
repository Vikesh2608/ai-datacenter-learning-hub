import { notFound } from "next/navigation";

const lessons: Record<
  string,
  {
    title: string;
    description: string;
    definition: string;
    youtube: string;
    resources: { title: string; url: string }[];
  }
> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    description: "Learn everything about Artificial Intelligence.",
    definition:
      "Artificial Intelligence (AI) is the simulation of human intelligence by computer systems capable of learning, reasoning, problem-solving, perception, and language understanding.",
    youtube: "https://www.youtube.com/results?search_query=artificial+intelligence",
    resources: [
      {
        title: "Google AI",
        url: "https://ai.google/",
      },
      {
        title: "OpenAI",
        url: "https://openai.com/",
      },
      {
        title: "Microsoft AI",
        url: "https://www.microsoft.com/ai",
      },
    ],
  },

  "data-centers": {
    title: "Data Centers",
    description: "Learn how modern data centers power AI.",
    definition:
      "A data center is a facility that houses servers, networking equipment, storage, cooling systems and power infrastructure that run cloud computing and AI services.",
    youtube: "https://www.youtube.com/results?search_query=data+center",
    resources: [
      {
        title: "Google Data Centers",
        url: "https://datacenters.google/",
      },
      {
        title: "AWS Infrastructure",
        url: "https://aws.amazon.com/about-aws/global-infrastructure/",
      },
    ],
  },
};

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const lesson = lessons[slug];

  if (!lesson) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-6xl mx-auto px-6 pt-36 pb-24">

        <h1 className="text-6xl font-black text-cyan-400">
          {lesson.title}
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          {lesson.description}
        </p>

        <div className="mt-12 rounded-2xl bg-slate-900 border border-slate-800 p-8">

          <h2 className="text-3xl font-bold">
            Definition
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-300">
            {lesson.definition}
          </p>

        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 border border-slate-800 p-8">

          <h2 className="text-3xl font-bold">
            Recommended Videos
          </h2>

          <a
            href={lesson.youtube}
            target="_blank"
            className="mt-6 inline-block text-cyan-400 font-bold"
          >
            ▶ Watch on YouTube
          </a>

        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 border border-slate-800 p-8">

          <h2 className="text-3xl font-bold">
            Official Resources
          </h2>

          <ul className="mt-6 space-y-4">

            {lesson.resources.map((resource) => (

              <li key={resource.url}>

                <a
                  href={resource.url}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  {resource.title}
                </a>

              </li>

            ))}

          </ul>

        </div>

      </section>

    </main>
  );
}