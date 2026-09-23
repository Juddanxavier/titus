<template>
  <div>
    <PageHeader
      title="FAQs"
      description="Answers to common questions about admissions, on-campus courses, fees, and schedules."
      :background-image="images.pageHeaders.faqs"
    />
    <section class="section section--cream">
      <div class="container">
        <div class="faq-tabs" role="tablist" aria-label="FAQ categories">
          <button
            v-for="cat in faqCategories"
            :key="cat.id"
            type="button"
            role="tab"
            :aria-selected="activeCategory === cat.id"
            :class="['faq-tab', { active: activeCategory === cat.id }]"
            @click="activeCategory = cat.id"
          >
            {{ cat.label }}
          </button>
        </div>
        <FaqList :items="filteredFaqs" />
      </div>
    </section>
    <CtaBanner
      eyebrow="Still have questions?"
      title="We are here to help"
      description="If your question is not covered above, reach admissions by phone or message — we will walk you through programmes and enrolment."
      show-contact
      panel-label="Connect"
      primary-label="Contact admissions"
      primary-to="/contact"
      secondary-label="Apply now"
      secondary-to="/apply"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { faqs, faqCategories } from "@/data/faqs";
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import FaqList from "@/components/sections/FaqList.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";

const activeCategory = ref("admissions");
const filteredFaqs = computed(() => faqs.filter((f) => f.category === activeCategory.value));
</script>

<style scoped>
.faq-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.faq-tab {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-white);
  font-family: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  color: var(--color-muted);
}
.faq-tab.active,
.faq-tab:hover {
  background: var(--color-muted-bg);
  color: var(--color-navy);
  border-color: var(--color-primary);
}
</style>
