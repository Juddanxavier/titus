/** Programmes from syllabi in public/courses/ */

import { getNextBatchLabel } from "../utils/batch.js";

export const courseCategories = [
  { id: "certificate", label: "Certificate programmes" },
  { id: "diploma", label: "Diploma programmes" },
  { id: "advanced-diploma", label: "Advance diploma programmes" },
];

/** Landing page and pathway copy — derived counts stay in sync with `programmes`. */
export const programmePathways = [
  {
    id: "certificate",
    label: "Certificate",
    headline: "Build skills in months",
    description:
      "Short vocational programmes in ECCE, Montessori practice, phonics, daycare management, and craft teaching — ideal for 10th-pass learners and working adults upskilling on campus.",
    durationNote: "3 months to 1 year",
    eligibilityNote: "10th pass (Craft: 12th pass)",
  },
  {
    id: "diploma",
    label: "Diploma",
    headline: "One-year professional qualifications",
    description:
      "Diplomas in Montessori teacher training, international Montessori practice, nursery teacher training, and primary teacher training — structured for 12th-pass candidates ready for classroom roles.",
    durationNote: "1 year each",
    eligibilityNote: "12th pass",
  },
  {
    id: "advanced-diploma",
    label: "Advance diploma",
    headline: "Deepen Montessori and primary practice",
    description:
      "Advanced one-year programmes in childhood Montessori education, Montessori teacher training, primary teacher training, and Montessori child education for educators pursuing senior classroom responsibility.",
    durationNote: "1 year each",
    eligibilityNote: "12th pass or graduate",
  },
];

export const featuredProgrammeSlugs = [
  "certificate-in-montessori-teacher-training",
  "diploma-in-montessori-teacher-training",
  "advance-diploma-in-montessori-teacher-training",
];

const shared = {
  location: "[City, Country]",
  nextBatch: getNextBatchLabel(),
  format: "On-campus",
  medium: "English",
  ageGroup: "Varies by programme — see syllabus",
  fees: {
    amount: "[XX,XXX]",
    currency: "INR",
    note: "Contact admissions for current fees and instalment options.",
  },
  paymentOptions: [
    "Full payment at enrolment",
    "Instalment plans (details from admissions)",
    "Bank transfer and UPI accepted",
  ],
  certificateInfo:
    "Certificate issued on successful completion per programme requirements. Confirm certification wording with admissions before publishing externally.",
  assessment:
    "Ongoing participation, practical work, and programme assessments as outlined in the official syllabus.",
  practicalLearning:
    "On-campus sessions including demonstrations, practice, and supervised classroom hours at Titus.",
  modules: [],
  faqs: [
    {
      question: "Is training offered online or in hybrid mode?",
      answer:
        "No. All programmes are delivered on campus at Titus. See the programme syllabus for session structure and attendance expectations.",
    },
    {
      question: "Where can I read the full syllabus?",
      answer:
        "Download the syllabus from the course page or the courses listing on our website.",
    },
  ],
};

function programme(def) {
  return { ...shared, ...def };
}

export const programmes = [
  programme({
    slug: "advance-diploma-in-childhood-montessori-education",
    category: "advanced-diploma",
    name: "Advance Diploma In Childhood Montessori Education",
    shortDescription: "The Advance Diploma in Childhood Montessori Education is a specialized, in-depth teacher- training programme designed to prepare educators with advanced…",
    overview: "The Advance Diploma in Childhood Montessori Education is a specialized, in-depth teacher- training programme designed to prepare educators with advanced knowledge, skills, and practical expertise in Montessori philosophy and early childhood pedagogy. This programme equips trainees to work confidently with chi ldren aged 2½ to 6 years , applying authentic Montessori principles, materials, and classroom management techniques. This advanced -level course blends theory, practical training, observati",
    duration: "1 year",
    eligibility: "12th PASS or GRADUATE",
    syllabusPdf: "/courses/ADVANCE%20DIPLOMA%20IN%20CHILDHOOD%20MONTESSORI%20EDUCATION%20_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "ADVANCE DIPLOMA IN CHILDHOOD MONTESSORI EDUCATION _ONE_YEAR_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS or GRADUATE",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "advance-diploma-in-montessori-teacher-training",
    category: "advanced-diploma",
    name: "Advance Diploma In Montessori Teacher Training",
    shortDescription: "The Advance Diploma in Montessori Teacher Training is a one-year professional programme focused on Montessori methods, classroom practice, and guiding young…",
    overview: "The Advance Diploma in Montessori Teacher Training is a one-year professional programme focused on Montessori methods, classroom practice, and guiding young learners. Delivered on campus at Titus with structured theory and practical sessions.",
    duration: "1 year",
    eligibility: "12th PASS or GRADUATE",
    syllabusPdf: "/courses/ADVANCE%20DIPLOMA%20IN%20MONTESSORI%20TEACHER%20TRAINING_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "ADVANCE DIPLOMA IN MONTESSORI TEACHER TRAINING_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS or GRADUATE",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "advance-diploma-in-primary-teacher-training",
    category: "advanced-diploma",
    name: "Advance Diploma In Primary Teacher Training",
    shortDescription: "The Advance Diploma in Primary Teacher Training (ADPTT) is a one-year vocational program designed to prepare aspiring teachers with the essential knowledge,…",
    overview: "The Advance Diploma in Primary Teacher Training (ADPTT) is a one-year vocational program designed to prepare aspiring teachers with the essential knowledge, skills, and professional competencies required for effective teaching at the primary school level. This course focuses on developing a strong foundation in child psychology, educational principles, and modern teaching methodologies , enabling trainees to understand the learning needs, behavior, and developmental stages of young children. It ",
    duration: "1 year",
    eligibility: "12th PASS or GRADUATE",
    syllabusPdf: "/courses/ADVANCE%20DIPLOMA%20IN%20PRIMARY%20TEACHER%20TRAINING_ONE_YEAR_SYLLABUS_NCVTC.ORG.pdf",
    syllabusFilename: "ADVANCE DIPLOMA IN PRIMARY TEACHER TRAINING_ONE_YEAR_SYLLABUS_NCVTC.ORG.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS or GRADUATE",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "advance-diploma-montessori-in-child-education",
    category: "advanced-diploma",
    name: "Advance Diploma in Montessori Child Education",
    shortDescription: "The Advance Diploma in Montessori Child Education is a comprehensive one -year professional program designed to prepare educators with advanced knowledge and…",
    overview: "The Advance Diploma in Montessori Child Education is a comprehensive one -year professional program designed to prepare educators with advanced knowledge and practical skills in early childhood education based on the Montessori method, developed by Maria Montessori. The course focuses on fostering the overall development of children through a structured, child-centered learning approach. This program provides an in-depth understanding of child psychology, developmental stages, and learning behav",
    duration: "1 year",
    eligibility: "12th PASS or GRADUATE",
    syllabusPdf: "/courses/ADVANCE%20DIPLOMA%20MONTOSSORI%20IN%20CHILD%20EDUCATION_NCVTC.pdf",
    syllabusFilename: "ADVANCE DIPLOMA MONTOSSORI IN CHILD EDUCATION_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS or GRADUATE",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "certificate-in-daycare-and-crche-management",
    category: "certificate",
    name: "Certificate In Daycare And Crche Management",
    shortDescription: "The Certificate in Daycare and Crèche Management is a short -term vocational program designed to equip individuals with the essential knowledge and practical…",
    overview: "The Certificate in Daycare and Crèche Management is a short -term vocational program designed to equip individuals with the essential knowledge and practical skills required to manage and operate daycare centers and crèches effectively. The course focuses on providing quality care, safety, and early learning support for children, particularly in the age group of 0– 6 years. This program introduces trainees to the fundamentals of child care, early childhood development, and center management. It ",
    duration: "3 months",
    eligibility: "10th PASS",
    syllabusPdf: "/courses/CERTIFICATE%20IN%20DAYCARE%20AND%20CRCHE%20MANAGEMENT_THREE_MONTHS_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "CERTIFICATE IN DAYCARE AND CRCHE MANAGEMENT_THREE_MONTHS_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 10th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "certificate-in-early-childhood-care-and-education",
    category: "certificate",
    name: "Certificate In Early Childhood Care And Education",
    shortDescription: "The Certificate in Early Childhood Care and Education (ECCE) is a short -term vocational program designed to provide foundational knowledge and practical…",
    overview: "The Certificate in Early Childhood Care and Education (ECCE) is a short -term vocational program designed to provide foundational knowledge and practical skills for working with young children from birth to six years. The course focuses on the holistic deve lopment of children by integrating care, education, health, and emotional well-being. This program introduces trainees to the principles of early childhood education, including child-centered learning approaches inspired by educators such as ",
    duration: "6 months",
    eligibility: "10th PASS",
    syllabusPdf: "/courses/CERTIFICATE%20IN%20EARLY%20CHILDHOOD%20CARE%20AND%20EDUCATION_SIX_MONTHS_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "CERTIFICATE IN EARLY CHILDHOOD CARE AND EDUCATION_SIX_MONTHS_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 10th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "certificate-in-montessori-teacher-training",
    category: "certificate",
    name: "Certificate In Montessori Teacher Training",
    shortDescription: "6 Month Certificate Course in Montessori Teachers Training aims to teach and guide the young students. Our Montessori Teachers Training programmes-courses…",
    overview: "6 Month Certificate Course in Montessori Teachers Training aims to teach and guide the young students. Our Montessori Teachers Training programmes-courses equip a candidate to become a Montessori Teacher in Montessori school around the world. This Course is mainly focused on the concepts of Montessori principles, which guide the child in self -construction and freedom to learn on its own with in a structured environment. Course Suitability 1. The Montessori teacher training course helps to devel",
    duration: "6 months",
    eligibility: "10th PASS",
    syllabusPdf: "/courses/CERTIFICATE%20IN%20MONTESSORI%20TEACHER%20TRAINING%20_SIX_MONTHS_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "CERTIFICATE IN MONTESSORI TEACHER TRAINING _SIX_MONTHS_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 10th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "certificate-in-phonics-programme",
    category: "certificate",
    name: "Certificate In Phonics Programme",
    shortDescription: "The Certificate in Phonics Programme is a short-term, skill-based training course designed to equip teachers, parents, and early educators with effective…",
    overview: "The Certificate in Phonics Programme is a short-term, skill-based training course designed to equip teachers, parents, and early educators with effective techniques for teaching phonics and early literacy. The course provides a thorough understanding of phonemic awareness, letter–sound relationships, blending, segmenting, decoding skills, and spelling rules . Learners are trained to help children develop strong reading and writing foundations using multisensory, interactive, and playful teaching",
    duration: "3 months",
    eligibility: "10th PASS",
    syllabusPdf: "/courses/CERTIFICATE%20IN%20PHONICS%20PROGRAMME_THREE%20MONTHS_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "CERTIFICATE IN PHONICS PROGRAMME_THREE MONTHS_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 10th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "craft-teacher-certificate",
    category: "certificate",
    name: "Craft Teacher Certificate",
    shortDescription: "The Craft Teacher Certificate (CTC) is a one -year vocational training program designed to prepare individuals to become skilled art and craft instructors in…",
    overview: "The Craft Teacher Certificate (CTC) is a one -year vocational training program designed to prepare individuals to become skilled art and craft instructors in schools, training centers, and community education programs. The course focuses on developing both creative abilities and teaching skills, enabling trainees to effectively guide students in various forms of art and craft activities. This program provides a balanced blend of theoretical knowledge and practical training. Trainees learn the fu",
    duration: "1 year",
    eligibility: "12th PASS",
    syllabusPdf: "/courses/CRAFT%20TEACHER%20CERTIFICATE_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "CRAFT TEACHER CERTIFICATE_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "diploma-in-international-montessori-teacher-training",
    category: "diploma",
    name: "Diploma In International Montessori Teacher Training",
    shortDescription: "The Diploma in International Montessori Teacher Training is a specialized program designed to equip aspiring educators with the knowledge, skills, and…",
    overview: "The Diploma in International Montessori Teacher Training is a specialized program designed to equip aspiring educators with the knowledge, skills, and practical experience required to teach children using the Montessori method, pioneered by Maria Montessori . The course focuses on child -centered education that nurtures independence, creativity, and a lifelong love for learning. This program provides a strong foundation in Montessori philosophy and principles, emphasizing the natural development",
    duration: "1 year",
    eligibility: "12th PASS",
    syllabusPdf: "/courses/DIPLOMA%20IN%20INTERNATIONAL%20MONTESSORI%20TEACHER%20TRAINING_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "DIPLOMA IN INTERNATIONAL MONTESSORI TEACHER TRAINING_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "diploma-in-montessori-teacher-training",
    category: "diploma",
    name: "Diploma In Montessori Teacher Training",
    shortDescription: "The Diploma in Montessori Teacher Training is a one-year professional programme designed to prepare aspiring teachers with the principles, philosophy, and…",
    overview: "The Diploma in Montessori Teacher Training is a one-year professional programme designed to prepare aspiring teachers with the principles, philosophy, and practical skills of the Montessori method of early childhood education. This course equips trainees with the knowledge to create child -centred learning environments that promote in dependence, creativity, sensory development, and holistic growth in children aged 2.5 to 6 years. This programme blends theoretical understanding with hands-on tra",
    duration: "1 year",
    eligibility: "12th PASS",
    syllabusPdf: "/courses/DIPLOMA%20IN%20MONTESSORI%20TEACHER%20TRAINING_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "DIPLOMA IN MONTESSORI TEACHER TRAINING_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "diploma-in-nursery-teacher-training",
    category: "diploma",
    name: "Diploma In Nursery Teacher Training",
    shortDescription: "The Diploma in Nursery Teacher Training (NTT) is a comprehensive one -year professional programme designed to prepare aspiring teachers for effective early…",
    overview: "The Diploma in Nursery Teacher Training (NTT) is a comprehensive one -year professional programme designed to prepare aspiring teachers for effective early childhood care and education. This course equips trainees with the knowledge, teaching skills, and practical classroom experience needed to work w ith children aged 2 to 6 years in preschools, nursery schools, and early learning centres. The programme combines theory, practical training, child psychology, teaching methodologies, and classroom",
    duration: "1 year",
    eligibility: "12th PASS",
    syllabusPdf: "/courses/DIPLOMA%20IN%20NURSERY%20TEACHER%20TRAINING_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "DIPLOMA IN NURSERY TEACHER TRAINING_ONE_YEAR_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  }),
  programme({
    slug: "diploma-in-primary-teacher-training",
    category: "diploma",
    name: "Diploma In Primary Teacher Training",
    shortDescription: "The Diploma in Primary Teacher Training (PTT) is a comprehensive one -year professional programme designed to prepare skilled, confident, and child -centered…",
    overview: "The Diploma in Primary Teacher Training (PTT) is a comprehensive one -year professional programme designed to prepare skilled, confident, and child -centered primary school educators. This course equips trainees with strong foundations in child development, pedagogy, subject teaching methods, classroom management, and educational psychology, enabling them to work effectively with children aged 6 to 12 years. The programme integrates theory, practicum, lesson planning, micro -teaching, subject pe",
    duration: "1 year",
    eligibility: "12th PASS",
    syllabusPdf: "/courses/DIPLOMA%20IN%20PRIMARY%20TEACHER%20TRAINING_YEAR_SYLLABUS_NCVTC.pdf",
    syllabusFilename: "DIPLOMA IN PRIMARY TEACHER TRAINING_YEAR_SYLLABUS_NCVTC.pdf",
    whoShouldApply: [
      "Meets eligibility: 12th PASS",
      "Aspiring or practising educators",
      "Career changers entering early years education"
    ],
    learningOutcomes: [
      "Understand programme aims and teaching approaches in the syllabus",
      "Apply learning in on-campus practice sessions at Titus",
      "Prepare for roles aligned with the qualification level"
    ],
  })
];
