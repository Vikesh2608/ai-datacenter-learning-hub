const security = [
  {
    icon: "🔥",
    title: "Firewalls",
    description:
      "Firewalls inspect incoming and outgoing traffic, blocking unauthorized access while allowing legitimate communication.",
  },
  {
    icon: "🔐",
    title: "VPN",
    description:
      "Virtual Private Networks encrypt network traffic, allowing secure remote access over the Internet.",
  },
  {
    icon: "🛡️",
    title: "Zero Trust",
    description:
      "Zero Trust assumes no user or device is trusted by default. Every request must be verified before access is granted.",
  },
  {
    icon: "🔑",
    title: "Multi-Factor Authentication",
    description:
      "MFA adds another layer of protection by requiring multiple methods of identity verification.",
  },
  {
    icon: "🔒",
    title: "Encryption",
    description:
      "Encryption protects sensitive information while it is stored and while it travels across networks.",
  },
  {
    icon: "🚨",
    title: "Intrusion Detection",
    description:
      "IDS and IPS continuously monitor network activity for suspicious behavior and cyber attacks.",
  },
  {
    icon: "🌐",
    title: "Network Segmentation",
    description:
      "Large networks are divided into smaller secure segments to reduce security risks and improve management.",
  },
  {
    icon: "💾",
    title: "Backup & Recovery",
    description:
      "Regular backups ensure data can be restored after cyberattacks, hardware failures, or disasters.",
  },
];

export default function NetworkingSecurity() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sky-400 font-semibold">
            Network Security
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Securing Modern Networks
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Every connected device, cloud application, AI system and data center
            depends on strong networking security to protect data and maintain
            reliable communication.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {security.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-sky-500 transition"
            >

              <div className="text-6xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-sky-400">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-300 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}