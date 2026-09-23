export type CourseFormat = "Online" | "Offline" | "Hybrid";

export interface SiteConfig {
  instituteName: string;
  location: string;
  tagline: string;
  description: string;
  announcement: { message: string; batchLabel: string; linkLabel: string; linkHref: string };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    hours: string;
  };
  social: { label: string; url: string }[];
  brochureUrl: string;
  heroImage: string;
  heroImageAlt: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  note: string;
}

export interface Course {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  duration: string;
  format: CourseFormat;
  level: string;
  location: string;
  eligibility: string;
  nextBatch: string;
  fee: string;
  badge?: string;
  whoShouldApply: string[];
  learningOutcomes: string[];
  practicalComponents: string;
  assessment: string;
  certificateInfo: string;
  modules: string[];
  faqs: FaqItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  qualification: string;
  yearsExperience: string;
  specialty: string;
  bio: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  course: string;
  year: string;
  imageSrc?: string;
  placeholder: boolean;
}

export interface CurriculumModule {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  alt: string;
  src: string;
}

export interface CareerPath {
  title: string;
  description: string;
}

export interface CourseFinderQuestion {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

export type CourseFinderResult =
  | "foundation"
  | "early-childhood"
  | "advanced"
  | "admissions";

export interface Batch {
  id: string;
  label: string;
  startDate: string;
}

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  courseSlug: string;
  batchId: string;
  statement: string;
  consent: boolean;
}
