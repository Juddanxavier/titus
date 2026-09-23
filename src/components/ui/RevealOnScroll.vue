<template>
  <component
    :is="tag"
    ref="el"
    class="reveal"
    :class="[
      `reveal--${variant}`,
      { 'reveal--visible': visible },
    ]"
    :style="delayStyle"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useReveal } from "@/composables/useReveal";

const props = defineProps({
  tag: { type: String, default: "div" },
  variant: {
    type: String,
    default: "up",
    validator: (v) => ["up", "down", "left", "right", "fade", "scale"].includes(v),
  },
  delay: { type: Number, default: 0 },
  threshold: { type: Number, default: 0.12 },
});

const { el, visible } = useReveal({ threshold: props.threshold });

const delayStyle = computed(() =>
  props.delay ? { transitionDelay: `${props.delay}ms` } : undefined
);
</script>
