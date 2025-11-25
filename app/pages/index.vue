<script setup lang="ts">
const heroData = ref({
  description: 'I’m a MEVN stack developer specializing in building fast, scalable, and user-focused web applications using MongoDB, Express, Vue.js, and Node.js. I turn complex requirements into clean, maintainable code and enjoy creating modern front-end experiences with Vue 3, Nuxt, and Tailwind. Passionate about performance, best practices, and continuous learning.',
  image: '/images/home-hero.jpg',
})
</script>

<template>
  <div>
    <HomeHeroSection :hero-data="heroData" />
  </div>
</template>

<style scoped>

</style>
