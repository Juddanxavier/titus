<template>
  <section
    ref="containerRef"
    class="parallax-strip"
    :class="`parallax-strip--${size}`"
    :aria-hidden="!label"
  >
    <img
      :src="src"
      alt=""
      class="parallax-strip__img"
      :style="imageStyle"
      loading="lazy"
    />
    <div class="parallax-strip__overlay" :class="`parallax-strip__overlay--${overlay}`" />
    <p v-if="label" class="parallax-strip__label container">{{ label }}</p>
  </section>
</template>

<script setup>
import { useParallax } from "@/composables/useParallax";

const props = defineProps({
  src: { type: String, required: true },
  size: { type: String, default: "md" },
  overlay: { type: String, default: "fade" },
  label: { type: String, default: "" },
  speed: { type: Number, default: 0.35 },
});

const { containerRef, imageStyle } = useParallax({
  speed: props.speed,
  scale: 1.28,
  maxOffset: 200,
});
</script>

<style scoped>
.parallax-strip {
  position: relative;
  overflow: hidden;
}

.parallax-strip--sm { height: clamp(180px, 22vh, 260px); }
.parallax-strip--md { height: clamp(220px, 32vh, 380px); }
.parallax-strip--lg { height: clamp(280px, 42vh, 520px); }
.parallax-strip--xl { height: clamp(340px, 50vh, 620px); }

.parallax-strip__img {
  position: absolute;
  inset: -25% 0;
  width: 100%;
  height: 150%;
  object-fit: cover;
  will-change: transform;
}

.parallax-strip__overlay {
  position: absolute;
  inset: 0;
}

.parallax-strip__overlay--fade {
  background: linear-gradient(
    180deg,
    var(--color-bg) 0%,
    transparent 25%,
    transparent 75%,
    var(--color-bg) 100%
  );
}

.parallax-strip__overlay--dark {
  background: linear-gradient(
    180deg,
    rgba(14, 22, 25, 0.7) 0%,
    rgba(14, 22, 25, 0.2) 50%,
    rgba(14, 22, 25, 0.7) 100%
  );
}

.parallax-strip__overlay--gold {
  background: linear-gradient(
    180deg,
    rgba(250, 248, 244, 0.88) 0%,
    rgba(250, 248, 244, 0.25) 50%,
    rgba(250, 248, 244, 0.88) 100%
  );
}

.parallax-strip__overlay--light {
  background: rgba(246, 248, 251, 0.35);
}

.parallax-strip__label {
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  z-index: 1;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: var(--color-white);
  text-shadow: none;
}
</style>
