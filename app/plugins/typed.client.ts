import { defineNuxtPlugin } from '#app'
import Typed from 'typed.js'

export default defineNuxtPlugin((nuxtApp) => {
  // Provide Typed object globally
  return {
    provide: {
      typed: Typed
    }
  }
})
