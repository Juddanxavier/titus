<template>
  <section class="testimonials-section section section--sand" aria-label="Trainee testimonials">
    <div class="container">
      <SectionHeader
        eyebrow="Testimonials"
        title="Voices from our trainees"
        description="Graduates across certificates and diplomas share how on-campus training at Titus shaped their practice."
        center
      />

      <div class="testimonials-section__grid">
        <RevealOnScroll
          v-for="(t, i) in testimonials"
          :key="t.id"
          variant="up"
          :delay="i * 75"
          class="testimonials-section__cell"
        >
          <TestimonialCard :testimonial="t" :index="i" />
        </RevealOnScroll>
      </div>

      <p class="testimonials-section__note">
        Names and details are illustrative placeholders — replace with verified graduate feedback before launch.
      </p>
    </div>
  </section>
</template>

<script setup>
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/sections/SectionHeader.vue";
import TestimonialCard from "@/components/sections/TestimonialCard.vue";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";
</script>

<style scoped>
.testimonials-section__grid {
  display: grid;
  gap: 1.25rem;
  margin-top: 2.5rem;
  align-items: stretch;
}

.testimonials-section__cell {
  display: flex;
  min-height: 100%;
}

.testimonials-section__cell > * {
  flex: 1;
  width: 100%;
}

@media (min-width: 768px) {
  .testimonials-section__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1280px) {
  .testimonials-section__grid {
    gap: 1.75rem;
  }
}

.testimonials-section__note {
  margin: 2rem auto 0;
  max-width: 36rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-muted);
}
</style>
