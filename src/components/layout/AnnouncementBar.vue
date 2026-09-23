<template>
  <div class="announcement" role="region" aria-label="Batch announcement">
    <div class="container announcement__inner">
      <p class="announcement__urgency">
        <span class="announcement__dot" aria-hidden="true" />
        {{ siteConfig.announcement.urgency }}
      </p>
      <RouterLink :to="siteConfig.announcement.ctaHref" class="announcement__link">
        Enroll now
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { siteConfig } from "@/data/site";
</script>

<style scoped>
.announcement {
  display: none;
  background: linear-gradient(90deg, var(--palette-purple-950) 0%, var(--palette-purple-900) 100%);
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.75rem;
}

@media (min-width: 768px) {
  .announcement {
    display: block;
  }
}

.announcement__inner {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 0.5rem 0;
}

@media (min-width: 640px) {
  .announcement__inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}

.announcement__urgency {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 0;
  font-weight: 600;
  line-height: 1.45;
  font-size: clamp(0.6875rem, 2.8vw, 0.75rem);
}

.announcement__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-bright);
  flex-shrink: 0;
}

.announcement__link {
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  align-self: flex-start;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

@media (min-width: 640px) {
  .announcement__link {
    white-space: nowrap;
    min-height: auto;
  }
}

.announcement__link:hover {
  color: var(--color-accent-light);
  text-decoration: none;
}
</style>
