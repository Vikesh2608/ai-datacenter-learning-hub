const steps = [
  {
    icon: "📊",
    title: "1. Data",
    description:
      "AI starts by collecting massive amounts of data such as text, images, videos, speech, and numbers.",
  },
  {
    icon: "🧠",
    title: "2. Training",
    description:
      "The AI studies patterns inside the data using machine learning algorithms.",
  },
  {
    icon: "⚡",
    title: "3. GPU Processing",
    description:
      "Powerful GPUs perform billions of mathematical calculations to train AI models efficiently.",
  },
  {
    icon: "🤖",
    title: "4. AI Model",
    description:
      "The trained model learns relationships, patterns, and knowledge from the data.",
  },
  {
    icon: "💬",
    title: "5. User Prompt",
    description:
      "A user asks a question, uploads an image, or gives instructions to the AI.",
  },
  {
    icon: "✅",
    title: "6. AI Response",
    description:
      "The AI predicts the most likely answer and returns it within seconds.",
  },
];

export default function HowAIWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center">

        <h2 className="text-5xl font-bold">
          How Artificial Intelligence Works
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          Every AI system follows a learning process before it can answer
          questions, recognize images, or make predictions.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {steps.map((step) => (

          <div
            key={step.title}
            className="rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-400 transition duration-300"
          >

            <div className="text-5xl">
              {step.icon}
            </div>

            <h3 className="text-2xl font-bold mt-6 text-cyan-400">
              {step.title}
            </h3>

            <p className="mt-4 text-gray-300 leading-8">
              {step.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}