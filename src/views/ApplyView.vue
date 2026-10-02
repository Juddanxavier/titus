<template>
  <div class="apply-page">
    <PageHeader
      title="Application form"
      description="Complete all five steps to apply for a Montessori teacher-training programme."
      :background-image="images.pageHeaders.apply"
    />

    <section class="section section--cream">
      <div class="container container--wide apply-layout">
        <!-- Left sidebar: progress + admissions help -->
        <aside class="apply-side apply-side--info">
          <div class="card apply-panel">
            <p class="apply-panel__eyebrow">Application progress</p>
            <ol class="apply-progress">
              <li
                v-for="(label, i) in stepLabels"
                :key="label"
                :class="{
                  'is-active': step === i + 1,
                  'is-done': step > i + 1,
                  'is-clickable': i + 1 < step,
                }"
                :aria-current="step === i + 1 ? 'step' : undefined"
              >
                <button
                  type="button"
                  class="apply-progress__btn"
                  :disabled="i + 1 >= step"
                  @click="goToStep(i + 1)"
                >
                  <span class="apply-progress__num">{{ step > i + 1 ? "✓" : i + 1 }}</span>
                  <span class="apply-progress__label">{{ label }}</span>
                </button>
              </li>
            </ol>
          </div>

          <div class="card apply-panel">
            <p class="apply-panel__eyebrow">Talk to admissions</p>
            <p class="apply-panel__text">
              Unsure about eligibility, documents, or batch dates? Our counsellors can walk you
              through the programme before you submit.
            </p>
            <a class="apply-contact" :href="`tel:${siteConfig.contact.phoneTel}`">
              {{ siteConfig.contact.phone }}
            </a>
            <a
              class="apply-contact apply-contact--whatsapp"
              :href="siteConfig.contact.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <p class="apply-panel__meta">{{ siteConfig.contact.hours }}</p>
            <RouterLink class="apply-panel__link" to="/admissions">
              Admissions guide <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </aside>

        <!-- Main: the form -->
        <main class="apply-main card">
          <ApplicationForm
            ref="formRef"
            v-model:course-slug="selectedCourse"
            @step-change="step = $event"
          />
        </main>

        <!-- Right sidebar: programme picker + selection summary -->
        <aside class="apply-side apply-side--courses">
          <div class="card apply-panel">
            <div class="apply-panel__head">
              <p class="apply-panel__eyebrow">Choose a programme</p>
              <span class="apply-panel__count">{{ courses.length }}</span>
            </div>

            <div class="apply-course-list">
              <template v-for="cat in courseCategories" :key="cat.id">
                <p class="apply-course-list__group">{{ cat.label }}</p>
                <button
                  v-for="c in byCategory(cat.id)"
                  :key="c.slug"
                  type="button"
                  class="apply-course"
                  :class="{ 'apply-course--active': selectedCourse === c.slug }"
                  :aria-pressed="selectedCourse === c.slug"
                  @click="selectCourse(c.slug)"
                >
                  <span class="apply-course__name">{{ c.name }}</span>
                  <span class="apply-course__meta">
                    {{ c.duration }} · {{ c.eligibility }}
                  </span>
                </button>
              </template>
            </div>

            <p class="apply-panel__note">
              Every programme is on campus at <strong>Poonamallee</strong> · fees on request.
            </p>
          </div>

          <div v-if="selected" class="card apply-panel apply-panel--selection">
            <p class="apply-panel__eyebrow">Your selection</p>
            <p class="apply-selection__name">{{ selected.name }}</p>
            <dl class="apply-selection">
              <div><dt>Duration</dt><dd>{{ selected.duration }}</dd></div>
              <div><dt>Eligibility</dt><dd>{{ selected.eligibility }}</dd></div>
              <div><dt>Location</dt><dd>{{ selected.location }}</dd></div>
              <div><dt>Fees</dt><dd>{{ selected.fees?.amount || "Contact admissions" }}</dd></div>
              <div><dt>Next batch</dt><dd>{{ selected.nextBatch }}</dd></div>
            </dl>
            <RouterLink class="apply-panel__link" :to="`/courses/${selected.slug}`">
              Programme details <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { courses } from "@/data/courses";
import { courseCategories } from "@/data/programmes";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import ApplicationForm from "@/components/forms/ApplicationForm.vue";

const stepLabels = [
  "Personal details",
  "Background",
  "Course preference",
  "Documents",
  "Review",
];

const step = ref(1);
const selectedCourse = ref("");
const formRef = ref(null);

const selected = computed(() => courses.find((c) => c.slug === selectedCourse.value));

function byCategory(categoryId) {
  return courses.filter((c) => c.category === categoryId);
}

function selectCourse(slug) {
  selectedCourse.value = slug;
}

function goToStep(n) {
  formRef.value?.goToStep(n);
}
</script>

<style scoped>
.apply-layout {
  display: grid;
  gap: 1.5rem;
}

.apply-main {
  order: 1;
  min-width: 0;
  padding: 1.25rem;
}

.apply-side--courses {
  order: 2;
}

.apply-side--info {
  order: 3;
}

.apply-side {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
}

.apply-panel {
  padding: 1.25rem;
}

.apply-panel__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.apply-panel__head .apply-panel__eyebrow {
  margin-bottom: 0;
}

.apply-panel__eyebrow {
  margin-bottom: 0.75rem;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.apply-panel__count {
  font-size: 0.6875rem;
  font-weight: 800;
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-full);
  background: var(--color-primary-subtle);
  color: var(--color-primary);
}

.apply-panel__text {
  margin-bottom: 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--color-muted);
}

.apply-panel__meta {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--color-muted);
}

.apply-panel__note {
  margin-top: 0.875rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.apply-panel__link {
  display: inline-block;
  margin-top: 0.875rem;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.apply-panel__link:hover {
  text-decoration: underline;
}

/* Progress sidebar */
.apply-progress {
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.apply-progress__btn {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  padding: 0;
  background: none;
  border: 0;
  font: inherit;
  font-size: 0.8125rem;
  color: var(--color-muted);
  text-align: left;
}

.apply-progress li.is-active .apply-progress__btn,
.apply-progress li.is-done .apply-progress__btn {
  color: var(--color-ink);
  font-weight: 600;
}

.apply-progress li.is-clickable .apply-progress__btn {
  cursor: pointer;
}

.apply-progress li.is-clickable .apply-progress__btn:hover {
  color: var(--color-primary);
}

.apply-progress__btn:disabled {
  cursor: default;
}

.apply-progress__num {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  font-size: 0.6875rem;
  font-weight: 700;
}

.apply-progress li.is-active .apply-progress__num,
.apply-progress li.is-done .apply-progress__num {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-white);
}

/* Admissions contact sidebar */
.apply-contact {
  display: block;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-ink);
  text-decoration: none;
}

.apply-contact:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.apply-contact--whatsapp {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-primary);
}

/* Programme picker */
.apply-course-list {
  display: grid;
  gap: 0.5rem;
}

.apply-course-list__group {
  margin: 0.5rem 0 0.125rem;
  font-size: 0.625rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.apply-course-list__group:first-child {
  margin-top: 0;
}

.apply-course {
  display: block;
  width: 100%;
  padding: 0.55rem 0.7rem;
  text-align: left;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.apply-course:hover {
  border-color: rgba(90, 24, 154, 0.32);
}

.apply-course--active {
  background: rgba(90, 24, 154, 0.06);
  border-color: var(--palette-purple-700);
  box-shadow: inset 3px 0 0 var(--palette-purple-700);
}

.apply-course__name {
  display: block;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--color-ink);
}

.apply-course--active .apply-course__name {
  color: var(--palette-purple-700);
}

.apply-course__meta {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.6875rem;
  color: var(--color-muted);
}

/* Selection summary */
.apply-selection__name {
  margin-bottom: 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--color-ink);
}

.apply-selection {
  display: grid;
  gap: 0.5rem;
  margin: 0;
  font-size: 0.8125rem;
}

.apply-selection div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--color-border);
}

.apply-selection div:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.apply-selection dt {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
  flex-shrink: 0;
}

.apply-selection dd {
  margin: 0;
  font-weight: 600;
  color: var(--color-ink-soft);
  text-align: right;
}

@media (min-width: 768px) {
  .apply-main {
    padding: 2rem;
  }
}

@media (min-width: 900px) {
  .apply-layout {
    grid-template-columns: 260px minmax(0, 1fr);
    grid-template-areas:
      "info main"
      "courses main";
    align-items: start;
  }

  .apply-side--info {
    grid-area: info;
  }

  .apply-side--courses {
    grid-area: courses;
  }

  .apply-main {
    grid-area: main;
  }
}

@media (min-width: 1140px) {
  .apply-layout {
    grid-template-columns: 255px minmax(0, 1fr) 320px;
    grid-template-areas: "info main courses";
  }

  .apply-side {
    position: sticky;
    top: 5rem;
    align-self: start;
    max-height: calc(100vh - 6rem);
    overflow-y: auto;
    overscroll-behavior: contain;
  }
}
</style>
