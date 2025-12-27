<script setup>
import FadeIn from './FadeIn.vue'

const services = [
  { title: 'Elevator Installation', description: 'Modern elevators for residential & commercial buildings.', icon: '🛗' },
  { title: 'Maintenance', description: 'Preventive and corrective maintenance for smooth operation.', icon: '⚙️' },
  { title: 'Modernization', description: 'Upgrade old elevators with latest safety and technology.', icon: '🔧' },
]
</script>

<template>
  <section id="services" class="py-24 bg-slate-50">
    <FadeIn>
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold text-slate-900">Our Services</h2>
        <p class="mt-4 text-slate-600 max-w-2xl mx-auto">Delivering comprehensive elevator solutions across Malaysia.</p>

        <div class="mt-12 grid md:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div class="text-4xl mb-4">{{ service.icon }}</div>
            <h3 class="text-xl font-semibold text-slate-900">{{ service.title }}</h3>
            <p class="mt-2 text-slate-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
</template>
