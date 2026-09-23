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
        <div class="hero__grid-pattern" />
      </div>

      <div class="hero__orb hero__orb--1" aria-hidden="true" />
      <div class="hero__orb hero__orb--2" aria-hidden="true" />
      <div class="hero__orb hero__orb--3" aria-hidden="true" />

      <div class="container hero__content">
        <div class="hero__main">
          <div class="hero__copy">
            <div class="hero__eyebrow animate-hero-1">
              <span class="hero__live" aria-hidden="true" />
              <span>{{ siteConfig.hero.badge }}</span>
              <span class="hero__eyebrow-sep" aria-hidden="true">·</span>
              <span class="hero__eyebrow-muted"
                >Next batch {{ siteConfig.announcement.batchDate }}</span
              >
            </div>

            <h1 class="hero__headline animate-hero-2">
              <span class="hero__headline-row">{{
                siteConfig.hero.title
              }}</span>
              <span class="hero__headline-row hero__headline-row--accent">{{
                siteConfig.hero.titleHighlight
              }}</span>
              <span class="hero__headline-row">{{
                siteConfig.hero.titleSuffix
              }}</span>
            </h1>

            <p class="hero__sub animate-hero-3">
              {{ siteConfig.hero.subtitle }}
            </p>

            <div class="hero__actions animate-hero-4">
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
              <RouterLink to="/brochure" class="hero__link">
                <span class="hero__link-icon" aria-hidden="true">↓</span>
                Download brochure
              </RouterLink>
            </div>
          </div>

          <div class="hero__visual animate-hero-3">
            <div class="hero__card hero__card--main">
              <div class="hero__trust" :title="siteConfig.hero.rating.note">
                <span class="hero__stars" aria-hidden="true">★★★★★</span>
                <span class="hero__rating-score">{{
                  siteConfig.hero.rating.score
                }}</span>
                <span class="hero__rating-label">{{
                  siteConfig.hero.rating.label
                }}</span>
              </div>
              <ul class="hero__highlights">
                <li v-for="item in heroTags" :key="item">
                  <span class="hero__highlight-check" aria-hidden="true"
                    >✓</span
                  >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="hero__stat-strip animate-hero-4">
          <div
            v-for="item in siteConfig.trustIndicators.slice(0, 3)"
            :key="item.label"
            class="hero__stat">
            <span class="hero__stat-value"
              ><AnimatedCounter :value="item.value"
            /></span>
            <span class="hero__stat-label">{{ item.label }}</span>
          </div>
        </div>

        <div class="hero__scroll animate-hero-4" aria-hidden="true">
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
              <CourseTeaserCard :course="course" :featured="index === 1" />
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

    <ParallaxStrip
      :src="images.strips.workshop"
      size="xl"
      overlay="fade"
      :speed="0.48" />

    <!-- Why choose bento -->
    <section class="section section--sage">
      <div class="container">
        <SectionHeader
          eyebrow="Institute"
          title="Why choose Titus"
          description="Structured syllabi, face-to-face practice, and pathways from short certificates through advance diplomas — all on one campus." />
        <div class="bento bento--features">
          <RevealOnScroll
            v-for="(f, i) in whyChoose"
            :key="f.title"
            variant="scale"
            :delay="i * 70"
            class="feature-cell card card-lift">
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

    <ParallaxStrip
      :src="images.strips.materials"
      size="lg"
      overlay="fade"
      :speed="0.5" />

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

    <ParallaxStrip
      :src="images.strips.campus"
      size="md"
      overlay="fade"
      :speed="0.45" />

    <!-- Student experience gallery -->
    <section class="section section--white">
      <div class="container">
        <SectionHeader
          title="Student experience"
          description="Training grounded in real practice — not theory alone."
          center />
        <div class="gallery-grid">
          <RevealOnScroll
            v-for="item in studentGallery"
            :key="item.id"
            variant="up">
            <figure class="gallery-item">
              <img :src="item.src" :alt="item.alt" loading="lazy" />
              <figcaption>{{ item.title }}</figcaption>
            </figure>
          </RevealOnScroll>
        </div>
        <RevealOnScroll variant="fade" class="gallery-more">
          <RouterLink
            to="/student-experience"
            class="btn btn--outline link-arrow">
            Learn more <span aria-hidden="true">→</span>
          </RouterLink>
        </RevealOnScroll>
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
import CourseTeaserCard from '@/components/sections/CourseTeaserCard.vue';
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
import { computed } from 'vue';

const { imageStyle: heroImageStyle } = useHeroParallax(0.22);

const heroTags = computed(() => siteConfig.hero.highlights.slice(0, 4));

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
  color: var(--color-ink);
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
        rgba(253, 251, 255, 0.97) 0%,
        rgba(253, 251, 255, 0.94) 45%,
        rgba(253, 251, 255, 0.9) 100%
      );
  }

  .hero__content {
    padding: calc(4.5rem + env(safe-area-inset-top, 0px)) 0 2rem;
  }

  .hero__main {
    gap: 1.5rem;
    align-items: stretch;
  }

  .hero__eyebrow {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
    max-width: 100%;
    font-size: 0.6875rem;
  }

  .hero__eyebrow-sep {
    display: none;
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

  .hero__card--main {
    padding: 1.25rem 1.35rem;
    max-width: none;
  }

  .hero__highlights li {
    font-size: 0.8125rem;
    padding: 0.5rem 0;
  }

  .hero__orb--1,
  .hero__orb--3 {
    opacity: 0.65;
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
      rgba(253, 251, 255, 0.97) 0%,
      rgba(253, 251, 255, 0.92) 38%,
      rgba(253, 251, 255, 0.6) 68%,
      rgba(253, 251, 255, 0.35) 100%
    ),
    linear-gradient(
      180deg,
      rgba(253, 251, 255, 0.3) 0%,
      transparent 35%,
      rgba(253, 251, 255, 0.5) 100%
    );
}

.hero__grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(90, 24, 154, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(90, 24, 154, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, transparent 60%);
  -webkit-mask-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.6) 0%,
    transparent 60%
  );
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  pointer-events: none;
}

.hero__orb--1 {
  width: min(420px, 70vw);
  height: min(420px, 70vw);
  top: -8%;
  left: -5%;
  background: radial-gradient(
    circle,
    rgba(255, 109, 0, 0.12) 0%,
    transparent 70%
  );
}

.hero__orb--2 {
  width: min(350px, 55vw);
  height: min(350px, 55vw);
  bottom: 10%;
  right: 15%;
  background: radial-gradient(
    circle,
    rgba(123, 44, 191, 0.1) 0%,
    transparent 70%
  );
}

.hero__orb--3 {
  width: min(280px, 45vw);
  height: min(280px, 45vw);
  top: 30%;
  right: -3%;
  background: radial-gradient(
    circle,
    rgba(255, 158, 0, 0.08) 0%,
    transparent 70%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: clamp(4.5rem, 12vh, 7rem) 0 clamp(2.5rem, 5vw, 3rem);
}

@media (min-width: 768px) {
  .hero__content {
    padding-top: clamp(5rem, 14vh, 7rem);
  }
}

.hero__main {
  display: grid;
  gap: 2.5rem;
  align-items: end;
}

@media (min-width: 1024px) {
  .hero__main {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.hero__copy {
  max-width: 40rem;
}

.hero__eyebrow {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-ink-soft);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
  background: rgba(90, 24, 154, 0.06);
  border: 1px solid rgba(90, 24, 154, 0.1);
}

.hero__live {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--palette-orange-500);
  outline: 2px solid rgba(255, 109, 0, 0.35);
  outline-offset: 2px;
  animation: hero-pulse 2.4s ease-in-out infinite;
}

@keyframes hero-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.75;
    transform: scale(0.92);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__live {
    animation: none;
  }
}

.hero__eyebrow-sep {
  opacity: 0.35;
}

.hero__eyebrow-muted {
  color: var(--color-muted);
}

.hero__headline {
  margin: 1.5rem 0 0;
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--color-ink);
}

.hero__headline-row {
  display: block;
}

.hero__headline-row--accent {
  background: linear-gradient(
    100deg,
    var(--palette-orange-500) 0%,
    var(--palette-orange-600) 50%,
    var(--palette-purple-700) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__sub {
  margin-top: 1.5rem;
  max-width: 32rem;
  font-size: 1.0625rem;
  font-weight: 500;
  line-height: 1.65;
  color: var(--color-muted);
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

.hero__link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-ink-soft);
  text-decoration: none;
  transition: color 0.2s ease;
}

.hero__link-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  background: rgba(90, 24, 154, 0.08);
  font-size: 0.625rem;
  transition: background 0.2s ease;
}

.hero__link:hover {
  color: var(--palette-purple-700);
  text-decoration: none;
}

.hero__link:hover .hero__link-icon {
  background: rgba(90, 24, 154, 0.15);
}

.hero__cta-primary {
  box-shadow: none;
}

.hero__visual {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .hero__visual {
    justify-content: flex-end;
    padding-bottom: 1rem;
  }
}

.hero__card--main {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(90, 24, 154, 0.1);
  border-radius: var(--radius-lg);
  padding: 1.75rem 2rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: none;
  width: 100%;
  max-width: 22rem;
}

.hero__trust {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-full);
  background: rgba(90, 24, 154, 0.05);
  border: 1px solid rgba(90, 24, 154, 0.08);
}

.hero__rating-score {
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--color-ink);
}

.hero__rating-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-muted);
}

.hero__stars {
  color: var(--palette-orange-400);
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
}

.hero__highlights {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
}

.hero__highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 0.625rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-ink-soft);
  line-height: 1.45;
  border-bottom: 1px solid rgba(90, 24, 154, 0.06);
}

.hero__highlights li:last-child {
  border-bottom: none;
}

.hero__highlight-check {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--palette-orange-500),
    var(--palette-orange-600)
  );
  color: #fff;
  font-size: 0.5625rem;
  font-weight: 800;
  margin-top: 0.1rem;
}

.hero__stat-strip {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  margin-top: clamp(2rem, 4vw, 3rem);
  background: rgba(90, 24, 154, 0.08);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

@media (min-width: 520px) {
  .hero__stat-strip {
    grid-template-columns: repeat(3, 1fr);
  }
}

.hero__stat {
  padding: 1rem 1.15rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

@media (min-width: 768px) {
  .hero__stat {
    padding: 1.25rem 1.5rem;
  }
}

@media (min-width: 520px) {
  .hero__stat:first-child {
    border-radius: var(--radius-lg) 0 0 var(--radius-lg);
  }

  .hero__stat:last-child {
    border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  }
}

.hero__stat-value {
  display: block;
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 800;
  color: var(--palette-orange-500);
  line-height: 1;
}

.hero__stat-label {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.6875rem;
  font-weight: 600;
  line-height: 1.35;
  color: var(--color-muted);
}

.hero__scroll {
  display: none;
  position: absolute;
  right: 1.25rem;
  bottom: 2.5rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 1024px) {
  .hero__scroll {
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
</style>
