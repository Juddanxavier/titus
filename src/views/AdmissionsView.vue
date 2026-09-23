<template>
  <div>
    <PageHeader
      title="Admissions"
      description="Everything you need to know about eligibility, the application process, fees, and required documents."
      :background-image="images.pageHeaders.admissions"
    />
    <section class="section section--cream">
      <div class="container prose">
        <h2>Eligibility</h2>
        <ul><li v-for="item in admissionsInfo.eligibility" :key="item">{{ item }}</li></ul>

        <h2>Admission process</h2>
        <Timeline :steps="admissionsInfo.processSteps" />

        <h2>Required documents</h2>
        <ul><li v-for="doc in admissionsInfo.requiredDocuments" :key="doc">{{ doc }}</li></ul>

        <h2>Fees</h2>
        <p>{{ admissionsInfo.feesOverview }}</p>

        <h2>Payment schedule</h2>
        <table class="data-table">
          <thead>
            <tr><th>Milestone</th><th>Amount</th><th>Due</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in admissionsInfo.paymentSchedule" :key="row.milestone">
              <td>{{ row.milestone }}</td>
              <td>{{ row.amount }}</td>
              <td>{{ row.due }}</td>
            </tr>
          </tbody>
        </table>

        <h2>Refund and cancellation</h2>
        <p>{{ admissionsInfo.refundSummary }}</p>
        <p><RouterLink to="/terms">Read full terms and refund policy</RouterLink></p>
      </div>
    </section>
    <CtaBanner
      eyebrow="Applications open"
      title="Start your application"
      description="Complete the online form with your programme choice and documents. Our team will confirm eligibility and next steps."
      show-contact
      panel-label="Apply"
      primary-label="Apply now"
      primary-to="/apply"
      secondary-label="Send a message"
      secondary-to="/contact"
    />
  </div>
</template>

<script setup>
import { admissionsInfo } from "@/data/admissions";
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import Timeline from "@/components/sections/Timeline.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";
</script>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  margin: 1rem 0 2rem;
}
.data-table th,
.data-table td {
  border: 1px solid var(--color-border);
  padding: 0.75rem 1rem;
  text-align: left;
}
.data-table th {
  background: var(--color-sand);
  font-weight: 600;
  color: var(--color-ink);
}
.data-table td { color: var(--color-muted); }
</style>
