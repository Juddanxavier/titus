<template>
  <section
    ref="containerRef"
    class="parallax-section section"
    :class="[`section--${background}`, { 'parallax-section--has-image': src }]"
  >
    <div v-if="src" class="parallax-section__media" aria-hidden="true">
      <img
        :src="src"
        alt=""
        class="parallax-section__img"
        :style="imageStyle"
        loading="lazy"
      />
      <div class="parallax-section__veil" :style="{ opacity: veil }" />
    </div>
    <div class="parallax-section__content">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { useParallax } from "@/composables/useParallax";

const props = defineProps({
  src: { type: String, default: "" },
  veil: { type: Number, default: 0.9 },
  speed: { type: Number, default: 0.3 },
  scale: { type: Number, default: 1.18 },
  background: { type: String, default: "cream" },
});

const { containerRef, imageStyle } = useParallax({
  speed: props.speed,
  scale: props.scale,
  maxOffset: 160,
});
</script>

<style scoped>
.parallax-section {
  position: relative;
  overflow: hidden;
}

.parallax-section__media {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.parallax-section__img {
  position: absolute;
  inset: -18% 0;
  width: 100%;
  height: 136%;
  object-fit: cover;
  will-change: transform;
}

.parallax-section__veil {
  position: absolute;
  inset: 0;
  background: var(--color-bg);
}

.parallax-section__content {
  position: relative;
  z-index: 1;
}
</style>
