<template>
  <div class="maintenance">
    <div class="maintenance__card">
      <img
        :src="siteConfig.logo.src"
        :alt="siteConfig.logo.alt"
        class="maintenance__logo"
        width="200"
        height="56"
      />
      <h1 class="maintenance__title">{{ siteConfig.maintenance.title }}</h1>
      <p class="maintenance__text">{{ siteConfig.maintenance.message }}</p>
      <div class="maintenance__actions">
        <a :href="`tel:${siteConfig.contact.phoneTel}`" class="btn btn--gold btn--lg">
          Call {{ siteConfig.contact.phone }}
        </a>
        <a
          :href="siteConfig.contact.whatsapp"
          class="btn btn--outline-dark btn--lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { siteConfig } from "@/data/site";
</script>

<style scoped>
.maintenance {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: linear-gradient(145deg, var(--palette-purple-950) 0%, var(--palette-purple-900) 55%, #1a0530 100%);
}

.maintenance__card {
  width: 100%;
  max-width: 28rem;
  padding: 2rem 1.75rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
}

.maintenance__logo {
  display: block;
  height: 3.5rem;
  width: auto;
  max-width: 200px;
  margin: 0 auto 1.5rem;
  object-fit: contain;
}

.maintenance__title {
  margin: 0;
  font-size: clamp(1.5rem, 5vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-white);
}

.maintenance__text {
  margin: 0.75rem 0 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
}

.maintenance__actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.maintenance__actions .btn {
  width: 100%;
  justify-content: center;
}
</style>
