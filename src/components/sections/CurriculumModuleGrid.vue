<template>
  <div class="curriculum-path">
    <section
      v-for="group in moduleGroups"
      :key="group.id"
      :id="`part-${group.id}`"
      class="curriculum-part"
      :aria-labelledby="`curriculum-part-title-${group.id}`"
    >
      <RevealOnScroll variant="up">
        <header class="curriculum-part__header">
          <div class="curriculum-part__badge">{{ group.eyebrow }}</div>
          <div class="curriculum-part__head-copy">
            <h2 :id="`curriculum-part-title-${group.id}`" class="curriculum-part__title">
              {{ group.title }}
            </h2>
            <p class="curriculum-part__blurb">{{ group.blurb }}</p>
          </div>
          <span class="curriculum-part__count" aria-hidden="true">
            {{ group.items.length }} module{{ group.items.length === 1 ? "" : "s" }}
          </span>
        </header>
      </RevealOnScroll>

      <ol class="curriculum-timeline">
        <RevealOnScroll
          v-for="({ mod, index }, i) in group.items"
          :key="mod.id"
          variant="up"
          :delay="i * 55"
          class="curriculum-timeline__wrap"
        >
          <li class="curriculum-timeline__item">
            <div class="curriculum-timeline__rail" aria-hidden="true">
              <span class="curriculum-timeline__dot">{{ String(index + 1).padStart(2, "0") }}</span>
            </div>
            <article :id="`module-${mod.id}`" class="curriculum-module card">
              <h3 class="curriculum-module__title">{{ mod.title }}</h3>
              <p class="curriculum-module__desc">{{ mod.description }}</p>
              <ul class="curriculum-module__topics" :aria-label="`Topics in ${mod.title}`">
                <li v-for="topic in mod.topics" :key="topic">{{ topic }}</li>
              </ul>
            </article>
          </li>
        </RevealOnScroll>
      </ol>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { curriculumParts } from "@/data/curriculum";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";

const props = defineProps({
  modules: { type: Array, required: true },
});

const moduleGroups = computed(() =>
  curriculumParts.map((def) => {
    const slice = props.modules.slice(def.slice[0], def.slice[1]);
    return {
      id: def.id,
      eyebrow: def.eyebrow,
      title: def.title,
      blurb: def.blurb,
      items: slice.map((mod, i) => ({
        mod,
        index: def.slice[0] + i,
      })),
    };
  })
);
</script>

<style scoped>
.curriculum-path {
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 6vw, 4rem);
}

.curriculum-part {
  scroll-margin-top: 7rem;
}

.curriculum-part__header {
  display: grid;
  gap: 0.75rem 1rem;
  padding: 1.25rem 1.35rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    125deg,
    rgba(90, 24, 154, 0.07) 0%,
    rgba(255, 158, 0, 0.06) 100%
  );
  border: 1px solid var(--color-border);
  border-radius: var(--card-radius);
}

@media (min-width: 768px) {
  .curriculum-part__header {
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
}

.curriculum-part__badge {
  display: inline-flex;
  align-self: start;
  padding: 0.35rem 0.65rem;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-dark);
  background: var(--color-primary-subtle);
  border-radius: var(--radius-full);
}

.curriculum-part__title {
  font-family: var(--font-sans);
  font-size: clamp(1.2rem, 2.4vw, 1.45rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-ink);
}

.curriculum-part__blurb {
  margin-top: 0.35rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-muted);
  max-width: 40rem;
}

.curriculum-part__count {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-muted);
  white-space: nowrap;
}

.curriculum-timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.curriculum-timeline__wrap {
  display: block;
}

.curriculum-timeline__item {
  display: grid;
  grid-template-columns: 3.25rem 1fr;
  gap: 1rem;
  padding-bottom: 1.25rem;
}

.curriculum-timeline__item:last-child {
  padding-bottom: 0;
}

.curriculum-timeline__rail {
  position: relative;
  display: flex;
  justify-content: center;
}

.curriculum-timeline__rail::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: -1.25rem;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    var(--palette-purple-600) 0%,
    rgba(255, 109, 0, 0.45) 100%
  );
  opacity: 0.35;
}

.curriculum-timeline__item:last-child .curriculum-timeline__rail::before {
  bottom: 50%;
}

.curriculum-timeline__dot {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.6875rem;
  font-weight: 800;
  color: var(--color-white);
  background: linear-gradient(145deg, var(--palette-purple-700), var(--palette-purple-900));
  border: 2px solid var(--color-surface);
  border-radius: var(--radius-full);
  box-shadow: 0 0 0 3px rgba(90, 24, 154, 0.12);
}

.curriculum-module {
  padding: 1.35rem 1.5rem;
  scroll-margin-top: 7rem;
  transition: border-color 0.2s ease, transform 0.2s var(--ease-out-expo);
}

.curriculum-module:hover {
  border-color: var(--color-border-strong);
  transform: translateX(4px);
}

.curriculum-module__title {
  font-family: var(--font-sans);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--color-ink);
}

.curriculum-module__desc {
  margin-top: 0.65rem;
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.curriculum-module__topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

.curriculum-module__topics li {
  padding: 0.3rem 0.65rem;
  font-size: 0.6875rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-ink-soft);
  background: var(--color-muted-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
}
</style>
