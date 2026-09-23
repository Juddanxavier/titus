<template>
  <div class="module-list" :class="{ 'module-list--dark': dark }">
    <details v-for="mod in modules" :key="mod.id" class="module-item card" :class="{ 'module-item--dark': dark }">
      <summary class="module-item__title">{{ mod.title }}</summary>
      <div class="module-item__body">
        <p>{{ mod.description }}</p>
        <ul>
          <li v-for="topic in mod.topics" :key="topic">{{ topic }}</li>
        </ul>
      </div>
    </details>
  </div>
</template>

<script setup>
defineProps({
  modules: { type: Array, required: true },
  dark: { type: Boolean, default: false },
});
</script>

<style scoped>
.module-list { display: grid; gap: 0.75rem; }

.module-item {
  padding: 0;
  overflow: hidden;
  border-radius: var(--card-radius);
}

.module-item--dark {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.08);
}

.module-item__title {
  padding: 1.25rem 1.5rem;
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  list-style: none;
  color: var(--color-ink);
}

.module-item--dark .module-item__title {
  color: var(--color-white);
}

.module-item__title::-webkit-details-marker { display: none; }

.module-item__body {
  padding: 0 1.5rem 1.5rem;
  font-size: 0.875rem;
  color: var(--color-muted);
  line-height: 1.7;
}

.module-item--dark .module-item__body {
  color: rgba(255, 255, 255, 0.6);
}

.module-item__body ul {
  margin-top: 0.75rem;
  padding-left: 1.25rem;
}
</style>
