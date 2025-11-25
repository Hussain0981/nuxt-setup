<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const { $typed } = useNuxtApp()

const typedElement = ref<HTMLElement | null>(null)
let typedInstance: any = null

onMounted(() => {
  if (typedElement.value) {
    typedInstance = new $typed(typedElement.value, {
      strings: [
        'Frontend Developer',
        'Backend Developer',
        'MEVN Stack Developer',
        'SEO Specialist',
      ],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
    })
  }
})

onBeforeUnmount(() => {
  // Cleanup instance agar hai
  typedInstance?.destroy()
})
</script>

<template>
  <span ref="typedElement" />
</template>
