import type { SiteConfig, TrustMetric } from "../types";

export const siteConfig: SiteConfig = {
  instituteName: "[Institute Name]",
  location: "[Location]",
  tagline: "Montessori teacher training for thoughtful educators",
  description:
    "Professional Montessori teacher-training programmes for aspiring educators, teaching assistants, and career changers.",
  announcement: {
    message: "Admissions open for the [Month Year] batch",
    batchLabel: "[Month Year]",
    linkLabel: "View course details",
    linkHref: "/courses",
  },
  contact: {
    email: "admissions@example.com",
    phone: "+[Country code] [Phone number]",
    whatsapp: "https://wa.me/[number]",
    address: "[Street address], [City], [Country]",
    hours: "Monday to Friday, 9:00 am – 5:00 pm",
  },
  social: [
    { label: "Instagram", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "YouTube", url: "#" },
  ],
  brochureUrl: "/brochure",
  heroImage:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
  heroImageAlt: "Montessori teacher trainees practising with learning materials",
};

/** Editable placeholder metrics — replace before launch */
export const trustMetrics: TrustMetric[] = [
  { value: "[X]+", label: "Learners trained", note: "Editable placeholder" },
  { value: "[X]", label: "Years of training experience", note: "Editable placeholder" },
  { value: "[X]", label: "Learning formats", note: "Editable placeholder" },
  { value: "[X]", label: "Upcoming batches", note: "Editable placeholder" },
];

export const navLinks = [
  { label: "About us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Admissions", href: "/admissions" },
  { label: "Trainers", href: "/trainers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const whyChoose = [
  {
    title: "Learn the Montessori philosophy",
    text: "Ground your practice in observation, respect, and child-centred principles.",
  },
  {
    title: "Practise with Montessori materials",
    text: "Hands-on sessions with authentic materials in a prepared training environment.",
  },
  {
    title: "Develop observation skills",
    text: "Learn to document and interpret children's engagement and development.",
  },
  {
    title: "Build classroom confidence",
    text: "Supervised practice and mentoring from experienced trainers.",
  },
];

export const learningApproach = [
  { title: "Understand", description: "Study Montessori theory and child development." },
  { title: "Observe", description: "Watch children and trainees in prepared environments." },
  { title: "Practise", description: "Present materials and guide learning with feedback." },
  { title: "Reflect", description: "Connect experience to professional growth." },
];

export const admissionsSteps: { title: string; description: string }[] = [
  { title: "Explore a course", description: "Review programmes, formats, and eligibility." },
  { title: "Submit your application", description: "Complete the online form with required documents." },
  { title: "Begin your training", description: "Join your cohort and start practical learning." },
];

export const careerPaths = [
  { title: "Montessori teacher", description: "Lead or support early childhood classrooms." },
  { title: "Preschool educator", description: "Apply Montessori principles in diverse settings." },
  { title: "Teaching assistant", description: "Support lead teachers with prepared environments." },
  { title: "School coordinator", description: "Help maintain curriculum and classroom standards." },
  { title: "Parent educator", description: "Share Montessori-informed guidance with families." },
  { title: "Further professional study", description: "Continue specialised Montessori education." },
];
