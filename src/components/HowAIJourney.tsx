import Link from "next/link";

const journey = [
  {
    title: "👤 You Ask ChatGPT",
    description: "A user asks an AI question.",
    href: "/learn/ai/1",
  },
  {
    title: "🌍 Internet",
    description: "Your request travels across the Internet.",
    href: "/learn/networking",
  },
  {
    title: "☁️ Cloud Provider",
    description: "AWS, Azure or Google Cloud receives your request.",
    href: "/learn/cloud",
  },
  {
    title: "🏢 AI Data Center",
    description: "Massive data centers process AI workloads.",
    href: "/learn/datacenter",
  },
  {
    title: "🖥 GPU Server",
    description: "Powerful NVIDIA GPU servers perform inference.",
    href: "/learn/gpu",
  },
  {
    title: "🧠 Large Language Model",
    description: "The AI model understands and generates the answer.",
    href: "/learn/ai/5",
  },
  {
    title: "💬 AI Response",
    description: "The answer is returned back to you.",
    href: "/learn/ai/10",
  },
];

export default function HowAIJourney() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="text-center">

        <h2 className="text-5xl font-bold text-white">
          What Happens When You Ask ChatGPT?
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
          Explore the complete journey of an AI request—from your computer,
          across the Internet, into an AI data center, and back with an answer.
        </p>

      </div>

      <div className="mt-20 flex flex-col items-center">

        {journey.map((step, index) => (

          <div
            key={step.title}
            className="flex flex-col items-center"
          >

            <Link
              href={step.href}
              className="block w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400 hover:scale-[1.02]"
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {step.description}
              </p>

              <p className="mt-5 text-cyan-300 font-semibold">
                Click to Learn →
              </p>

            </Link>

            {index < journey.length - 1 && (
              <div className="py-4 text-5xl text-cyan-500">
                ↓
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}