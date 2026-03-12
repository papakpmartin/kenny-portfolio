<template>
  <article v-if="project" class="project-page" :class="`project-page--${project.slug}`">
    <section v-if="leadModule" class="media-stream">
      <div
        class="media-module"
        :class="[
          `module-${leadModule.type}`,
          leadModule.widthMode ? `unit--${leadModule.widthMode}` : '',
          leadModule.gapMode ? `unit-gap--${leadModule.gapMode}` : ''
        ]"
      >
        <figure v-for="item in leadModule.items" :key="item.src" class="media-item" :class="`shape-${item.shape}`">
          <picture>
            <source v-if="asWebp(item.src)" :srcset="webpSrcSet(item.src)" sizes="(max-width: 640px) 100vw, 92vw" type="image/webp" />
            <img :src="item.src" :alt="`${project.title} visual`" loading="lazy" decoding="async" />
          </picture>
        </figure>
      </div>
    </section>

    <header class="project-hero">
      <p class="project-kicker">{{ project.category }}</p>
      <h1>{{ project.title }}</h1>
      <p v-if="project.intro" class="project-intro">{{ project.intro }}</p>
      <p v-if="project.story" class="project-story">{{ project.story }}</p>
    </header>

    <section class="media-stream">
      <div
        v-for="(module, idx) in contentModules"
        :key="`${project.slug}-${idx}`"
        class="media-module"
        :class="[
          `module-${module.type}`,
          module.widthMode ? `unit--${module.widthMode}` : '',
          module.gapMode ? `unit-gap--${module.gapMode}` : ''
        ]"
      >
        <figure v-for="item in module.items" :key="item.src" class="media-item" :class="`shape-${item.shape}`">
          <picture>
            <source v-if="asWebp(item.src)" :srcset="webpSrcSet(item.src)" sizes="(max-width: 640px) 100vw, 92vw" type="image/webp" />
            <img :src="item.src" :alt="`${project.title} visual`" loading="lazy" decoding="async" />
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
const leadModule = computed(() => {
  if (!project.value) return null
  if (project.value.slug !== 'la-county-fair') return null
  return project.value.modules?.[0] ?? null
})
const contentModules = computed(() => {
  if (!project.value) return []
  if (project.value.slug !== 'la-county-fair') return project.value.modules || []
  return project.value.modules?.slice(1) || []
})

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
