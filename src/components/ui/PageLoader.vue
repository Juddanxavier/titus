<template>
  <Teleport to="body">
    <Transition name="page-loader">
      <div
        v-if="active"
        class="page-loader"
        role="status"
        aria-live="polite"
        :aria-busy="active"
        aria-label="Loading page"
      >
        <div class="page-loader__panel">
          <div class="page-loader__logo-wrap" aria-hidden="true">
            <img
              :src="siteConfig.logo.src"
              alt=""
              class="page-loader__logo"
              width="72"
              height="72"
            />
            <span class="page-loader__ring" />
          </div>
          <p class="page-loader__brand">{{ siteConfig.instituteName }}</p>
          <p class="page-loader__tagline">{{ siteConfig.tagline }}</p>
          <div class="page-loader__track" aria-hidden="true">
            <span class="page-loader__bar" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onUnmounted } from "vue";
import { siteConfig } from "@/data/site";

const props = defineProps({
  active: { type: Boolean, default: false },
});

function lockScroll(locked) {
  document.body.style.overflow = locked ? "hidden" : "";
}

watch(
  () => props.active,
  (v) => lockScroll(v),
  { immediate: true }
);

onUnmounted(() => lockScroll(false));
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123, 44, 191, 0.35) 0%, transparent 55%),
    linear-gradient(165deg, var(--palette-purple-950) 0%, #1a0033 45%, var(--palette-purple-900) 100%);
}

.page-loader__panel {
  width: min(100%, 22rem);
  text-align: center;
}

.page-loader__logo-wrap {
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  margin: 0 auto;
}

.page-loader__logo {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: page-loader-logo-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.page-loader__ring {
  position: absolute;
  inset: -0.35rem;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: var(--palette-orange-500);
  border-right-color: rgba(255, 133, 0, 0.35);
  animation: page-loader-spin 1.1s linear infinite;
}

.page-loader__brand {
  margin: 1.25rem 0 0;
  font-size: 1.125rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-white);
  animation: page-loader-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
}

.page-loader__tagline {
  margin: 0.5rem 0 0;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.62);
  animation: page-loader-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
}

.page-loader__track {
  margin-top: 1.75rem;
  height: 3px;
  overflow: hidden;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.12);
  animation: page-loader-fade-up 0.5s ease 0.35s both;
}

.page-loader__bar {
  display: block;
  height: 100%;
  width: 40%;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    var(--palette-orange-500),
    var(--palette-orange-400),
    var(--palette-purple-400)
  );
  animation: page-loader-progress 1.15s cubic-bezier(0.45, 0, 0.2, 1) infinite;
}

@keyframes page-loader-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes page-loader-progress {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(320%);
  }
}

@keyframes page-loader-logo-in {
  from {
    opacity: 0;
    transform: scale(0.88);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes page-loader-fade-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-loader-enter-active {
  transition: opacity 0.35s ease;
}

.page-loader-leave-active {
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.page-loader-enter-from,
.page-loader-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .page-loader__logo,
  .page-loader__brand,
  .page-loader__tagline,
  .page-loader__track {
    animation: none;
  }

  .page-loader__ring,
  .page-loader__bar {
    animation: none;
  }

  .page-loader__bar {
    width: 100%;
    transform: none;
  }
}
</style>
