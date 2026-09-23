<template>
  <span ref="el" class="count-animate">{{ display }}</span>
</template>

<script setup>
import { ref, watch } from "vue";
import { useReveal } from "@/composables/useReveal";

const props = defineProps({
  value: { type: String, required: true },
});

const display = ref(props.value);
const { el, visible } = useReveal({ threshold: 0.3 });

watch(visible, (v) => {
  if (!v) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const match = props.value.match(/^(\[?)([X-YZ\d]+)(\]?\+?)$/);
  if (!match || match[1] === "[" || props.value.includes("[")) return;

  const num = parseInt(match[2], 10);
  const suffix = props.value.replace(/[\d]/g, "");
  if (isNaN(num)) return;

  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    display.value = Math.round(num * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  display.value = "0" + suffix;
  requestAnimationFrame(tick);
});
</script>
