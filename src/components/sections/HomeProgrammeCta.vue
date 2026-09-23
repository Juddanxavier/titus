<template>
  <CtaBanner
    aria-label="Enrol at Titus"
    :eyebrow="`Next intake · ${siteConfig.announcement.batchDate}`"
    title="Take the next step toward your qualification"
    description="Choose from thirteen on-campus programmes — certificates, diplomas, and advance diplomas. Download syllabi, compare eligibility, and apply when you are ready."
    :chips="['On-campus only', '13 programmes', '3 pathways']"
    chips-aria-label="Programme pathways"
    show-contact
    panel-label="Get started"
    :primary-label="`Apply for ${siteConfig.announcement.batchDate}`"
    primary-to="/apply"
    secondary-label="Browse all programmes"
    secondary-to="/courses"
    tertiary-label="How enrolment works"
    tertiary-to="/admissions"
  />
</template>

<script setup>
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner.vue";
</script>
