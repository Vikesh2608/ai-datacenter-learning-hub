export interface AcademyVideo {
  title: string;
  url: string;
}

export interface AcademyGlossary {
  term: string;
  definition: string;
}

export interface AcademyQuiz {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface AcademyLesson {
  id: number;
  academy: "ai" | "datacenter";
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  article: string;
  keyPoints: string[];
  didYouKnow: string[];
  glossary: AcademyGlossary[];
  youtube: AcademyVideo[];
  quiz: AcademyQuiz[];
  nextLesson: number | null;
}

export const academyContent: AcademyLesson[] = [
];