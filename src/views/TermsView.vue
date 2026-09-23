<template>
  <div>
    <PageHeader
      title="Terms and refund policy"
      description="Terms of enrolment, cancellation, and refund conditions."
      :background-image="images.pageHeaders.terms"
    />
    <section class="section section--cream">
      <div class="container prose">
        <p><em>Editable legal template — review with qualified counsel before publishing.</em></p>
        <h2>Terms of enrolment</h2>
        <p>By enrolling in a programme at {{ siteConfig.instituteName }}, you agree to abide by institute policies, attendance requirements, and professional conduct standards.</p>
        <h2>Fees</h2>
        <p>Programme fees are listed on course and admissions pages. Fees are editable placeholders until confirmed by the institute. Payment schedules must be completed according to the agreed plan.</p>
        <h2>Cancellation by applicant</h2>
        <ul>
          <li><strong>More than 30 days before start:</strong> [Editable refund percentage]% refund of fees paid, minus administrative charges.</li>
          <li><strong>15–30 days before start:</strong> [Editable refund percentage]% refund of fees paid.</li>
          <li><strong>Less than 15 days before start:</strong> No refund unless exceptional circumstances apply.</li>
        </ul>
        <h2>Cancellation by institute</h2>
        <p>If a programme is cancelled by the institute, enrolled participants will receive a full refund of fees paid for that programme or the option to transfer to another batch.</p>
        <h2>Contact</h2>
        <p>For questions about refunds, contact <a :href="`mailto:${siteConfig.contact.email}`">{{ siteConfig.contact.email }}</a>.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/layout/PageHeader.vue";
import { images } from "@/data/images";
</script>
