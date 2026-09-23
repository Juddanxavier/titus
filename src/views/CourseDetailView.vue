<template>
  <div v-if="!course">
    <PageHeader
      title="Course not found"
      description="The course you are looking for does not exist."
      :background-image="images.pageHeaders.courseDetail"
    />
    <section class="section section--cream">
      <div class="container">
        <RouterLink to="/courses" class="btn btn--primary">Browse all courses</RouterLink>
      </div>
    </section>
  </div>
  <div v-else>
    <PageHeader
      :title="course.name"
      :description="course.shortDescription"
      :background-image="images.pageHeaders.courseDetail"
    />
    <section class="section section--cream">
      <div class="container detail">
        <aside class="detail__sidebar card">
          <dl class="sidebar-meta">
            <div><dt>Duration</dt><dd>{{ course.duration }}</dd></div>
            <div><dt>Format</dt><dd>{{ course.format }}</dd></div>
            <div><dt>Eligibility</dt><dd>{{ course.eligibility }}</dd></div>
            <div><dt>Medium</dt><dd>{{ course.medium }}</dd></div>
            <div><dt>Age group</dt><dd>{{ course.ageGroup }}</dd></div>
            <div><dt>Location</dt><dd>{{ course.location }}</dd></div>
            <div><dt>Next batch</dt><dd>{{ course.nextBatch }}</dd></div>
            <div><dt>Fees</dt><dd>{{ course.fees.currency }} {{ course.fees.amount }}</dd></div>
          </dl>
          <a
            v-if="course.syllabusPdf"
            :href="course.syllabusPdf"
            class="btn btn--outline btn--block"
            download
          >
            Download syllabus
          </a>
          <RouterLink :to="`/apply?course=${course.slug}`" class="btn btn--primary btn--block">Apply for this course</RouterLink>
        </aside>

        <div class="detail__content prose">
          <h2>Course overview</h2>
          <p>{{ course.overview }}</p>

          <h2>Who should apply</h2>
          <ul><li v-for="item in course.whoShouldApply" :key="item">{{ item }}</li></ul>

          <h2>Learning outcomes</h2>
          <ul><li v-for="item in course.learningOutcomes" :key="item">{{ item }}</li></ul>

          <h2>Syllabus</h2>
          <p>
            Full programme content is in the official syllabus.
            <a v-if="course.syllabusPdf" :href="course.syllabusPdf" download>Download syllabus</a>
          </p>

          <h2 v-if="courseModules.length">Curriculum modules</h2>
          <ModuleList v-if="courseModules.length" :modules="courseModules" />

          <h2>Practical learning</h2>
          <p>{{ course.practicalLearning }}</p>

          <h2>Assessment</h2>
          <p>{{ course.assessment }}</p>

          <h2>Certificate information</h2>
          <p>{{ course.certificateInfo }}</p>

          <h2>Fees and payment</h2>
          <p>{{ course.fees.note }}</p>
          <ul><li v-for="opt in course.paymentOptions" :key="opt">{{ opt }}</li></ul>

          <h2>Frequently asked questions</h2>
          <FaqList :items="courseFaqs" />
        </div>
      </div>
    </section>
    <CtaBanner
      eyebrow="Enrolment"
      title="Ready to apply?"
      :description="`Next batch starts ${course.nextBatch}. Submit your application or speak with admissions if you have questions.`"
      show-contact
      panel-label="This programme"
      primary-label="Apply now"
      primary-to="/apply"
      secondary-label="Admissions guide"
      secondary-to="/admissions"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { getCourseBySlug } from "@/data/courses";
import { curriculumModules } from "@/data/curriculum";
import PageHeader from "@/components/layout/PageHeader.vue";
import { images } from "@/data/images";
import ModuleList from "@/components/sections/ModuleList.vue";
import FaqList from "@/components/sections/FaqList.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";

const route = useRoute();
const course = computed(() => {
  const slug = route.params.slug;
  const id = Array.isArray(slug) ? slug[0] : slug;
  return id ? getCourseBySlug(id) : undefined;
});

const courseModules = computed(() => {
  const ids = course.value?.modules;
  if (!ids?.length) return [];
  return curriculumModules.filter((m) => ids.includes(m.id));
});

const courseFaqs = computed(() =>
  (course.value?.faqs || []).map((f, i) => ({ id: `cf-${i}`, ...f }))
);
</script>

<style scoped>
.detail {
  display: grid;
  gap: 2.5rem;
}
@media (min-width: 1024px) {
  .detail { grid-template-columns: 280px 1fr; align-items: start; }
}
.detail__sidebar {
  padding: 1.5rem;
  position: sticky;
  top: 5rem;
}
.sidebar-meta {
  display: grid;
  gap: 1rem;
  margin: 0 0 1.5rem;
  font-size: 0.875rem;
}
.sidebar-meta dt { font-weight: 600; color: var(--color-ink); }
.sidebar-meta dd { margin: 0.125rem 0 0; color: var(--color-muted); }
.detail__sidebar .btn--outline { margin-bottom: 0.75rem; }
</style>
