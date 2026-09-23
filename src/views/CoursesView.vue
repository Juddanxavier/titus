<template>
  <div class="courses-page">
    <PageHeader
      title="Our programmes"
      description="Thirteen on-campus qualifications — filter by certificate, diploma, or advance diploma. Every programme includes a syllabus you can download before you apply."
      :background-image="images.pageHeaders.courses"
    />

    <section class="section section--cream courses-page__main">
      <div class="container">
        <div class="courses-intro card">
          <div class="courses-intro__copy">
            <p class="courses-intro__eyebrow">On-campus at Titus</p>
            <p class="courses-intro__text">
              Next batch <strong>{{ siteConfig.announcement.batchDate }}</strong> · English medium ·
              Syllabus available for every programme
            </p>
          </div>
          <div class="courses-intro__stats">
            <div v-for="stat in pathwayStats" :key="stat.id" class="courses-intro__stat">
              <span class="courses-intro__stat-value">{{ stat.count }}</span>
              <span class="courses-intro__stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="courses-toolbar">
          <div class="courses-toolbar__filters" role="tablist" aria-label="Filter by pathway">
            <button
              type="button"
              role="tab"
              class="courses-filter"
              :class="{ 'courses-filter--active': !categoryFilter }"
              :aria-selected="!categoryFilter"
              @click="setCategory('')"
            >
              All <span class="courses-filter__count">{{ courses.length }}</span>
            </button>
            <button
              v-for="cat in courseCategories"
              :key="cat.id"
              type="button"
              role="tab"
              class="courses-filter"
              :class="{ 'courses-filter--active': categoryFilter === cat.id }"
              :aria-selected="categoryFilter === cat.id"
              @click="setCategory(cat.id)"
            >
              {{ shortCategoryLabel(cat.label) }}
              <span class="courses-filter__count">{{ countsByCategory[cat.id] }}</span>
            </button>
          </div>
          <a
            href="/downloads/course-catalogue.md"
            download
            class="courses-toolbar__download"
          >
            Download course list
          </a>
        </div>

        <p class="courses-results">
          Showing <strong>{{ filtered.length }}</strong>
          programme{{ filtered.length === 1 ? "" : "s" }}
          <template v-if="activeCategoryLabel"> · {{ activeCategoryLabel }}</template>
        </p>

        <div v-if="filtered.length" class="courses-grid">
          <RevealOnScroll
            v-for="(course, index) in filtered"
            :key="course.slug"
            variant="up"
            :delay="(index % 6) * 50"
            class="courses-grid__cell"
          >
            <CourseCard :course="course" />
          </RevealOnScroll>
        </div>

        <p v-else class="courses-empty card">
          No programmes match this filter.
          <button type="button" class="courses-empty__btn" @click="setCategory('')">Show all</button>
        </p>

      </div>
    </section>

    <CtaBanner
      eyebrow="Admissions support"
      title="Not sure which programme fits you?"
      description="Apply with your preferred course and we will help you confirm eligibility, documents, and intake dates."
      show-contact
      panel-label="Talk to us"
      primary-label="Apply now"
      primary-to="/apply"
      secondary-label="How enrolment works"
      secondary-to="/admissions"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { courses } from "@/data/courses";
import { courseCategories } from "@/data/programmes";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/layout/PageHeader.vue";
import CourseCard from "@/components/sections/CourseCard.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";
import RevealOnScroll from "@/components/ui/RevealOnScroll.vue";

const route = useRoute();
const router = useRouter();
const categoryFilter = ref("");

const validCategories = new Set(courseCategories.map((c) => c.id));

const countsByCategory = computed(() =>
  courseCategories.reduce((acc, cat) => {
    acc[cat.id] = courses.filter((c) => c.category === cat.id).length;
    return acc;
  }, {})
);

const pathwayStats = computed(() =>
  courseCategories.map((cat) => ({
    id: cat.id,
    label: shortCategoryLabel(cat.label),
    count: countsByCategory.value[cat.id],
  }))
);

const filtered = computed(() =>
  courses.filter((c) => !categoryFilter.value || c.category === categoryFilter.value)
);

const activeCategoryLabel = computed(() => {
  if (!categoryFilter.value) return "";
  return courseCategories.find((c) => c.id === categoryFilter.value)?.label ?? "";
});

function shortCategoryLabel(label) {
  return label.replace(/ programmes$/i, "");
}

function setCategory(id) {
  categoryFilter.value = id;
  router.replace({ query: id ? { category: id } : {} });
}

watch(
  () => route.query.category,
  (value) => {
    if (typeof value === "string" && validCategories.has(value)) {
      categoryFilter.value = value;
    } else if (!value) {
      categoryFilter.value = "";
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.courses-intro {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.35rem 1.5rem;
  margin-bottom: 1.75rem;
  background: linear-gradient(
    135deg,
    rgba(90, 24, 154, 0.06) 0%,
    rgba(255, 158, 0, 0.06) 100%
  );
  border: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .courses-intro {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.courses-intro__eyebrow {
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.courses-intro__text {
  margin-top: 0.35rem;
  font-size: 0.9375rem;
  color: var(--color-muted);
  line-height: 1.5;
}

.courses-intro__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
}

.courses-intro__stat {
  text-align: center;
  min-width: 4.5rem;
}

.courses-intro__stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--palette-orange-600);
  line-height: 1;
}

.courses-intro__stat-label {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.courses-toolbar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .courses-toolbar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.courses-toolbar__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.courses-filter {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.875rem;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-ink-soft);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.courses-filter:hover {
  border-color: rgba(90, 24, 154, 0.25);
}

.courses-filter--active {
  color: var(--color-white);
  background: var(--palette-purple-700);
  border-color: var(--palette-purple-700);
}

.courses-filter__count {
  font-size: 0.6875rem;
  font-weight: 800;
  padding: 0.1rem 0.4rem;
  border-radius: var(--radius-full);
  background: rgba(0, 0, 0, 0.08);
}

.courses-filter--active .courses-filter__count {
  background: rgba(255, 255, 255, 0.2);
}

.courses-toolbar__download {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  white-space: nowrap;
}

.courses-toolbar__download:hover {
  text-decoration: underline;
}

.courses-results {
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  color: var(--color-muted);
}

.courses-grid {
  display: grid;
  gap: 1.25rem;
}

.courses-grid__cell {
  display: flex;
  min-height: 100%;
}

.courses-grid__cell > * {
  flex: 1;
  width: 100%;
}

@media (min-width: 768px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .courses-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

.courses-empty {
  padding: 2rem;
  text-align: center;
  color: var(--color-muted);
}

.courses-empty__btn {
  margin-left: 0.35rem;
  font-weight: 700;
  color: var(--color-primary);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

</style>
