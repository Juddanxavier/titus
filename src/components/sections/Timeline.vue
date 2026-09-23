<template>
  <ol class="timeline" :class="{ 'timeline--dark': dark }">
    <li v-for="(step, index) in steps" :key="step.title" class="timeline__item card-lift" :class="{ 'timeline__item--dark': dark }">
      <div class="timeline__marker" aria-hidden="true">{{ index + 1 }}</div>
      <div>
        <h3 class="timeline__title">{{ step.title }}</h3>
        <p class="timeline__desc">{{ step.description }}</p>
      </div>
    </li>
  </ol>
</template>

<script setup>
defineProps({
  steps: { type: Array, required: true },
  dark: { type: Boolean, default: false },
});
</script>

<style scoped>
.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

@media (min-width: 768px) {
  .timeline { grid-template-columns: repeat(2, 1fr); }
}

.timeline__item {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--card-radius);
}

.timeline__item--dark {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}

.timeline__marker {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-muted-bg);
  color: var(--color-navy);
  border-radius: 2px;
  font-size: 0.8125rem;
  font-weight: 600;
  transition: transform 0.3s var(--ease-out-expo), background 0.3s ease;
}

.timeline__item--dark .timeline__marker {
  background: rgba(184, 146, 74, 0.15);
  color: var(--color-gold-light);
  border: 1px solid rgba(184, 146, 74, 0.25);
}

.timeline__item:hover .timeline__marker {
  transform: scale(1.08);
  background: var(--color-gold);
  color: var(--color-navy-dark);
}

.timeline__title {
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  color: var(--color-ink);
}

.timeline__item--dark .timeline__title {
  color: var(--color-white);
}

.timeline__desc {
  font-size: 0.8125rem;
  color: var(--color-muted);
  line-height: 1.65;
}

.timeline__item--dark .timeline__desc {
  color: rgba(255, 255, 255, 0.55);
}
</style>
