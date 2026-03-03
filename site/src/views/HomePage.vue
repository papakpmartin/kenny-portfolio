<template>
  <section class="hero" aria-labelledby="hero-title">
    <h1 id="hero-title">Designing clear, expressive digital experiences.</h1>
    <p class="subhead">A simple, image-first portfolio with fast access to case studies.</p>
  </section>

  <section class="project-grid" aria-label="Projects">
    <RouterLink
      v-for="project in projects"
      :key="project.slug"
      class="project-card"
      :to="`/project/${project.slug}`"
      :aria-label="`Open case study: ${project.title}`"
    >
      <img class="thumb" :src="project.cover" :alt="`${project.title} preview`" loading="lazy" />
      <div class="meta">
        <h2>{{ project.title }}</h2>
        <p>{{ project.category }}</p>
      </div>
    </RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'
</script>
