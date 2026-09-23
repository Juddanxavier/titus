export const curriculumModules = [
  {
    id: "montessori-philosophy",
    title: "Montessori philosophy",
    description: "Explore the life and work of Dr. Maria Montessori, core principles, and the role of the educator as guide.",
    topics: ["History and principles of Montessori education", "The prepared adult and professional ethics", "Observation as a foundation for practice"],
  },
  {
    id: "child-development",
    title: "Child development",
    description: "Study developmental stages from birth through early childhood with emphasis on sensitive periods and independence.",
    topics: ["Developmental milestones and sensitive periods", "Physical, cognitive, and social-emotional growth", "Supporting autonomy and intrinsic motivation"],
  },
  {
    id: "prepared-environment",
    title: "Prepared environment",
    description: "Learn to design and maintain calm, organised spaces that invite exploration and purposeful activity.",
    topics: ["Layout, flow, and accessibility", "Materials selection and rotation", "Creating routines that support concentration"],
  },
  {
    id: "practical-life",
    title: "Practical life",
    description: "Understand how everyday activities build coordination, confidence, and care for self, others, and the environment.",
    topics: ["Care of self and care of environment", "Grace and courtesy", "Sequencing activities for young children"],
  },
  {
    id: "sensorial-education",
    title: "Sensorial education",
    description: "Study Montessori sensorial materials that refine the senses and prepare children for abstract learning.",
    topics: ["Purpose and progression of sensorial materials", "Demonstration and presentation techniques", "Connecting sensorial work to later learning"],
  },
  {
    id: "language",
    title: "Language",
    description: "Develop skills to support spoken language, pre-literacy, and early reading and writing in a natural progression.",
    topics: ["Oral language enrichment", "Phonological awareness and sandpaper letters", "Supporting emergent readers and writers"],
  },
  {
    id: "mathematics",
    title: "Mathematics",
    description: "Learn to introduce mathematical concepts through concrete materials before moving to abstraction.",
    topics: ["Number sense and counting", "Decimal system and operations", "Presenting materials with clarity and patience"],
  },
  {
    id: "culture-creativity",
    title: "Culture and creativity",
    description: "Integrate geography, science, art, and music into a connected curriculum that respects children's curiosity.",
    topics: ["Cultural studies and global awareness", "Science exploration in early years", "Art, music, and creative expression"],
  },
  {
    id: "observation-practice",
    title: "Observation and practice",
    description: "Build reflective practice through guided observation, supervised teaching practice, and professional feedback.",
    topics: ["Recording and interpreting observations", "Supervised classroom practice", "Professional reflection and growth planning"],
  },
];

/** Slice ranges index into `curriculumModules` for each training part. */
export const curriculumParts = [
  {
    id: "foundations",
    eyebrow: "Part 1",
    shortLabel: "Foundations",
    title: "Philosophy and development",
    blurb: "Ground your practice in Montessori principles and how children grow.",
    slice: [0, 2],
  },
  {
    id: "environment",
    eyebrow: "Part 2",
    shortLabel: "Environment",
    title: "Environment and materials",
    blurb: "Design spaces and guide purposeful work from practical life through sensorial learning.",
    slice: [2, 5],
  },
  {
    id: "areas",
    eyebrow: "Part 3",
    shortLabel: "Curriculum",
    title: "Language, maths, and culture",
    blurb: "Present core areas with concrete materials before abstraction.",
    slice: [5, 8],
  },
  {
    id: "practice",
    eyebrow: "Part 4",
    shortLabel: "Practice",
    title: "Observation and professional practice",
    blurb: "Reflective classroom practice with supervision and feedback.",
    slice: [8, 9],
  },
];
