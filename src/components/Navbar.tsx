"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const openMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setLearnOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setLearnOpen(false);
    }, 250);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          href="/"
          className="text-xl font-bold text-cyan-400"
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
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >

            <button className="text-white hover:text-cyan-400 transition">
              Learn ▾
            </button>

            {learnOpen && (

              <div className="absolute left-0 top-full w-80 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

                <div className="border-b border-slate-700 px-5 py-3">

                  <p className="text-xs uppercase tracking-widest text-cyan-400">
                    Learning Academies
                  </p>

                </div>

                <Link
                  href="/learn/ai"
                  className="block px-5 py-4 hover:bg-slate-800 transition"
                >
                  🤖 AI Academy
                  <p className="mt-1 text-sm text-gray-400">
                    Machine Learning, LLMs, AI Agents & Deep Learning
                  </p>
                </Link>

                <Link
                  href="/learn/datacenter"
                  className="block px-5 py-4 hover:bg-slate-800 transition"
                >
                  🏢 Data Center Academy
                  <p className="mt-1 text-sm text-gray-400">
                    Servers, Storage, Networking & Infrastructure
                  </p>
                </Link>

                <Link
                  href="/learn/infrastructure"
                  className="block px-5 py-4 hover:bg-slate-800 transition"
                >
                  🖥️ AI Infrastructure Academy
                  <p className="mt-1 text-sm text-gray-400">
                    CPU, GPU, NVLink, PCIe, Memory, SSD & AI Servers
                  </p>
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

              <div className="ml-4 flex flex-col rounded-xl bg-slate-900">

                <Link
                  href="/learn/ai"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 hover:bg-slate-800"
                >
                  🤖 AI Academy
                </Link>

                <Link
                  href="/learn/datacenter"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 hover:bg-slate-800"
                >
                  🏢 Data Center Academy
                </Link>

                <Link
                  href="/learn/infrastructure"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 hover:bg-slate-800"
                >
                  🖥️ AI Infrastructure Academy
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