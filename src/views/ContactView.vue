<template>
  <div>
    <PageHeader
      title="Contact"
      description="Reach our admissions team by email, phone, or WhatsApp."
      :background-image="images.pageHeaders.contact"
    />
    <section class="section section--cream">
      <div class="container contact-grid">
        <ContactMethods />
        <form class="card contact-form" @submit.prevent="submit">
          <h2>Send an enquiry</h2>
          <div v-if="success" class="alert alert--success" role="status">Thank you. We will respond shortly.</div>
          <div v-if="error" class="alert alert--error" role="alert">{{ error }}</div>
          <div class="form-group">
            <label class="form-label" for="name">Name *</label>
            <input id="name" v-model="form.name" class="form-input" type="text" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-email">Email *</label>
            <input id="contact-email" v-model="form.email" class="form-input" type="email" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="message">Message *</label>
            <textarea id="message" v-model="form.message" class="form-textarea" rows="5" required />
          </div>
          <button type="submit" class="btn btn--primary" :disabled="loading">
            {{ loading ? "Sending…" : "Send message" }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import ContactMethods from "@/components/sections/ContactMethods.vue";

const form = reactive({ name: "", email: "", message: "" });
const loading = ref(false);
const success = ref(false);
const error = ref("");

async function submit() {
  loading.value = true;
  error.value = "";
  success.value = false;
  try {
    const res = await fetch("/api/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const json = await res.json();
    if (!res.ok || !json.success) {
      error.value = json.message || "Unable to send message.";
      return;
    }
    success.value = true;
    form.name = "";
    form.email = "";
    form.message = "";
  } catch {
    error.value = "Unable to send. Please try again or contact us directly.";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  gap: 2rem;
}
@media (min-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr 1fr; }
}
.contact-form { padding: 1.5rem; }
.contact-form h2 {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}
</style>
