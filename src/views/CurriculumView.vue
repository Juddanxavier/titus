<template>
  <div class="curriculum-page">
    <PageHeader
      title="Curriculum"
      description="Nine interconnected themes across our Montessori and early-years programmes — from philosophy to supervised classroom practice."
      :background-image="images.pageHeaders.curriculum"
    />

    <section class="curriculum-page__intro section section--cream">
      <div class="container">
        <div class="curriculum-hero card">
          <div class="curriculum-hero__copy">
            <p class="curriculum-hero__eyebrow">Shared training spine</p>
            <h2 class="curriculum-hero__title">One curriculum map, thirteen qualifications</h2>
            <p class="curriculum-hero__text">
              Every programme at Titus builds on these modules. Depth and emphasis differ by certificate,
              diploma, or advance diploma — your official syllabus shows exact hours and assessments.
            </p>
          </div>
          <dl class="curriculum-hero__stats">
            <div>
              <dt>Core modules</dt>
              <dd>{{ curriculumModules.length }}</dd>
            </div>
            <div>
              <dt>Training parts</dt>
              <dd>{{ curriculumParts.length }}</dd>
            </div>
            <div>
              <dt>Next intake</dt>
              <dd class="curriculum-hero__batch">{{ siteConfig.announcement.batchDate }}</dd>
            </div>
          </dl>
        </div>

        <nav class="curriculum-nav scroll-x" aria-label="Curriculum parts">
          <a
            v-for="part in curriculumParts"
            :key="part.id"
            :href="`#part-${part.id}`"
            class="curriculum-nav__pill"
          >
            <span class="curriculum-nav__part">{{ part.eyebrow }}</span>
            <span class="curriculum-nav__label">{{ part.shortLabel }}</span>
          </a>
        </nav>
      </div>
    </section>

    <section class="section section--white section--bordered curriculum-page__path">
      <div class="container curriculum-page__path-inner">
        <SectionHeader
          eyebrow="Your learning path"
          title="Modules grouped into four parts"
          description="Follow the sequence from foundations through professional practice — then compare how each programme applies these themes on its course page."
          center
        />
        <CurriculumModuleGrid :modules="curriculumModules" />
      </div>
    </section>

    <section class="curriculum-page__bridge section section--dark">
      <div class="container curriculum-bridge">
        <RevealOnScroll variant="up" class="curriculum-bridge__layout">
          <div class="curriculum-bridge__copy">
            <p class="curriculum-bridge__eyebrow">Programme-specific detail</p>
            <h2 class="curriculum-bridge__title">Syllabi define the exact path for your qualification</h2>
            <p class="curriculum-bridge__text">
              These modules describe shared themes. Each NCVTC syllabus lists module coverage, on-campus
              sessions, and assessment — download yours before you apply.
            </p>
            <ul class="curriculum-bridge__list">
              <li v-for="point in syllabusPoints" :key="point">{{ point }}</li>
            </ul>
          </div>
          <div class="curriculum-bridge__visual">
            <img
              :src="images.classroom.src"
              :alt="images.classroom.alt"
              class="curriculum-bridge__image"
              loading="lazy"
            />
            <div class="curriculum-bridge__actions">
              <RouterLink to="/courses" class="btn btn--gold btn--lg">Browse programmes</RouterLink>
              <RouterLink to="/admissions" class="btn btn--outline-dark">How enrolment works</RouterLink>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <CtaBanner
      eyebrow="Ready to start?"
      title="Find the programme that fits your goals"
      description="Compare durations, eligibility, and syllabi — then apply for the next on-campus intake."
      show-contact
      panel-label="Enrol"
      primary-label="Apply now"
      primary-to="/apply"
      secondary-label="View all programmes"
      secondary-to="/courses"
    />
  </div>
</template>

<script setup>
import { curriculumModules, curriculumParts } from "@/data/curriculum";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/layout/PageHeader.vue";
import SectionHeader from "@/components/sections/SectionHeader.vue";
import CurriculumModuleGrid from "@/components/sections/CurriculumModuleGrid.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";

const syllabusPoints = [
  "Official syllabus on every programme page",
  "On-campus delivery only",
  "Eligibility and duration listed before you apply",
];
</script>

<style scoped>
.curriculum-page__intro {
  padding-bottom: 1.5rem;
}

.curriculum-hero {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: clamp(1.35rem, 3vw, 1.75rem);
  background: linear-gradient(
    135deg,
    rgba(90, 24, 154, 0.06) 0%,
    rgba(255, 158, 0, 0.07) 55%,
    var(--color-surface) 100%
  );
  border: 1px solid var(--color-border);
}

@media (min-width: 900px) {
  .curriculum-hero {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}

.curriculum-hero__eyebrow {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.curriculum-hero__title {
  margin-top: 0.5rem;
  font-family: var(--font-sans);
  font-size: clamp(1.35rem, 2.8vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.15;
  color: var(--color-ink);
}

.curriculum-hero__text {
  margin-top: 0.65rem;
  max-width: 36rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.curriculum-hero__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.65rem;
  margin: 0;
  flex-shrink: 0;
  width: 100%;
}

.curriculum-hero__stats div:last-child {
  grid-column: 1 / -1;
}

@media (min-width: 520px) {
  .curriculum-hero__stats {
    grid-template-columns: repeat(3, minmax(5.5rem, 1fr));
  }

  .curriculum-hero__stats div:last-child {
    grid-column: auto;
  }
}

.curriculum-hero__stats div {
  text-align: center;
  padding: 0.85rem 0.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.curriculum-hero__stats dt {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.curriculum-hero__stats dd {
  margin: 0.35rem 0 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-ink);
  line-height: 1.1;
}

.curriculum-hero__batch {
  font-size: 0.8125rem !important;
  font-weight: 700 !important;
  line-height: 1.25 !important;
}

.curriculum-nav {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding-bottom: 0.25rem;
}

@media (min-width: 768px) {
  .curriculum-nav {
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
}

.curriculum-nav__pill {
  flex-shrink: 0;
  display: inline-flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.55rem 0.9rem;
  text-decoration: none;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.curriculum-nav__pill:hover {
  border-color: var(--color-primary);
  background: var(--color-muted-bg);
  transform: translateY(-1px);
  text-decoration: none;
}

.curriculum-nav__part {
  font-size: 0.625rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.curriculum-nav__label {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-ink);
}

.curriculum-page__path-inner :deep(.section-header) {
  margin-bottom: 2.5rem;
}

.curriculum-page__bridge {
  position: relative;
  overflow: hidden;
}

.curriculum-bridge__layout {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .curriculum-bridge__layout {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.curriculum-bridge__eyebrow {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--palette-orange-400);
}

.curriculum-bridge__title {
  margin-top: 0.5rem;
  font-family: var(--font-sans);
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--color-white);
}

.curriculum-bridge__text {
  margin-top: 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  max-width: 32rem;
}

.curriculum-bridge__list {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.curriculum-bridge__list li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.85);
}

.curriculum-bridge__list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  font-weight: 800;
  color: var(--palette-orange-400);
}

.curriculum-bridge__visual {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.curriculum-bridge__image {
  width: 100%;
  border-radius: var(--card-radius);
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.curriculum-bridge__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}
</style>
