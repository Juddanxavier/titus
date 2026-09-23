import type { Course } from "../types";

export const courses: Course[] = [
  {
    slug: "montessori-foundation-course",
    name: "Montessori Foundation Course",
    shortDescription:
      "A practical introduction to Montessori principles, the prepared environment, and the role of the educator.",
    overview:
      "This foundation programme introduces core Montessori philosophy, child development, and classroom practice. It is designed for beginners and those exploring a career in Montessori education.",
    duration: "[Duration]",
    format: "Hybrid",
    level: "Foundation",
    location: "[Location]",
    eligibility: "[Eligibility — editable placeholder]",
    nextBatch: "[Month Year]",
    fee: "[Fee — editable placeholder]",
    badge: "Best for beginners",
    whoShouldApply: [
      "Aspiring Montessori educators",
      "Parents seeking deeper understanding",
      "School assistants and support staff",
      "Career changers exploring teaching",
    ],
    learningOutcomes: [
      "Explain core Montessori principles",
      "Describe key developmental characteristics",
      "Identify materials across curriculum areas",
      "Conduct basic observations",
    ],
    practicalComponents: "Guided observation, material demonstrations, and supervised practice.",
    assessment: "Participation, reflections, demonstrations, and portfolio review.",
    certificateInfo:
      "Certificate of completion issued by [Institute Name]. Do not claim external accreditation unless verified.",
    modules: [
      "montessori-philosophy",
      "child-development",
      "prepared-environment",
      "practical-life",
    ],
    faqs: [
      {
        id: "f1",
        question: "Is this suitable without teaching experience?",
        answer: "Yes. The foundation course welcomes beginners.",
      },
    ],
  },
  {
    slug: "early-childhood-montessori-training",
    name: "Early Childhood Montessori Training",
    shortDescription:
      "Develop a strong foundation in Montessori education for children in the early years.",
    overview:
      "A comprehensive programme preparing educators to guide children aged 2½–6 years through authentic Montessori practice.",
    duration: "[Duration]",
    format: "Hybrid",
    level: "Professional training",
    location: "[Location]",
    eligibility: "[Eligibility — editable placeholder]",
    nextBatch: "[Month Year]",
    fee: "[Fee — editable placeholder]",
    badge: "Most comprehensive",
    whoShouldApply: [
      "Educators seeking professional Montessori training",
      "Foundation course graduates",
      "Early years teachers upskilling",
    ],
    learningOutcomes: [
      "Prepare and maintain learning environments",
      "Present materials with clarity and purpose",
      "Document children's development",
      "Communicate professionally with families",
    ],
    practicalComponents: "Extended classroom practice, observation hours, and material mastery.",
    assessment: "Written work, practical exams, observation reports, and final portfolio.",
    certificateInfo: "Certificate of completion from [Institute Name]. Editable — verify before publishing.",
    modules: [
      "montessori-philosophy",
      "child-development",
      "sensorial-education",
      "language",
      "mathematics",
    ],
    faqs: [],
  },
  {
    slug: "advanced-montessori-educator-training",
    name: "Advanced Montessori Educator Training",
    shortDescription:
      "Deepen your understanding through advanced theory, material presentations, observation, and practice.",
    overview:
      "For experienced educators ready to refine practice, mentor others, and engage with advanced Montessori theory.",
    duration: "[Duration]",
    format: "Offline",
    level: "Advanced",
    location: "[Location]",
    eligibility: "[Eligibility — editable placeholder]",
    nextBatch: "[Month Year]",
    fee: "[Fee — editable placeholder]",
    whoShouldApply: [
      "Experienced Montessori educators",
      "Lead teachers seeking advanced certification",
      "Trainers and mentors in training",
    ],
    learningOutcomes: [
      "Lead advanced material presentations",
      "Mentor trainee educators",
      "Design reflective professional development",
      "Engage with contemporary Montessori discourse",
    ],
    practicalComponents: "Advanced demonstrations, mentoring practice, and leadership seminars.",
    assessment: "Research project, advanced practical exams, and peer review.",
    certificateInfo: "Advanced certificate from [Institute Name]. Editable placeholder.",
    modules: ["culture-creativity", "observation-practice"],
    faqs: [],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
