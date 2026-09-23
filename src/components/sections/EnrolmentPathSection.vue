<template>
  <section class="enrol section section--cream" aria-label="Your path to enrolment">
    <div class="container">
      <SectionHeader
        eyebrow="Admissions"
        title="Your path to enrolment"
        :description="`Five straightforward steps from choosing a programme to joining your on-campus cohort. Next intake: ${siteConfig.announcement.batchDate}.`"
        center
      />

      <div class="enrol__layout">
        <ol class="enrol__steps">
          <RevealOnScroll
            v-for="(step, index) in admissionsInfo.processSteps"
            :key="step.title"
            variant="up"
            :delay="index * 60"
            class="enrol__step-wrap"
          >
            <li class="enrol__step card">
              <div class="enrol__step-marker" aria-hidden="true">
                <span class="enrol__step-num">{{ index + 1 }}</span>
              </div>
              <div class="enrol__step-body">
                <h3 class="enrol__step-title">{{ step.title }}</h3>
                <p class="enrol__step-desc">{{ step.description }}</p>
              </div>
            </li>
          </RevealOnScroll>
        </ol>

        <aside class="enrol__aside">
          <RevealOnScroll variant="right" :delay="80">
            <div class="enrol__panel card">
              <p class="enrol__panel-eyebrow">Ready to start?</p>
              <h3 class="enrol__panel-title">Apply for {{ siteConfig.announcement.batchDate }}</h3>
              <p class="enrol__panel-text">
                All programmes run at the Titus campus. Have your programme choice and documents ready — admissions can guide you by phone or WhatsApp.
              </p>
              <div class="enrol__panel-actions">
                <RouterLink to="/apply" class="btn btn--primary btn--block">Apply now</RouterLink>
                <RouterLink to="/contact" class="btn btn--outline btn--block">Contact admissions</RouterLink>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="right" :delay="140">
            <div class="enrol__docs card">
              <h3 class="enrol__docs-title">Documents to prepare</h3>
              <ul class="enrol__docs-list">
                <li v-for="doc in admissionsInfo.requiredDocuments" :key="doc">{{ doc }}</li>
              </ul>
              <RouterLink to="/admissions" class="enrol__docs-link">
                Full admissions guide <span aria-hidden="true">→</span>
              </RouterLink>
            </div>
          </RevealOnScroll>

        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig } from "@/data/site";
import { admissionsInfo } from "@/data/admissions";
import SectionHeader from "@/components/sections/SectionHeader.vue";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";
</script>

<style scoped>
.enrol__layout {
  display: grid;
  gap: 2rem;
  margin-top: 2.5rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .enrol__layout {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 2.5rem;
  }
}

.enrol__steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.enrol__step-wrap {
  display: block;
}

.enrol__step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem 1.25rem;
  padding: 1.25rem 1.35rem;
  margin: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  position: relative;
}

.enrol__step-wrap + .enrol__step-wrap .enrol__step {
  margin-top: 0.75rem;
}

.enrol__step-wrap:not(:last-child) .enrol__step-marker::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 2px;
  height: calc(0.75rem + 1.25rem);
  margin-top: 0.35rem;
  transform: translateX(-50%);
  background: linear-gradient(180deg, var(--palette-purple-400), rgba(157, 78, 221, 0.15));
}

.enrol__step-marker {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.enrol__step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: 800;
  color: var(--color-white);
  background: linear-gradient(135deg, var(--palette-purple-700), var(--palette-purple-600));
}

.enrol__step-wrap:nth-child(even) .enrol__step-num {
  background: linear-gradient(135deg, var(--palette-orange-600), var(--palette-orange-500));
}

.enrol__step-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-ink);
  line-height: 1.3;
}

.enrol__step-desc {
  margin-top: 0.35rem;
  font-size: 0.8125rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.enrol__aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.enrol__panel {
  padding: 1.5rem;
  background: linear-gradient(165deg, var(--palette-purple-950) 0%, var(--palette-purple-900) 100%);
  border-color: rgba(255, 255, 255, 0.08);
  color: var(--color-white);
}

.enrol__panel-eyebrow {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--palette-orange-400);
}

.enrol__panel-title {
  margin-top: 0.35rem;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.enrol__panel-text {
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
}

.enrol__panel-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.enrol__panel .btn--outline {
  border-color: rgba(255, 255, 255, 0.35);
  color: var(--color-white);
}

.enrol__panel .btn--outline:hover {
  background: rgba(255, 255, 255, 0.08);
}

.enrol__docs {
  padding: 1.35rem 1.5rem;
}

.enrol__docs-title {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 800;
  color: var(--color-ink);
}

.enrol__docs-list {
  margin: 0.75rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.8125rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.enrol__docs-list li {
  margin-top: 0.35rem;
}

.enrol__docs-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1rem;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.enrol__docs-link:hover {
  text-decoration: underline;
}
</style>
