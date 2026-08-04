type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <section className="mt-8">

      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>
          Lesson {current} of {total}
        </span>

        <span>
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

    </section>
  );
}