<template>
  <div>
    <PageHeader
      eyebrow="The institute"
      title="About our Montessori training institute"
      description="The Titus Global prepares Montessori educators on one campus in Poonamallee, Chennai. Certificates, diplomas, and advance diplomas — each with a syllabus you can read before you apply."
      :background-image="images.pageHeaders.about"
    />

    <section class="section section--white">
      <div class="container about">
        <div class="about__copy">
          <SectionHeader
            :eyebrow="siteConfig.aboutBlurb.eyebrow"
            :title="siteConfig.aboutBlurb.title"
            :description="siteConfig.aboutBlurb.text"
          />
          <div class="about__body">
            <p>
              Training at Titus is face to face. You attend scheduled sessions, practise with materials, and complete supervised classroom hours at the institute. There is no online or hybrid option.
            </p>
            <p>
              Thirteen programmes share that campus. Certificate courses can start from three months. Diplomas and advance diplomas run for one year. Eligibility is printed on every programme page, from 10th pass on most certificates through 12th pass or graduate on advance diplomas.
            </p>
            <p>
              The principal and faculty mentor trainees through theory, practice, and reflection, so classroom habits are learned in the room where they will be used.
            </p>
          </div>
          <div class="about__actions">
            <RouterLink to="/courses" class="btn btn--primary link-arrow">
              Browse programmes <span aria-hidden="true">→</span>
            </RouterLink>
            <RouterLink to="/admissions" class="btn btn--outline link-arrow">
              How admissions works <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </div>
        <RevealOnScroll variant="right" class="about__media">
          <ParallaxImage
            :src="images.classroom.src"
            :alt="images.classroom.alt"
            :speed="0.35"
            class="about__image"
          />
        </RevealOnScroll>
      </div>
    </section>

    <section class="section section--cream section--bordered" aria-label="Institute at a glance">
      <div class="container">
        <div class="fact-strip">
          <div v-for="item in siteConfig.trustIndicators" :key="item.label" class="fact-strip__item">
            <span class="fact-strip__value">{{ item.value }}</span>
            <span class="fact-strip__label">{{ item.label }}</span>
            <span class="fact-strip__note">{{ item.note }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sage">
      <div class="container">
        <SectionHeader
          eyebrow="How we work"
          title="What we hold trainees to"
          description="The same standards shape every certificate, diploma, and advance diploma on campus."
        />
        <div class="bento bento--features">
          <RevealOnScroll
            v-for="(value, i) in values"
            :key="value.title"
            variant="scale"
            :delay="i * 70"
            class="feature-cell card card-lift"
          >
            <span class="feature-cell__num" aria-hidden="true">{{
              String(i + 1).padStart(2, "0")
            }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <ParallaxStrip
      :src="images.strips.materials"
      size="lg"
      overlay="fade"
      :speed="0.48"
    />

    <section class="section section--white section--bordered">
      <div class="container">
        <div class="bento bento--approach">
          <RevealOnScroll variant="left" class="approach__image-wrap">
            <ParallaxImage
              :src="images.approach.src"
              :alt="images.approach.alt"
              :speed="0.4"
              class="approach__image"
            />
          </RevealOnScroll>
          <RevealOnScroll variant="right" :delay="100" class="approach__copy">
            <p class="eyebrow">On campus</p>
            <h2 class="section-title">A syllabus you can open before you enrol</h2>
            <p class="section-intro">
              Every programme publishes its syllabus. Read the scope, then speak with admissions about fees, batch dates, and whether your background fits.
            </p>
            <ul class="approach__list">
              <li v-for="item in campusPoints" :key="item">
                <span class="approach__check" aria-hidden="true">✦</span>
                {{ item }}
              </li>
            </ul>
            <RouterLink to="/curriculum" class="btn btn--outline link-arrow approach__link">
              See the curriculum <span aria-hidden="true">→</span>
            </RouterLink>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section class="section section--cream">
      <div class="container">
        <SectionHeader
          eyebrow="Programmes"
          title="Three levels, one campus"
          description="Start with a focused certificate, qualify with a one-year diploma, or go further with an advance diploma. Counts below stay in step with the course list."
          center
        />
        <div class="pathway-grid">
          <RevealOnScroll
            v-for="(pathway, i) in programmePathways"
            :key="pathway.id"
            variant="up"
            :delay="i * 80"
          >
            <ProgrammePathwayCard
              :pathway="pathway"
              :count="pathwayCounts[pathway.id]"
              :step="i + 1"
            />
          </RevealOnScroll>
        </div>
        <RevealOnScroll variant="fade" class="courses-more">
          <RouterLink to="/courses" class="btn btn--primary link-arrow">
            View all 13 programmes <span aria-hidden="true">→</span>
          </RouterLink>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container">
        <SectionHeader
          eyebrow="Leadership"
          title="About our principal"
          description="Academic direction, mentoring, and on-campus standards for every programme at Titus."
        />
        <PrincipalSpotlight compact />
      </div>
    </section>

    <section class="section section--white">
      <div class="container visit">
        <SectionHeader
          eyebrow="Visit"
          title="Talk to admissions before you decide"
          description="Counsellors can walk through eligibility, batch dates, and fees for the programme you have in mind."
        />
        <div class="visit__grid">
          <RevealOnScroll variant="up" class="visit__card card">
            <h3>Hours</h3>
            <p>{{ siteConfig.contact.hours }}</p>
            <p class="visit__meta">Admissions counselling is available during campus hours.</p>
          </RevealOnScroll>
          <RevealOnScroll variant="up" :delay="80" class="visit__card card">
            <h3>Phone</h3>
            <p>
              <a :href="`tel:${siteConfig.contact.phoneTel}`">{{ siteConfig.contact.phone }}</a>
            </p>
            <p class="visit__meta">
              <a :href="siteConfig.contact.whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp admissions</a>
            </p>
          </RevealOnScroll>
          <RevealOnScroll variant="up" :delay="160" class="visit__card card">
            <h3>Campus life</h3>
            <p>See how practice, observation, and cohort work fit into a training week.</p>
            <RouterLink to="/student-experience" class="visit__link link-arrow">
              Student experience <span aria-hidden="true">→</span>
            </RouterLink>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <PageFaqSection page="about" variant="cream" />

    <CtaBanner
      eyebrow="Programmes"
      title="Explore our training programmes"
      description="Thirteen syllabus-led courses on campus, from certificate through advance diploma."
      panel-label="Next step"
      primary-label="Browse programmes"
      primary-to="/courses"
      secondary-label="Apply now"
      secondary-to="/apply"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { programmePathways } from "@/data/programmes";
import { courses } from "@/data/courses";
import PageHeader from "@/components/layout/PageHeader.vue";
import SectionHeader from "@/components/sections/SectionHeader.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";
import PageFaqSection from "@/components/sections/PageFaqSection.vue";
import ParallaxImage from "@/components/ui/ParallaxImage.vue";
import ParallaxStrip from "@/components/sections/ParallaxStrip.vue";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";
import ProgrammePathwayCard from "@/components/sections/ProgrammePathwayCard.vue";
import PrincipalSpotlight from "@/components/sections/PrincipalSpotlight.vue";

const pathwayCounts = computed(() =>
  programmePathways.reduce((acc, pathway) => {
    acc[pathway.id] = courses.filter((course) => course.category === pathway.id).length;
    return acc;
  }, {}),
);

const values = [
  {
    title: "Respectful",
    text: "Training treats each child's development as individual. Trainees practise that same stance with children, and with one another, during campus sessions.",
  },
  {
    title: "Thoughtful",
    text: "Observation and reflection sit inside the timetable. You learn to notice what a child is doing before you decide what to do next.",
  },
  {
    title: "Practical",
    text: "Theory is tied to materials and supervised classroom hours. You leave a session having handled the work, not only read about it.",
  },
  {
    title: "Professional",
    text: "Preparation, attendance, and conduct are part of the programme. Standards are the same whether you are on a certificate or an advance diploma.",
  },
];

const campusPoints = [
  "A published syllabus for every programme, available to download before you apply",
  "Scheduled in-person theory, materials practice, and supervised classroom hours",
  "Certificate, diploma, and advance diploma routes on the same campus",
  "Mentoring from the principal and faculty through practice and reflection",
];
</script>

<style scoped>
.about {
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .about {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 4rem;
  }
}

.about__body {
  margin-top: 1.5rem;
  display: grid;
  gap: 1rem;
  max-width: 38rem;
}

.about__body p {
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.7;
}

.about__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.fact-strip {
  display: grid;
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

@media (min-width: 768px) {
  .fact-strip {
    grid-template-columns: repeat(4, 1fr);
  }
}

.fact-strip__item {
  padding: 1.35rem 1.5rem;
  background: var(--color-surface);
}

.fact-strip__value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.4vw, 1.85rem);
  font-weight: var(--font-weight-heading);
  letter-spacing: -0.03em;
  color: var(--palette-orange-500);
  line-height: 1;
}

.fact-strip__label {
  display: block;
  margin-top: 0.45rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-ink);
}

.fact-strip__note {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.8125rem;
  line-height: 1.45;
  color: var(--color-muted);
}

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
  height: 100%;
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
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.625rem;
  color: var(--color-ink);
}

.feature-cell p {
  font-size: 0.9375rem;
  color: var(--color-muted);
  line-height: 1.7;
}

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
    grid-template-columns: 0.95fr 1.05fr;
    gap: 3.5rem;
  }
}

.approach__copy .section-title {
  margin-top: 1rem;
}

.approach__list {
  list-style: none;
  padding: 0;
  margin: 1.75rem 0 0;
}

.approach__list li {
  display: flex;
  gap: 0.875rem;
  align-items: flex-start;
  padding: 1rem 0;
  color: var(--color-muted);
  border-bottom: 1px solid var(--color-border);
  font-size: 0.9375rem;
  line-height: 1.55;
}

.approach__check {
  flex-shrink: 0;
  color: var(--color-gold);
  font-size: 0.75rem;
  margin-top: 0.2rem;
}

.approach__link {
  margin-top: 1.75rem;
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

.courses-more {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.visit__grid {
  display: grid;
  gap: 1.25rem;
  margin-top: 2.5rem;
}

@media (min-width: 768px) {
  .visit__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

.visit__card {
  padding: 1.75rem 1.5rem;
  height: 100%;
}

.visit__card h3 {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.visit__card p {
  margin-top: 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.visit__card a {
  color: var(--color-ink);
  font-weight: 600;
  text-decoration: none;
}

.visit__card a:hover {
  color: var(--color-primary);
}

.visit__meta {
  font-size: 0.875rem;
}

.visit__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1rem;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
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
