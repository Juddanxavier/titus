<template>
  <div ref="containerRef" class="page-header">
    <div class="page-header__media" aria-hidden="true">
      <img
        :src="resolvedImage"
        alt=""
        class="page-header__bg-img"
        :style="imageStyle"
        loading="eager"
        decoding="async"
      />
      <div class="page-header__img-veil" />
    </div>
    <div class="container page-header__content">
      <p v-if="eyebrow" class="page-header__eyebrow eyebrow animate-hero-1">{{ eyebrow }}</p>
      <h1 class="font-display animate-hero-2">{{ title }}</h1>
      <p v-if="description" class="animate-hero-3">{{ description }}</p>
      <div v-if="$slots.default" class="animate-hero-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useParallax } from "@/composables/useParallax";
import { images } from "@/data/images";

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  eyebrow: { type: String, default: "" },
  backgroundImage: { type: String, default: "" },
});

const resolvedImage = computed(
  () => props.backgroundImage || images.pageHeaders.default
);

const { containerRef, imageStyle } = useParallax({
  speed: 0.35,
  scale: 1.2,
  maxOffset: 140,
});
</script>

<style scoped>
.page-header {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: clamp(4.5rem, 12vw, 6.5rem) 0 clamp(3.5rem, 8vw, 5rem);
  color: rgba(255, 255, 255, 0.92);
}

.page-header__media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.page-header__bg-img {
  position: absolute;
  inset: -20% 0;
  width: 100%;
  height: 140%;
  object-fit: cover;
  object-position: center 30%;
  will-change: transform;
}

.page-header__img-veil {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      105deg,
      rgba(36, 0, 70, 0.9) 0%,
      rgba(36, 0, 70, 0.78) 42%,
      rgba(36, 0, 70, 0.62) 100%
    ),
    linear-gradient(180deg, rgba(36, 0, 70, 0.55) 0%, transparent 42%, rgba(36, 0, 70, 0.75) 100%);
}

.page-header__content {
  position: relative;
  z-index: 1;
}

.page-header :deep(.eyebrow) {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.page-header h1 {
  font-size: clamp(2.25rem, 4.5vw, 3.25rem);
  font-weight: 800;
  color: var(--color-white);
  margin-top: 0.5rem;
  letter-spacing: -0.04em;
}

.page-header p {
  margin-top: 1.5rem;
  max-width: 40rem;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.75;
}
</style>
