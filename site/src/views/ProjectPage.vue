<template>
  <article v-if="project" class="project-page">
    <header class="project-hero">
      <p class="project-kicker">{{ project.category }}</p>
      <h1>{{ project.title }}</h1>
      <p class="project-intro">{{ project.intro }}</p>
    </header>

    <section class="media-stream">
      <div
        v-for="(module, idx) in project.modules"
        :key="`${project.slug}-${idx}`"
        class="media-module"
        :class="`module-${module.type}`"
      >
        <figure v-for="item in module.items" :key="item.src" class="media-item" :class="`shape-${item.shape}`">
          <picture>
            <source v-if="asWebp(item.src)" :srcset="asWebp(item.src)" type="image/webp" />
            <img :src="item.src" :alt="`${project.title} visual`" loading="lazy" />
          </picture>
        </figure>
      </div>
    </section>

    <footer class="project-footer">
      <RouterLink to="/">← Back to Work</RouterLink>
    </footer>
  </article>

  <p v-else>Project not found.</p>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { projectMap } from '../data/projects'

const route = useRoute()
const project = computed(() => projectMap[route.params.slug])

function asWebp(src) {
  return /\.(jpe?g|png)$/i.test(src) ? src.replace(/\.(jpe?g|png)$/i, '.webp') : null
}
</script>
