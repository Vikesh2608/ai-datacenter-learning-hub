type DidYouKnowProps = {
  title?: string;
  fact: string;
};

export default function DidYouKnow({
  title = "💡 Did You Know?",
  fact,
}: DidYouKnowProps) {
  return (
    <section className="my-16">

      <div className="rounded-3xl border border-cyan-500 bg-gradient-to-r from-slate-900 to-slate-800 p-8 shadow-lg">

        <div className="flex items-start gap-5">

          <div className="text-5xl">
            💡
          </div>

          <div className="flex-1">

            <h3 className="text-3xl font-bold text-cyan-400">
              {title}
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-200">
              {fact}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}