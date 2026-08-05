import MachineLearningHero from "@/components/machine-learning/MachineLearningHero";
import MachineLearningDefinition from "@/components/machine-learning/MachineLearningDefinition";
import MachineLearningTypes from "@/components/machine-learning/MachineLearningTypes";
import MachineLearningWorkflow from "@/components/machine-learning/MachineLearningWorkflow";
import MachineLearningModels from "@/components/machine-learning/MachineLearningModels";
import DeepLearning from "@/components/machine-learning/DeepLearning";
import MachineLearningApplications from "@/components/machine-learning/MachineLearningApplications";
import MachineLearningVideos from "@/components/machine-learning/MachineLearningVideos";
import MachineLearningResources from "@/components/machine-learning/MachineLearningResources";
import MachineLearningRelated from "@/components/machine-learning/MachineLearningRelated";

export const metadata = {
  title: "Machine Learning Academy | AI & Data Center Learning Hub",
  description:
    "Learn Machine Learning from beginner to advanced. Explore supervised learning, neural networks, deep learning, transformers, large language models, real-world applications, videos, and official learning resources.",
};

export default function MachineLearningPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <MachineLearningHero />

      {/* What is Machine Learning */}
      <MachineLearningDefinition />

      {/* Types of Machine Learning */}
      <MachineLearningTypes />

      {/* Machine Learning Workflow */}
      <MachineLearningWorkflow />

      {/* ML Algorithms & Models */}
      <MachineLearningModels />

      {/* Deep Learning */}
      <DeepLearning />

      {/* Real World Applications */}
      <MachineLearningApplications />

      {/* Video Tutorials */}
      <MachineLearningVideos />

      {/* Official Resources */}
      <MachineLearningResources />

      {/* Related Academies */}
      <MachineLearningRelated />

    </main>
  );
}