<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Home',
  to: '/',
  active: route.path.startsWith('/'),
}, {
  label: 'About Us',
  to: '/about-us',
  active: route.path.startsWith('/about-us'),
}, {
  label: 'Services  ',
  to: '/services',
  active: route.path.startsWith('/services'),
}, {
  label: 'Skills',
  to: '/skills',
}])
</script>

<template>
  <UHeader>
    <template #title>
      <div class="text-gray-600 hover:text-black transition-clr dark:text-white/60 dark:hover:text-white">
        WebApps
        <span class="text-blue-500 hover:text-blue-700 transition-clr">Solutions </span>
      </div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UTooltip text="Change Mode">
        <UColorModeButton />
      </UTooltip>

      <UTooltip text="Open on GitHub">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/Hussain0981"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
