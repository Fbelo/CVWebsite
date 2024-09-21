<script setup>
import Nav from './components/NavBar.vue'
import Main from './components/MainSection.vue'
</script>

<template>
  <header class="fixed">
    <Nav />
  </header>

  <main class="h-screen bg-neutral-200">
    <Main />
  </main>
</template>