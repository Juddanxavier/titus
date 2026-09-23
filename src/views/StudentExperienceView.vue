<template>
  <div>
    <PageHeader
      title="Student experience"
      description="What to expect during your Montessori teacher-training journey."
      :background-image="images.pageHeaders.studentExperience"
    />
    <section class="section section--cream">
      <div class="container">
        <div class="exp-grid">
          <RevealOnScroll v-for="(item, i) in experiences" :key="item.title" variant="up" :delay="i * 60">
            <div class="card exp-card card-lift">
              <h2>{{ item.title }}</h2>
              <p>{{ item.text }}</p>
            </div>
          </RevealOnScroll>
        </div>
        <RevealOnScroll variant="fade" class="exp-parallax-wrap">
          <ParallaxImage
            :src="images.studentExperience.src"
            :alt="images.studentExperience.alt"
            aspect="16/7"
            :speed="0.25"
          />
        </RevealOnScroll>
        <SectionHeader title="Training in pictures" style="margin-top:3rem" />
        <div class="gallery-grid">
          <RevealOnScroll v-for="item in studentGallery" :key="item.id" variant="up">
            <figure class="gallery-item">
              <img :src="item.src" :alt="item.alt" loading="lazy" />
              <figcaption>{{ item.title }}</figcaption>
            </figure>
          </RevealOnScroll>
        </div>
        <SectionHeader title="Trainee voices" style="margin-top:3rem" />
        <div class="cards-grid">
          <RevealOnScroll v-for="(t, i) in testimonials" :key="t.id" variant="up">
            <TestimonialCard :testimonial="t" :index="i" compact />
          </RevealOnScroll>
        </div>
      </div>
    </section>
    <CtaBanner
      eyebrow="Join a cohort"
      title="Experience training on campus"
      description="Classroom practice, mentorship, and a peer community — all part of life at Titus."
      panel-label="Start here"
      primary-label="View programmes"
      primary-to="/courses"
      secondary-label="Apply now"
      secondary-to="/apply"
    />
  </div>
</template>

<script setup>
import { testimonials } from "@/data/testimonials";
import { studentGallery } from "@/data/gallery";
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import TestimonialCard from "@/components/sections/TestimonialCard.vue";
import SectionHeader from "@/components/sections/SectionHeader.vue";
import ParallaxImage from "@/components/ui/ParallaxImage.vue";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";

const experiences = [
  { title: "Classroom practice", text: "Hands-on sessions with Montessori materials in a prepared training environment." },
  { title: "Observation assignments", text: "Structured observation work that builds your skills in noticing and recording children's engagement." },
  { title: "Mentorship", text: "Regular feedback from our principal and faculty who support your growth as a reflective educator." },
  { title: "Peer community", text: "Learn alongside a cohort of educators who share your commitment to respectful practice." },
];
</script>

<style scoped>
.exp-grid {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .exp-grid { grid-template-columns: repeat(2, 1fr); }
}
.exp-card { padding: 1.5rem; height: 100%; }
.exp-card h2 {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.exp-card p { font-size: 0.875rem; color: var(--color-muted); }
.exp-parallax-wrap { margin-top: 2.5rem; display: block; }
.cards-grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
@media (min-width: 1024px) {
  .cards-grid { grid-template-columns: repeat(3, 1fr); }
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}
@media (min-width: 768px) {
  .gallery-grid { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
}
.gallery-item {
  margin: 0;
  overflow: hidden;
  border-radius: var(--card-radius);
}
.gallery-item img {
  aspect-ratio: 4 / 3;
  width: 100%;
  object-fit: cover;
}
.gallery-item figcaption {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--color-muted);
}
</style>
