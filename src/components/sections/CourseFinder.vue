<template>
  <section id="course-finder" class="section section--sage">
    <div class="container">
      <SectionHeader
        title="Not sure where to start?"
        description="Tell us your background and goals — we will suggest a certificate, diploma, or advance diploma from our 13 on-campus programmes."
        center
      />

      <div class="finder card">
        <div class="finder__progress" aria-hidden="true">
          <div class="finder__progress-bar" :style="{ width: `${progress}%` }" />
        </div>

        <Transition name="finder-fade" mode="out-in">
          <div v-if="!done && currentQuestion" :key="currentQuestion.id">
            <p class="finder__step">
              Question {{ step + 1 }} of {{ courseFinderQuestions.length }}
            </p>
            <h3 class="finder__question">{{ currentQuestion.question }}</h3>
            <fieldset class="finder__options">
              <label
                v-for="opt in currentQuestion.options"
                :key="opt.value"
                class="finder__option"
                :class="{ 'finder__option--selected': answers[currentQuestion.id] === opt.value }"
              >
                <input
                  type="radio"
                  :name="currentQuestion.id"
                  :value="opt.value"
                  :checked="answers[currentQuestion.id] === opt.value"
                  @change="select(opt.value)"
                />
                <span>{{ opt.label }}</span>
              </label>
            </fieldset>
          </div>

          <div v-else-if="done && resultMeta" key="result">
            <p class="finder__result-label">Suggested starting point</p>
            <h3 class="finder__result-title">{{ resultMeta.title }}</h3>
            <p class="finder__result-text">{{ resultMeta.description }}</p>
            <p class="finder__disclaimer">
              This recommendation is a guide only. Admissions can help confirm the best fit for your goals.
            </p>
            <div class="finder__actions">
              <RouterLink
                v-if="resultMeta.courseSlug"
                :to="`/courses/${resultMeta.courseSlug}`"
                class="btn btn--primary"
              >
                View suggested course
              </RouterLink>
              <RouterLink to="/contact" class="btn btn--outline">Contact admissions</RouterLink>
            </div>
          </div>
        </Transition>

        <div class="finder__nav">
          <button
            v-if="step > 0 || done"
            type="button"
            class="btn btn--outline"
            @click="back"
          >
            Back
          </button>
          <button
            v-if="!done"
            type="button"
            class="btn btn--primary"
            :disabled="!answers[currentQuestion?.id]"
            @click="next"
          >
            Next
          </button>
          <button
            v-if="done"
            type="button"
            class="btn btn--outline"
            @click="restart"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  courseFinderQuestions,
  recommendCourse,
  resultMeta as resultMetaMap,
} from "@/data/courseFinder";
import SectionHeader from "@/components/sections/SectionHeader.vue";

const step = ref(0);
const answers = ref({});
const done = ref(false);

const currentQuestion = computed(() => courseFinderQuestions[step.value]);
const progress = computed(() =>
  done.value ? 100 : ((step.value + 1) / courseFinderQuestions.length) * 100
);
const resultKey = computed(() => (done.value ? recommendCourse(answers.value) : null));
const resultMeta = computed(() =>
  resultKey.value ? resultMetaMap[resultKey.value] : null
);

function select(value) {
  answers.value = { ...answers.value, [currentQuestion.value.id]: value };
}

function next() {
  if (step.value < courseFinderQuestions.length - 1) step.value += 1;
  else done.value = true;
}

function back() {
  if (done.value) done.value = false;
  else if (step.value > 0) step.value -= 1;
}

function restart() {
  step.value = 0;
  answers.value = {};
  done.value = false;
}
</script>

<style scoped>
.finder {
  max-width: 36rem;
  margin: 3rem auto 0;
  padding: 2rem;
}

.finder__progress {
  height: 0.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 999px;
  background: var(--color-muted-bg);
}

.finder__progress-bar {
  height: 100%;
  background: var(--color-primary);
  transition: width 0.35s var(--ease-out-expo);
}

.finder__step {
  font-size: 0.875rem;
  color: var(--color-muted);
}

.finder__question {
  margin-top: 0.5rem;
  font-family: var(--font-sans);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-ink);
}

.finder__options {
  margin: 1.25rem 0 0;
  padding: 0;
  border: 0;
}

.finder__option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 3rem;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.finder__option--selected {
  border-color: var(--color-primary);
  background: rgba(90, 24, 154, 0.08);
}

.finder__option input {
  accent-color: var(--color-primary);
}

.finder__result-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
}

.finder__result-title {
  margin-top: 0.5rem;
  font-family: var(--font-sans);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-ink);
}

.finder__result-text {
  margin-top: 0.5rem;
  color: var(--color-muted);
}

.finder__disclaimer {
  margin-top: 1rem;
  font-size: 0.75rem;
  color: var(--color-muted);
}

.finder__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.finder__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.finder-fade-enter-active,
.finder-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.finder-fade-enter-from {
  opacity: 0;
  transform: translateX(12px);
}

.finder-fade-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}

@media (prefers-reduced-motion: reduce) {
  .finder-fade-enter-active,
  .finder-fade-leave-active {
    transition: none;
  }
}
</style>
