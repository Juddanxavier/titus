<template>
  <section class="channels" aria-label="Contact options">
    <div class="container channels__grid">
      <a :href="`mailto:${siteConfig.contact.email}`" class="channels__card card card-lift">
        <span class="channels__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" />
          </svg>
        </span>
        <div>
          <p class="channels__title">Email us</p>
          <p class="channels__text">Send a message anytime</p>
          <span class="channels__cta">Get in touch →</span>
        </div>
      </a>
      <a
        :href="siteConfig.contact.whatsapp"
        class="channels__card card card-lift"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="channels__icon channels__icon--wa" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.2 13.8c-.2.55-1.17 1.05-1.62 1.12-.42.06-.96.09-1.39-.1-.32-.14-.74-.36-1.28-.7-2.25-1.55-3.72-3.48-3.83-3.64-.11-.16-.91-1.21-.91-2.31 0-1.1.58-1.64.78-1.87.2-.23.44-.29.59-.29.15 0 .3 0 .43.01.14.01.32-.05.5.38.18.44.62 1.52.67 1.63.05.11.08.24.02.38-.06.15-.09.24-.18.37-.09.13-.19.29-.27.39-.09.1-.18.21-.08.41.1.2.44.73.95 1.18.65.58 1.2.76 1.4.85.2.09.32.08.44-.05.12-.13.5-.58.64-.78.14-.2.27-.17.46-.1.19.07 1.2.57 1.41.67.21.1.35.15.4.23.05.08.05.47-.15 1.02z" />
          </svg>
        </span>
        <div>
          <p class="channels__title">WhatsApp</p>
          <p class="channels__text">Chat with admissions</p>
          <span class="channels__cta">Message now →</span>
        </div>
      </a>
      <a :href="`tel:${siteConfig.contact.phoneTel}`" class="channels__card card card-lift">
        <span class="channels__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M6.5 4h3l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5v3A2 2 0 0 1 18 20 16 16 0 0 1 4 6.5 2 2 0 0 1 6.5 4z" />
          </svg>
        </span>
        <div>
          <p class="channels__title">Call us</p>
          <p class="channels__text">{{ siteConfig.contact.phone }}</p>
          <span class="channels__cta">Call now →</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { siteConfig } from "@/data/site";
</script>

<style scoped>
.channels {
  position: relative;
  z-index: 2;
  margin-top: -1.5rem;
  padding-bottom: 0.5rem;
}

.channels__grid {
  display: grid;
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .channels__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

.channels__card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  text-decoration: none;
  color: inherit;
}

.channels__card:hover {
  text-decoration: none;
  border-color: rgba(90, 24, 154, 0.18);
}

.channels__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: var(--radius-sm);
  background: var(--color-primary-subtle);
  color: var(--color-primary);
}

.channels__icon--wa {
  background: rgba(37, 211, 102, 0.12);
  color: #16a34a;
}

.channels__title {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-ink);
}

.channels__text {
  margin-top: 0.2rem;
  font-size: 0.8125rem;
  color: var(--color-muted);
}

.channels__cta {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
}
</style>
