<template>
  <div class="faq-list" :class="{ 'faq-list--dark': dark }">
    <details v-for="faq in items" :key="faq.id" class="faq-item">
      <summary class="faq-item__question">{{ faq.question }}</summary>
      <p class="faq-item__answer">{{ faq.answer }}</p>
    </details>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
  dark: { type: Boolean, default: false },
});
</script>

<style scoped>
.faq-list { border-top: 1px solid var(--color-border); }

.faq-list--dark {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
}

.faq-list--dark .faq-item {
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.faq-item__question {
  font-weight: 500;
  font-size: 0.9375rem;
  color: var(--color-ink);
  cursor: pointer;
  list-style: none;
  padding-right: 1.5rem;
  position: relative;
}

.faq-list--dark .faq-item__question {
  color: rgba(255, 255, 255, 0.9);
}

.faq-item__question::-webkit-details-marker { display: none; }

.faq-item__question::after {
  content: "+";
  position: absolute;
  right: 0;
  color: var(--color-gold);
  font-size: 1.25rem;
  line-height: 1;
}

.faq-item__answer {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: var(--color-muted);
  line-height: 1.7;
}

.faq-list--dark .faq-item__answer {
  color: rgba(255, 255, 255, 0.55);
}
</style>
