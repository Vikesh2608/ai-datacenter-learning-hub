type Lesson = {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
};

type LessonHeaderProps = {
  lesson: Lesson;
};

export default function LessonHeader({
  lesson,
}: LessonHeaderProps) {
  return (
    <header className="mb-16">

      <p className="text-cyan-400 font-semibold text-lg">
        Lesson {lesson.id}
      </p>

      <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-white">
        {lesson.title}
      </h1>

      <p className="mt-6 text-xl text-gray-300">
        {lesson.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 mt-8">

        <span className="rounded-full bg-cyan-600 px-5 py-2 text-white font-semibold">
          {lesson.level}
        </span>

        <span className="rounded-full bg-slate-800 px-5 py-2 text-gray-200">
          ⏱ {lesson.duration}
        </span>

      </div>

      <div className="mt-8 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full w-1/3 bg-cyan-400 rounded-full"></div>
      </div>

    </header>
  );
}