type LessonProgressProps = {
  current: number;
  total: number;
};

export default function LessonProgress({
  current,
  total,
}: LessonProgressProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <section className="mt-12 rounded-3xl border border-cyan-500/30 bg-slate-900 p-8">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            📚 Learning Progress
          </h2>

          <p className="mt-2 text-gray-400">
            Track your progress through the Data Center Academy.
          </p>
        </div>

        <div className="text-right">

          <div className="text-3xl font-black text-cyan-400">
            {percent}%
          </div>

          <div className="text-sm text-gray-400">
            Complete
          </div>

        </div>

      </div>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

      <div className="mt-6 flex items-center justify-between text-sm text-gray-400">

        <span>
          Lesson {current}
        </span>

        <span>
          Total Lessons: {total}
        </span>

      </div>

    </section>
  );
}