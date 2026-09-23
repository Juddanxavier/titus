<template>
  <div class="contact-methods">
    <div class="contact-methods__item card">
      <h3>Email</h3>
      <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
    </div>
    <div class="contact-methods__item card">
      <h3>Phone</h3>
      <p><a :href="`tel:${contact.phone.replace(/\s/g, '')}`">{{ contact.phone }}</a></p>
    </div>
    <div class="contact-methods__item card">
      <h3>WhatsApp</h3>
      <p><a :href="contact.whatsapp" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></p>
    </div>
    <div class="contact-methods__item card">
      <h3>Office hours</h3>
      <p>{{ contact.hours }}</p>
      <p class="contact-methods__address">{{ contact.address }}</p>
    </div>
  </div>
</template>

<script setup>
import { siteConfig } from "@/data/site";
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
.contact-methods__item h3 {
  font-family: "Inter", sans-serif;
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
