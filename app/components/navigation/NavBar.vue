<script setup lang="ts">
const navigation = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contact-us' },
])

const route = useRoute()

// function to check active link
function isActive(path: string) {
  return route.path === path
};
</script>

<template>
  <UHeader>
    <!-- Left Logo -->
    <template #left>
      <NuxtLink to="/">
        <h1 class="text-xl font-medium text-gray-600 hover:text-black transition-colors">
          WebApps <span class="text-orange-500 hover:text-orange-700">Solutions</span>
        </h1>
      </NuxtLink>
    </template>

    <!-- Right Navigation -->
    <template #right>
      <nav class="flex items-center gap-x-3">
        <NuxtLink
          v-for="(nav, index) in navigation"
          :key="index"
          :to="nav.path"
          class="p-2 transition-colors duration-300" :class="[
            route.path === nav.path
              ? 'text-black border-b border-b-black font-medium'
              : 'text-gray-600 hover:text-black',
          ]"
        >
          {{ nav.name }}
        </NuxtLink>
      </nav>
    </template>
  </UHeader>
</template>
