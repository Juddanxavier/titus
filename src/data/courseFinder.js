export const courseFinderQuestions = [
  {
    id: "role",
    question: "What best describes your current role?",
    options: [
      { value: "aspiring", label: "Aspiring educator" },
      { value: "assistant", label: "Teaching assistant or school staff" },
      { value: "teacher", label: "Qualified teacher" },
      { value: "parent", label: "Parent or caregiver" },
      { value: "other", label: "Other / career changer" },
    ],
  },
  {
    id: "goal",
    question: "What is your main training goal?",
    options: [
      { value: "intro", label: "Learn Montessori basics" },
      { value: "classroom", label: "Lead an early childhood classroom" },
      { value: "advance", label: "Deepen existing Montessori practice" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  {
    id: "experience",
    question: "How much education experience do you have?",
    options: [
      { value: "none", label: "None" },
      { value: "some", label: "Some informal experience" },
      { value: "1-3", label: "1–3 years" },
      { value: "3plus", label: "3+ years" },
    ],
  },
  {
    id: "age",
    question: "Which age group interests you?",
    options: [
      { value: "0-3", label: "Birth to 3 years" },
      { value: "3-6", label: "3 to 6 years" },
      { value: "6-12", label: "6 to 12 years" },
      { value: "all", label: "General overview" },
    ],
  },
  {
    id: "start",
    question: "When would you like to begin?",
    options: [
      { value: "soon", label: "Within 3 months" },
      { value: "6mo", label: "Within 6 months" },
      { value: "later", label: "Later this year" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
];

export function recommendCourse(answers) {
  const { goal, experience, role } = answers;

  if (goal === "advance" || experience === "3plus") return "advanced";
  if (goal === "intro" || role === "parent" || experience === "none") return "foundation";
  if (goal === "unsure" || answers.start === "exploring") return "admissions";
  if (goal === "classroom" || experience === "1-3" || experience === "some") return "early-childhood";
  return "early-childhood";
}

export const resultMeta = {
  foundation: {
    title: "Certificate in Montessori teacher training",
    description: "A six-month on-campus certificate to build Montessori teaching foundations.",
    courseSlug: "certificate-in-montessori-teacher-training",
  },
  "early-childhood": {
    title: "Diploma in Montessori teacher training",
    description: "One-year diploma preparation for early childhood Montessori educators.",
    courseSlug: "diploma-in-montessori-teacher-training",
  },
  advanced: {
    title: "Advance diploma in childhood Montessori education",
    description: "One-year advance diploma for experienced or graduate-level trainees.",
    courseSlug: "advance-diploma-in-childhood-montessori-education",
  },
  admissions: {
    title: "Speak with admissions",
    description: "Our team can help you choose the right starting point.",
  },
};
