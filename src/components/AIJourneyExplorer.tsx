import Link from "next/link";

const steps = [
  {
    icon: "👤",
    title: "You",
    description: "You ask ChatGPT a question.",
    href: "/learn/ai/1",
  },
  {
    icon: "🌍",
    title: "Internet",
    description: "Your request travels across the global Internet.",
    href: "/learn/networking",
  },
  {
    icon: "☁️",
    title: "Cloud",
    description: "The request reaches a cloud provider like AWS, Azure or Google Cloud.",
    href: "/learn/cloud",
  },
  {
    icon: "🏢",
    title: "AI Data Center",
    description: "Massive facilities containing thousands of servers receive your request.",
    href: "/learn/datacenter",
  },
  {
    icon: "🖥️",
    title: "GPU Servers",
    description: "NVIDIA GPU servers perform billions of mathematical calculations.",
    href: "/learn/gpu",
  },
  {
    icon: "🧠",
    title: "Large Language Model",
    description: "The AI model understands your prompt and generates a response.",
    href: "/learn/ai/5",
  },
  {
    icon: "💬",
    title: "Response",
    description: "The answer travels back to your device in seconds.",
    href: "/learn/ai/10",
  },
];

export default function AIJourneyExplorer() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">
          🌍 Follow the Journey
        </h2>

        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          Every AI response follows an incredible journey through
          networks, cloud infrastructure, AI data centers,
          GPU clusters and Large Language Models.
        </p>

      </div>

      <div className="space-y-6">

        {steps.map((step, index) => (

          <div key={step.title}>

            <Link href={step.href}>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-400 hover:scale-[1.02] transition duration-300 cursor-pointer">

                <div className="flex items-center gap-6">

                  <div className="text-5xl">
                    {step.icon}
                  </div>

                  <div>

                    <h3 className="text-3xl font-bold text-cyan-400">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-gray-300">
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>

            </Link>

            {index !== steps.length - 1 && (

              <div className="flex justify-center py-3">

                <span className="text-5xl text-cyan-400">
                  ↓
                </span>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}