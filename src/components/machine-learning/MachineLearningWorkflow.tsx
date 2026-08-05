const workflow = [
  {
    icon: "📊",
    title: "1. Collect Data",
    description:
      "Every machine learning project begins by collecting relevant data from sources such as databases, sensors, applications, websites, IoT devices, or public datasets.",
  },
  {
    icon: "🧹",
    title: "2. Clean & Prepare Data",
    description:
      "Raw data is cleaned by removing duplicates, correcting errors, handling missing values, and formatting it into a structure suitable for machine learning.",
  },
  {
    icon: "🏷️",
    title: "3. Label Data",
    description:
      "For supervised learning, data is labeled with the correct answers so the model can learn the relationship between inputs and expected outputs.",
  },
  {
    icon: "🧠",
    title: "4. Train the Model",
    description:
      "The algorithm analyzes the training data, identifies patterns, and adjusts its internal parameters to improve prediction accuracy.",
  },
  {
    icon: "📈",
    title: "5. Validate & Test",
    description:
      "The trained model is evaluated using separate validation and test datasets to measure performance and ensure it generalizes well to new data.",
  },
  {
    icon: "🚀",
    title: "6. Deploy",
    description:
      "Once validated, the model is deployed into applications, cloud platforms, websites, or mobile apps where users can interact with it.",
  },
  {
    icon: "⚡",
    title: "7. Inference",
    description:
      "Inference is the process of using the trained model to make predictions on new, unseen data in real time.",
  },
  {
    icon: "🔄",
    title: "8. Monitor & Improve",
    description:
      "Machine learning models are continuously monitored, retrained with new data, and optimized to maintain accuracy as conditions change.",
  },
];

export default function MachineLearningWorkflow() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Machine Learning Workflow
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            The Complete Machine Learning Lifecycle
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Building a machine learning system involves much more than choosing
            an algorithm. From collecting data to deploying a model into
            production, each step plays an important role in creating reliable
            AI systems.
          </p>

        </div>

        {/* Workflow Diagram */}

        <div className="mt-20 rounded-3xl border border-purple-500/20 bg-slate-900 p-12">

          <h3 className="text-center text-4xl font-black text-white">
            Machine Learning Pipeline
          </h3>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">

            <div className="rounded-xl bg-purple-600 px-6 py-4 font-bold text-white">
              📊 Collect
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-purple-600 px-6 py-4 font-bold text-white">
              🧹 Clean
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-purple-600 px-6 py-4 font-bold text-white">
              🏷️ Label
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-purple-600 px-6 py-4 font-bold text-white">
              🧠 Train
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-purple-600 px-6 py-4 font-bold text-white">
              📈 Test
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-purple-600 px-6 py-4 font-bold text-white">
              🚀 Deploy
            </div>

            <span className="text-3xl text-purple-400">→</span>

            <div className="rounded-xl bg-purple-600 px-6 py-4 font-bold text-white">
              ⚡ Predict
            </div>

          </div>

        </div>

        {/* Workflow Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {workflow.map((step) => (

            <div
              key={step.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
            >

              <div className="text-6xl">
                {step.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold text-purple-400">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {step.description}
              </p>

            </div>

          ))}

        </div>

        {/* Example */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Real-World Example: Email Spam Detection
          </h2>

          <div className="mt-10 space-y-5 text-lg text-gray-300">

            <p>📊 Collect thousands of emails.</p>

            <p>🧹 Remove duplicates and incorrect entries.</p>

            <p>🏷️ Label emails as <strong>Spam</strong> or <strong>Not Spam</strong>.</p>

            <p>🧠 Train a machine learning model using the labeled examples.</p>

            <p>📈 Test the model with emails it has never seen before.</p>

            <p>🚀 Deploy the model into an email service.</p>

            <p>⚡ Every new email is automatically classified in real time.</p>

            <p>🔄 Continuously retrain the model as spam techniques evolve.</p>

          </div>

        </div>

      </div>

    </section>
  );
}