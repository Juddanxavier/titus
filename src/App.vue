<template>
  <PageLoader :active="isPageLoading" />
  <SiteShell>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </SiteShell>
</template>

<script setup>
import SiteShell from "@/components/layout/SiteShell.vue";
import PageLoader from "@/components/ui/PageLoader.vue";
import { isPageLoading } from "@/composables/usePageLoading";
</script>
