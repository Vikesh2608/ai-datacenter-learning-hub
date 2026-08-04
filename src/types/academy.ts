// =======================================================
// Inside AI Learning Platform
// Shared Academy Types
// Version: 1.0
// =======================================================

export type AcademyType = "ai" | "datacenter";

export type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface LessonHero {
  title: string;
  subtitle: string;
  estimatedTime: string;
  level: Difficulty;
  icon: string;
}

export interface LessonSection {
  heading: string;
  content: string;
}

export interface LessonImage {
  title: string;
  src: string;
  alt: string;
}

export interface LessonGlossary {
  term: string;
  definition: string;
}

export interface LessonVideo {
  title: string;
  url: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface CompanyReference {
  name: string;
  website: string;
}

export interface RelatedArticle {
  title: string;
  slug: string;
}

export interface RelatedNews {
  category: string;
}

export interface AcademyLesson {

  id: number;

  academy: AcademyType;

  slug: string;

  hero: LessonHero;

  overview: string;

  sections: LessonSection[];

  keyTakeaways: string[];

  didYouKnow: string[];

  glossary: LessonGlossary[];

  images: LessonImage[];

  youtube: LessonVideo[];

  quiz: QuizQuestion[];

  relatedArticles: RelatedArticle[];

  relatedNews: RelatedNews[];

  companies: CompanyReference[];

  nextLesson: number | null;

}