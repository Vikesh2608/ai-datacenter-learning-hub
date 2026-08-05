export default function Newsletter() {
  return (
    <section className="py-24 border-t border-slate-800 bg-slate-950">
      <div className="max-w-4xl mx-auto px-8 text-center">

        <p className="uppercase tracking-widest text-cyan-400 font-semibold">
          Stay Updated
        </p>

        <h2 className="mt-5 text-5xl font-black text-white">
          Subscribe to AI & Technology Updates
        </h2>

        <p className="mt-6 text-xl text-gray-300">
          Receive the latest AI, Data Center, Cloud, GPU, Networking,
          Machine Learning and Technology news directly from the
          AI & Data Center Learning Hub.
        </p>

        <form className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 rounded-xl bg-slate-900 border border-slate-700 px-5 py-4 text-white outline-none focus:border-cyan-400"
          />

          <button
            className="rounded-xl bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 font-bold text-black"
          >
            Subscribe
          </button>

        </form>

      </div>
    </section>
  );
}