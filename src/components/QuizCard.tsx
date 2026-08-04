"use client";

import { useState } from "react";

type QuizCardProps = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export default function QuizCard({
  question,
  options,
  answer,
  explanation,
}: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const correct = selected === answer;

  return (
    <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        📝 Quick Quiz
      </h2>

      <h3 className="text-xl font-semibold mb-6">
        {question}
      </h3>

      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            disabled={submitted}
            className={`w-full rounded-xl border p-4 text-left transition

              ${
                selected === index
                  ? "border-cyan-400 bg-cyan-900"
                  : "border-slate-700 hover:border-cyan-500"
              }

            `}
          >
            {option}
          </button>
        ))}
      </div>

      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          disabled={selected === null}
          className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black disabled:opacity-50"
        >
          Check Answer
        </button>
      )}

      {submitted && (
        <div
          className={`mt-8 rounded-xl p-6 ${
            correct
              ? "bg-green-900 border border-green-500"
              : "bg-red-900 border border-red-500"
          }`}
        >
          <h4 className="text-xl font-bold">
            {correct ? "✅ Correct!" : "❌ Not Quite"}
          </h4>

          <p className="mt-4">{explanation}</p>
        </div>
      )}
    </section>
  );
}