<template>
  <article
    class="catalogue-course card"
    :class="[
      `catalogue-course--${course.category || 'default'}`,
      { 'catalogue-course--dark': dark },
    ]"
  >
    <div class="catalogue-course__header">
      <span v-if="categoryShort" class="catalogue-course__pathway">{{ categoryShort }}</span>
      <span class="catalogue-course__duration">{{ course.duration }}</span>
    </div>

    <h3 class="catalogue-course__title">
      <RouterLink :to="`/courses/${course.slug}`" class="catalogue-course__title-link">
        {{ course.name }}
      </RouterLink>
    </h3>

    <p class="catalogue-course__desc">{{ course.shortDescription }}</p>

    <dl class="catalogue-course__meta">
      <div>
        <dt>Eligibility</dt>
        <dd>{{ course.eligibility }}</dd>
      </div>
      <div>
        <dt>Format</dt>
        <dd>{{ course.format }}</dd>
      </div>
      <div>
        <dt>Next batch</dt>
        <dd>{{ course.nextBatch }}</dd>
      </div>
      <div>
        <dt>Medium</dt>
        <dd>{{ course.medium }}</dd>
      </div>
    </dl>

    <div class="catalogue-course__actions">
      <RouterLink
        :to="`/courses/${course.slug}`"
        class="btn btn--primary catalogue-course__btn"
        :class="{ 'btn--outline-dark': dark }"
      >
        Programme details
      </RouterLink>
      <div class="catalogue-course__secondary">
        <a
          v-if="course.syllabusPdf"
          :href="course.syllabusPdf"
          class="catalogue-course__syllabus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download syllabus
        </a>
        <RouterLink
          :to="`/apply?course=${course.slug}`"
          class="catalogue-course__apply"
          :class="{ 'catalogue-course__apply--dark': dark }"
        >
          Apply <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { courseCategories } from "@/data/programmes";

const props = defineProps({
  course: { type: Object, required: true },
  dark: { type: Boolean, default: false },
});

const categoryShort = computed(() => {
  if (!props.course.category) return "";
  const cat = courseCategories.find((c) => c.id === props.course.category);
  if (!cat) return "";
  return cat.label.replace(/ programmes$/i, "");
});
</script>

<style scoped>
.catalogue-course {
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

.catalogue-course:hover {
  border-color: rgba(90, 24, 154, 0.25);
  transform: translateY(-3px);
}

.catalogue-course--dark {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
}

.catalogue-course--certificate .catalogue-course__header {
  background: linear-gradient(135deg, rgba(255, 158, 0, 0.14) 0%, transparent 72%);
}

.catalogue-course--diploma .catalogue-course__header {
  background: linear-gradient(135deg, rgba(90, 24, 154, 0.12) 0%, transparent 72%);
}

.catalogue-course--advanced-diploma .catalogue-course__header {
  background: linear-gradient(
    135deg,
    rgba(90, 24, 154, 0.1) 0%,
    rgba(255, 133, 0, 0.08) 55%,
    transparent 100%
  );
}

.catalogue-course__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
}

.catalogue-course__pathway {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.catalogue-course--dark .catalogue-course__pathway {
  color: var(--palette-orange-400);
}

.catalogue-course__duration {
  font-size: 0.8125rem;
  font-weight: 800;
  color: var(--palette-orange-600);
}

.catalogue-course--diploma .catalogue-course__duration,
.catalogue-course--advanced-diploma .catalogue-course__duration {
  color: var(--palette-purple-700);
}

.catalogue-course--dark .catalogue-course__duration {
  color: var(--palette-orange-400);
}

.catalogue-course__title {
  margin: 0;
  padding: 0 1.25rem;
  font-size: 1.0625rem;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.catalogue-course__title-link {
  color: var(--color-ink);
  text-decoration: none;
}

.catalogue-course--dark .catalogue-course__title-link {
  color: var(--color-white);
}

.catalogue-course__title-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.catalogue-course__desc {
  margin: 0.5rem 0 0;
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

.catalogue-course--dark .catalogue-course__desc {
  color: rgba(255, 255, 255, 0.62);
}

.catalogue-course__meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.65rem 1rem;
  margin: 1rem 1.25rem 0;
  padding-top: 1rem;
  border-top: 1px dashed var(--color-border);
}

.catalogue-course--dark .catalogue-course__meta {
  border-color: rgba(255, 255, 255, 0.12);
}

.catalogue-course__meta dt {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.catalogue-course__meta dd {
  margin: 0.15rem 0 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-ink-soft);
}

.catalogue-course--dark .catalogue-course__meta dd {
  color: rgba(255, 255, 255, 0.78);
}

.catalogue-course__actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 1.15rem;
  padding: 1rem 1.25rem 1.25rem;
  background: var(--color-muted-bg);
  border-top: 1px solid var(--color-border);
}

.catalogue-course--dark .catalogue-course__actions {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.08);
}

.catalogue-course__btn {
  width: 100%;
  justify-content: center;
}

.catalogue-course__secondary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.8125rem;
  font-weight: 700;
}

.catalogue-course__syllabus {
  color: var(--color-primary);
  text-decoration: none;
}

.catalogue-course__syllabus:hover {
  text-decoration: underline;
}

.catalogue-course__apply {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--palette-orange-600);
  text-decoration: none;
}

.catalogue-course__apply--dark {
  color: var(--palette-orange-400);
}

.catalogue-course__apply span {
  transition: transform 0.2s var(--ease-out-expo);
}

.catalogue-course__apply:hover span {
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .catalogue-course:hover {
    transform: none;
  }
}
</style>
