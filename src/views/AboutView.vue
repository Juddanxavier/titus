<template>
  <div>
    <PageHeader
      title="About us"
      description="A teacher-training institute dedicated to preparing thoughtful, capable Montessori educators."
      :background-image="images.pageHeaders.about"
    />
    <section class="section section--cream">
      <div class="container prose">
        <div class="about-grid">
          <RevealOnScroll variant="left">
            <div>
              <h2>Our mission</h2>
              <p>
                {{ siteConfig.instituteName }} exists to prepare educators who guide children with respect, patience, and understanding. We believe quality teacher training combines rigorous study with sustained practical experience.
              </p>
              <h2>Our values</h2>
              <ul>
                <li><strong>Respectful</strong> — honouring each child's unique path of development</li>
                <li><strong>Thoughtful</strong> — grounding practice in observation and reflection</li>
                <li><strong>Practical</strong> — connecting theory to daily classroom work</li>
                <li><strong>Professional</strong> — maintaining high standards of preparation and conduct</li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="right" :delay="100">
            <ParallaxImage
              :src="images.about.src"
              :alt="images.about.alt"
              :speed="0.3"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
    <CtaBanner
      eyebrow="Programmes"
      title="Explore our training programmes"
      description="Thirteen syllabus-led courses on campus — from certificate through advance diploma."
      panel-label="Next step"
      primary-label="Browse programmes"
      primary-to="/courses"
      secondary-label="Apply now"
      secondary-to="/apply"
    />
  </div>
</template>

<script setup>
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";
import ParallaxImage from "@/components/ui/ParallaxImage.vue";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";
</script>

<style scoped>
.about-grid {
  display: grid;
  gap: 2.5rem;
  align-items: start;
}
@media (min-width: 1024px) {
  .about-grid { grid-template-columns: 1fr 1fr; }
}
</style>
