<template>
  <footer class="footer">
    <div class="footer__accent" aria-hidden="true" />
    <div class="footer__abstract" aria-hidden="true">
      <div class="footer__grid-pattern" />
      <div class="footer__orb footer__orb--1" />
      <div class="footer__orb footer__orb--2" />
      <div class="footer__ring footer__ring--1" />
      <div class="footer__ring footer__ring--2" />
    </div>
    <div class="container footer__grid">
      <div class="footer__brand">
        <RouterLink to="/" class="footer__logo">
          <img
            :src="siteConfig.logo.src"
            :alt="siteConfig.logo.alt"
            class="footer__logo-img"
            width="200"
            height="80"
            loading="lazy"
            decoding="async"
          />
        </RouterLink>
        <p class="footer__name">{{ siteConfig.instituteFullName }}</p>
        <p class="footer__tagline">{{ siteConfig.tagline }}</p>
        <div class="footer__contact">
          <p><a :href="`mailto:${siteConfig.contact.email}`">{{ siteConfig.contact.email }}</a></p>
          <p><a :href="`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`">{{ siteConfig.contact.phone }}</a></p>
          <p><a :href="siteConfig.contact.whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
          <p>{{ siteConfig.contact.address }}</p>
        </div>
      </div>

      <div v-for="group in linkGroups" :key="group.title">
        <h2 class="footer__heading">{{ group.title }}</h2>
        <ul class="footer__links">
          <li v-for="link in group.links" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="container footer__newsletter">
      <h2 class="footer__heading">Stay updated</h2>
      <p class="footer__newsletter-text">
        Batch dates, admissions updates, and institute news delivered to your inbox.
      </p>
      <form class="footer__form" @submit.prevent="onNewsletterSubmit">
        <label class="sr-only" for="footer-email">Email</label>
        <input
          id="footer-email"
          v-model="newsletterEmail"
          type="email"
          required
          class="form-input"
          placeholder="your@email.com"
        />
        <button type="submit" class="btn btn--primary">Subscribe</button>
      </form>
      <p v-if="newsletterNote" class="footer__newsletter-note">{{ newsletterNote }}</p>
    </div>

    <div class="container footer__bottom">
      <p>© {{ year }} {{ siteConfig.instituteName }}. All rights reserved.</p>
      <div class="footer__social">
        <a v-for="s in siteConfig.social" :key="s.label" :href="s.url">{{ s.label }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { siteConfig } from "@/data/site";

const year = new Date().getFullYear();
const newsletterEmail = ref("");
const newsletterNote = ref("");

function onNewsletterSubmit() {
  newsletterNote.value = "Thank you. We will share updates at the email you provided.";
  newsletterEmail.value = "";
}

const linkGroups = [
  {
    title: "Programmes",
    links: [
      { to: "/courses", label: "Courses" },
      { to: "/curriculum", label: "Curriculum" },
      { to: "/admissions", label: "Admissions" },
      { to: "/apply", label: "Apply" },
    ],
  },
  {
    title: "Institute",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About us" },
      { to: "/student-experience", label: "Student experience" },
      { to: "/careers", label: "Career opportunities" },
    ],
  },
  {
    title: "Support",
    links: [
      { to: "/faqs", label: "FAQs" },
      { to: "/contact", label: "Contact" },
      { to: "/brochure", label: "Download brochure" },
      { to: "/privacy", label: "Privacy policy" },
      { to: "/terms", label: "Terms and refund" },
    ],
  },
];
</script>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, var(--color-ink) 0%, var(--color-navy-dark) 100%);
  color: rgba(255, 255, 255, 0.92);
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255, 157, 0, 0.2);
}

.footer__abstract {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.footer__grid-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 0%, black 10%, transparent 70%);
}

.footer__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(72px);
}

.footer__orb--1 {
  width: min(380px, 50vw);
  height: min(380px, 50vw);
  top: -12%;
  right: -6%;
  background: rgba(255, 109, 0, 0.14);
}

.footer__orb--2 {
  width: min(280px, 40vw);
  height: min(280px, 40vw);
  bottom: 8%;
  left: -4%;
  background: rgba(123, 44, 191, 0.22);
}

.footer__ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.footer__ring--1 {
  width: min(420px, 55vw);
  height: min(420px, 55vw);
  top: 18%;
  left: 55%;
  transform: translateX(-50%);
}

.footer__ring--2 {
  width: min(260px, 35vw);
  height: min(260px, 35vw);
  bottom: -8%;
  right: 12%;
  border-color: rgba(255, 157, 0, 0.12);
}

.footer__grid,
.footer__newsletter,
.footer__bottom {
  position: relative;
  z-index: 1;
}

.footer__accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--palette-orange-500) 15%, var(--palette-purple-600) 50%, var(--palette-orange-400) 85%, transparent);
}

.footer__grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 640px) {
  .footer__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .footer__grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2.5rem; }
}

.footer__logo {
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: none;
}

.footer__logo:hover {
  text-decoration: none;
  opacity: 0.92;
}

.footer__logo-img {
  display: block;
  width: auto;
  height: 4.5rem;
  max-width: 200px;
  object-fit: contain;
  object-position: left center;
}

.footer__name {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.9);
  max-width: 20rem;
}

.footer__tagline {
  margin-top: 0.5rem;
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.68);
  max-width: 22rem;
  line-height: 1.6;
}

.footer__contact {
  margin-top: 2rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.8;
}

.footer__contact p { margin-bottom: 0.375rem; }

.footer__contact a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.footer__contact a:hover {
  color: var(--palette-orange-400);
  border-bottom-color: var(--palette-orange-400);
}

.footer__heading {
  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 1.25rem;
}

.footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__links li { margin-bottom: 0.625rem; }

.footer__links a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.62);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__links a:hover {
  color: var(--color-white);
}

.footer__newsletter {
  margin-top: 3rem;
  padding: 2rem;
  border-radius: var(--card-radius);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.footer__newsletter-text {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 36rem;
}

.footer__form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
  max-width: 28rem;
}

@media (min-width: 640px) {
  .footer__form {
    flex-direction: row;
    align-items: stretch;
  }
  .footer__form .form-input { flex: 1; }
}

.footer__newsletter-note {
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  color: #86efac;
}

.footer__bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.55);
}

@media (min-width: 640px) {
  .footer__bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer__social { display: flex; gap: 1.5rem; }

.footer__social a {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
}

.footer__social a:hover { color: var(--palette-orange-400); }
</style>
