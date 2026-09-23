<template>
  <RevealOnScroll
    variant="up"
    class="section-header"
    :class="{ 'section-header--center': center, 'section-header--light': light }"
  >
    <p v-if="eyebrow" class="section-header__eyebrow eyebrow">{{ eyebrow }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="section-intro">{{ description }}</p>
  </RevealOnScroll>
</template>

<script setup>
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";

defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  center: { type: Boolean, default: false },
  light: { type: Boolean, default: false },
});
</script>

<style scoped>
.section-header {
  max-width: 42rem;
}

.section-header--center {
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-header--center .eyebrow {
  justify-content: center;
}

.section-header__eyebrow {
  margin-bottom: 1.25rem;
}

.section-header--light .section-title {
  color: var(--color-white);
}

.section-header--light .section-intro {
  color: rgba(255, 255, 255, 0.72);
}

.section-header--light .eyebrow {
  color: var(--color-accent-bright);
  background: rgba(255, 255, 255, 0.1);
}
</style>
