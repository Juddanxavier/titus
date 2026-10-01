import { ref, nextTick } from "vue";

/** Global page-loading state — shown once on the initial visit only. */
export const isPageLoading = ref(true);

let hideTimer;
let installed = false;

function scheduleHide(ms) {
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    isPageLoading.value = false;
    document.documentElement.classList.add("app-ready");
  }, ms);
}

/**
 * Call once before mount. Wires vue-router hooks.
 * @param {import('vue-router').Router} router
 */
export function initPageLoading(router) {
  if (installed) return;
  installed = true;

  const prefersReduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  router.isReady().then(async () => {
    if (document.fonts?.ready) {
      try {
        await document.fonts.ready;
      } catch {
        /* ignore */
      }
    }
    await nextTick();
    scheduleHide(prefersReduced() ? 0 : 720);
  });

  // Route changes intentionally do NOT re-trigger the loader:
  // the overlay animates only when the site is first opened.
}
