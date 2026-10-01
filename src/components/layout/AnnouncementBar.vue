<template>
  <div class="announcement" role="region" aria-label="Announcements">
    <div class="announcement__track">
      <!-- First copy is decorative (duplicate for the seamless loop) -->
      <div
        v-for="copy in 2"
        :key="copy"
        class="announcement__group"
        :aria-hidden="copy === 1 ? 'true' : 'false'"
      >
        <template v-for="(item, i) in items" :key="i">
          <span class="announcement__item">{{ item }}</span>
          <span class="announcement__sep" aria-hidden="true">✦</span>
        </template>
        <RouterLink
          :to="siteConfig.announcement.ctaHref"
          class="announcement__link"
          :tabindex="copy === 1 ? -1 : undefined"
        >
          Enroll now
        </RouterLink>
        <span class="announcement__sep" aria-hidden="true">✦</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { siteConfig } from "@/data/site";

const announcement = siteConfig.announcement;
const items = computed(() =>
  [announcement.urgency, announcement.tagline, announcement.message].filter(Boolean)
);
</script>

<style scoped>
.announcement {
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, var(--palette-purple-950) 0%, var(--palette-purple-900) 100%);
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.75rem;
}

/* Two identical groups; the track translates -50% for a seamless loop */
.announcement__track {
  display: flex;
  width: max-content;
  animation: announcement-marquee 45s linear infinite;
  will-change: transform;
}

.announcement__group {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-right: 1.25rem;
  white-space: nowrap;
}

.announcement__item {
  padding: 0.7rem 0;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.announcement__sep {
  color: var(--color-accent-bright);
  font-size: 0.55rem;
  line-height: 1;
}

.announcement__link {
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 0;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
}

.announcement__link:hover {
  color: var(--color-accent-light);
  text-decoration: none;
}

/* Let people pause the ticker to read / click the link */
.announcement:hover .announcement__track,
.announcement:focus-within .announcement__track {
  animation-play-state: paused;
}

@keyframes announcement-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .announcement__track {
    animation: none;
  }

  .announcement__group[aria-hidden="true"] {
    display: none;
  }
}
</style>
