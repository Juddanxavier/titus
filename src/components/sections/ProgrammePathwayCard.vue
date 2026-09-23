<template>
  <RouterLink
    :to="{ path: '/courses', query: { category: pathway.id } }"
    class="pathway card"
    :class="`pathway--${pathway.id}`"
  >
    <div class="pathway__top">
      <span class="pathway__step" aria-hidden="true">{{ stepLabel }}</span>
      <span class="pathway__count" :aria-label="countAriaLabel">
        <span class="pathway__count-value">{{ count }}</span>
        <span class="pathway__count-label">programmes</span>
      </span>
    </div>

    <div class="pathway__body">
      <p class="pathway__label">{{ pathway.label }}</p>
      <h3 class="pathway__title">{{ pathway.headline }}</h3>
      <p class="pathway__desc">{{ pathway.description }}</p>

      <ul v-if="previewNames.length" class="pathway__preview" aria-label="Example programmes">
        <li v-for="name in previewNames" :key="name">{{ name }}</li>
        <li v-if="extraCount > 0" class="pathway__preview-more">+{{ extraCount }} more</li>
      </ul>

      <div class="pathway__pills">
        <span class="pathway__pill">
          <span class="pathway__pill-key">Duration</span>
          {{ pathway.durationNote }}
        </span>
        <span class="pathway__pill">
          <span class="pathway__pill-key">Eligibility</span>
          {{ pathway.eligibilityNote }}
        </span>
      </div>
    </div>

    <span class="pathway__footer">
      Browse {{ pathway.label.toLowerCase() }} programmes
      <span class="pathway__arrow" aria-hidden="true">→</span>
    </span>
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { getCoursesByCategory } from "@/data/courses";

const props = defineProps({
  pathway: { type: Object, required: true },
  count: { type: Number, required: true },
  step: { type: Number, default: 1 },
});

const stepLabel = computed(() => String(props.step).padStart(2, "0"));

const countAriaLabel = computed(() =>
  `${props.count} programme${props.count === 1 ? "" : "s"}`
);

const categoryCourses = computed(() => getCoursesByCategory(props.pathway.id));

const previewNames = computed(() =>
  categoryCourses.value.slice(0, 2).map((c) => shortenName(c.name))
);

const extraCount = computed(() => Math.max(0, categoryCourses.value.length - 2));

function shortenName(name) {
  if (name.length <= 42) return name;
  return `${name.slice(0, 39)}…`;
}
</script>

<style scoped>
.pathway {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition:
    border-color 0.25s ease,
    transform 0.3s var(--ease-out-expo);
}

.pathway:hover {
  border-color: rgba(90, 24, 154, 0.28);
  transform: translateY(-4px);
  text-decoration: none;
}

.pathway__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.25rem 1rem;
}

.pathway--certificate .pathway__top {
  background: linear-gradient(135deg, rgba(255, 158, 0, 0.16) 0%, transparent 72%);
}

.pathway--diploma .pathway__top {
  background: linear-gradient(135deg, rgba(90, 24, 154, 0.14) 0%, transparent 72%);
}

.pathway--advanced-diploma .pathway__top {
  background: linear-gradient(
    135deg,
    rgba(90, 24, 154, 0.12) 0%,
    rgba(255, 133, 0, 0.1) 55%,
    transparent 100%
  );
}

.pathway__step {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: rgba(36, 0, 70, 0.35);
}

.pathway__count {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  line-height: 1;
}

.pathway__count-value {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: var(--palette-orange-600);
}

.pathway--diploma .pathway__count-value,
.pathway--advanced-diploma .pathway__count-value {
  color: var(--palette-purple-700);
}

.pathway__count-label {
  margin-top: 0.2rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.pathway__body {
  flex: 1;
  padding: 0 1.25rem 1rem;
}

.pathway__label {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.pathway__title {
  margin: 0.35rem 0 0;
  font-family: var(--font-sans);
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

.pathway__desc {
  margin: 0.625rem 0 0;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pathway__preview {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.pathway__preview li {
  position: relative;
  padding-left: 0.875rem;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.35;
  color: var(--color-ink-soft);
}

.pathway__preview li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.45em;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: var(--palette-orange-500);
}

.pathway--diploma .pathway__preview li::before,
.pathway--advanced-diploma .pathway__preview li::before {
  background: var(--palette-purple-600);
}

.pathway__preview-more {
  font-weight: 700;
  color: var(--color-primary);
}

.pathway__preview-more::before {
  display: none;
}

.pathway__pills {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.pathway__pill {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 0.5rem;
  padding: 0.5rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-ink-soft);
  background: var(--color-muted-bg);
  border-radius: var(--radius-md);
}

.pathway__pill-key {
  font-size: 0.625rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.pathway__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: auto;
  padding: 0.875rem 1.25rem;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-white);
  background: var(--palette-purple-900);
}

.pathway--certificate .pathway__footer {
  background: linear-gradient(100deg, var(--palette-orange-600), var(--palette-orange-500));
  color: var(--palette-purple-950);
}

.pathway--diploma .pathway__footer {
  background: linear-gradient(100deg, var(--palette-purple-900), var(--palette-purple-700));
}

.pathway--advanced-diploma .pathway__footer {
  background: linear-gradient(
    100deg,
    var(--palette-purple-950),
    var(--palette-purple-700) 55%,
    var(--palette-orange-600)
  );
}

.pathway__arrow {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  transition: transform 0.25s var(--ease-out-expo);
}

.pathway--certificate .pathway__arrow {
  background: rgba(36, 0, 70, 0.12);
}

.pathway:hover .pathway__arrow {
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .pathway:hover {
    transform: none;
  }

  .pathway:hover .pathway__arrow {
    transform: none;
  }
}
</style>
