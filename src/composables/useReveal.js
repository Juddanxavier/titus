import { onMounted, onUnmounted, ref } from "vue";

export function useReveal(options = {}) {
  const el = ref(null);
  const visible = ref(false);
  let observer = null;

  const {
    threshold = 0.15,
    rootMargin = "0px 0px -40px 0px",
    once = true,
  } = options;

  onMounted(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      visible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true;
          if (once && observer && el.value) observer.unobserve(el.value);
        } else if (!once) {
          visible.value = false;
        }
      },
      { threshold, rootMargin }
    );

    if (el.value) observer.observe(el.value);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { el, visible };
}
