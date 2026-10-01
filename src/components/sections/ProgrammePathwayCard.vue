<template>
  <RouterLink
    :to="{ path: '/courses', query: { category: pathway.id } }"
    class="course-card"
    :class="`course-card--${pathway.id}`"
  >
    <div class="course-card__header">
      <span class="course-card__pathway">{{ pathway.label }}</span>
      <span class="course-card__duration">{{ count }} programmes</span>
    </div>

    <h3 class="course-card__title">
      <span class="course-card__title-link">{{ pathway.headline }}</span>
    </h3>

    <p class="course-card__desc">{{ pathway.description }}</p>

    <dl class="course-card__meta">
      <div>
        <dt>Duration</dt>
        <dd>{{ pathway.durationNote }}</dd>
      </div>
      <div>
        <dt>Eligibility</dt>
        <dd>{{ pathway.eligibilityNote }}</dd>
      </div>
    </dl>

    <div class="course-card__actions">
      <span class="btn btn--primary course-card__btn">
        Browse {{ pathway.label.toLowerCase() }} programmes
        <span class="btn-arrow" aria-hidden="true">→</span>
      </span>
    </div>
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  pathway: { type: Object, required: true },
  count: { type: Number, required: true },
  step: { type: Number, default: 1 },
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

.course-card__duration {
  font-size: 0.6875rem;
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
  color: var(--color-ink);
}

.course-card__title-link {
  color: var(--color-ink);
  text-decoration: none;
  transition: color 0.2s ease;
}

.course-card__title-link:hover {
  color: var(--color-primary);
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

.course-card__meta {
  margin: 1rem 1.25rem 0;
  padding: 0.75rem 0 0;
  border-top: 1px dashed var(--color-border);
}

.course-card__meta div {
  display: grid;
  gap: 0.2rem;
}

.course-card__meta dt {
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.course-card__meta dd {
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-ink-soft);
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

.course-card__btn {
  width: 100%;
  justify-content: center;
  font-size: 0.875rem;
}

.btn-arrow {
  display: inline-block;
  transition: transform 0.25s var(--ease-out-expo);
}

.course-card:hover .btn-arrow {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .course-card:hover {
    transform: none;
  }

  .course-card:hover .btn-arrow {
    transform: none;
  }
}
</style>