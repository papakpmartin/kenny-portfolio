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
      <picture class="thumb-picture">
        <source v-if="asWebp(project.cover)" :srcset="webpSrcSet(project.cover)" sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw" type="image/webp" />
        <img class="thumb" :src="project.cover" :alt="`${project.title} preview`" loading="lazy" decoding="async" />
      </picture>
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

function asWebp(src) {
  return /\.(jpe?g|png)$/i.test(src) ? src.replace(/\.(jpe?g|png)$/i, '.webp') : null
}

function webpSrcSet(src) {
  const webp = asWebp(src)
  if (!webp) return ''
  const variants = [640, 1200].map((w) => webp.replace('.webp', `-w${w}.webp`) + ` ${w}w`)
  return `${variants.join(', ')}, ${webp} 2000w`
}
</script>
