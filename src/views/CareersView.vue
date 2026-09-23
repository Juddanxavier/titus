<template>
  <div>
    <PageHeader
      title="Career opportunities"
      description="Paths that graduates commonly pursue — without guarantees of employment or placement."
      :background-image="images.pageHeaders.careers"
    />
    <section class="section section--cream">
      <div class="container prose">
        <p>
          Montessori teacher training can open doors to meaningful work in early childhood education. We do not guarantee employment or publish placement statistics. Outcomes depend on your qualifications, experience, location, and the opportunities available in your community.
        </p>
        <h2>Roles graduates may pursue</h2>
        <ul>
          <li>Montessori lead or assistant teacher in early childhood classrooms</li>
          <li>Early years educator in schools integrating Montessori principles</li>
          <li>Classroom coordinator or curriculum support role</li>
          <li>Parent educator or workshop facilitator</li>
          <li>Further study in Montessori education or related fields</li>
        </ul>
        <h2>Skills you will develop</h2>
        <ul>
          <li>Observation and documentation of children's development</li>
          <li>Preparing and maintaining learning environments</li>
          <li>Presenting Montessori materials with clarity</li>
          <li>Professional communication with families and colleagues</li>
          <li>Reflective practice and continuous professional growth</li>
        </ul>
      </div>
    </section>
    <CtaBanner
      eyebrow="Your career in education"
      title="Begin your training journey"
      description="Build classroom confidence with on-campus Montessori training and a qualification that supports your next role."
      panel-label="Enrol"
      primary-to="/apply"
      secondary-label="View programmes"
      secondary-to="/courses"
    />
  </div>
</template>

<script setup>
import { images } from "@/data/images";
import PageHeader from "@/components/layout/PageHeader.vue";
import CtaBanner from "@/components/sections/CtaBanner.vue";
</script>
