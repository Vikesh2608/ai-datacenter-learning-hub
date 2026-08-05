const protocols = [
  {
    icon: "🌐",
    title: "IP (Internet Protocol)",
    description:
      "Internet Protocol provides addressing so data can travel from one device to another across networks worldwide.",
    examples: ["IPv4", "IPv6"],
  },
  {
    icon: "🤝",
    title: "TCP (Transmission Control Protocol)",
    description:
      "TCP ensures reliable communication by guaranteeing that data arrives completely, in order, and without errors.",
    examples: ["Web Browsing", "Email", "Online Banking"],
  },
  {
    icon: "⚡",
    title: "UDP (User Datagram Protocol)",
    description:
      "UDP prioritizes speed over reliability, making it ideal for streaming, gaming, voice calls, and live video.",
    examples: ["Video Streaming", "VoIP", "Online Gaming"],
  },
  {
    icon: "🌍",
    title: "HTTP / HTTPS",
    description:
      "HTTP and HTTPS allow web browsers to communicate with websites. HTTPS encrypts traffic to improve security.",
    examples: ["Websites", "Online Shopping", "Web APIs"],
  },
  {
    icon: "📡",
    title: "DNS (Domain Name System)",
    description:
      "DNS translates human-friendly domain names into IP addresses so computers can locate websites and services.",
    examples: ["google.com", "openai.com", "github.com"],
  },
  {
    icon: "🏠",
    title: "DHCP",
    description:
      "Dynamic Host Configuration Protocol automatically assigns IP addresses and networking settings to devices joining a network.",
    examples: ["Home Wi-Fi", "Enterprise Networks"],
  },
  {
    icon: "🔐",
    title: "SSH",
    description:
      "Secure Shell provides encrypted remote access to servers, networking equipment, and cloud infrastructure.",
    examples: ["Linux Servers", "Cloud VMs", "Routers"],
  },
  {
    icon: "📧",
    title: "SMTP",
    description:
      "Simple Mail Transfer Protocol is responsible for sending emails between mail servers across the Internet.",
    examples: ["Gmail", "Outlook", "Enterprise Email"],
  },
  {
    icon: "📂",
    title: "FTP / SFTP",
    description:
      "FTP transfers files across networks, while SFTP adds encryption for secure file exchange.",
    examples: ["Website Uploads", "Data Transfers", "Backups"],
  },
  {
    icon: "📊",
    title: "SNMP",
    description:
      "Simple Network Management Protocol helps administrators monitor routers, switches, firewalls, and other network devices.",
    examples: ["Network Monitoring", "Infrastructure Management"],
  },
  {
    icon: "🛣️",
    title: "BGP",
    description:
      "Border Gateway Protocol exchanges routing information between Internet Service Providers and major cloud providers, forming the global Internet.",
    examples: ["Internet Backbone", "Cloud Connectivity"],
  },
  {
    icon: "🔄",
    title: "ARP",
    description:
      "Address Resolution Protocol maps IP addresses to physical MAC addresses within a local network.",
    examples: ["LAN Communication", "Ethernet Networks"],
  },
];

export default function NetworkingProtocols() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-sky-400">
            Networking Protocols
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            The Languages of Computer Networks
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Networking protocols define how computers communicate. They ensure
            that information is delivered accurately, securely, and efficiently
            across local networks, cloud platforms, and the global Internet.
          </p>

        </div>

        {/* Protocol Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {protocols.map((protocol) => (

            <div
              key={protocol.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20"
            >

              <div className="text-6xl">
                {protocol.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-sky-400">
                {protocol.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {protocol.description}
              </p>

              <div className="mt-8">

                <h4 className="font-bold text-white">
                  Common Uses
                </h4>

                <ul className="mt-4 space-y-2 text-gray-300">

                  {protocol.examples.map((example) => (

                    <li key={example}>
                      • {example}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

        {/* Protocol Stack */}

        <div className="mt-24 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            How Protocols Work Together
          </h2>

          <div className="mt-10 space-y-5">

            <div className="rounded-xl bg-slate-800 p-5">
              <span className="font-bold text-sky-400">Application Layer</span>
              <p className="mt-2 text-gray-300">
                HTTP, HTTPS, SMTP, FTP, SSH
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <span className="font-bold text-sky-400">Transport Layer</span>
              <p className="mt-2 text-gray-300">
                TCP, UDP
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <span className="font-bold text-sky-400">Internet Layer</span>
              <p className="mt-2 text-gray-300">
                IP, ICMP
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <span className="font-bold text-sky-400">Network Access Layer</span>
              <p className="mt-2 text-gray-300">
                Ethernet, Wi-Fi, ARP
              </p>
            </div>

          </div>

          <p className="mt-10 text-center text-lg leading-8 text-gray-300">
            These protocols work together to deliver web pages, stream videos,
            support cloud applications, power AI services, and connect billions
            of devices around the world.
          </p>

        </div>

      </div>

    </section>
  );
}