<template>
  <a
    :href="siteConfig.contact.whatsapp"
    class="wa-fab"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
  >
    <span aria-hidden="true">💬</span>
  </a>
</template>

<script setup>
import { siteConfig } from "@/data/site";
</script>

<style scoped>
.wa-fab {
  position: fixed;
  right: max(1rem, env(safe-area-inset-right));
  bottom: max(1rem, env(safe-area-inset-bottom));
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  font-size: 1.375rem;
  text-decoration: none;
  box-shadow: none;
  transition: transform 0.2s ease;
}

.wa-fab:hover {
  transform: scale(1.06);
  box-shadow: none;
  text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  .wa-fab { transition: none; }
  .wa-fab:hover { transform: none; }
}
</style>
