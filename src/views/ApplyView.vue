<template>
  <div>
    <PageHeader
      title="Application form"
      description="Complete all five steps to apply for a Montessori teacher-training programme."
      :background-image="images.pageHeaders.apply"
    />
    <section class="section section--cream">
      <div class="container" style="max-width:720px">
        <ApplicationForm />
      </div>
    </section>
  </div>
</template>

<script setup>
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import ApplicationForm from "@/components/forms/ApplicationForm.vue";
</script>
