<template>
  <article
    class="course-card"
    :class="[
      `course-card--${course.category || 'default'}`,
      { 'course-card--dark': dark, 'course-card--featured': featured },
    ]"
  >
    <div class="course-card__header">
      <span v-if="categoryShort" class="course-card__pathway">{{ categoryShort }}</span>
      <span class="course-card__duration">{{ course.duration }}</span>
    </div>

    <div class="course-card__duration-wrap" v-if="featured">
      <span class="course-card__duration-large">{{ course.duration }}</span>
      <span class="course-card__duration-label">on campus</span>
    </div>

    <component :is="headingLevel" class="course-card__title">
      <RouterLink :to="`/courses/${course.slug}`" class="course-card__title-link">
        {{ course.name }}
      </RouterLink>
    </component>

    <p class="course-card__desc">{{ course.shortDescription }}</p>

    <dl class="course-card__meta">
      <div>
        <dt>Eligibility</dt>
        <dd>{{ course.eligibility }}</dd>
      </div>
      <div v-if="!featured">
        <dt>Format</dt>
        <dd>{{ course.format }}</dd>
      </div>
      <div v-if="!featured">
        <dt>Next batch</dt>
        <dd>{{ course.nextBatch }}</dd>
      </div>
      <div v-if="!featured">
        <dt>Medium</dt>
        <dd>{{ course.medium }}</dd>
      </div>
    </dl>

    <div class="course-card__actions">
      <div class="course-card__cta">
        <RouterLink
          :to="`/courses/${course.slug}`"
          class="btn btn--primary course-card__btn"
          :class="{ 'btn--outline-dark': dark }"
        >
          Programme details
        </RouterLink>
        <RouterLink
          :to="`/apply?course=${course.slug}`"
          class="btn course-card__apply"
          :class="{ 'course-card__apply--dark': dark }"
        >
          Apply <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <a
        v-if="siteConfig.features.syllabusDownload && course.syllabusPdf"
        :href="course.syllabusPdf"
        class="course-card__syllabus"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download syllabus
      </a>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { courseCategories } from "@/data/programmes";
import { siteConfig } from "@/data/site";

const props = defineProps({
  course: { type: Object, required: true },
  dark: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  /** h2 on listing pages (H1 → H2 hierarchy), h3 when nested under a section H2. */
  headingLevel: { type: String, default: "h3" },
});

const categoryShort = computed(() => {
  if (!props.course.category) return "";
  const cat = courseCategories.find((c) => c.id === props.course.category);
  if (!cat) return "";
  return cat.label.replace(/ programmes$/i, "");
});
</script>

<style scoped>
.course-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition:
    border-color 0.25s ease,
    transform 0.3s var(--ease-out-expo);
}

.course-card:hover {
  border-color: rgba(90, 24, 154, 0.22);
  transform: translateY(-3px);
}

.course-card--featured {
  border-color: rgba(255, 133, 0, 0.35);
}

.course-card--featured::before {
  content: "Popular start";
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 1;
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--palette-purple-900);
  background: linear-gradient(100deg, var(--palette-orange-400), var(--palette-orange-500));
  border-radius: var(--radius-full);
}

.course-card--dark {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
}

.course-card--certificate .course-card__header {
  background: linear-gradient(135deg, rgba(255, 158, 0, 0.14) 0%, transparent 72%);
}

.course-card--diploma .course-card__header {
  background: linear-gradient(135deg, rgba(90, 24, 154, 0.12) 0%, transparent 72%);
}

.course-card--advanced-diploma .course-card__header {
  background: linear-gradient(
    135deg,
    rgba(90, 24, 154, 0.1) 0%,
    rgba(255, 133, 0, 0.08) 55%,
    transparent 100%
  );
}

.course-card--certificate .course-card__header {
  background: linear-gradient(180deg, rgba(255, 158, 0, 0.12) 0%, transparent 100%);
}

.course-card--diploma .course-card__header {
  background: linear-gradient(180deg, rgba(90, 24, 154, 0.1) 0%, transparent 100%);
}

.course-card--advanced-diploma .course-card__header {
  background: linear-gradient(
    135deg,
    rgba(90, 24, 154, 0.12) 0%,
    rgba(255, 133, 0, 0.08) 100%
  );
}

.course-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 1.25rem 0.75rem;
}

.course-card__pathway {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.course-card--dark .course-card__pathway {
  color: var(--palette-orange-400);
}

.course-card__duration {
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--color-muted);
}

.course-card--certificate .course-card__duration,
.course-card--diploma .course-card__duration,
.course-card--advanced-diploma .course-card__duration {
  color: var(--color-muted);
}

.course-card--dark .course-card__duration {
  color: rgba(255, 255, 255, 0.5);
}

.course-card__duration-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0 1.25rem;
  margin-top: 0.25rem;
}

.course-card__duration-large {
  font-size: clamp(1.75rem, 4vw, 2.125rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--palette-orange-600);
}

.course-card--diploma .course-card__duration-large,
.course-card--advanced-diploma .course-card__duration-large {
  color: var(--palette-purple-700);
}

.course-card__duration-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-muted);
}

.course-card__title {
  margin: 0.75rem 0 0;
  padding: 0 1.25rem;
  font-family: var(--font-sans);
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.course-card--featured .course-card__title {
  font-size: 1.125rem;
}

.course-card__title-link {
  color: var(--color-ink);
  text-decoration: none;
  transition: color 0.2s ease;
}

.course-card--dark .course-card__title-link {
  color: var(--color-white);
}

.course-card__title-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.course-card__desc {
  margin: 0.625rem 0 0;
  padding: 0 1.25rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--color-muted);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-card--dark .course-card__desc {
  color: rgba(255, 255, 255, 0.62);
}

.course-card__meta {
  margin: 1rem 1.25rem 0;
  padding: 0.75rem 0 0;
  border-top: 1px dashed var(--color-border);
}

.course-card--dark .course-card__meta {
  border-color: rgba(255, 255, 255, 0.12);
}

.course-card__meta div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.3rem 0;
  border-bottom: 1px dashed var(--color-border);
}

.course-card__meta div:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.course-card__meta dt {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
  flex-shrink: 0;
}

.course-card__meta dd {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-ink-soft);
  text-align: right;
}

.course-card--dark .course-card__meta div {
  border-bottom-color: rgba(255, 255, 255, 0.12);
}

.course-card--dark .course-card__meta dd {
  color: rgba(255, 255, 255, 0.78);
}

.course-card__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding: 1rem 1.25rem 1.25rem;
  background: var(--color-muted-bg);
  border-top: 1px solid var(--color-border);
}

.course-card--dark .course-card__actions {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.08);
}

.course-card__cta {
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
}

.course-card__btn,
.course-card__apply {
  flex: 1 1 0;
  min-width: 0;
  justify-content: center;
  padding: 0 0.5rem;
  font-size: 0.8125rem;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
}

.course-card__syllabus {
  align-self: center;
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.course-card__syllabus:hover {
  text-decoration: underline;
}

.course-card__apply {
  background: var(--color-white);
  border-color: var(--palette-orange-400);
  color: var(--palette-orange-600);
  gap: 0.25rem;
}

.course-card__apply:hover {
  background: var(--palette-orange-500);
  border-color: var(--palette-orange-500);
  color: var(--color-white);
  text-decoration: none;
}

.course-card__apply--dark {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.28);
  color: var(--color-white);
}

.course-card__apply--dark:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: var(--palette-orange-400);
  color: var(--color-white);
}

.course-card__apply span {
  transition: transform 0.2s var(--ease-out-expo);
}

.course-card__apply:hover span {
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .course-card:hover {
    transform: none;
  }
}
</style>