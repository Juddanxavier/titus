import { computed, onMounted, onUnmounted, ref } from "vue";

export function useParallax(options = {}) {
  const {
    speed = 0.42,
    scale = 1.22,
    maxOffset = 200,
  } = options;

  const containerRef = ref(null);
  const offsetY = ref(0);
  let rafId = null;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function update() {
    if (!containerRef.value || prefersReducedMotion()) {
      offsetY.value = 0;
      return;
    }

    const rect = containerRef.value.getBoundingClientRect();
    const viewH = window.innerHeight;
    const progress = (viewH - rect.top) / (viewH + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const raw = (clamped - 0.5) * rect.height * speed;
    offsetY.value = Math.max(-maxOffset, Math.min(maxOffset, raw));
  }

  function onScroll() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(update);
  }

  onMounted(() => {
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    if (rafId) cancelAnimationFrame(rafId);
  });

  const imageStyle = computed(() => ({
    transform: `translate3d(0, ${offsetY.value}px, 0) scale(${scale})`,
  }));

  return { containerRef, imageStyle, offsetY };
}

/** Hero-specific: background moves with page scroll */
export function useHeroParallax(speed = 0.5) {
  const containerRef = ref(null);
  const scrollY = ref(0);
  let rafId = null;

  function update() {
    if (prefersReducedMotion()) {
      scrollY.value = 0;
      return;
    }
    scrollY.value = window.scrollY;
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function onScroll() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(update);
  }

  onMounted(() => {
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    if (rafId) cancelAnimationFrame(rafId);
  });

  const imageStyle = computed(() => {
    const y = scrollY.value * speed;
    return {
      transform: `translate3d(0, ${y}px, 0) scale(1.2)`,
    };
  });

  return { containerRef, imageStyle, scrollY };
}
