import { createRouter, createWebHistory } from "vue-router";
import { getCourseBySlug } from "@/data/courses";

const maintenanceOn = import.meta.env.VITE_MAINTENANCE_MODE === "true";

const appRoutes = [
  { path: "/", name: "home", component: () => import("@/views/HomeView.vue"), meta: { title: "Home" } },
  { path: "/about", name: "about", component: () => import("@/views/AboutView.vue"), meta: { title: "About us" } },
  { path: "/courses", name: "courses", component: () => import("@/views/CoursesView.vue"), meta: { title: "Courses" } },
  { path: "/courses/:slug", name: "course-detail", component: () => import("@/views/CourseDetailView.vue"), meta: { title: "Course details" } },
  { path: "/curriculum", name: "curriculum", component: () => import("@/views/CurriculumView.vue"), meta: { title: "Curriculum" } },
  { path: "/admissions", name: "admissions", component: () => import("@/views/AdmissionsView.vue"), meta: { title: "Admissions" } },
  { path: "/apply", name: "apply", component: () => import("@/views/ApplyView.vue"), meta: { title: "Apply" } },
  { path: "/principal", redirect: "/about" },
  { path: "/trainers", redirect: "/about" },
  { path: "/student-experience", name: "student-experience", component: () => import("@/views/StudentExperienceView.vue"), meta: { title: "Student experience" } },
  { path: "/careers", name: "careers", component: () => import("@/views/CareersView.vue"), meta: { title: "Career opportunities" } },
  { path: "/faqs", name: "faqs", component: () => import("@/views/FaqsView.vue"), meta: { title: "FAQs" } },
  { path: "/contact", name: "contact", component: () => import("@/views/ContactView.vue"), meta: { title: "Contact" } },
  { path: "/brochure", name: "brochure", component: () => import("@/views/BrochureView.vue"), meta: { title: "Download brochure" } },
  { path: "/privacy", name: "privacy", component: () => import("@/views/PrivacyView.vue"), meta: { title: "Privacy policy" } },
  { path: "/terms", name: "terms", component: () => import("@/views/TermsView.vue"), meta: { title: "Terms and refund" } },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const maintenanceRoutes = [
  {
    path: "/maintenance",
    name: "maintenance",
    component: () => import("@/views/MaintenanceView.vue"),
    meta: { title: "Maintenance" },
  },
  { path: "/:pathMatch(.*)*", redirect: "/maintenance" },
];

const routes = maintenanceOn ? maintenanceRoutes : appRoutes;

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 104, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

/**
 * Per-route SEO. Titles target 50–60 characters with the service + location
 * near the front; descriptions stay under ~155 characters and are written for
 * people. Course pages pull their title/description from the course record.
 */
const seo = {
  home: {
    title: "Montessori Teacher Training in Poonamallee | Titus Global",
    description:
      "On-campus Montessori teacher training in Poonamallee, Chennai. 13 certificate, diploma and advance diploma courses, each with a syllabus to read first.",
  },
  about: {
    title: "About Us — On-Campus Montessori Training | Titus Global",
    description:
      "One campus, 13 programmes. Meet the principal and faculty, see our training standards, and learn how Titus prepares educators in Poonamallee, Chennai.",
  },
  courses: {
    title: "13 Montessori & Early-Years Courses | Titus Global",
    description:
      "Compare certificates, diplomas and advance diplomas in Montessori, nursery, primary, ECCE, phonics and craft training — on campus in Poonamallee, Chennai.",
  },
  "course-detail": {
    title: "Programme Details | Titus Global",
    description: "",
  },
  curriculum: {
    title: "Montessori Curriculum: Modules & Training Parts | Titus",
    description:
      "Nine core modules in four training parts, shared across every Titus programme. See how theory, materials practice and classroom hours fit together.",
  },
  admissions: {
    title: "Admissions: Eligibility, Fees & Documents | Titus Global",
    description:
      "Eligibility, application steps, required documents, payment milestones and refund terms for on-campus Montessori training at Titus, Poonamallee.",
  },
  apply: {
    title: "Apply for Montessori Teacher Training | Titus Global",
    description:
      "Apply online in five steps for a certificate, diploma or advance diploma at Titus, Poonamallee. Our admissions team reviews your form and replies.",
  },
  "student-experience": {
    title: "Student Experience | On-Campus Training | Titus Global",
    description:
      "Scheduled sessions, materials practice, observation work and mentorship — what a training week at our Poonamallee campus actually looks like.",
  },
  careers: {
    title: "Career Paths After Montessori Training | Titus Global",
    description:
      "The roles Montessori and early-years graduates pursue after training at Titus in Poonamallee, Chennai — with honest guidance on outcomes, not job guarantees.",
  },
  faqs: {
    title: "FAQs — Montessori Training in Poonamallee | Titus Global",
    description:
      "Answers on eligibility, fees, duration, documents, refunds and course choice for on-campus Montessori teacher training at Titus, Poonamallee, Chennai.",
  },
  contact: {
    title: "Contact Admissions | Poonamallee, Chennai | Titus Global",
    description:
      "Call, WhatsApp or message the admissions team about Montessori teacher training at our Poonamallee, Chennai campus — Monday to Friday, 9am to 5pm.",
  },
  brochure: {
    title: "Download Our Programme Brochure | Titus Global",
    description:
      "Get an overview of all 13 on-campus Montessori and early-years programmes at Titus — durations, eligibility and training format in one brochure.",
  },
  privacy: {
    title: "Privacy Policy | Titus Global",
    description:
      "How The Titus Global Montessori Teacher Training Academy collects, uses and protects the personal information you share when you apply or enquire.",
  },
  terms: {
    title: "Terms & Refund Policy | Titus Global",
    description:
      "Enrolment terms, payment schedules, cancellation windows and refund conditions for on-campus Montessori training programmes at Titus, Poonamallee, Chennai.",
  },
  maintenance: {
    title: "Site Maintenance | Titus Global",
    description: "The Titus Global website is temporarily unavailable while we make updates.",
  },
};

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

router.afterEach((to) => {
  const slugParam = Array.isArray(to.params.slug) ? to.params.slug[0] : to.params.slug;
  const course = to.name === "course-detail" ? getCourseBySlug(slugParam) : undefined;
  const entry = seo[to.name] || seo.home;

  const title = course ? `${course.name} | Titus Global` : entry.title;
  const description = course ? course.shortDescription : entry.description;

  document.title = title;
  setMeta('meta[name="description"]', "content", description);
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="og:url"]', "content", `${window.location.origin}${to.path}`);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `${window.location.origin}${to.path}`;
});

export default router;
