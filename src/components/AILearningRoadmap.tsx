import Link from "next/link";
import { aiLessons } from "@/data/aiLessons";

export default function AILearningRoadmap() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center">

        <h2 className="text-5xl font-bold">
          AI Learning Roadmap
        </h2>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
          Follow this structured learning journey from beginner
          to advanced Artificial Intelligence concepts.
        </p>

      </div>

      <div className="mt-16 space-y-6">

        {aiLessons.map((lesson) => (

          <Link
            key={lesson.id}
            href={`/learn/ai/${lesson.id}`}
            className="block"
          >

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-500 hover:scale-[1.02] transition duration-300">

              <div className="flex gap-8 items-center">

                <div className="text-6xl font-bold text-cyan-400">
                  {lesson.id.toString().padStart(2, "0")}
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {lesson.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {lesson.description}
                  </p>

                  <div className="mt-4 flex gap-3">

                    <span className="rounded-full bg-cyan-900 px-3 py-1 text-sm">
                      {lesson.difficulty}
                    </span>

                    <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
                      {lesson.duration}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}