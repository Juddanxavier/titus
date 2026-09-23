<template>
  <PageLoader v-if="!maintenanceOn" :active="isPageLoading" />
  <SiteShell v-if="!maintenanceOn">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </SiteShell>
  <RouterView v-else />
</template>

<script setup>
import SiteShell from "@/components/layout/SiteShell.vue";
import PageLoader from "@/components/ui/PageLoader.vue";
import { isPageLoading } from "@/composables/usePageLoading";

const maintenanceOn = import.meta.env.VITE_MAINTENANCE_MODE === "true";
</script>
