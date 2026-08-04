"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  answer: number;
}

interface LessonQuizProps {
  questions: Question[];
}

export default function LessonQuiz({
  questions,
}: LessonQuizProps) {

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  function choose(question: number, option: number) {
    const updated = [...answers];
    updated[question] = option;
    setAnswers(updated);
  }

  function finishQuiz() {

    let total = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.answer) total++;
    });

    setScore(total);
    setSubmitted(true);
  }

  return (
    <section
      id="quiz"
      className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
    >

      <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
        Lesson Quiz
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Test Your Knowledge
      </h2>

      <div className="mt-12 space-y-10">

        {questions.map((q, index) => (

          <div
            key={index}
            className="rounded-2xl bg-slate-950 border border-slate-800 p-8"
          >

            <h3 className="text-2xl font-bold">
              {index + 1}. {q.question}
            </h3>

            <div className="mt-6 space-y-3">

              {q.options.map((option, i) => (

                <button
                  key={i}
                  onClick={() => choose(index, i)}
                  className={`block w-full rounded-xl border p-4 text-left transition ${
                    answers[index] === i
                      ? "border-cyan-400 bg-cyan-500/20"
                      : "border-slate-700 hover:border-cyan-500"
                  }`}
                >
                  {option}
                </button>

              ))}

            </div>

          </div>

        ))}

      </div>

      <button
        onClick={finishQuiz}
        className="mt-12 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black"
      >
        Submit Quiz
      </button>

      {submitted && (

        <div className="mt-10 rounded-2xl border border-cyan-500 bg-cyan-500/10 p-8">

          <h3 className="text-3xl font-black">
            Score: {score} / {questions.length}
          </h3>

        </div>

      )}

    </section>
  );
}