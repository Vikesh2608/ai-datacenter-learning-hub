type Resource = {
  title: string;
  url: string;
};

type LessonResourcesProps = {
  youtube?: Resource[];
  articles?: Resource[];
  docs?: Resource[];
};

export default function LessonResources({
  youtube = [],
  articles = [],
  docs = [],
}: LessonResourcesProps) {
  return (
    <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        📚 Learning Resources
      </h2>

      {youtube.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4">
            🎥 Recommended Videos
          </h3>

          <div className="space-y-3 mb-8">
            {youtube.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                className="block text-cyan-300 hover:underline"
              >
                {item.title}
              </a>
            ))}
          </div>
        </>
      )}

      {articles.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4">
            📖 Articles
          </h3>

          <div className="space-y-3 mb-8">
            {articles.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                className="block text-cyan-300 hover:underline"
              >
                {item.title}
              </a>
            ))}
          </div>
        </>
      )}

      {docs.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4">
            📘 Official Documentation
          </h3>

          <div className="space-y-3">
            {docs.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                className="block text-cyan-300 hover:underline"
              >
                {item.title}
              </a>
            ))}
          </div>
        </>
      )}

    </section>
  );
}