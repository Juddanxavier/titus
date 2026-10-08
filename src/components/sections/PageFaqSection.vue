<template>
  <section
    v-if="entry"
    :id="headingId"
    class="section page-faq"
    :class="`section--${variant}`"
    aria-label="Frequently asked questions"
  >
    <div class="container page-faq__inner">
      <SectionHeader
        :eyebrow="entry.eyebrow"
        :title="entry.title"
        :description="entry.description"
        center
      />
      <div class="page-faq__body">
        <FaqList :items="entry.items" />
        <p class="page-faq__foot">
          Still have a question?
          <RouterLink to="/faqs" class="page-faq__link">Browse all FAQs</RouterLink>
          <span aria-hidden="true">·</span>
          <a :href="`tel:${siteConfig.contact.phoneTel}`" class="page-faq__link">
            Call admissions
          </a>
        </p>
        <p v-if="related.length" class="page-faq__foot page-faq__related">
          <span>Explore:</span>
          <template v-for="(link, i) in related" :key="link.to">
            <span v-if="i > 0" aria-hidden="true">·</span>
            <RouterLink :to="link.to" class="page-faq__link">{{ link.label }}</RouterLink>
          </template>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getPageFaq } from "@/data/pageFaqs";
import { siteConfig } from "@/data/site";
import { useFaqSchema } from "@/composables/useFaqSchema";
import SectionHeader from "@/components/sections/SectionHeader.vue";
import FaqList from "@/components/sections/FaqList.vue";

const props = defineProps({
  /** Key into src/data/pageFaqs.js — usually the route name. */
  page: { type: String, required: true },
  /** Section background: white | cream | sand | sage. */
  variant: { type: String, default: "sand" },
  /** Emit FAQPage JSON-LD for these questions (turn off on pages with their own schema). */
  schema: { type: Boolean, default: true },
  /**
   * Extra in-content links rendered under the footer — [{ to, label }].
   * Keeps every page within a few clicks of the rest of the site.
   */
  related: { type: Array, default: () => [] },
});

const entry = computed(() => getPageFaq(props.page));
const headingId = computed(() => `faq-${props.page}`);

useFaqSchema(
  () => (props.schema ? entry.value?.items ?? [] : []),
  { id: "faq-page-schema" },
);
</script>

<style scoped>
.page-faq__inner {
  display: grid;
  gap: 3rem;
}

.page-faq {
  padding-block: clamp(3.5rem, 8vw, 7.5rem);
}

.page-faq__body {
  max-width: 46rem;
  margin: 0 auto;
  width: 100%;
  padding-block: 0.5rem;
}

.page-faq__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2.25rem;
  font-size: 0.875rem;
  color: var(--color-muted);
  text-align: center;
}

.page-faq__link {
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}

.page-faq__link:hover {
  text-decoration: underline;
}

.page-faq__related {
  margin-top: 0.75rem;
}
</style>
