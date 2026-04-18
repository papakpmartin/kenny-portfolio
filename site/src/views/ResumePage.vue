<script setup>
import { resume } from '../data/resume';
</script>

<template>
  <article class="resume-page" aria-labelledby="resume-name">
    <header class="resume-header">
      <div>
        <p class="resume-kicker">{{ resume.kicker }}</p>
        <h1 id="resume-name">{{ resume.name }}</h1>
        <p class="resume-role">{{ resume.title }}</p>
      </div>
      <address class="resume-contact" aria-label="Contact information">
        <span>{{ resume.location }}</span>
        <a :href="`mailto:${resume.email}`">{{ resume.email }}</a>
        <a :href="`tel:${resume.phoneHref}`">{{ resume.phoneDisplay }}</a>
      </address>
    </header>

    <section class="resume-section" aria-labelledby="summary-title">
      <h2 id="summary-title">Professional Summary</h2>
      <p>{{ resume.summary }}</p>
    </section>

    <section class="resume-section" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>

      <article v-for="role in resume.experience" :key="`${role.company}-${role.role}`" class="resume-role-card">
        <header>
          <h3>{{ role.role }} — {{ role.company }}</h3>
          <p class="resume-meta">{{ role.meta }}</p>
        </header>
        <p>{{ role.summary }}</p>
        <ul>
          <li v-for="bullet in role.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </article>
    </section>

    <section class="resume-section" aria-labelledby="education-title">
      <h2 id="education-title">Education</h2>
      <article class="resume-role-card">
        <h3>{{ resume.education.degree }} — {{ resume.education.school }}</h3>
        <p class="resume-meta">{{ resume.education.meta }}</p>
      </article>
    </section>
  </article>
</template>
