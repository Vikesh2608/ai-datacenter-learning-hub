export default function CloudDefinition() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.25em] text-blue-400 font-semibold">
            Cloud Computing Fundamentals
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            What is Cloud Computing?
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Cloud Computing is the delivery of computing services over the
            Internet. Instead of purchasing and maintaining physical servers,
            organizations can access computing power, storage, databases,
            networking, Artificial Intelligence, analytics, and software
            whenever they need them.
          </p>

        </div>

        {/* Definition Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">☁️</div>

            <h3 className="mt-6 text-3xl font-bold text-blue-400">
              On-Demand Computing
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Cloud computing provides servers, storage, networking,
              databases, Artificial Intelligence and many other services
              whenever organizations need them without purchasing physical
              hardware.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">🌍</div>

            <h3 className="mt-6 text-3xl font-bold text-blue-400">
              Global Infrastructure
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Major cloud providers operate thousands of data centers across
              the world, allowing applications to run closer to users with
              high availability and low latency.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="text-6xl">💰</div>

            <h3 className="mt-6 text-3xl font-bold text-blue-400">
              Pay As You Go
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Businesses only pay for the resources they actually use,
              reducing infrastructure costs while allowing rapid scaling
              during periods of high demand.
            </p>

          </div>

        </div>

        {/* History */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-4xl font-black text-white">
            A Brief History of Cloud Computing
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-gray-300">

            <p>
              Computing originally relied on organizations purchasing,
              installing, and maintaining their own physical servers.
            </p>

            <p>
              As internet technologies matured, cloud providers introduced a
              new model where computing resources could be delivered securely
              over the internet from large-scale data centers.
            </p>

            <p>
              Today, companies such as Amazon Web Services (AWS), Microsoft
              Azure, Google Cloud, Oracle Cloud, IBM Cloud, and Alibaba Cloud
              provide global cloud platforms powering millions of businesses
              and billions of users.
            </p>

          </div>

        </div>

        {/* Traditional vs Cloud */}

        <div className="mt-24">

          <h2 className="text-center text-5xl font-black text-white">
            Traditional IT vs Cloud Computing
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {/* Traditional */}

            <div className="rounded-3xl border border-red-500/30 bg-slate-900 p-8">

              <h3 className="text-3xl font-bold text-red-400">
                🏢 Traditional Infrastructure
              </h3>

              <ul className="mt-8 space-y-4 text-lg text-gray-300">

                <li>• Purchase physical servers</li>

                <li>• Build server rooms</li>

                <li>• Install networking equipment</li>

                <li>• Maintain cooling and power</li>

                <li>• Large upfront investment</li>

                <li>• Difficult to scale quickly</li>

              </ul>

            </div>

            {/* Cloud */}

            <div className="rounded-3xl border border-blue-500/30 bg-slate-900 p-8">

              <h3 className="text-3xl font-bold text-blue-400">
                ☁️ Cloud Computing
              </h3>

              <ul className="mt-8 space-y-4 text-lg text-gray-300">

                <li>• No physical servers required</li>

                <li>• Access resources instantly</li>

                <li>• Automatic scaling</li>

                <li>• Global availability</li>

                <li>• Pay only for usage</li>

                <li>• Faster application deployment</li>

              </ul>

            </div>

          </div>

        </div>

        {/* Cloud Models */}

        <div className="mt-24">

          <h2 className="text-center text-5xl font-black text-white">
            Types of Cloud Computing
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="text-5xl">🌎</div>

              <h3 className="mt-5 text-2xl font-bold text-blue-400">
                Public Cloud
              </h3>

              <p className="mt-4 text-gray-300">
                Infrastructure shared securely among many customers and
                managed by cloud providers.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="text-5xl">🏢</div>

              <h3 className="mt-5 text-2xl font-bold text-blue-400">
                Private Cloud
              </h3>

              <p className="mt-4 text-gray-300">
                Dedicated infrastructure designed specifically for one
                organization.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="text-5xl">🔄</div>

              <h3 className="mt-5 text-2xl font-bold text-blue-400">
                Hybrid Cloud
              </h3>

              <p className="mt-4 text-gray-300">
                Combines on-premises infrastructure with public cloud
                services.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <div className="text-5xl">🌐</div>

              <h3 className="mt-5 text-2xl font-bold text-blue-400">
                Multi-Cloud
              </h3>

              <p className="mt-4 text-gray-300">
                Organizations use multiple cloud providers to improve
                flexibility, resilience, and performance.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}