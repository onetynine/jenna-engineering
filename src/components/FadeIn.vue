<script setup>
import { ref, onMounted } from 'vue'

const el = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    :class="[
      'transition-all duration-700 ease-out',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    ]"
  >
    <slot />
  </div>
</template>
