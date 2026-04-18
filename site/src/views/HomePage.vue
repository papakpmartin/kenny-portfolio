<template>
  <section class="hero" aria-labelledby="hero-title">
    <h1 id="hero-title">Graphic Design</h1>
    <p class="subhead">This is a portfolio of my work for Adtaxi, a digital marketing agency in Los Angeles. Our work spans a wide array of industries. I help clients find their voice and standardize their creatives so they have polished designs that can be easily updated for new promotions at a lower cost.</p>
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
  const variants = [320, 480, 640, 960, 1200].map((w) => webp.replace('.webp', `-w${w}.webp`) + ` ${w}w`)
  return `${variants.join(', ')}, ${webp} 2000w`
}
</script>
