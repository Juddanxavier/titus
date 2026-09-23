<template>
  <section class="principal" :class="{ 'principal--compact': compact }">
    <div class="principal__layout">
      <RevealOnScroll variant="left" class="principal__media">
        <figure class="principal__figure">
          <img :src="principal.imageSrc" :alt="principal.imageAlt" class="principal__image" loading="lazy" />
        </figure>
      </RevealOnScroll>

      <RevealOnScroll variant="right" :delay="80" class="principal__copy">
        <p class="eyebrow">{{ principal.greeting }}</p>
        <h2 class="principal__name">{{ principal.name }}</h2>
        <p class="principal__role">{{ principal.title }}, {{ principal.institute }}</p>
        <p class="principal__intro">{{ principal.intro }}</p>
        <ul class="principal__focus">
          <li v-for="item in principal.focusAreas" :key="item">
            <span class="principal__check" aria-hidden="true">✓</span>
            {{ item }}
          </li>
        </ul>
        <blockquote v-if="compact && principal.quote.text" class="principal__quote">
          <p>{{ principal.quote.text }}</p>
        </blockquote>
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup>
import { principal } from "@/data/principal";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";

defineProps({
  compact: { type: Boolean, default: false },
});
</script>

<style scoped>
.principal--compact {
  margin-top: 2.5rem;
}

.principal__layout {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .principal__layout {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 3.5rem;
  }
}

.principal__figure {
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.principal__image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center top;
}

.principal__name {
  margin-top: 0.75rem;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-ink);
}

.principal__role {
  margin-top: 0.35rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
}

.principal__intro {
  margin-top: 1.25rem;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.principal__bio {
  margin-top: 1rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.principal__focus {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
}

.principal__focus li {
  display: flex;
  gap: 0.625rem;
  align-items: flex-start;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: var(--color-ink-soft);
  border-bottom: 1px solid var(--color-border);
}

.principal__check {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.5625rem;
  font-weight: 800;
  margin-top: 0.15rem;
}

.principal__quote {
  margin: 1.5rem 0 0;
  padding: 1.25rem 1.5rem;
  border-left: 3px solid var(--palette-orange-500);
  background: rgba(90, 24, 154, 0.05);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.principal__quote p {
  font-size: 0.9375rem;
  font-style: italic;
  line-height: 1.6;
  color: var(--color-ink-soft);
}

.link-arrow span {
  display: inline-block;
  transition: transform 0.25s var(--ease-out-expo);
}

.link-arrow:hover span {
  transform: translateX(4px);
}
</style>
