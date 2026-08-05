const devices = [
  {
    icon: "📡",
    title: "Router",
    description:
      "Routers connect different networks together and determine the best path for data to travel between devices and the Internet.",
    examples: [
      "Home Wi-Fi Router",
      "Enterprise Router",
      "Cloud Edge Router",
    ],
  },
  {
    icon: "🔀",
    title: "Switch",
    description:
      "Switches connect multiple devices within the same network and intelligently forward data only to its intended destination.",
    examples: [
      "Office LAN",
      "Data Center Switch",
      "AI Fabric Switch",
    ],
  },
  {
    icon: "📶",
    title: "Wireless Access Point",
    description:
      "Wireless Access Points (APs) provide Wi-Fi connectivity so laptops, phones, and IoT devices can join the network.",
    examples: [
      "Home Wi-Fi",
      "Campus Wi-Fi",
      "Enterprise Wireless",
    ],
  },
  {
    icon: "🔥",
    title: "Firewall",
    description:
      "Firewalls inspect and filter network traffic to block malicious activity while allowing legitimate communication.",
    examples: [
      "Enterprise Firewall",
      "Cloud Firewall",
      "Next-Generation Firewall",
    ],
  },
  {
    icon: "🌐",
    title: "Modem",
    description:
      "A modem connects your home or business to your Internet Service Provider by converting signals between your local network and the ISP.",
    examples: [
      "Cable Modem",
      "Fiber ONT",
      "DSL Modem",
    ],
  },
  {
    icon: "🌉",
    title: "Gateway",
    description:
      "A gateway connects different types of networks or protocols, allowing systems to communicate with one another.",
    examples: [
      "Cloud Gateway",
      "IoT Gateway",
      "Enterprise Gateway",
    ],
  },
  {
    icon: "💳",
    title: "Network Interface Card (NIC)",
    description:
      "A Network Interface Card provides wired or wireless network connectivity for computers, servers, and AI systems.",
    examples: [
      "Ethernet Adapter",
      "Wi-Fi Adapter",
      "NVIDIA ConnectX",
    ],
  },
  {
    icon: "⚖️",
    title: "Load Balancer",
    description:
      "Load balancers distribute incoming traffic across multiple servers, improving performance, scalability, and reliability.",
    examples: [
      "Application Load Balancer",
      "Cloud Load Balancer",
      "AI Service Balancer",
    ],
  },
  {
    icon: "📶",
    title: "Repeater",
    description:
      "Repeaters regenerate weak network signals, extending the distance data can travel without significant degradation.",
    examples: [
      "Wi-Fi Extender",
      "Fiber Repeater",
      "Signal Booster",
    ],
  },
];

export default function NetworkingDevices() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-sky-400">
            Networking Hardware
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Common Networking Devices
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Networking devices move, secure, and manage data across homes,
            businesses, cloud platforms, and AI data centers. Understanding
            each device helps explain how the Internet operates.
          </p>

        </div>

        {/* Device Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {devices.map((device) => (

            <div
              key={device.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20"
            >

              <div className="text-6xl">
                {device.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-sky-400">
                {device.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {device.description}
              </p>

              <div className="mt-8">

                <h4 className="font-bold text-white">
                  Real-World Examples
                </h4>

                <ul className="mt-4 space-y-2 text-gray-300">

                  {device.examples.map((example) => (

                    <li key={example}>
                      • {example}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

        {/* Device Flow */}

        <div className="mt-24 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            How Networking Devices Work Together
          </h2>

          <div className="mt-10 grid gap-6 text-center md:grid-cols-9">

            <div>
              <div className="text-5xl">📱</div>
              <p className="mt-2 text-white font-semibold">Device</p>
            </div>

            <div className="flex items-center justify-center text-4xl text-sky-400">
              →
            </div>

            <div>
              <div className="text-5xl">📶</div>
              <p className="mt-2 text-white font-semibold">Wi-Fi AP</p>
            </div>

            <div className="flex items-center justify-center text-4xl text-sky-400">
              →
            </div>

            <div>
              <div className="text-5xl">📡</div>
              <p className="mt-2 text-white font-semibold">Router</p>
            </div>

            <div className="flex items-center justify-center text-4xl text-sky-400">
              →
            </div>

            <div>
              <div className="text-5xl">🌍</div>
              <p className="mt-2 text-white font-semibold">Internet</p>
            </div>

            <div className="flex items-center justify-center text-4xl text-sky-400">
              →
            </div>

            <div>
              <div className="text-5xl">☁️</div>
              <p className="mt-2 text-white font-semibold">Cloud</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}