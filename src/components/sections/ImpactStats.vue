<template>
  <section class="impact" aria-label="Our impact">
    <div ref="containerRef" class="impact__bg-wrap" aria-hidden="true">
      <img
        :src="images.strips.campus"
        alt=""
        class="impact__bg-img"
        :style="imageStyle"
        loading="lazy"
      />
    </div>
    <div class="impact__overlay" aria-hidden="true" />
    <div class="impact__glow impact__glow--1" aria-hidden="true" />
    <div class="impact__glow impact__glow--2" aria-hidden="true" />

    <div class="container impact__inner">
      <div class="impact__layout">
        <RevealOnScroll variant="left" class="impact__copy">
          <p class="impact__eyebrow">{{ impact.eyebrow }}</p>
          <h2 class="impact__title">{{ impact.title }}</h2>
          <p class="impact__desc">{{ impact.description }}</p>
          <ul class="impact__highlights">
            <li v-for="item in impact.highlights" :key="item.label">
              <span class="impact__highlight-value">{{ item.value }}</span>
              <span class="impact__highlight-label">{{ item.label }}</span>
            </li>
          </ul>
          <RouterLink :to="impact.cta.to" class="btn btn--gold impact__cta link-arrow">
            {{ impact.cta.label }} <span aria-hidden="true">→</span>
          </RouterLink>
        </RevealOnScroll>

        <div class="impact__mosaic">
          <RevealOnScroll variant="up" class="impact__featured">
            <p class="impact__featured-value font-display">
              <AnimatedCounter :value="featuredStat.value" />
            </p>
            <p class="impact__featured-label">{{ featuredStat.label }}</p>
            <p class="impact__featured-note">Certificate · Diploma · Advance diploma</p>
          </RevealOnScroll>

          <RevealOnScroll
            v-for="(item, i) in pathwayStats"
            :key="item.id"
            variant="up"
            :delay="80 + i * 70"
            class="impact__pathway"
          >
            <RouterLink
              v-if="item.category"
              :to="{ path: '/courses', query: { category: item.category } }"
              class="impact__pathway-link"
            >
              <span class="impact__pathway-value">
                <AnimatedCounter :value="item.value" />
              </span>
              <span class="impact__pathway-label">{{ item.label }}</span>
              <span class="impact__pathway-hint">View programmes →</span>
            </RouterLink>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import AnimatedCounter from "@/components/ui/AnimatedCounter.vue";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";
import { useParallax } from "@/composables/useParallax";

const impact = siteConfig.impactSection;

const featuredStat = computed(
  () => siteConfig.impactStats.find((s) => s.accent) ?? siteConfig.impactStats[0]
);

const pathwayStats = computed(() =>
  siteConfig.impactStats.filter((s) => !s.accent && s.category)
);

const { containerRef, imageStyle } = useParallax({ speed: 0.38, scale: 1.28, maxOffset: 200 });
</script>

<style scoped>
.impact {
  position: relative;
  padding: clamp(4rem, 8vw, 6rem) 0;
  color: var(--color-white);
  overflow: hidden;
}

.impact__bg-wrap {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.impact__bg-img {
  position: absolute;
  inset: -22% 0;
  width: 100%;
  height: 145%;
  object-fit: cover;
  will-change: transform;
  opacity: 0.45;
}

.impact__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(125deg, rgba(36, 0, 70, 0.97) 0%, rgba(54, 12, 92, 0.9) 42%, rgba(36, 0, 70, 0.85) 100%);
}

.impact__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
}

.impact__glow--1 {
  width: 420px;
  height: 420px;
  top: -10%;
  right: 5%;
  background: rgba(255, 109, 0, 0.18);
}

.impact__glow--2 {
  width: 320px;
  height: 320px;
  bottom: -5%;
  left: 10%;
  background: rgba(123, 44, 191, 0.25);
}

.impact__inner {
  position: relative;
  z-index: 1;
}

.impact__layout {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .impact__layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
    gap: 3.5rem;
  }
}

.impact__copy {
  text-align: left;
  max-width: 34rem;
}

.impact__eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.impact__title {
  margin-top: 1rem;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: var(--color-white);
}

.impact__desc {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
}

.impact__highlights {
  list-style: none;
  padding: 0;
  margin: 1.75rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.impact__highlights li {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 0.75rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.impact__highlight-value {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--palette-orange-400);
}

.impact__highlight-label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.impact__cta {
  margin-top: 1.75rem;
}

.impact__mosaic {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.875rem;
}

.impact__featured {
  grid-column: 1 / -1;
  padding: 2rem 1.75rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  text-align: center;
}

.impact__featured-value {
  font-size: clamp(3.5rem, 10vw, 4.75rem);
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(
    100deg,
    var(--palette-orange-400) 0%,
    var(--palette-orange-500) 55%,
    #fff 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.impact__featured-label {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white);
}

.impact__featured-note {
  margin-top: 0.35rem;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.55);
}

.impact__pathway {
  min-height: 100%;
}

.impact__pathway-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 7.5rem;
  padding: 1.25rem 1rem;
  border-radius: var(--radius-lg);
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  text-align: center;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s var(--ease-out-expo);
}

.impact__pathway-link:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 158, 0, 0.45);
  transform: translateY(-2px);
  text-decoration: none;
}

.impact__pathway-value {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  line-height: 1;
  color: var(--color-white);
}

.impact__pathway-label {
  margin-top: 0.35rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

.impact__pathway-hint {
  margin-top: 0.5rem;
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--palette-orange-400);
  opacity: 0;
  transform: translateY(4px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.impact__pathway-link:hover .impact__pathway-hint,
.impact__pathway-link:focus-visible .impact__pathway-hint {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 640px) {
  .impact__mosaic {
    grid-template-columns: repeat(3, 1fr);
  }

  .impact__featured {
    grid-column: 1 / -1;
  }

  .impact__pathway {
    grid-column: span 1;
  }
}

.link-arrow span {
  display: inline-block;
  transition: transform 0.25s var(--ease-out-expo);
}

.link-arrow:hover span {
  transform: translateX(4px);
}
</style>
