import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(readFileSync(join(root, "courses-extracted.json"), "utf8"));

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\r?\n/g, " ");
}

for (const c of data) {
  if (c.slug === "advance-diploma-montossori-in-child-education") {
    c.slug = "advance-diploma-montessori-in-child-education";
    c.name = "Advance Diploma in Montessori Child Education";
    c.duration = "1 year";
  }
  c.eligibility = c.eligibility.replace(/\u2019/g, "'").replace(/12'th/gi, "12th").replace(/10'th/gi, "10th");
  if (c.overview.includes("Internationally Recognized")) {
    c.overview =
      "The Advance Diploma in Montessori Teacher Training is a one-year professional programme focused on Montessori methods, classroom practice, and guiding young learners. Delivered on campus at Titus with structured theory and practical sessions.";
  }
}

const sharedBlock = `import { getNextBatchLabel } from "../utils/batch.js";

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
}`;

const items = data.map((c) => {
  const pdf = `/courses/${encodeURIComponent(c.file.split("/").pop())}`;
  const short =
    c.overview.length > 160 ? `${c.overview.slice(0, 160).replace(/\s+\S*$/, "")}…` : c.overview;
  const who = [
    `Meets eligibility: ${c.eligibility}`,
    "Aspiring or practising educators",
    "Career changers entering early years education",
  ];
  const outcomes = [
    "Understand programme aims and teaching approaches in the syllabus",
    "Apply learning in on-campus practice sessions at Titus",
    "Prepare for roles aligned with the qualification level",
  ];
  return `  programme({
    slug: "${c.slug}",
    category: "${c.category}",
    name: "${esc(c.name)}",
    shortDescription: "${esc(short)}",
    overview: "${esc(c.overview)}",
    duration: "${c.duration}",
    eligibility: "${esc(c.eligibility)}",
    syllabusPdf: "${esc(pdf)}",
    syllabusFilename: "${esc(c.file)}",
    whoShouldApply: [
      ${who.map((w) => `"${esc(w)}"`).join(",\n      ")}
    ],
    learningOutcomes: [
      ${outcomes.map((o) => `"${esc(o)}"`).join(",\n      ")}
    ],
  })`;
});

const out = `/** Programmes from syllabi in public/courses/ */

export const courseCategories = [
  { id: "certificate", label: "Certificate programmes" },
  { id: "diploma", label: "Diploma programmes" },
  { id: "advanced-diploma", label: "Advance diploma programmes" },
];

${sharedBlock}

export const programmes = [
${items.join(",\n")}
];
`;

writeFileSync(join(root, "..", "src", "data", "programmes.js"), out, "utf8");
console.log(`Wrote ${data.length} programmes`);
