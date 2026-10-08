<template>
  <div class="contact-methods">
    <div v-if="hasRealEmail" class="contact-methods__item card">
      <h2>Email</h2>
      <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
    </div>
    <div class="contact-methods__item card">
      <h2>Phone</h2>
      <p><a :href="`tel:${contact.phone.replace(/\s/g, '')}`">{{ contact.phone }}</a></p>
    </div>
    <div class="contact-methods__item card">
      <h2>WhatsApp</h2>
      <p><a :href="contact.whatsapp" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></p>
    </div>
    <div class="contact-methods__item card">
      <h2>Office hours</h2>
      <p>{{ contact.hours }}</p>
      <p class="contact-methods__address">{{ contact.address }}</p>
    </div>
  </div>
</template>

<script setup>
import { siteConfig, hasRealEmail } from "@/data/site";
const contact = siteConfig.contact;
</script>

<style scoped>
.contact-methods {
  display: grid;
  gap: 1rem;
}
@media (min-width: 768px) {
  .contact-methods { grid-template-columns: repeat(2, 1fr); }
}
.contact-methods__item { padding: 1.5rem; }
.contact-methods__item h2 {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.contact-methods__item p {
  font-size: 0.875rem;
  color: var(--color-muted);
}
.contact-methods__address { margin-top: 0.5rem; }
</style>
