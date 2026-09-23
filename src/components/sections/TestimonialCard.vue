<template>
  <blockquote
    class="testimonial card"
    :class="[
      `testimonial--tone-${tone}`,
      { 'testimonial--compact': compact },
    ]"
  >
    <div class="testimonial__head">
      <div class="testimonial__avatar" aria-hidden="true">{{ initials }}</div>
      <div v-if="!compact" class="testimonial__rating" :aria-label="`${testimonial.rating || 5} out of 5 stars`">
        <span v-for="n in 5" :key="n" class="testimonial__star" :class="{ 'testimonial__star--dim': n > (testimonial.rating || 5) }">★</span>
      </div>
    </div>

    <p class="testimonial__quote">{{ testimonial.quote }}</p>

    <footer class="testimonial__footer">
      <cite class="testimonial__name">{{ testimonial.name }}</cite>
      <p class="testimonial__meta">
        {{ testimonial.role }}<template v-if="testimonial.location"> · {{ testimonial.location }}</template>
      </p>
      <p v-if="testimonial.programme" class="testimonial__programme">{{ testimonial.programme }}</p>
      <p v-if="testimonial.cohort" class="testimonial__cohort">{{ testimonial.cohort }}</p>
    </footer>
  </blockquote>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  testimonial: { type: Object, required: true },
  compact: { type: Boolean, default: false },
  /** Visual accent: 0–3 maps to brand tones */
  index: { type: Number, default: 0 },
});

const initials = computed(() => {
  const parts = props.testimonial.name?.trim().split(/\s+/) || [];
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return (parts[0]?.[0] || "?").toUpperCase();
});

const tone = computed(() => props.index % 4);
</script>

<style scoped>
.testimonial {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 1.5rem 1.5rem 1.35rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition:
    border-color 0.25s ease,
    transform 0.3s var(--ease-out-expo);
}

.testimonial:hover {
  transform: translateY(-3px);
  border-color: rgba(90, 24, 154, 0.22);
}

.testimonial--compact {
  padding: 1.25rem;
}

.testimonial--tone-0 {
  border-top: 3px solid var(--palette-orange-500);
}

.testimonial--tone-1 {
  border-top: 3px solid var(--palette-purple-700);
}

.testimonial--tone-2 {
  border-top: 3px solid var(--palette-purple-600);
}

.testimonial--tone-3 {
  border-top: 3px solid var(--palette-orange-400);
}

.testimonial__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.testimonial__avatar {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  color: var(--color-white);
  background: linear-gradient(135deg, var(--palette-purple-700), var(--palette-purple-600));
}

.testimonial--tone-0 .testimonial__avatar,
.testimonial--tone-3 .testimonial__avatar {
  background: linear-gradient(135deg, var(--palette-orange-600), var(--palette-orange-500));
}

.testimonial__rating {
  display: flex;
  gap: 0.125rem;
  font-size: 0.75rem;
  line-height: 1;
  color: var(--palette-orange-500);
}

.testimonial__star--dim {
  color: rgba(36, 0, 70, 0.15);
}

.testimonial__quote {
  flex: 1;
  margin: 0;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.7;
  color: var(--color-ink-soft);
}

.testimonial__quote::before {
  content: "\201C";
  display: block;
  margin-bottom: 0.35rem;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1;
  color: rgba(90, 24, 154, 0.2);
}

.testimonial--tone-0 .testimonial__quote::before,
.testimonial--tone-3 .testimonial__quote::before {
  color: rgba(255, 133, 0, 0.35);
}

.testimonial__footer {
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--color-border);
}

.testimonial__name {
  display: block;
  font-style: normal;
  font-weight: 800;
  font-size: 0.875rem;
  color: var(--color-ink);
}

.testimonial__meta {
  margin: 0.25rem 0 0;
  font-size: 0.8125rem;
  color: var(--color-muted);
}

.testimonial__programme {
  margin: 0.5rem 0 0;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-primary);
  line-height: 1.35;
}

.testimonial__cohort {
  margin: 0.35rem 0 0;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-muted);
}

@media (prefers-reduced-motion: reduce) {
  .testimonial:hover {
    transform: none;
  }
}
</style>
