<!-- @format -->

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__bg" aria-hidden="true">
        <img
          :src="siteConfig.hero.image"
          :alt="siteConfig.hero.imageAlt"
          class="hero__image"
          :style="heroImageStyle"
          loading="eager" />
        <div class="hero__overlay" />
        <div class="hero__accent-bar" aria-hidden="true" />
      </div>

      <div class="container hero__content">
        <div class="hero__main">
          <div class="hero__copy">
            <div class="hero__eyebrow" data-reveal>
              <span class="hero__badge">{{ siteConfig.hero.badge }}</span>
              <span class="hero__eyebrow-sep" aria-hidden="true">/</span>
              <span class="hero__eyebrow-muted">Next batch {{ siteConfig.announcement.batchDate }}</span>
            </div>

            <h1 class="hero__headline" data-reveal>
              <span class="hero__headline-row">{{ siteConfig.hero.title }}</span>
              <span class="hero__headline-row hero__headline-row--highlight">{{ siteConfig.hero.titleHighlight }}</span>
            </h1>

            <p class="hero__sub" data-reveal>{{ siteConfig.hero.subtitle }}</p>

            <div class="hero__actions" data-reveal>
              <RouterLink
                :to="siteConfig.hero.primaryCta.to"
                class="btn btn--primary btn--lg hero__cta-primary">
                {{ siteConfig.hero.primaryCta.label }}
                <span class="btn-arrow" aria-hidden="true">→</span>
              </RouterLink>
              <RouterLink
                :to="siteConfig.hero.secondaryCta.to"
                class="btn btn--outline btn--lg">
                {{ siteConfig.hero.secondaryCta.label }}
              </RouterLink>
            </div>

            <div class="hero__trust-strip" data-reveal>
              <div class="hero__trust-item">
                <div class="hero__trust-badge">
                  <span class="hero__stars" aria-hidden="true">★★★★★</span>
                  <span class="hero__rating-score">4.8</span>
                </div>
                <span class="hero__trust-label">Rated by 200+ trainees</span>
              </div>
              <div class="hero__trust-divider" aria-hidden="true"></div>
              <div class="hero__trust-item">
                <span class="hero__trust-value">3</span>
                <span class="hero__trust-label">Qualification levels</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero__scroll-indicator" aria-hidden="true">
          <span class="hero__scroll-line" />
          <span class="hero__scroll-text">Scroll</span>
        </div>
      </div>
    </section>

    <ContactChannels />

    <!-- About institute -->
    <section class="section section--white">
      <div class="container about">
        <div class="about__copy">
          <SectionHeader
            :eyebrow="siteConfig.aboutBlurb.eyebrow"
            :title="siteConfig.aboutBlurb.title"
            :description="siteConfig.aboutBlurb.text" />
          <!-- <div class="about__creds">
            <div
              v-for="c in siteConfig.credentials"
              :key="c.title"
              class="about__cred card">
              <h3>{{ c.title }}</h3>
              <p>{{ c.description }}</p>
            </div>
          </div> -->
          <RouterLink
            to="/about"
            class="btn btn--outline link-arrow"
            style="margin-top: 1.5rem">
            About our institute <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
        <RevealOnScroll variant="right" class="about__media">
          <ParallaxImage
            :src="images.about.src"
            :alt="images.about.alt"
            :speed="0.35"
            class="about__image" />
        </RevealOnScroll>
      </div>
    </section>

    <ImpactStats />

    <!-- Programme pathways -->
    <section id="courses-offered" class="section section--cream">
      <div class="container">
        <SectionHeader
          eyebrow="13 on-campus programmes"
          title="Choose your pathway"
          description="Certificates for focused skills, diplomas for one-year classroom qualifications, and advance diplomas for deeper Montessori and primary practice — every programme includes a syllabus you can download."
          center />
        <div class="pathway-grid">
          <RevealOnScroll
            v-for="(pathway, i) in programmePathways"
            :key="pathway.id"
            variant="up"
            :delay="i * 80">
            <ProgrammePathwayCard
              :pathway="pathway"
              :count="pathwayCounts[pathway.id]"
              :step="i + 1"
            />
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="fade" class="featured-programmes">
          <p class="featured-programmes__eyebrow">Popular starting points</p>
          <div class="featured-programmes__grid">
            <RevealOnScroll
              v-for="(course, index) in featuredProgrammes"
              :key="course.slug"
              variant="up"
              :delay="index * 90"
              class="featured-programmes__item"
              :class="{ 'featured-programmes__item--center': index === 1 }"
            >
              <CourseCard :course="course" :featured="index === 1" />
            </RevealOnScroll>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fade" class="courses-more">
          <RouterLink to="/courses" class="btn btn--primary link-arrow">
            View all 13 programmes <span aria-hidden="true">→</span>
          </RouterLink>
          <a
            href="/downloads/course-catalogue.md"
            download
            class="btn btn--outline link-arrow">
            Download course list <span aria-hidden="true">→</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>

    <CourseFinder />

    <!-- Why choose bento with parallax background -->
    <section class="section why-choose-section">
      <div class="why-choose__bg" aria-hidden="true">
        <ParallaxImage
          :src="images.about.src"
          :alt="images.about.alt"
          :speed="0.45"
          class="why-choose__image" />
        <div class="why-choose__overlay" />
      </div>
      <div class="container why-choose__content">
        <SectionHeader
          light
          eyebrow="Institute"
          title="Why choose Titus"
          description="Structured syllabi, face-to-face practice, and pathways from short certificates through advance diplomas — all on one campus." />
        <div class="bento bento--features">
          <RevealOnScroll
            v-for="(f, i) in whyChoose"
            :key="f.title"
            variant="scale"
            :delay="i * 70"
            class="feature-cell card card-lift why-choose-card">
            <span class="feature-cell__num" aria-hidden="true">{{
              String(i + 1).padStart(2, '0')
            }}</span>
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <!-- Philosophy bento -->
    <section class="section section--white section--bordered">
      <div class="container">
        <div class="bento bento--approach">
          <RevealOnScroll variant="left" class="approach__image-wrap">
            <ParallaxImage
              :src="images.classroom.src"
              :alt="images.classroom.alt"
              :speed="0.45"
              class="approach__image" />
          </RevealOnScroll>
          <RevealOnScroll variant="right" :delay="100" class="approach__copy">
            <p class="eyebrow">Philosophy</p>
            <h2 class="section-title">The Montessori learning approach</h2>
            <p class="section-intro">
              Training grounded in observation, respect, and purposeful practice
              — not shortcuts.
            </p>
            <ul class="approach__list">
              <li v-for="item in approachItems" :key="item">
                <span class="approach__check" aria-hidden="true">✦</span>
                {{ item }}
              </li>
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <HowYouLearn />

    <!-- Principal -->
    <section class="section section--sand">
      <div class="container">
        <SectionHeader
          eyebrow="Leadership"
          title="About our principal"
          description="Academic direction, mentoring, and on-campus standards for every programme at Titus." />
        <PrincipalSpotlight compact />
      </div>
    </section>

    <InstagramPreview />

    <TestimonialsSection />

    <EnrolmentPathSection />

    <HomeProgrammeCta />
  </div>
</template>

<script setup>
import { siteConfig } from '@/data/site';
import { programmePathways, featuredProgrammeSlugs } from '@/data/programmes';
import { courses, getCourseBySlug } from '@/data/courses';
import CourseCard from '@/components/sections/CourseCard.vue';
import ProgrammePathwayCard from '@/components/sections/ProgrammePathwayCard.vue';
import ContactChannels from '@/components/sections/ContactChannels.vue';
import ImpactStats from '@/components/sections/ImpactStats.vue';
import InstagramPreview from '@/components/sections/InstagramPreview.vue';
import PrincipalSpotlight from '@/components/sections/PrincipalSpotlight.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import HowYouLearn from '@/components/sections/HowYouLearn.vue';
import EnrolmentPathSection from '@/components/sections/EnrolmentPathSection.vue';
import HomeProgrammeCta from '@/components/sections/HomeProgrammeCta.vue';
import SectionHeader from '@/components/sections/SectionHeader.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue';
import ParallaxImage from '@/components/ui/ParallaxImage.vue';
import ParallaxStrip from '@/components/sections/ParallaxStrip.vue';
import CourseFinder from '@/components/sections/CourseFinder.vue';
import { images } from '@/data/images';
import { studentGallery } from '@/data/gallery';
import { useHeroParallax } from '@/composables/useParallax';
import { computed, onMounted, ref } from 'vue';

const { imageStyle: heroImageStyle } = useHeroParallax(0.22);

const revealElements = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
    observer.observe(el);
  });
});

const pathwayCounts = computed(() =>
  programmePathways.reduce((acc, p) => {
    acc[p.id] = courses.filter((c) => c.category === p.id).length;
    return acc;
  }, {}),
);

const featuredProgrammes = computed(() =>
  featuredProgrammeSlugs.map((slug) => getCourseBySlug(slug)).filter(Boolean),
);

const whyChoose = [
  {
    title: '13 syllabus-led programmes',
    text: 'Montessori, nursery, primary, ECCE, phonics, daycare, craft, and more — each with a published syllabus you can download before enrolling.',
  },
  {
    title: 'Three qualification levels',
    text: 'Progress from certificates (as short as three months) through one-year diplomas to advance diplomas for experienced educators.',
  },
  {
    title: 'On-campus only',
    text: 'Scheduled face-to-face sessions, materials practice, and supervised classroom hours at Titus — no online or hybrid delivery.',
  },
  {
    title: 'Clear eligibility',
    text: 'Entry requirements from 10th pass on certificates through 12th pass or graduate on advance diplomas, stated on every programme page.',
  },
];

const approachItems = [
  'Child-centred philosophy with emphasis on independence and concentration',
  'Hands-on practice with authentic Montessori materials',
  'Supervised observation and classroom experience',
  'Leadership and mentoring from our principal and faculty',
];
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  min-height: min(88vh, 820px);
  display: flex;
  align-items: flex-end;
  color: var(--color-white);
  background: var(--color-bg);
}

@media (max-width: 767px) {
  .hero {
    min-height: auto;
    align-items: stretch;
  }

  .hero__overlay {
    background:
      linear-gradient(
        180deg,
        rgba(36, 0, 70, 0.9) 0%,
        rgba(36, 0, 70, 0.8) 45%,
        rgba(36, 0, 70, 0.6) 100%
      );
  }

  .hero__content {
    padding-top: calc(5.25rem + env(safe-area-inset-top, 0px));
    padding-bottom: clamp(2.5rem, 7vw, 3.25rem);
    padding-left: max(1.25rem, env(safe-area-inset-left, 0px));
    padding-right: max(1.25rem, env(safe-area-inset-right, 0px));
  }

  .hero__main {
    gap: 2rem;
    align-items: stretch;
  }

  .hero__eyebrow {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.5rem;
    max-width: 100%;
    font-size: clamp(0.625rem, 2.75vw, 0.75rem);
    padding: 0.4rem 0.7rem;
  }

  .hero__eyebrow-muted {
    white-space: nowrap;
  }

  .hero__headline {
    margin-top: 1rem;
    font-size: clamp(1.875rem, 8.2vw, 2.65rem);
    line-height: 1.06;
  }

  .hero__sub {
    margin-top: 0.875rem;
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  .hero__trust-strip {
    gap: 1rem;
    padding: 1rem 0;
  }

  .hero__trust-divider {
    display: none;
  }

  .hero__trust-item {
    text-align: center;
  }

  .hero__trust-value {
    font-size: 1.75rem;
  }
}

@media (min-width: 768px) {
  .hero {
    min-height: min(92vh, 820px);
    align-items: flex-end;
  }
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  will-change: transform;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      115deg,
      rgba(36, 0, 70, 0.85) 0%,
      rgba(36, 0, 70, 0.7) 38%,
      rgba(36, 0, 70, 0.45) 68%,
      rgba(36, 0, 70, 0.25) 100%
    ),
    linear-gradient(
      180deg,
      rgba(36, 0, 70, 0.4) 0%,
      transparent 35%,
      rgba(36, 0, 70, 0.55) 100%
    );
}

.hero__accent-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--palette-purple-700), var(--palette-orange-500));
  opacity: 0.15;
}

.hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: clamp(4.5rem, 12vh, 7rem);
  padding-bottom: clamp(2.5rem, 5vw, 3rem);
  /* Horizontal padding from .container; do not zero with shorthand padding */
}

@media (min-width: 768px) {
  .hero__content {
    padding-top: clamp(5rem, 14vh, 7rem);
  }
}

.hero__main {
  display: block;
}

.hero__copy {
  max-width: 40rem;
}

.hero__eyebrow {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.85);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.hero__badge {
  background: var(--palette-orange-500);
  color: var(--color-white);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.6875rem;
  font-weight: 700;
}

.hero__eyebrow-sep {
  opacity: 0.5;
}

.hero__eyebrow-muted {
  color: rgba(255, 255, 255, 0.7);
}

.hero__headline {
  margin: 1.5rem 0 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--color-white);
}

.hero__headline-row {
  display: block;
}

.hero__headline-row--highlight {
  color: var(--palette-orange-400);
}

.hero__sub {
  margin-top: 1.5rem;
  max-width: 32rem;
  font-size: 1.0625rem;
  font-weight: 500;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
}

.hero__actions {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.65rem;
  margin-top: 1.75rem;
}

@media (min-width: 480px) {
  .hero__actions {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1rem;
    margin-top: 2rem;
  }

  .hero__actions .btn--lg {
    width: auto;
  }
}

.hero__cta-primary {
  box-shadow: none;
}

.hero__trust-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.hero__trust-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.hero__trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.hero__trust-badge .hero__stars {
  font-size: 0.75rem;
  color: var(--palette-orange-400);
}

.hero__trust-badge .hero__rating-score {
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--palette-orange-400);
}

.hero__trust-label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.hero__trust-divider {
  width: 1px;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

.hero__trust-value {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--palette-orange-400);
  line-height: 1;
}

.hero__scroll-indicator {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-white);
}

.hero__card-desc {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.hero__card-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: var(--palette-orange-500);
  color: var(--color-white);
  font-size: 0.75rem;
  margin-left: auto;
  transition: background 0.2s ease, transform 0.2s ease;
}

.hero__card-link:hover {
  background: var(--palette-orange-600);
  transform: translateX(2px);
  color: var(--color-white);
  text-decoration: none;
}

.hero__scroll-indicator {
  display: none;
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .hero__scroll-indicator {
    display: flex;
  }
}

.hero__scroll-line {
  width: 1px;
  height: 2.5rem;
  background: linear-gradient(180deg, var(--palette-purple-700), transparent);
}

.hero__scroll-text {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  writing-mode: vertical-rl;
}

/* Reveal animations */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease-out-expo), transform 0.7s var(--ease-out-expo);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.about {
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .about {
    grid-template-columns: 1fr 1fr;
  }
}

.about__creds {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}

.about__cred {
  padding: 1.25rem 1.5rem;
}

.about__cred h3 {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-ink);
}

.about__cred p {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-muted);
  line-height: 1.6;
}

.about__image {
  box-shadow: none;
}

.pathway-grid {
  display: grid;
  gap: 1.25rem;
  margin-top: 2.5rem;
  align-items: stretch;
}

.pathway-grid > * {
  display: flex;
  min-height: 100%;
}

.pathway-grid > * > * {
  flex: 1;
  width: 100%;
}

@media (min-width: 1024px) {
  .pathway-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

.featured-programmes {
  margin-top: 3rem;
}

.featured-programmes__eyebrow {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.featured-programmes__grid {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.5rem;
  align-items: stretch;
}

.featured-programmes__item {
  display: flex;
  min-height: 100%;
}

.featured-programmes__item > * {
  flex: 1;
  width: 100%;
}

@media (min-width: 1024px) {
  .featured-programmes__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    align-items: end;
  }

  .featured-programmes__item--center {
    align-self: stretch;
    margin-top: -0.75rem;
    margin-bottom: 0.75rem;
  }
}

.courses-more {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

/* Stats bento */
.bento--stats {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
  .bento--stats {
    grid-template-columns: repeat(12, 1fr);
  }
  .stat-cell--0 {
    grid-column: span 6;
  }
  .stat-cell--1 {
    grid-column: span 6;
  }
  .stat-cell--2 {
    grid-column: span 4;
  }
  .stat-cell--3 {
    grid-column: span 8;
  }
}

.stat-cell {
  padding: 2rem 1.75rem;
  text-align: left;
}

.stat-cell__value {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: var(--color-primary);
  line-height: 1;
}

.stat-cell__label {
  margin-top: 0.625rem;
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-muted);
}

/* Courses bento */
.bento--courses {
  margin-top: 3.5rem;
}

@media (min-width: 1024px) {
  .bento--courses {
    grid-template-columns: 7fr 5fr;
    align-items: stretch;
  }
}

.bento__featured {
  min-height: 100%;
}

/* Features bento */
.bento--features {
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .bento--features {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-cell {
  padding: 2rem;
  position: relative;
}

.feature-cell__num {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: rgba(90, 24, 154, 0.14);
  line-height: 1;
  margin-bottom: 1rem;
}

.feature-cell h3 {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 0.625rem;
  color: var(--color-ink);
}

.feature-cell p {
  font-size: 0.875rem;
  color: var(--color-muted);
  line-height: 1.7;
}

/* Approach bento */
.bento--approach {
  align-items: center;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .bento--approach {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .bento--approach {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.approach__image {
  box-shadow: none;
}

.approach__copy .section-title {
  margin-top: 1rem;
}

.approach__list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
}

.approach__list li {
  display: flex;
  gap: 0.875rem;
  align-items: flex-start;
  padding: 1rem 0;
  color: var(--color-muted);
  border-bottom: 1px solid var(--color-border);
  font-size: 0.9375rem;
  transition: padding-left 0.3s var(--ease-out-expo);
}

.approach__list li:hover {
  padding-left: 0.5rem;
  color: var(--color-ink);
}

.approach__check {
  flex-shrink: 0;
  color: var(--color-gold);
  font-size: 0.75rem;
  margin-top: 0.2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2.5rem;
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
}

.gallery-item {
  margin: 0;
  overflow: hidden;
  border-radius: var(--card-radius);
}

.gallery-item img {
  aspect-ratio: 4 / 3;
  width: 100%;
  object-fit: cover;
}

.gallery-item figcaption {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--color-muted);
}

.gallery-more {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn-arrow,
.link-arrow span {
  display: inline-block;
  transition: transform 0.25s var(--ease-out-expo);
}

.btn:hover .btn-arrow,
.link-arrow:hover span {
  transform: translateX(4px);
}

/* Courses offered section title overrides */
#courses-offered .section-header__eyebrow {
  font-size: 0.6875rem;
  font-weight: 600;
}

#courses-offered .section-title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 600;
  letter-spacing: -0.03em;
}

.why-choose-bg {
  position: relative;
  background:
    linear-gradient(
      180deg,
      rgba(36, 0, 70, 0.85) 0%,
      rgba(36, 0, 70, 0.75) 100%
    ),
    url('/images/abouttitus.jpeg') center/cover no-repeat;
  color: var(--color-white);
}

/* Why choose section */
.why-choose-section {
  position: relative;
  overflow: hidden;
  padding: clamp(3.5rem, 8vw, 6rem) 0;
  color: var(--color-white);
}

.why-choose__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.why-choose__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  will-change: transform;
}

.why-choose__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
}

.why-choose__content {
  position: relative;
  z-index: 1;
}

.why-choose-section .section-header__eyebrow,
.why-choose-section .section-title,
.why-choose-section .section-header__desc {
  color: inherit;
}

.why-choose-section .feature-cell.why-choose-card {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-lg);
}

.why-choose-section .feature-cell.why-choose-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.why-choose-section .feature-cell.why-choose-card h3 {
  color: var(--color-white);
}

.why-choose-section .feature-cell.why-choose-card p {
  color: rgba(255, 255, 255, 0.85);
}

.why-choose-section .feature-cell.why-choose-card .feature-cell__num {
  color: rgba(255, 255, 255, 0.1);
}
</style>
