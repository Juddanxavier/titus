<template>
  <div class="application-form">
    <div v-if="submitted" class="alert alert--success" role="status">
      <strong>Application submitted successfully.</strong>
      <p>Thank you, {{ form.fullName }}. Our admissions team will review your application and contact you at {{ form.email }}.</p>
    </div>

    <template v-else>
      <nav class="step-indicator" aria-label="Application progress">
        <ol>
          <li
            v-for="(label, i) in stepLabels"
            :key="label"
            :class="{ active: step === i + 1, done: step > i + 1 }"
            :aria-current="step === i + 1 ? 'step' : undefined"
          >
            <span class="step-indicator__num">{{ i + 1 }}</span>
            <span class="step-indicator__label">{{ label }}</span>
          </li>
        </ol>
      </nav>

      <div v-if="serverError" class="alert alert--error" role="alert">{{ serverError }}</div>

      <form @submit.prevent="handleSubmit">
        <!-- Step 1 -->
        <fieldset v-show="step === 1" class="form-step">
          <legend class="sr-only">Personal details</legend>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="fullName">Full name *</label>
              <input id="fullName" v-model="form.fullName" class="form-input" type="text" autocomplete="name" />
              <p v-if="errors.fullName" class="form-error">⚠ {{ errors.fullName }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="dateOfBirth">Date of birth *</label>
              <input id="dateOfBirth" v-model="form.dateOfBirth" class="form-input" type="date" />
              <p v-if="errors.dateOfBirth" class="form-error">⚠ {{ errors.dateOfBirth }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email *</label>
              <input id="email" v-model="form.email" class="form-input" type="email" autocomplete="email" />
              <p v-if="errors.email" class="form-error">⚠ {{ errors.email }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="phone">Phone *</label>
              <input id="phone" v-model="form.phone" class="form-input" type="tel" autocomplete="tel" />
              <p v-if="errors.phone" class="form-error">⚠ {{ errors.phone }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="whatsapp">WhatsApp number</label>
              <input id="whatsapp" v-model="form.whatsapp" class="form-input" type="tel" />
            </div>
            <div class="form-group">
              <label class="form-label" for="city">City *</label>
              <input id="city" v-model="form.city" class="form-input" type="text" />
              <p v-if="errors.city" class="form-error">⚠ {{ errors.city }}</p>
            </div>
            <div class="form-group">
              <label class="form-label" for="country">Country *</label>
              <input id="country" v-model="form.country" class="form-input" type="text" />
              <p v-if="errors.country" class="form-error">⚠ {{ errors.country }}</p>
            </div>
          </div>
        </fieldset>

        <!-- Step 2 -->
        <fieldset v-show="step === 2" class="form-step">
          <legend class="sr-only">Educational and professional background</legend>
          <div class="form-group">
            <label class="form-label" for="highestQualification">Highest qualification *</label>
            <input id="highestQualification" v-model="form.highestQualification" class="form-input" type="text" />
            <p v-if="errors.highestQualification" class="form-error">⚠ {{ errors.highestQualification }}</p>
          </div>
          <div class="form-group">
            <label class="form-label" for="teachingExperience">Teaching experience *</label>
            <select id="teachingExperience" v-model="form.teachingExperience" class="form-select">
              <option value="">Select experience</option>
              <option value="none">No formal teaching experience</option>
              <option value="less-than-1">Less than 1 year</option>
              <option value="1-3">1–3 years</option>
              <option value="3-plus">More than 3 years</option>
            </select>
            <p v-if="errors.teachingExperience" class="form-error">⚠ {{ errors.teachingExperience }}</p>
          </div>
          <div class="form-group">
            <label class="form-label" for="currentOccupation">Current occupation *</label>
            <input id="currentOccupation" v-model="form.currentOccupation" class="form-input" type="text" />
            <p v-if="errors.currentOccupation" class="form-error">⚠ {{ errors.currentOccupation }}</p>
          </div>
        </fieldset>

        <!-- Step 3 -->
        <fieldset v-show="step === 3" class="form-step">
          <legend class="sr-only">Course preference</legend>
          <div class="form-group">
            <label class="form-label" for="coursePreference">Course preference *</label>
            <select id="coursePreference" v-model="form.coursePreference" class="form-select">
              <option value="">Select a course</option>
              <option v-for="c in courses" :key="c.slug" :value="c.slug">{{ c.name }}</option>
            </select>
            <p v-if="errors.coursePreference" class="form-error">⚠ {{ errors.coursePreference }}</p>
          </div>
          <p class="form-hint form-hint--campus">
            All programmes are delivered <strong>on campus</strong> at Titus. Online and hybrid study are not available.
          </p>
          <div class="form-group">
            <label class="form-label" for="preferredBatch">Preferred batch *</label>
            <input
              id="preferredBatch"
              v-model="form.preferredBatch"
              class="form-input"
              type="text"
              :placeholder="`e.g. ${siteConfig.announcement.batchDate}`"
            />
            <p v-if="errors.preferredBatch" class="form-error">⚠ {{ errors.preferredBatch }}</p>
          </div>
          <div class="form-group">
            <label class="form-label" for="interestStatement">Why are you interested in Montessori education? *</label>
            <textarea id="interestStatement" v-model="form.interestStatement" class="form-textarea" rows="5" />
            <p v-if="errors.interestStatement" class="form-error">⚠ {{ errors.interestStatement }}</p>
          </div>
        </fieldset>

        <!-- Step 4 -->
        <fieldset v-show="step === 4" class="form-step">
          <legend class="sr-only">Supporting documents</legend>
          <div class="form-group">
            <label class="form-label" for="resume">Resume *</label>
            <input id="resume" type="file" accept=".pdf,.doc,.docx" @change="onFile($event, 'resume')" />
            <p class="form-hint">PDF or Word document, max 5 MB</p>
            <p v-if="errors.resume" class="form-error">⚠ {{ errors.resume }}</p>
          </div>
          <div class="form-group">
            <label class="form-label" for="identityDocument">Identity document *</label>
            <input id="identityDocument" type="file" accept=".pdf,.jpg,.jpeg,.png" @change="onFile($event, 'identityDocument')" />
            <p class="form-hint">PDF, JPG, or PNG, max 5 MB</p>
            <p v-if="errors.identityDocument" class="form-error">⚠ {{ errors.identityDocument }}</p>
          </div>
          <div class="form-group">
            <label class="form-label" for="educationalCertificate">Educational certificate *</label>
            <input id="educationalCertificate" type="file" accept=".pdf,.jpg,.jpeg,.png" @change="onFile($event, 'educationalCertificate')" />
            <p class="form-hint">PDF, JPG, or PNG, max 5 MB</p>
            <p v-if="errors.educationalCertificate" class="form-error">⚠ {{ errors.educationalCertificate }}</p>
          </div>
        </fieldset>

        <!-- Step 5 -->
        <fieldset v-show="step === 5" class="form-step">
          <legend class="sr-only">Review and submit</legend>
          <div class="review card">
            <h3>Review your application</h3>
            <dl class="review__list">
              <div><dt>Name</dt><dd>{{ form.fullName }}</dd></div>
              <div><dt>Email</dt><dd>{{ form.email }}</dd></div>
              <div><dt>Phone</dt><dd>{{ form.phone }}</dd></div>
              <div><dt>Course</dt><dd>{{ courseName }}</dd></div>
              <div><dt>Training delivery</dt><dd>On-campus</dd></div>
              <div><dt>Batch</dt><dd>{{ form.preferredBatch }}</dd></div>
            </dl>
          </div>
          <div class="form-group consent">
            <label class="consent__label">
              <input v-model="form.consent" type="checkbox" />
              <span>I consent to the collection and processing of my personal data as described in the <RouterLink to="/privacy">privacy policy</RouterLink>. *</span>
            </label>
            <p v-if="errors.consent" class="form-error">⚠ {{ errors.consent }}</p>
          </div>
        </fieldset>

        <div class="form-actions">
          <button v-if="step > 1" type="button" class="btn btn--outline" @click="prevStep">Back</button>
          <button v-if="step < 5" type="button" class="btn btn--primary" @click="nextStep">Continue</button>
          <button v-if="step === 5" type="submit" class="btn btn--primary" :disabled="loading">
            {{ loading ? "Submitting…" : "Submit application" }}
          </button>
        </div>
      </form>
    </template>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { courses } from "@/data/courses";
import { siteConfig } from "@/data/site";
import { validateStep, validateAll } from "@/lib/validation";

const route = useRoute();
const step = ref(1);
const loading = ref(false);
const submitted = ref(false);
const serverError = ref("");
const errors = reactive({});

const stepLabels = [
  "Personal details",
  "Background",
  "Course preference",
  "Documents",
  "Review",
];

const form = reactive({
  fullName: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  whatsapp: "",
  city: "",
  country: "",
  highestQualification: "",
  teachingExperience: "",
  currentOccupation: "",
  coursePreference: "",
  preferredFormat: "On-campus",
  preferredBatch: "",
  interestStatement: "",
  resume: null,
  identityDocument: null,
  educationalCertificate: null,
  consent: false,
});

const courseName = computed(() => {
  const c = courses.find((x) => x.slug === form.coursePreference);
  return c ? c.name : form.coursePreference;
});

onMounted(() => {
  form.preferredBatch = siteConfig.announcement.batchDate;
  if (route.query.course) {
    form.coursePreference = route.query.course;
  }
});

function onFile(event, field) {
  form[field] = event.target.files[0] || null;
}

function clearErrors() {
  Object.keys(errors).forEach((k) => delete errors[k]);
}

function nextStep() {
  clearErrors();
  const stepErrors = validateStep(step.value, form);
  if (Object.keys(stepErrors).length) {
    Object.assign(errors, stepErrors);
    return;
  }
  step.value++;
}

function prevStep() {
  clearErrors();
  step.value--;
}

async function handleSubmit() {
  clearErrors();
  serverError.value = "";
  const allErrors = validateAll(form);
  if (Object.keys(allErrors).length) {
    Object.assign(errors, allErrors);
    return;
  }

  loading.value = true;
  try {
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && value !== false) data.append(key, value);
    });

    const res = await fetch("/api/apply.php", { method: "POST", body: data });
    const json = await res.json();

    if (!res.ok || !json.success) {
      if (json.errors) Object.assign(errors, json.errors);
      serverError.value = json.message || "Something went wrong. Please try again.";
      return;
    }
    submitted.value = true;
  } catch {
    serverError.value = "Unable to submit. Please check your connection and try again.";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.step-indicator ol {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}
.step-indicator li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: var(--color-muted);
}
.step-indicator li.active,
.step-indicator li.done { color: var(--color-ink); }
.step-indicator__num {
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  font-weight: 600;
  font-size: 0.75rem;
}
.step-indicator li.active .step-indicator__num,
.step-indicator li.done .step-indicator__num {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}
.step-indicator__label { display: none; }
@media (min-width: 768px) {
  .step-indicator__label { display: inline; }
}
.form-grid {
  display: grid;
  gap: 0 1rem;
}
@media (min-width: 768px) {
  .form-grid { grid-template-columns: repeat(2, 1fr); }
}
.form-step { border: none; padding: 0; margin: 0; min-width: 0; }
.form-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.review { padding: 1.5rem; margin-bottom: 1.5rem; }
.review h3 {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.review__list {
  display: grid;
  gap: 0.75rem;
  margin: 0;
  font-size: 0.875rem;
}
.review__list dt { font-weight: 500; color: var(--color-ink); }
.review__list dd { margin: 0.125rem 0 0; color: var(--color-muted); }
.consent__label {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 0.875rem;
  cursor: pointer;
}
.consent__label input { margin-top: 0.25rem; flex-shrink: 0; width: 1.125rem; height: 1.125rem; }
</style>
