<template>
  <article
    class="home-course card"
    :class="[
      `home-course--${course.category || 'default'}`,
      { 'home-course--featured': featured },
    ]"
  >
    <div class="home-course__header">
      <span class="home-course__pathway">{{ categoryLabel }}</span>
      <span class="home-course__format">{{ course.format }}</span>
    </div>

    <div class="home-course__duration-wrap">
      <span class="home-course__duration">{{ course.duration }}</span>
      <span class="home-course__duration-label">on campus</span>
    </div>

    <h3 class="home-course__title">
      <RouterLink :to="`/courses/${course.slug}`" class="home-course__title-link">
        {{ course.name }}
      </RouterLink>
    </h3>

    <p class="home-course__desc">{{ course.shortDescription }}</p>

    <dl class="home-course__meta">
      <div>
        <dt>Eligibility</dt>
        <dd>{{ course.eligibility }}</dd>
      </div>
    </dl>

    <div class="home-course__actions">
      <RouterLink :to="`/courses/${course.slug}`" class="btn btn--primary home-course__btn-primary">
        Programme details
      </RouterLink>
      <div class="home-course__secondary">
        <a
          v-if="course.syllabusPdf"
          :href="course.syllabusPdf"
          class="home-course__syllabus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download syllabus
        </a>
        <RouterLink :to="`/apply?course=${course.slug}`" class="home-course__apply">
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
  featured: { type: Boolean, default: false },
});

const categoryLabel = computed(() => {
  if (!props.course.category) return "Programme";
  const cat = courseCategories.find((c) => c.id === props.course.category);
  if (!cat) return "Programme";
  return cat.label.replace(/ programmes$/i, "");
});
</script>

<style scoped>
.home-course {
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

.home-course:hover {
  border-color: rgba(90, 24, 154, 0.22);
  transform: translateY(-3px);
}

.home-course--featured {
  border-color: rgba(255, 133, 0, 0.35);
}

.home-course--featured::before {
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

.home-course__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 1.25rem 0.75rem;
}

.home-course__pathway {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.home-course__format {
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--color-muted);
}

.home-course--certificate .home-course__header {
  background: linear-gradient(180deg, rgba(255, 158, 0, 0.12) 0%, transparent 100%);
}

.home-course--diploma .home-course__header {
  background: linear-gradient(180deg, rgba(90, 24, 154, 0.1) 0%, transparent 100%);
}

.home-course--advanced-diploma .home-course__header {
  background: linear-gradient(
    135deg,
    rgba(90, 24, 154, 0.12) 0%,
    rgba(255, 133, 0, 0.08) 100%
  );
}

.home-course__duration-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0 1.25rem;
  margin-top: 0.25rem;
}

.home-course__duration {
  font-size: clamp(1.75rem, 4vw, 2.125rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--palette-orange-600);
}

.home-course--diploma .home-course__duration,
.home-course--advanced-diploma .home-course__duration {
  color: var(--palette-purple-700);
}

.home-course__duration-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-muted);
}

.home-course__title {
  margin: 0.75rem 0 0;
  padding: 0 1.25rem;
  font-family: var(--font-sans);
  font-size: 1.0625rem;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.home-course--featured .home-course__title {
  font-size: 1.125rem;
}

.home-course__title-link {
  color: var(--color-ink);
  text-decoration: none;
  transition: color 0.2s ease;
}

.home-course__title-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.home-course__desc {
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

.home-course__meta {
  margin: 1rem 1.25rem 0;
  padding: 0.75rem 0 0;
  border-top: 1px dashed var(--color-border);
}

.home-course__meta div {
  display: grid;
  gap: 0.2rem;
}

.home-course__meta dt {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.home-course__meta dd {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-ink-soft);
}

.home-course__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding: 1rem 1.25rem 1.25rem;
  background: var(--color-muted-bg);
  border-top: 1px solid var(--color-border);
}

.home-course__btn-primary {
  width: 100%;
  justify-content: center;
  font-size: 0.875rem;
}

.home-course__secondary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.8125rem;
  font-weight: 700;
}

.home-course__syllabus {
  color: var(--color-primary);
  text-decoration: none;
}

.home-course__syllabus:hover {
  text-decoration: underline;
}

.home-course__apply {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--palette-orange-600);
  text-decoration: none;
}

.home-course__apply span {
  transition: transform 0.2s var(--ease-out-expo);
}

.home-course__apply:hover {
  text-decoration: none;
  color: var(--palette-orange-550);
}

.home-course__apply:hover span {
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .home-course:hover {
    transform: none;
  }
}
</style>
