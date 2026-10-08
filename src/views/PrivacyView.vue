<template>
  <div>
    <PageHeader
      title="Privacy policy"
      description="How The Titus Global Montessori Teacher Training Academy in Poonamallee, Chennai collects, uses, and protects the personal information you share with us."
      :background-image="images.pageHeaders.privacy"
    />
    <section class="section section--cream">
      <div class="container prose">
        <p><em>Editable legal template — review with qualified counsel before publishing.</em></p>
        <h2>Introduction</h2>
        <p>{{ siteConfig.instituteName }} ("we", "us") respects your privacy. This policy explains how we collect and use personal information when you visit our website, submit an application, or contact us.</p>
        <h2>Information we collect</h2>
        <ul>
          <li>Contact details (name, email, phone, address)</li>
          <li>Application information (education, experience, course preferences)</li>
          <li>Documents you upload (resume)</li>
          <li>Communications you send to us</li>
        </ul>
        <h2>How we use your information</h2>
        <ul>
          <li>Processing admissions applications</li>
          <li>Responding to enquiries</li>
          <li>Sending programme information you request</li>
          <li>Complying with legal obligations</li>
        </ul>
        <h2>Data retention</h2>
        <p>We retain application data for as long as necessary to process your application and meet legal requirements. Contact us to request access or deletion where applicable.</p>
        <h2>Contact</h2>
        <p v-if="hasRealEmail">For privacy enquiries, email <a :href="`mailto:${siteConfig.contact.email}`">{{ siteConfig.contact.email }}</a>.</p>
        <p v-else>
          For privacy enquiries, call <a :href="`tel:${siteConfig.contact.phoneTel}`">{{ siteConfig.contact.phone }}</a>
          or <RouterLink to="/contact">send a message</RouterLink>.
        </p>
      </div>
    </section>
    <PageFaqSection
      page="privacy"
      variant="white"
      :related="[
        { to: '/terms', label: 'Terms & refunds' },
        { to: '/admissions', label: 'Admissions' },
      ]"
    />
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { siteConfig, hasRealEmail } from "@/data/site";
import PageHeader from "@/components/layout/PageHeader.vue";
import PageFaqSection from "@/components/sections/PageFaqSection.vue";
import { images } from "@/data/images";
</script>
