<template>
  <div>
    <PageHeader
      title="Montessori training FAQs"
      description="Answers to common questions about admissions, fees, schedules, and on-campus Montessori training in Poonamallee, Chennai."
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
        <p class="faq-explore">
          <span>Explore:</span>
          <RouterLink to="/courses">All programmes</RouterLink>
          <span aria-hidden="true">·</span>
          <RouterLink to="/admissions">Admissions</RouterLink>
          <span aria-hidden="true">·</span>
          <RouterLink to="/student-experience">Student experience</RouterLink>
          <span aria-hidden="true">·</span>
          <RouterLink to="/contact">Contact admissions</RouterLink>
        </p>
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
import { RouterLink } from "vue-router";
import { faqs, faqCategories } from "@/data/faqs";
import { images } from "@/data/images";
import { useFaqSchema } from "@/composables/useFaqSchema";
import PageHeader from "@/components/layout/PageHeader.vue";
import FaqList from "@/components/sections/FaqList.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";

// Every question on this page (all categories) is advertised as one FAQPage.
useFaqSchema(faqs, { id: "faq-page-schema" });

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
  display: inline-flex;
  align-items: center;
  min-height: 44px;
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
.faq-explore {
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
.faq-explore a {
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}
.faq-explore a:hover {
  text-decoration: underline;
}
</style>
