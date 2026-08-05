export default function NetworkingDefinition() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-sky-400">
            Networking Fundamentals
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            What is Computer Networking?
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Computer networking is the practice of connecting computers,
            servers, mobile devices, cloud platforms, storage systems,
            and data centers so they can exchange information securely
            and efficiently. Every website, AI application, cloud service,
            and online video depends on networking.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🌍</div>

            <h3 className="mt-6 text-3xl font-bold text-sky-400">
              Global Connectivity
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Networking connects billions of devices across homes,
              businesses, schools, hospitals, governments, and data
              centers around the world.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">⚡</div>

            <h3 className="mt-6 text-3xl font-bold text-sky-400">
              High-Speed Communication
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Modern fiber optic networks deliver extremely fast data
              transfer, enabling cloud computing, streaming, gaming,
              AI, and real-time collaboration.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🤖</div>

            <h3 className="mt-6 text-3xl font-bold text-sky-400">
              AI Infrastructure
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Modern AI data centers depend on ultra-fast networking
              technologies to move enormous amounts of data between
              GPUs, storage, and cloud services.
            </p>

          </div>

        </div>

        {/* History */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-4xl font-black text-white">
            A Brief History of Networking
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-gray-300">

            <p>
              Computer networking began as a way for researchers to share
              information between computers. Over time, technologies such as
              Ethernet, TCP/IP, fiber optics, Wi-Fi, and cloud networking
              transformed the Internet into the global infrastructure we use
              today.
            </p>

            <p>
              Modern networking now supports Artificial Intelligence,
              autonomous vehicles, financial systems, cloud computing,
              scientific research, healthcare, education, and billions of
              connected devices.
            </p>

          </div>

        </div>

        {/* Network Types */}

        <div className="mt-24">

          <h2 className="text-center text-5xl font-black text-white">
            Types of Networks
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="text-5xl">🏠</div>

              <h3 className="mt-5 text-2xl font-bold text-sky-400">
                LAN
              </h3>

              <p className="mt-4 text-gray-300">
                Local Area Networks connect computers within homes,
                schools, offices, and buildings.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="text-5xl">🏙️</div>

              <h3 className="mt-5 text-2xl font-bold text-sky-400">
                MAN
              </h3>

              <p className="mt-4 text-gray-300">
                Metropolitan Area Networks connect multiple locations
                across cities and urban regions.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="text-5xl">🌎</div>

              <h3 className="mt-5 text-2xl font-bold text-sky-400">
                WAN
              </h3>

              <p className="mt-4 text-gray-300">
                Wide Area Networks connect countries and continents,
                forming the global Internet.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="text-5xl">☁️</div>

              <h3 className="mt-5 text-2xl font-bold text-sky-400">
                Cloud Network
              </h3>

              <p className="mt-4 text-gray-300">
                Cloud networking securely connects cloud resources,
                AI platforms, virtual machines, and data centers.
              </p>

            </div>

          </div>

        </div>

        {/* Why Networking Matters */}

        <div className="mt-24 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Why Networking Matters
          </h2>

          <p className="mt-6 text-xl leading-9 text-gray-300">

            Every email, video call, online purchase, cloud application,
            AI chatbot, financial transaction, and streaming service relies
            on networking. Without reliable networks, modern digital life
            simply would not exist.

          </p>

        </div>

      </div>

    </section>
  );
}