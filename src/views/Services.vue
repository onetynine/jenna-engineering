<script setup>
import { ref, onMounted } from 'vue'

const showContent = ref(false)

// Example services
const services = ref([
  {
    title: 'Elevator Installation',
    description: 'Professional and safe elevator installations for residential and commercial buildings.',
    icon: '🛗',
  },
  {
    title: 'Maintenance & Repair',
    description: 'Scheduled maintenance and quick repair services to keep your elevators running smoothly.',
    icon: '🛠️',
  },
  {
    title: 'Modernization',
    description: 'Upgrade your old elevators with modern technology, energy efficiency, and safety standards.',
    icon: '⚡',
  },
  {
    title: 'Consultation',
    description: 'Expert advice for planning elevator systems and compliance with regulations.',
    icon: '📋',
  },
])

onMounted(() => {
  setTimeout(() => (showContent.value = true), 200)
})
</script>

<template>
  <section class="min-h-screen bg-white pt-24 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h1 :class="showContent ? 'animate-fade-slide-down opacity-100' : 'opacity-0'" class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
        Our Services
      </h1>
      <p :class="showContent ? 'animate-fade-slide-up opacity-100 delay-150' : 'opacity-0'" class="mt-6 text-lg text-slate-600 leading-relaxed">
        We provide a range of elevator services with professional expertise and top-quality execution.
      </p>

      <!-- Service Cards -->
      <div class="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          :class="showContent ? `animate-fade-slide-up opacity-100 delay-${index*100}` : 'opacity-0'"
          class="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
        >
          <div class="text-4xl mb-4">{{ service.icon }}</div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">{{ service.title }}</h3>
          <p class="text-slate-600 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Fade + slide animations */
@keyframes fadeSlideDown {
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-slide-down {
  animation: fadeSlideDown 0.8s ease-out forwards;
}
.animate-fade-slide-up {
  animation: fadeSlideUp 0.8s ease-out forwards;
}

/* staggered delay using inline style class (example) */
.opacity-0 {
  opacity: 0;
}
</style>
