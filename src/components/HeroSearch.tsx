"use client";

import { useState } from "react";

export default function HeroSearch() {
  const [search, setSearch] = useState("");

  return (
    <section className="mt-12">

      <div className="max-w-3xl mx-auto">

        <div className="relative">

          <input
            type="text"
            placeholder="Search AI, Data Centers, GPUs, Cloud Computing..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl bg-slate-900 border border-slate-700 px-6 py-5 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition"
          />

          <button
            className="absolute right-3 top-3 bg-cyan-500 hover:bg-cyan-400 transition px-6 py-2 rounded-xl text-black font-bold"
          >
            Search
          </button>

        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">

          {[
            "Artificial Intelligence",
            "Data Centers",
            "Cloud Computing",
            "NVIDIA",
            "GPUs",
            "Networking",
            "Linux",
            "AI News",
          ].map((item) => (

            <button
              key={item}
              className="rounded-full border border-slate-700 px-4 py-2 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
}