export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-cyan-400">
            AI & Data Center Learning Hub
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">

          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Learn
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Explore
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            AI News
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Dictionary
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Founder
          </a>

        </nav>

      </div>
    </header>
  );
}