<template>
  <a href="#main-content" class="sr-only">Skip to main content</a>
  <AnnouncementBar />
  <SiteHeader />
  <main id="main-content">
    <slot />
  </main>
  <SiteFooter />
  <WhatsAppFab />
</template>

<script setup>
import AnnouncementBar from "./AnnouncementBar.vue";
import SiteHeader from "./SiteHeader.vue";
import SiteFooter from "./SiteFooter.vue";
import WhatsAppFab from "@/components/ui/WhatsAppFab.vue";
</script>
