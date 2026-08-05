const security = [
  {
    icon: "🔐",
    title: "Identity & Access Management (IAM)",
    description:
      "IAM controls who can access cloud resources and what actions they are allowed to perform using users, groups, roles, and permissions.",
  },
  {
    icon: "🛡️",
    title: "Encryption",
    description:
      "Encryption protects data while it is stored and while it travels across networks, ensuring sensitive information remains secure.",
  },
  {
    icon: "🔑",
    title: "Multi-Factor Authentication",
    description:
      "MFA requires more than a password by adding a second verification step such as a mobile device or authentication application.",
  },
  {
    icon: "🔥",
    title: "Firewalls",
    description:
      "Cloud firewalls filter incoming and outgoing traffic, preventing unauthorized access to applications and cloud infrastructure.",
  },
  {
    icon: "🌐",
    title: "Virtual Private Cloud (VPC)",
    description:
      "A VPC creates an isolated private network inside a cloud provider, allowing organizations to securely deploy applications.",
  },
  {
    icon: "📋",
    title: "Compliance",
    description:
      "Cloud providers help organizations meet regulatory requirements including HIPAA, GDPR, ISO 27001, SOC 2, and PCI DSS.",
  },
  {
    icon: "🚨",
    title: "Threat Detection",
    description:
      "AI-powered monitoring continuously detects suspicious activities, malware, unusual login attempts, and cyber threats.",
  },
  {
    icon: "💾",
    title: "Backup & Disaster Recovery",
    description:
      "Cloud backup solutions protect business data and allow rapid recovery after cyberattacks, accidental deletion, or disasters.",
  },
];

export default function CloudSecurity() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Cloud Security
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Protecting Cloud Infrastructure
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Security is one of the most important aspects of cloud computing.
            Modern cloud platforms provide multiple layers of protection to
            secure applications, users, and data.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {security.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >

              <div className="text-6xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-blue-400">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-24 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Security Best Practices
          </h2>

          <ul className="mt-8 space-y-4 text-lg text-gray-300">

            <li>✅ Enable Multi-Factor Authentication (MFA)</li>
            <li>✅ Follow the Principle of Least Privilege</li>
            <li>✅ Encrypt sensitive information</li>
            <li>✅ Monitor cloud activity continuously</li>
            <li>✅ Patch systems regularly</li>
            <li>✅ Back up critical data</li>
            <li>✅ Review permissions frequently</li>
            <li>✅ Use Zero Trust security principles</li>

          </ul>

        </div>

      </div>

    </section>
  );
}