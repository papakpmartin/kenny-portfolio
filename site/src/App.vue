<template>
  <div class="site-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/">Kenneth Martin II</RouterLink>
      <nav class="nav" aria-label="Primary">
        <RouterLink to="/">Work</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
