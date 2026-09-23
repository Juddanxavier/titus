<template>
  <div>
    <PageHeader
      title="Download brochure"
      description="Get an overview of our Montessori teacher-training programmes."
      :background-image="images.pageHeaders.brochure"
    />
    <section class="section section--cream">
      <div class="container" style="max-width:520px">
        <form class="card brochure-form" @submit.prevent="submit">
          <p class="brochure-form__intro">
            Enter your details to download the course brochure. All fields are editable placeholders in the institute content files.
          </p>
          <div v-if="success" class="alert alert--success" role="status">
            Thank you. Your download should begin shortly.
            <a :href="siteConfig.brochureUrl" class="btn btn--outline" style="margin-top:1rem" download>Download brochure</a>
          </div>
          <template v-else>
            <div v-if="error" class="alert alert--error" role="alert">{{ error }}</div>
            <div class="form-group">
              <label class="form-label" for="brochure-name">Full name *</label>
              <input id="brochure-name" v-model="form.name" class="form-input" type="text" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="brochure-email">Email *</label>
              <input id="brochure-email" v-model="form.email" class="form-input" type="email" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="brochure-course">Course interest</label>
              <select id="brochure-course" v-model="form.courseInterest" class="form-select">
                <option value="">General enquiry</option>
                <option v-for="c in courses" :key="c.slug" :value="c.slug">{{ c.name }}</option>
              </select>
            </div>
            <button type="submit" class="btn btn--primary btn--block" :disabled="loading">
              {{ loading ? "Processing…" : "Download brochure" }}
            </button>
          </template>
        </form>
      </div>
    </section>
    <CtaBanner
      eyebrow="Ready to commit?"
      title="Apply when you are ready"
      description="Use the brochure as a starting point — then compare syllabi and submit your application for the next intake."
      panel-label="Enrol"
      primary-label="Apply now"
      primary-to="/apply"
      secondary-label="Browse programmes"
      secondary-to="/courses"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { siteConfig } from "@/data/site";
import { courses } from "@/data/courses";
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";

const form = reactive({ name: "", email: "", courseInterest: "" });
const loading = ref(false);
const success = ref(false);
const error = ref("");

async function submit() {
  loading.value = true;
  error.value = "";
  try {
    const res = await fetch("/api/brochure.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const json = await res.json();
    if (!res.ok || !json.success) {
      error.value = json.message || "Unable to process request.";
      return;
    }
    success.value = true;
    window.open(siteConfig.brochureUrl, "_blank");
  } catch {
    error.value = "Unable to process. You can also contact admissions directly.";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.brochure-form { padding: 1.5rem; }
.brochure-form__intro {
  font-size: 0.875rem;
  color: var(--color-muted);
  margin-bottom: 1.5rem;
}
</style>
