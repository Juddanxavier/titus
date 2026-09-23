<template>
  <div
    ref="containerRef"
    class="parallax-image"
    :class="{ 'parallax-image--rounded': rounded }"
    :style="aspectStyle"
  >
    <img
      :src="src"
      :alt="alt"
      class="parallax-image__img"
      :style="imageStyle"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useParallax } from "@/composables/useParallax";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  speed: { type: Number, default: 0.28 },
  scale: { type: Number, default: 1.15 },
  aspect: { type: String, default: "4/3" },
  rounded: { type: Boolean, default: true },
});

const { containerRef, imageStyle } = useParallax({
  speed: props.speed,
  scale: props.scale,
});

const aspectStyle = computed(() => ({
  aspectRatio: props.aspect,
}));
</script>

<style scoped>
.parallax-image {
  position: relative;
  overflow: hidden;
  width: 100%;
  background: var(--color-sand);
  border: 1px solid var(--color-border);
}

.parallax-image--rounded {
  border-radius: var(--card-radius);
}

.parallax-image__img {
  position: absolute;
  inset: -12% 0;
  width: 100%;
  height: 124%;
  object-fit: cover;
  will-change: transform;
}
</style>
