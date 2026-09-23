import { createRouter, createWebHistory } from "vue-router";
import { siteConfig } from "@/data/site";

const routes = [
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

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

const descriptions = {
  home: "Montessori teacher training for thoughtful educators. Apply for courses, download the brochure, and contact admissions.",
  about: "Learn about our Montessori teacher-training institute, mission, and values.",
  courses: "Browse Montessori teacher-training programmes for aspiring and experienced educators.",
  apply: "Apply online for a Montessori teacher-training programme.",
  contact: "Contact our admissions team by email, phone, or WhatsApp.",
};

router.afterEach((to) => {
  const pageTitle = to.meta.title || "Page";
  document.title = `${pageTitle} — ${siteConfig.instituteName}`;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", descriptions[to.name] || descriptions.home);
  }
});

export default router;
