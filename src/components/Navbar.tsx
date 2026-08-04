"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          href="/"
          className="text-lg md:text-xl font-bold text-cyan-400"
        >
          AI & Data Center Learning Hub
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-white hover:text-cyan-400 transition"
          >
            Home
          </Link>

          {/* Learn Dropdown */}

          <div
            className="relative"
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >

            <button className="text-white hover:text-cyan-400 transition">
              Learn ▾
            </button>

            {learnOpen && (

              <div className="absolute left-0 mt-3 w-64 rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

                <Link
                  href="/learn/ai"
                  className="block px-5 py-4 hover:bg-slate-800"
                >
                  🤖 AI Academy
                </Link>

                <Link
                  href="/learn/datacenter"
                  className="block px-5 py-4 hover:bg-slate-800"
                >
                  🏢 Data Center Academy
                </Link>

              </div>

            )}

          </div>

          <Link
            href="/news"
            className="text-white hover:text-cyan-400 transition"
          >
            AI News
          </Link>

          <Link
            href="/articles"
            className="text-white hover:text-cyan-400 transition"
          >
            Articles
          </Link>

          <Link
            href="/founder"
            className="text-white hover:text-cyan-400 transition"
          >
            Founder
          </Link>

        </nav>

        {/* Mobile Button */}

        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div className="border-t border-slate-800 bg-slate-950 md:hidden">

          <div className="flex flex-col px-6 py-5">

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="py-3"
            >
              🏠 Home
            </Link>

            <button
              onClick={() => setLearnOpen(!learnOpen)}
              className="flex justify-between py-3 text-left"
            >
              📚 Learn
              <span>{learnOpen ? "−" : "+"}</span>
            </button>

            {learnOpen && (

              <div className="ml-5 flex flex-col">

                <Link
                  href="/learn/ai"
                  onClick={() => setMobileOpen(false)}
                  className="py-2"
                >
                  🤖 AI Academy
                </Link>

                <Link
                  href="/learn/datacenter"
                  onClick={() => setMobileOpen(false)}
                  className="py-2"
                >
                  🏢 Data Center Academy
                </Link>

              </div>

            )}

            <Link
              href="/news"
              onClick={() => setMobileOpen(false)}
              className="py-3"
            >
              📰 AI News
            </Link>

            <Link
              href="/articles"
              onClick={() => setMobileOpen(false)}
              className="py-3"
            >
              📖 Articles
            </Link>

            <Link
              href="/founder"
              onClick={() => setMobileOpen(false)}
              className="py-3"
            >
              👤 Founder
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}