<script setup lang="ts">
const props = defineProps({
  heroData: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      description: '',
      bg: '',
    }),
  },
})
</script>

<template>
  <UMain>
    <section
      class="w-full relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
      :style="{ backgroundImage: `url(${props.heroData.image})` }"
    >
      <div class="container mx-auto px-4 z-20">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {{ props.heroData.title }}
          </h1>

          <p class="text-lg md:text-xl opacity-90 drop-shadow">
            {{ props.heroData.description }}
          </p>
        </div>
      </div>
      <div class="absolute inset-0 bg-black/50 " />
    </section>
  </UMain>
</template>

<style scoped>
</style>
