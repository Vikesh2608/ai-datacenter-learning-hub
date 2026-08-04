import Link from "next/link";

import { aiLessons } from "@/data/aiLessons";

import LessonHeader from "@/components/LessonHeader";
import LessonSection from "@/components/LessonSection";
import KeyTerms from "@/components/KeyTerms";
import QuizCard from "@/components/QuizCard";
import YouTubeSection from "@/components/YouTubeSection";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lesson: string }>;
}) {
  const { lesson } = await params;

  const lessonNumber = Number(lesson);

  const currentLesson = aiLessons.find(
    (l) => l.id === lessonNumber
  );

  if (!currentLesson) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Lesson not found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-5xl mx-auto px-8 py-20">

        <LessonHeader lesson={currentLesson} />

        <LessonSection title="📘 Lesson Overview">
          <p>{currentLesson.overview}</p>
        </LessonSection>

        <LessonSection title="⭐ Why It Matters">
          <ul className="space-y-3">
            {currentLesson.whyItMatters.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </LessonSection>

        <LessonSection title="🎯 Learning Objectives">
          <ul className="space-y-3">
            {currentLesson.objectives.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </LessonSection>

        {currentLesson.keyTerms && (
          <KeyTerms terms={currentLesson.keyTerms} />
        )}

        <QuizCard
          question="Which of the following is an example of Artificial Intelligence?"
          options={[
            "Calculator",
            "ChatGPT",
            "USB Drive",
            "Keyboard",
          ]}
          answer={1}
          explanation="Correct! ChatGPT is an AI system because it learns patterns from massive amounts of data and generates intelligent responses."
        />

        <div className="mt-12 flex flex-wrap gap-4">

          {lessonNumber > 1 && (
            <Link
              href={`/learn/ai/${lessonNumber - 1}`}
              className="px-6 py-3 rounded-xl border border-cyan-500"
            >
              ← Previous Lesson
            </Link>
          )}

          <Link
            href="/learn/ai"
            className="px-6 py-3 rounded-xl border border-cyan-500"
          >
              📚 AI Course
          </Link>

          {lessonNumber < aiLessons.length && (
            <Link
              href={`/learn/ai/${lessonNumber + 1}`}
              className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold"
            >
              Next Lesson →
            </Link>
          )}

        </div>

      </section>

      <YouTubeSection />

    </main>
  );
}