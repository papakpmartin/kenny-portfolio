<template>
  <article v-if="project" class="project-page" :class="`project-page--${project.slug}`">
    <header class="project-hero">
      <p class="project-kicker">{{ project.category }}</p>
      <h1>{{ project.title }}</h1>
      <p class="project-intro">{{ project.intro }}</p>
      <p class="project-story">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, nibh at interdum hendrerit, purus felis volutpat mi, vitae gravida neque ipsum at justo. Donec porttitor, nibh sed facilisis tincidunt, odio turpis vehicula erat, et posuere sapien lorem non sem.
      </p>
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
