import Link from "next/link";
import { aiLessons } from "@/data/aiLessons";

export default function AILearningRoadmap() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center">

        <h2 className="text-5xl font-bold text-white">
          AI Learning Roadmap
        </h2>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
          Follow this structured learning journey from beginner to advanced
          Artificial Intelligence concepts.
        </p>

      </div>

      <div className="mt-16 space-y-6">

        {aiLessons.map((lesson) => (

          <Link
            key={lesson.id}
            href={`/learn/ai/${lesson.id}`}
            className="block"
          >

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-500 hover:scale-[1.02] transition-all duration-300">

              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">

                {/* Lesson Number */}

                <div className="text-6xl font-black text-cyan-400 min-w-[90px]">
                  {lesson.id.toString().padStart(2, "0")}
                </div>

                {/* Lesson Content */}

                <div className="flex-1">

                  <h3 className="text-3xl font-bold text-white">
                    {lesson.title}
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    {lesson.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    {/* Level */}

                    <span className="rounded-full bg-cyan-900 px-4 py-2 text-sm font-medium text-cyan-200">
                      {lesson.level}
                    </span>

                    {/* Duration */}

                    <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-gray-300">
                      ⏱ {lesson.duration}
                    </span>

                  </div>

                </div>

                {/* Arrow */}

                <div className="text-cyan-400 text-3xl font-bold">
                  →
                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}