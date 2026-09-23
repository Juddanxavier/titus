<template>
  <section class="section section--cream" aria-label="Instagram feed">
    <div class="container">
      <SectionHeader
        :eyebrow="siteConfig.instagram.title"
        :title="siteConfig.instagram.handle"
        :description="siteConfig.instagram.description"
        center
      />
      <div class="insta__grid">
        <figure v-for="item in previewItems" :key="item.id" class="insta__cell">
          <img :src="item.src" :alt="item.alt" loading="lazy" />
        </figure>
      </div>
      <div class="insta__cta">
        <a
          :href="siteConfig.instagram.profileUrl"
          class="btn btn--outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View profile
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig } from "@/data/site";
import { studentGallery } from "@/data/gallery";
import SectionHeader from "@/components/sections/SectionHeader.vue";

const previewItems = studentGallery.slice(0, 6);
</script>

<style scoped>
.insta__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 2.5rem;
}

@media (min-width: 768px) {
  .insta__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

.insta__cell {
  margin: 0;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 1;
}

.insta__cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s var(--ease-out-expo);
}

.insta__cell:hover img {
  transform: scale(1.04);
}

.insta__cta {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
</style>
