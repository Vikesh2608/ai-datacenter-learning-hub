import Link from "next/link";
import { notFound } from "next/navigation";

import { dataCenterLessons } from "@/data/academy/datacenter";

import LessonProgress from "@/components/academy/LessonProgress";
import YouTubeResources from "@/components/YouTubeResources";

type Props = {
  params: Promise<{
    lesson: string;
  }>;
};

export default async function DataCenterLessonPage({
  params,
}: Props) {
  const { lesson } = await params;

  const currentLesson = dataCenterLessons.find(
    (item) => item.id.toString() === lesson
  );

  if (!currentLesson) {
    notFound();
  }

  const nextLesson = dataCenterLessons.find(
    (item) => item.id === currentLesson.id + 1
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Back Button */}

        <Link
          href="/learn/datacenter"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back to Data Center Academy
        </Link>

        {/* Hero */}

        <div className="mt-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-12">

          <div className="text-7xl">
            {currentLesson.hero.icon}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <span className="rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold">
              {currentLesson.hero.level}
            </span>

            <span className="rounded-full bg-slate-800 px-5 py-2">
              ⏱ {currentLesson.hero.estimatedTime}
            </span>

          </div>

          <h1 className="mt-8 text-6xl font-black">
            {currentLesson.hero.title}
          </h1>

          <p className="mt-6 text-2xl text-cyan-300 leading-10">
            {currentLesson.hero.subtitle}
          </p>

          <p className="mt-10 max-w-5xl text-xl leading-9 text-gray-300">
            {currentLesson.overview}
          </p>

        </div>

        {/* Progress */}

        <LessonProgress
          current={currentLesson.id}
          total={dataCenterLessons.length}
        />

        {/* Lesson Sections */}

        <section className="mt-20 space-y-10">

          {currentLesson.sections.map((section) => (

            <div
              key={section.heading}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
            >

              <h2 className="text-4xl font-bold text-cyan-400">
                {section.heading}
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                {section.content}
              </p>

            </div>

          ))}

        </section>

        {/* Key Takeaways */}

        <section className="mt-20 rounded-3xl border border-green-600/20 bg-slate-900 p-10">

          <h2 className="text-4xl font-bold text-green-400">
            ✅ Key Takeaways
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {currentLesson.keyTakeaways.map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-slate-800 p-6"
              >
                {item}
              </div>

            ))}

          </div>

        </section>

        {/* Did You Know */}

        <section className="mt-20 rounded-3xl border border-yellow-500/20 bg-slate-900 p-10">

          <h2 className="text-4xl font-bold text-yellow-400">
            💡 Did You Know?
          </h2>

          <div className="mt-10 space-y-6">

            {currentLesson.didYouKnow.map((fact) => (

              <div
                key={fact}
                className="rounded-2xl bg-slate-800 p-6"
              >
                {fact}
              </div>

            ))}

          </div>

        </section>

        {/* Glossary */}

        <section className="mt-20 rounded-3xl border border-cyan-500/20 bg-slate-900 p-10">

          <h2 className="text-4xl font-bold">
            📖 Glossary
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {currentLesson.glossary.map((term) => (

              <div
                key={term.term}
                className="rounded-2xl border border-slate-700 p-6"
              >

                <h3 className="text-2xl font-bold text-cyan-400">
                  {term.term}
                </h3>

                <p className="mt-4 leading-8 text-gray-300">
                  {term.definition}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* YouTube */}

        <section className="mt-20">

          <YouTubeResources
            videos={currentLesson.youtube}
          />

        </section>

                {/* Quiz */}

        <section className="mt-20 rounded-3xl border border-purple-500/20 bg-slate-900 p-10">

          <h2 className="text-4xl font-bold text-purple-400">
            🧠 Knowledge Check
          </h2>

          <div className="mt-10 space-y-8">

            {currentLesson.quiz.map((question, index) => (

              <div
                key={index}
                className="rounded-2xl bg-slate-800 p-8"
              >

                <h3 className="text-2xl font-bold">
                  {index + 1}. {question.question}
                </h3>

                <div className="mt-6 grid gap-3">

                  {question.options.map((option) => (

                    <div
                      key={option}
                      className="rounded-xl border border-slate-700 p-4 hover:border-cyan-500 transition"
                    >
                      {option}
                    </div>

                  ))}

                </div>

                <div className="mt-8 rounded-xl border border-green-500/20 bg-green-950/30 p-6">

                  <p className="font-bold text-green-400">
                    ✔ Correct Answer
                  </p>

                  <p className="mt-2">
                    {question.options[question.answer]}
                  </p>

                  <p className="mt-4 text-gray-300">
                    {question.explanation}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Companies */}

        <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-4xl font-bold">
            🏢 Companies Mentioned
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">

            {currentLesson.companies.map((company) => (

              <a
                key={company.name}
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-600 px-5 py-3 font-semibold hover:bg-cyan-500 transition"
              >
                {company.name}
              </a>

            ))}

          </div>

        </section>

        {/* Related Articles */}

        <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-4xl font-bold">
            📚 Related Articles
          </h2>

          <div className="mt-8 space-y-4">

            {currentLesson.relatedArticles.map((article) => (

              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block rounded-xl bg-slate-800 p-6 hover:border hover:border-cyan-500 transition"
              >
                {article.title}
              </Link>

            ))}

          </div>

        </section>

        {/* Related News */}

        <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-4xl font-bold">
            📰 Related News Categories
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">

            {currentLesson.relatedNews.map((news) => (

              <Link
                key={news.category}
                href={`/news/${news.category}`}
                className="rounded-full bg-slate-800 px-5 py-3 hover:bg-cyan-600 transition"
              >
                {news.category.toUpperCase()}
              </Link>

            ))}

          </div>

        </section>

        {/* Navigation */}

        <section className="mt-20 flex flex-col gap-6 md:flex-row md:justify-between">

          {currentLesson.id > 1 ? (

            <Link
              href={`/learn/datacenter/${currentLesson.id - 1}`}
              className="rounded-xl bg-slate-800 px-8 py-4 text-center font-bold hover:bg-slate-700 transition"
            >
              ← Previous Lesson
            </Link>

          ) : (

            <div />

          )}

          {nextLesson && (

            <Link
              href={`/learn/datacenter/${nextLesson.id}`}
              className="rounded-xl bg-cyan-500 px-8 py-4 text-center font-bold text-slate-950 hover:bg-cyan-400 transition"
            >
              Next Lesson →
            </Link>

          )}

        </section>

      </section>

    </main>
  );
}