/**
 * Page-level FAQ content used for two things:
 *   1. the visible FAQ section rendered near the bottom of each page, and
 *   2. the FAQPage JSON-LD block emitted alongside it (see useFaqSchema).
 *
 * Keep every answer consistent with the copy published elsewhere on the site.
 * Never state recognition, fees, refunds, or employment outcomes that the
 * institute has not verified — hedge to admissions instead.
 *
 * Contact details are interpolated from site.js so FAQ copy cannot drift from
 * the published contact block.
 */

import { siteConfig, hasRealEmail } from "./site.js";

const { email, phone, address, hours } = siteConfig.contact;

/** Reach-admissions copy that reads naturally with or without a published email. */
const reachAdmissions = hasRealEmail
  ? `Call ${phone}, chat with us on WhatsApp, email ${email}, or send the enquiry form on this page — all routes go to the same admissions team.`
  : `Call ${phone}, chat with us on WhatsApp, or send the enquiry form on this page — all routes go to the same admissions team.`;

const privacyRequest = hasRealEmail
  ? `Email ${email} with your request. We will respond during office hours (${hours}).`
  : `Call ${phone}, message us on WhatsApp, or use the contact form — we respond during office hours (${hours}).`;

const privacyEnquiries = hasRealEmail
  ? `Write to ${email} and mark your message as a privacy enquiry. Full details are in the privacy policy above.`
  : `Call ${phone} or use the contact form, and mark your message as a privacy enquiry. Full details are in the privacy policy above.`;

const refundContact = hasRealEmail
  ? `Email ${email}. Keep your enrolment details to hand so the team can locate your record.`
  : `Call ${phone} or use the contact form. Keep your enrolment details to hand so the team can locate your record.`;

export const pageFaqs = {
  home: {
    eyebrow: "Before you enrol",
    title: "Frequently asked questions",
    description:
      "Short answers about programmes, eligibility, fees, and how training works at Titus.",
    items: [
      {
        id: "home-1",
        question: "What programmes does Titus offer?",
        answer:
          "Thirteen on-campus programmes covering Montessori, nursery, primary, ECCE, phonics, daycare and craft training — at certificate, diploma, and advance diploma levels, from three months to one year.",
      },
      {
        id: "home-2",
        question: "Is the training available online or in hybrid mode?",
        answer:
          "No. Every programme is delivered on campus at Poonamallee, Chennai, through scheduled in-person sessions, materials practice, and supervised classroom hours.",
      },
      {
        id: "home-3",
        question: "What are the eligibility requirements?",
        answer:
          "Certificate programmes typically require 10th pass, diplomas 12th pass, and advance diplomas 12th pass or graduate standing. Exact requirements for each programme are listed on its course page.",
      },
      {
        id: "home-4",
        question: "How do I apply?",
        answer:
          "Complete the online application form with your details, education history, and preferred programme, then send your resume. Our admissions team reviews it and contacts you about the next steps.",
      },
      {
        id: "home-5",
        question: "Where do I find fees and the next batch date?",
        answer:
          "Fees vary by programme and the next intake is shown in the announcement bar at the top of every page. Confirm current amounts, instalment options, and batch dates with admissions before you pay.",
      },
      {
        id: "home-6",
        question: "Do you guarantee a job after graduation?",
        answer:
          "No. We do not guarantee employment or publish placement statistics. The career opportunities page describes the roles graduates commonly pursue, and outcomes depend on your own effort and local opportunities.",
      },
    ],
  },

  about: {
    eyebrow: "The institute",
    title: "Questions about Titus",
    description:
      "Where we train, who teaches, how long programmes take, and how to visit the campus.",
    items: [
      {
        id: "about-1",
        question: "Where is the institute located?",
        answer:
          `Our campus is at ${address}. All sessions, materials practice, and classroom hours happen here.`,
      },
      {
        id: "about-2",
        question: "Who delivers the training?",
        answer:
          "The principal and faculty mentor trainees through theory, practice, and reflection. Academic direction, feedback, and on-campus standards are set by the principal.",
      },
      {
        id: "about-3",
        question: "How long do programmes take?",
        answer:
          "Certificate programmes can start from three months, while diplomas and advance diplomas run for one year. Durations for each programme are listed on the courses pages.",
      },
      {
        id: "about-4",
        question: "Is the institute recognised or affiliated?",
        answer:
          "Recognition and affiliation details are held by the institute and are published only once verified. Contact admissions for the current credentials of the programme you are interested in.",
      },
      {
        id: "about-5",
        question: "Can I visit the campus before I enrol?",
        answer:
          `Yes. Call or message admissions to arrange a visit — counselling runs ${hours}. You can also see classroom practice and campus life on the student experience page.`,
      },
      {
        id: "about-6",
        question: "Do you offer online or distance study?",
        answer:
          "No. Training is face to face only. You attend scheduled sessions, practise with materials, and complete supervised classroom hours at the institute — there is no online or hybrid option.",
      },
    ],
  },

  courses: {
    eyebrow: "Programme questions",
    title: "Choosing a programme",
    description:
      "How many courses we run, which level fits you, and what to check before you apply.",
    items: [
      {
        id: "courses-1",
        question: "How many programmes are there?",
        answer:
          "Thirteen on-campus qualifications across three levels: five certificates, four diplomas, and four advance diplomas, covering Montessori, nursery, primary, ECCE, phonics, daycare, and craft training.",
      },
      {
        id: "courses-2",
        question: "Which course should I start with?",
        answer:
          "Short certificate programmes (3–6 months) suit beginners or a specialist skill. One-year diplomas and advance diplomas suit those ready for full teacher preparation. Compare programmes on the courses page and check the syllabus for each.",
      },
      {
        id: "courses-3",
        question: "Do all programmes have the same eligibility?",
        answer:
          "No. Certificates typically require 10th pass, diplomas 12th pass, and advance diplomas 12th pass or graduate standing. Eligibility and duration are printed on every programme page.",
      },
      {
        id: "courses-4",
        question: "What is the medium of instruction?",
        answer:
          "English. All theory, materials practice, and classroom sessions are delivered in English on campus.",
      },
      {
        id: "courses-5",
        question: "Can I read the syllabus before I apply?",
        answer:
          "Yes. Every programme has a published syllabus covering modules, on-campus sessions, and assessment. Use the download link on the course page where available, or ask admissions for a copy.",
      },
      {
        id: "courses-6",
        question: "Are classes held on campus only?",
        answer:
          "Yes. All thirteen programmes are taught face to face at the Titus campus in Poonamallee — there is no online or hybrid delivery.",
      },
    ],
  },

  curriculum: {
    eyebrow: "Curriculum questions",
    title: "About the curriculum",
    description:
      "How the modules are grouped, how programmes differ, and how assessment works.",
    items: [
      {
        id: "curriculum-1",
        question: "How is the curriculum structured?",
        answer:
          "The training spine is organised into core modules grouped into four parts — foundations through professional practice — covering themes from Montessori philosophy to supervised classroom practice.",
      },
      {
        id: "curriculum-2",
        question: "Is the curriculum the same for every programme?",
        answer:
          "The shared modules are common to all thirteen qualifications, but depth and emphasis differ by certificate, diploma, or advance diploma. Your official syllabus shows the exact coverage, hours, and assessments for your programme.",
      },
      {
        id: "curriculum-3",
        question: "How are trainees assessed?",
        answer:
          "Assessment combines written work with on-campus practical requirements, and is set per programme. Each course page summarises how that programme is assessed, with the full detail in the syllabus.",
      },
      {
        id: "curriculum-4",
        question: "Will I get hands-on classroom practice?",
        answer:
          "Yes. Training includes practice with authentic Montessori materials, observation assignments, and supervised classroom hours at the institute — theory is always tied to the work itself.",
      },
      {
        id: "curriculum-5",
        question: "Do I get the syllabus before enrolling?",
        answer:
          "Yes. Every programme publishes its syllabus so you can read the scope first. Download it from the course page where available, or request a copy from admissions.",
      },
    ],
  },

  admissions: {
    eyebrow: "Admissions questions",
    title: "Admissions FAQ",
    description:
      "Eligibility, documents, fees, payment milestones, and refunds — answered in one place.",
    items: [
      {
        id: "adm-1",
        question: "What are the general eligibility requirements?",
        answer:
          "Most certificates require 10th pass, diplomas 12th pass, and advance diplomas 12th pass or graduate standing. You must also be able to attend all scheduled on-campus sessions. Check each course page for exact requirements.",
      },
      {
        id: "adm-2",
        question: "Which documents do I need to apply?",
        answer:
          "A completed application form and a recent resume. Copies of your highest educational certificate, a government-issued ID, and a passport-size photograph are requested only if they are needed.",
      },
      {
        id: "adm-3",
        question: "What happens after I submit my application?",
        answer:
          "Admissions reviews your application and contacts you about the next steps. If accepted, you complete fee payment, receive your batch schedule, and attend orientation before your first sessions.",
      },
      {
        id: "adm-4",
        question: "How much are the fees?",
        answer:
          "Fees vary by programme. Confirm current amounts and instalment options with admissions before you pay — figures on course pages may be updated.",
      },
      {
        id: "adm-5",
        question: "When are payments due?",
        answer:
          "Payment is staged: a registration fee on acceptance, a first instalment before the programme starts, and a mid-programme instalment where it applies. The schedule you agree with admissions sets the exact amounts.",
      },
      {
        id: "adm-6",
        question: "What is the refund policy?",
        answer:
          "Refund and cancellation terms depend on when you withdraw relative to the programme start date. See the terms and refund policy page for the full conditions before you enrol.",
      },
    ],
  },

  apply: {
    eyebrow: "Application questions",
    title: "Applying online",
    description:
      "What the form asks for, what happens after you submit, and where to get help.",
    items: [
      {
        id: "apply-1",
        question: "How do I apply for a programme?",
        answer:
          "Fill in the five-step application form on this page: your details, contact information, education history, documents, and your preferred programme. Review your answers and submit — you can move between completed steps before submitting.",
      },
      {
        id: "apply-2",
        question: "What do I need before I start the form?",
        answer:
          "Your contact details, education history, and a recent resume. Your preferred programme can be selected from the list beside the form, and certificates or ID are requested later only if they are needed.",
      },
      {
        id: "apply-3",
        question: "I am not sure which programme to choose. Can I still apply?",
        answer:
          "Yes. Select the programme you are leaning towards and our counsellors will confirm eligibility, duration, and fees with you before you commit. You can also call admissions before applying.",
      },
      {
        id: "apply-4",
        question: "What happens after I submit?",
        answer:
          "Admissions reviews your application and contacts you about the next steps, including document checks, fee payment, batch schedule, and orientation.",
      },
      {
        id: "apply-5",
        question: "What if I need help with the form?",
        answer:
          `Call ${phone} or message us on WhatsApp — admissions counselling runs during institute hours (${hours}). You can also use the contact page to send a question.`,
      },
      {
        id: "apply-6",
        question: "Is the application form free to submit?",
        answer:
          "No payment is taken through the form itself. Any registration fee, instalment, or payment method is confirmed directly by admissions before you pay anything.",
      },
    ],
  },

  "student-experience": {
    eyebrow: "Life on campus",
    title: "Student experience FAQ",
    description:
      "What training weeks, practice sessions, and feedback actually look like at Titus.",
    items: [
      {
        id: "exp-1",
        question: "What does a training week look like?",
        answer:
          "Scheduled in-person sessions, hands-on work with Montessori materials, observation assignments, and supervised classroom hours. Attendance at every scheduled session is part of the programme.",
      },
      {
        id: "exp-2",
        question: "Will I practise with real classroom materials?",
        answer:
          "Yes. Sessions take place in a prepared training environment, so you handle and present the materials yourself rather than only reading about them.",
      },
      {
        id: "exp-3",
        question: "How is feedback given to trainees?",
        answer:
          "Through mentorship. The principal and faculty give regular feedback during sessions, observation work, and practice so you can develop as a reflective educator.",
      },
      {
        id: "exp-4",
        question: "Is there supervised teaching practice?",
        answer:
          "Yes. Supervised classroom hours are part of the training, alongside observation assignments and materials practice on campus.",
      },
      {
        id: "exp-5",
        question: "Can I visit the campus before enrolling?",
        answer:
          `Yes. Contact admissions to arrange a visit during counselling hours (${hours}), and see the training environment first-hand.`,
      },
    ],
  },

  careers: {
    eyebrow: "After training",
    title: "Career questions",
    description:
      "What graduates go on to do — and what we do and do not promise.",
    items: [
      {
        id: "career-1",
        question: "Do you guarantee job placement after graduation?",
        answer:
          "No. We do not guarantee employment and we do not publish placement statistics. Outcomes depend on your qualifications, experience, location, and the opportunities available in your community.",
      },
      {
        id: "career-2",
        question: "What roles do graduates pursue?",
        answer:
          "Montessori lead or assistant teaching, early years education in schools using Montessori principles, classroom coordination or curriculum support, parent education and workshops, and further study in Montessori education.",
      },
      {
        id: "career-3",
        question: "What skills will I develop during training?",
        answer:
          "Observation and documentation of children's development, preparing and maintaining learning environments, presenting Montessori materials with clarity, professional communication with families, and reflective practice.",
      },
      {
        id: "career-4",
        question: "Will the certificate help me study further?",
        answer:
          "Many trainees continue into further study in Montessori education or related fields. Which qualifications your next step requires depends on the institution you apply to, so check with them directly.",
      },
      {
        id: "career-5",
        question: "Does the institute help with finding work?",
        answer:
          "We prepare you for the classroom and describe the paths graduates commonly pursue, but we do not act as an employment agency. Your own performance, experience, and local opportunities decide the outcome.",
      },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Contact questions",
    description:
      "How to reach admissions, when we reply, and where to find the campus.",
    items: [
      {
        id: "contact-1",
        question: "How can I reach the admissions team?",
        answer:
          reachAdmissions,
      },
      {
        id: "contact-2",
        question: "What are your office hours?",
        answer:
          `The institute is open ${hours}, with admissions counselling available during those hours.`,
      },
      {
        id: "contact-3",
        question: "Where is the campus?",
        answer:
          `${address}. All programmes are delivered on this campus.`,
      },
      {
        id: "contact-4",
        question: "When will I get a reply to my message?",
        answer:
          `Enquiries are read by the admissions team during office hours (${hours}). For anything urgent, calling or messaging on WhatsApp is the fastest route.`,
      },
      {
        id: "contact-5",
        question: "Can I ask about a specific programme before applying?",
        answer:
          "Yes. Mention the programme you are considering in your message, or pick it in the brochure form, and admissions will confirm eligibility, duration, fees, and the next batch date for that course.",
      },
    ],
  },

  brochure: {
    eyebrow: "Brochure questions",
    title: "About the brochure",
    description:
      "What it covers, how to get it, and what to do with it afterwards.",
    items: [
      {
        id: "broch-1",
        question: "What is in the brochure?",
        answer:
          "An overview of our Montessori teacher-training programmes — levels, durations, and eligibility — so you can compare options before you read the syllabus for each course.",
      },
      {
        id: "broch-2",
        question: "Does the brochure cost anything?",
        answer:
          "No. It is free to download; we only ask for your name, email, and course interest so we can send you the right programme information.",
      },
      {
        id: "broch-3",
        question: "What happens after I submit the form?",
        answer:
          "Your download starts straight away. If you have questions once you have read it, contact admissions by phone or WhatsApp and we will walk through programmes and enrolment with you.",
      },
      {
        id: "broch-4",
        question: "Can I request a brochure for a single course?",
        answer:
          "The brochure covers every programme. Use the course interest field to tell us which one you are considering, and admissions will follow up with the details for that course.",
      },
      {
        id: "broch-5",
        question: "Where can I find the detailed syllabus?",
        answer:
          "Each programme has its own syllabus. Open its course page, or ask admissions for a copy of the one you are interested in before you apply.",
      },
    ],
  },

  privacy: {
    eyebrow: "Privacy",
    title: "Privacy questions",
    description:
      "What we collect, why we collect it, and how to ask about your data.",
    items: [
      {
        id: "priv-1",
        question: "What personal information do you collect?",
        answer:
          "Contact details such as name, email, phone, and address; application information including education, experience, and course preferences; documents you upload such as your resume; and any communications you send to us.",
      },
      {
        id: "priv-2",
        question: "How do you use my information?",
        answer:
          "To process admissions applications, respond to enquiries, send programme information you request, and comply with legal obligations.",
      },
      {
        id: "priv-3",
        question: "How long do you keep my data?",
        answer:
          "For as long as necessary to process your application and meet legal requirements.",
      },
      {
        id: "priv-4",
        question: "How do I request access to or deletion of my data?",
        answer:
          privacyRequest,
      },
      {
        id: "priv-5",
        question: "Who do I contact with privacy questions?",
        answer:
          privacyEnquiries,
      },
    ],
  },

  terms: {
    eyebrow: "Terms and refund",
    title: "Terms questions",
    description:
      "Enrolment terms, payment obligations, cancellation, and refunds.",
    items: [
      {
        id: "terms-1",
        question: "What do I agree to when I enrol?",
        answer:
          "By enrolling you agree to abide by institute policies, attendance requirements, and professional conduct standards for the duration of your programme.",
      },
      {
        id: "terms-2",
        question: "How and when do I pay fees?",
        answer:
          "Programme fees are listed on the course and admissions pages, and payment schedules must be completed according to the plan you agree with admissions — typically a registration fee, a first instalment, and a mid-programme instalment where applicable.",
      },
      {
        id: "terms-3",
        question: "Can I cancel my enrolment?",
        answer:
          "Yes. Cancellation by the applicant is handled by how close it falls to the programme start date, in three windows: more than 30 days before, 15–30 days before, and less than 15 days before the start.",
      },
      {
        id: "terms-4",
        question: "How much of my fee is refunded?",
        answer:
          "The refund percentage depends on which of those three windows your cancellation falls into, minus administrative charges, with no refund inside 15 days of the start date unless exceptional circumstances apply. Contact admissions for the exact figure that applies to you.",
      },
      {
        id: "terms-5",
        question: "What happens if the institute cancels a programme?",
        answer:
          "You receive a full refund of the fees paid for that programme, or the option to transfer to another batch.",
      },
      {
        id: "terms-6",
        question: "Who do I contact about refunds?",
        answer:
          refundContact,
      },
    ],
  },
};

export function getPageFaq(page) {
  return pageFaqs[page] || null;
}
