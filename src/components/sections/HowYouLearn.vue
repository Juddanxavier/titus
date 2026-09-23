<template>
  <section class="learn section section--white section--bordered" aria-label="How you learn">
    <div class="container">
      <SectionHeader
        eyebrow="How you learn"
        title="From syllabus to classroom confidence"
        description="Every programme at Titus follows the same clear rhythm — know what you are signing up for, learn on campus, practise with purpose, and graduate ready for early-years classrooms."
        center
      />

      <div class="learn__layout">
        <RevealOnScroll variant="left" class="learn__visual">
          <div class="learn__image-wrap">
            <img
              :src="images.classroom.src"
              :alt="images.classroom.alt"
              class="learn__image"
              loading="lazy"
            />
            <div class="learn__image-badge card">
              <span class="learn__badge-value">100%</span>
              <span class="learn__badge-label">On-campus delivery</span>
            </div>
          </div>
        </RevealOnScroll>

        <ol class="learn__steps">
          <RevealOnScroll
            v-for="(step, i) in learningSteps"
            :key="step.id"
            variant="right"
            :delay="i * 70"
            class="learn__step-wrap"
          >
            <li class="learn__step card">
              <span class="learn__step-num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="learn__step-content">
                <h3 class="learn__step-title">{{ step.title }}</h3>
                <p class="learn__step-text">{{ step.description }}</p>
                <ul v-if="step.points?.length" class="learn__step-points">
                  <li v-for="point in step.points" :key="point">{{ point }}</li>
                </ul>
                <RouterLink v-if="step.link" :to="step.link.to" class="learn__step-link">
                  {{ step.link.label }} <span aria-hidden="true">→</span>
                </RouterLink>
              </div>
            </li>
          </RevealOnScroll>
        </ol>
      </div>

      <RevealOnScroll variant="fade" class="learn__footer">
        <div class="learn__tiles">
          <div v-for="tile in learningTiles" :key="tile.label" class="learn__tile card">
            <span class="learn__tile-value">{{ tile.value }}</span>
            <span class="learn__tile-label">{{ tile.label }}</span>
          </div>
        </div>
        <div class="learn__actions">
          <RouterLink to="/courses" class="btn btn--primary link-arrow">
            Compare programmes <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink to="/admissions" class="btn btn--outline link-arrow">
            Admissions process <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink to="/curriculum" class="learn__text-link">
            Cross-cutting curriculum themes
          </RouterLink>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup>
import { images } from '@/data/images';
import SectionHeader from '@/components/sections/SectionHeader.vue';
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue';

const learningSteps = [
  {
    id: 'syllabus',
    title: 'Review the official syllabus',
    description:
      'Each of our 13 programmes has a published NCVTC syllabus. Review modules, assessments, and attendance expectations before you apply.',
    points: ['Download from any course page', 'Available for every qualification'],
    link: { label: 'Browse programmes', to: '/courses' },
  },
  {
    id: 'campus',
    title: 'Learn face-to-face on campus',
    description:
      'Training happens at Titus only — scheduled theory sessions, demonstrations, and discussion with faculty. Online and hybrid study are not offered.',
    points: ['English-medium sessions', 'Structured batch timetable'],
  },
  {
    id: 'materials',
    title: 'Practise with Montessori materials',
    description:
      'Hands-on work with learning materials, guided presentations, and peer practice — connected to what your syllabus requires for that qualification.',
    points: ['Demonstrations from faculty', 'Supervised materials practice'],
  },
  {
    id: 'classroom',
    title: 'Grow through supervised classroom hours',
    description:
      'Apply what you learn in real early-years settings with mentoring from our principal and faculty, aligned to programme assessment criteria.',
    points: ['Observation and practice teaching', 'Reflective feedback'],
    link: { label: 'Student experience', to: '/student-experience' },
  },
];

const learningTiles = [
  { value: '13', label: 'Syllabus-led programmes' },
  { value: 'Full', label: 'Official syllabus per course' },
  { value: '3mo–1yr', label: 'Flexible qualification lengths' },
];
</script>

<style scoped>
.learn__layout {
  display: grid;
  gap: 2.5rem;
  margin-top: 3rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .learn__layout {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 3.5rem;
  }
}

.learn__visual {
  position: relative;
}

.learn__image-wrap {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.learn__image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.learn__image-badge {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.75rem 1rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
}

.learn__badge-value {
  display: block;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--palette-purple-700);
  line-height: 1;
}

.learn__badge-label {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.learn__steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.learn__step-wrap {
  display: block;
}

.learn__step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem 1.25rem;
  padding: 1.25rem 1.35rem;
  border: 1px solid var(--color-border);
  transition: border-color 0.25s ease;
}

.learn__step:hover {
  border-color: rgba(90, 24, 154, 0.22);
}

.learn__step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--color-white);
  background: linear-gradient(135deg, var(--palette-purple-700), var(--palette-purple-600));
}

.learn__step-wrap:nth-child(even) .learn__step-num {
  background: linear-gradient(135deg, var(--palette-orange-600), var(--palette-orange-500));
}

.learn__step-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-ink);
  line-height: 1.3;
}

.learn__step-text {
  margin-top: 0.35rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.learn__step-points {
  margin: 0.65rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-ink-soft);
}

.learn__step-points li {
  margin-top: 0.25rem;
}

.learn__step-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.learn__step-link span {
  transition: transform 0.2s var(--ease-out-expo);
}

.learn__step-link:hover {
  text-decoration: none;
  color: var(--palette-purple-900);
}

.learn__step-link:hover span {
  transform: translateX(3px);
}

.learn__footer {
  margin-top: 2.5rem;
}

.learn__tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

@media (max-width: 639px) {
  .learn__tiles {
    grid-template-columns: 1fr;
  }
}

.learn__tile {
  padding: 1.25rem 1rem;
  text-align: center;
  background: var(--color-muted-bg);
  border: 1px solid var(--color-border);
}

.learn__tile-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--palette-orange-600);
  line-height: 1;
}

.learn__tile:nth-child(2) .learn__tile-value {
  font-size: 1.25rem;
  color: var(--palette-purple-700);
}

.learn__tile-label {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.learn__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem 1rem;
  margin-top: 1.75rem;
}

.learn__text-link {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-muted);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.learn__text-link:hover {
  color: var(--color-primary);
}

.link-arrow span {
  display: inline-block;
  transition: transform 0.25s var(--ease-out-expo);
}

.link-arrow:hover span {
  transform: translateX(4px);
}
</style>
