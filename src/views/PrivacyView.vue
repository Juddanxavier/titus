<template>
  <div>
    <PageHeader
      title="Privacy policy"
      description="How we collect, use, and protect your personal information."
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
          <li>Documents you upload (resume, certificates, identity documents)</li>
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
        <p>For privacy enquiries, email <a :href="`mailto:${siteConfig.contact.email}`">{{ siteConfig.contact.email }}</a>.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/layout/PageHeader.vue";
import { images } from "@/data/images";
</script>
