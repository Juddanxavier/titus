<template>
  <section class="pre-footer-cta" :aria-label="ariaLabel">
    <div class="pre-footer-cta__accent" aria-hidden="true" />
    <div class="pre-footer-cta__grid" aria-hidden="true" />
    <div class="pre-footer-cta__glow pre-footer-cta__glow--1" aria-hidden="true" />
    <div class="pre-footer-cta__glow pre-footer-cta__glow--2" aria-hidden="true" />

    <div class="container pre-footer-cta__inner">
      <RevealOnScroll variant="up" class="pre-footer-cta__copy">
        <p v-if="eyebrow" class="pre-footer-cta__eyebrow">{{ eyebrow }}</p>
        <h2 class="pre-footer-cta__title">{{ title }}</h2>
        <p v-if="description" class="pre-footer-cta__desc">{{ description }}</p>
        <ul v-if="chips.length" class="pre-footer-cta__chips" :aria-label="chipsAriaLabel">
          <li v-for="item in chips" :key="item">{{ item }}</li>
        </ul>
        <p v-if="showContact" class="pre-footer-cta__contact">
          Questions?
          <a :href="`tel:${siteConfig.contact.phoneTel}`">{{ siteConfig.contact.phone }}</a>
          <span class="pre-footer-cta__sep" aria-hidden="true">·</span>
          <RouterLink to="/contact">Message admissions</RouterLink>
        </p>
      </RevealOnScroll>

      <RevealOnScroll variant="up" :delay="90" class="pre-footer-cta__panel card">
        <p v-if="panelLabel" class="pre-footer-cta__panel-label">{{ panelLabel }}</p>
        <div class="pre-footer-cta__actions">
          <RouterLink v-if="primaryTo" :to="primaryTo" class="btn btn--gold btn--lg pre-footer-cta__btn">
            {{ primaryLabel }}
          </RouterLink>
          <RouterLink
            v-if="secondaryTo"
            :to="secondaryTo"
            class="btn btn--outline btn--lg pre-footer-cta__btn"
          >
            {{ secondaryLabel }}
          </RouterLink>
        </div>
        <RouterLink v-if="tertiaryTo" :to="tertiaryTo" class="pre-footer-cta__tertiary">
          {{ tertiaryLabel }} <span aria-hidden="true">→</span>
        </RouterLink>
      </RevealOnScroll>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { siteConfig } from "@/data/site";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";

defineProps({
  ariaLabel: { type: String, default: "Take the next step" },
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  chips: { type: Array, default: () => [] },
  chipsAriaLabel: { type: String, default: "Highlights" },
  showContact: { type: Boolean, default: false },
  panelLabel: { type: String, default: "Get started" },
  primaryLabel: { type: String, default: "Apply now" },
  primaryTo: { type: String, default: "/apply" },
  secondaryLabel: { type: String, default: "" },
  secondaryTo: { type: String, default: "" },
  tertiaryLabel: { type: String, default: "" },
  tertiaryTo: { type: String, default: "" },
});
</script>

<style scoped>
.pre-footer-cta {
  position: relative;
  overflow: hidden;
  padding: clamp(2.5rem, 6vw, 4.75rem) 0;
  background: linear-gradient(
    128deg,
    var(--palette-purple-950) 0%,
    #1a0530 42%,
    var(--palette-purple-900) 100%
  );
  color: var(--color-white);
  border-top: 1px solid rgba(255, 109, 0, 0.22);
}

.pre-footer-cta__accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--palette-orange-500) 35%,
    var(--palette-orange-400) 65%,
    transparent 100%
  );
  opacity: 0.9;
}

.pre-footer-cta__grid {
  position: absolute;
  inset: 0;
  opacity: 0.35;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%);
}

.pre-footer-cta__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(88px);
  pointer-events: none;
}

.pre-footer-cta__glow--1 {
  width: min(420px, 55vw);
  height: min(420px, 55vw);
  top: -25%;
  right: 8%;
  background: rgba(255, 109, 0, 0.2);
}

.pre-footer-cta__glow--2 {
  width: min(320px, 45vw);
  height: min(320px, 45vw);
  bottom: -20%;
  left: 4%;
  background: rgba(123, 44, 191, 0.32);
}

.pre-footer-cta__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .pre-footer-cta__inner {
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(2rem, 4vw, 3.5rem);
  }
}

.pre-footer-cta__eyebrow {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--palette-orange-400);
}

.pre-footer-cta__title {
  margin-top: 0.65rem;
  font-size: clamp(1.625rem, 3.2vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.14;
  color: var(--color-white);
}

.pre-footer-cta__desc {
  margin-top: 0.875rem;
  max-width: 36rem;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.76);
}

.pre-footer-cta__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 1.35rem 0 0;
}

.pre-footer-cta__chips li {
  padding: 0.35rem 0.75rem;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-full);
}

.pre-footer-cta__contact {
  margin-top: 1.15rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.62);
}

.pre-footer-cta__contact a {
  font-weight: 700;
  color: var(--palette-orange-400);
  text-decoration: none;
}

.pre-footer-cta__contact a:hover {
  text-decoration: underline;
}

.pre-footer-cta__sep {
  margin: 0 0.35rem;
  opacity: 0.45;
}

.pre-footer-cta__panel {
  padding: 1.35rem 1.25rem;
  background: rgba(255, 255, 255, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow:
    0 24px 48px rgba(14, 6, 28, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.06) inset;
}

@media (min-width: 640px) {
  .pre-footer-cta__panel {
    padding: 1.65rem 1.75rem;
  }
}

.pre-footer-cta__panel-label {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.pre-footer-cta__actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pre-footer-cta__btn {
  width: 100%;
  justify-content: center;
}

.pre-footer-cta__tertiary {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.85rem;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-muted);
  text-decoration: none;
}

.pre-footer-cta__tertiary:hover {
  color: var(--color-primary);
}

.pre-footer-cta__tertiary span {
  transition: transform 0.2s var(--ease-out-expo);
}

.pre-footer-cta__tertiary:hover span {
  transform: translateX(3px);
}
</style>
