const models = [
  {
    icon: "📈",
    title: "Linear Regression",
    color: "text-green-400",
    description:
      "Linear Regression predicts continuous numerical values by finding the relationship between input variables and an output variable.",
    examples: [
      "House price prediction",
      "Sales forecasting",
      "Temperature prediction",
    ],
  },
  {
    icon: "📊",
    title: "Logistic Regression",
    color: "text-blue-400",
    description:
      "Logistic Regression is used for classification problems where the outcome belongs to categories such as Yes/No or Spam/Not Spam.",
    examples: [
      "Spam detection",
      "Disease prediction",
      "Customer churn",
    ],
  },
  {
    icon: "🌳",
    title: "Decision Tree",
    color: "text-lime-400",
    description:
      "Decision Trees split data into branches using simple decision rules, making predictions that are easy to interpret.",
    examples: [
      "Loan approval",
      "Medical diagnosis",
      "Risk analysis",
    ],
  },
  {
    icon: "🌲",
    title: "Random Forest",
    color: "text-emerald-400",
    description:
      "Random Forest combines many decision trees to improve prediction accuracy and reduce overfitting.",
    examples: [
      "Fraud detection",
      "Customer analytics",
      "Healthcare predictions",
    ],
  },
  {
    icon: "📍",
    title: "K-Means Clustering",
    color: "text-yellow-400",
    description:
      "K-Means groups similar data into clusters without using labeled examples.",
    examples: [
      "Customer segmentation",
      "Recommendation systems",
      "Market analysis",
    ],
  },
  {
    icon: "🎯",
    title: "Support Vector Machine (SVM)",
    color: "text-orange-400",
    description:
      "Support Vector Machines classify data by finding the optimal boundary between different categories.",
    examples: [
      "Image classification",
      "Face recognition",
      "Text classification",
    ],
  },
  {
    icon: "🧠",
    title: "Neural Networks",
    color: "text-purple-400",
    description:
      "Neural Networks are inspired by the human brain and can learn highly complex patterns from large datasets.",
    examples: [
      "Speech recognition",
      "Image recognition",
      "AI assistants",
    ],
  },
  {
    icon: "🚀",
    title: "Gradient Boosting",
    color: "text-pink-400",
    description:
      "Gradient Boosting builds models sequentially, improving each new model by correcting errors made by previous ones.",
    examples: [
      "Financial forecasting",
      "Risk scoring",
      "Competition-winning ML models",
    ],
  },
];

export default function MachineLearningModels() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Header */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] font-semibold text-purple-400">
            Machine Learning Models
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Popular Machine Learning Algorithms
          </h2>

          <p className="mx-auto mt-8 max-w-5xl text-xl leading-9 text-gray-300">
            Different machine learning problems require different algorithms.
            Some models predict numbers, some classify information, while
            others discover hidden patterns within data.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {models.map((model) => (

            <div
              key={model.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20"
            >

              <div className="text-6xl">
                {model.icon}
              </div>

              <h3 className={`mt-6 text-2xl font-bold ${model.color}`}>
                {model.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {model.description}
              </p>

              <div className="mt-8">

                <h4 className="font-bold text-white">
                  Common Uses
                </h4>

                <ul className="mt-4 space-y-2 text-gray-300">

                  {model.examples.map((example) => (

                    <li key={example}>
                      • {example}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

        {/* Model Selection */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Choosing the Right Model
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-xl bg-slate-800 p-6">

              <h3 className="text-2xl font-bold text-purple-400">
                Regression Problems
              </h3>

              <p className="mt-4 text-gray-300">
                Use regression models when predicting continuous numerical
                values such as prices, temperatures, demand, or sales.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6">

              <h3 className="text-2xl font-bold text-purple-400">
                Classification Problems
              </h3>

              <p className="mt-4 text-gray-300">
                Classification models assign data into categories such as
                spam vs. not spam, fraud vs. legitimate, or healthy vs.
                unhealthy.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6">

              <h3 className="text-2xl font-bold text-purple-400">
                Clustering Problems
              </h3>

              <p className="mt-4 text-gray-300">
                Clustering algorithms group similar data together without
                predefined labels, helping discover hidden patterns.
              </p>

            </div>

            <div className="rounded-xl bg-slate-800 p-6">

              <h3 className="text-2xl font-bold text-purple-400">
                Complex AI Applications
              </h3>

              <p className="mt-4 text-gray-300">
                Neural networks and deep learning models excel at speech,
                vision, natural language processing, and generative AI.
              </p>

            </div>

          </div>

        </div>

        {/* Summary */}

        <div className="mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <h2 className="text-4xl font-black text-white">
            Key Takeaway
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            There is no single "best" machine learning algorithm. The ideal
            model depends on the type of data, the problem being solved, the
            amount of available data, and the desired balance between accuracy,
            speed, and interpretability. Understanding the strengths of
            different models is an important step toward building effective AI
            systems.
          </p>

        </div>

      </div>

    </section>
  );
}