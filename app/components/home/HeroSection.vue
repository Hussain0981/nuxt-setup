<script setup lang="ts">
import HelloSvg from '~/assets/my-icons/hand-waving.svg'

const props = defineProps({
  heroData: {
    type: Object,
    required: true,
    default: () => ({
      description: '',
      image: '',
    }),
  },
})
</script>

<template>
  <UMain>
    <section
      class="relative w-full h-auto py-10 md:py-0 md:h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
      :style="{ backgroundImage: `url(${props.heroData.image})` }"
    >
      <!-- Dark/Light Overlay -->
      <div class="absolute inset-0 bg-white/80 dark:bg-black/50 backdrop-blur-[2px]" />

      <div class="container relative z-20 mx-auto px-4">
        <div class="max-w-2xl space-y-4 text-gray-900 dark:text-white">
          <!-- Hello Row -->
          <div class="flex items-center gap-3">
            <span>
              <!-- white-friendly svg using invert for dark mode -->
              <img class="w-10 md:w-14 dark:invert" :src="HelloSvg" alt="hand waving svg">
            </span>
            <span class="text-2xl md:text-3xl font-medium font-roboto">Hello</span>
          </div>

          <!-- Name Heading -->
          <h1 class="text-3xl md:text-5xl font-bold drop-shadow-sm">
            It’s me <span class="text-primary-600 dark:text-primary-400">Hussain Ullah</span>
          </h1>

          <!-- Typing Component -->
          <div class="text-xl opacity-90 flex items-center gap-1 font-medium font-roboto">
            A <HomeTypingHero />
          </div>

          <!-- Dynamic Description -->
          <p class=" opacity-80 max-w-xl leading-relaxed">
            {{ props.heroData.description }}
          </p>
        </div>

        <div />
      </div>
    </section>
    <section class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-6 text-center">
          <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-4xl font-bold text-primary-600 dark:text-primary-400">
              2+
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Years of Experience
            </p>
          </div>

          <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-4xl font-bold text-primary-600 dark:text-primary-400">
              15+
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Projects Completed
            </p>
          </div>

          <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-4xl font-bold text-primary-600 dark:text-primary-400">
              10+
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Happy Clients
            </p>
          </div>

          <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 class="text-4xl font-bold text-primary-600 dark:text-primary-400">
              5+
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              Awards & Recognitions
            </p>
          </div>
        </div>
      </div>
    </section>
  </UMain>
</template>

<style scoped>
</style>
