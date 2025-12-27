<script setup>
import { ref, onMounted } from 'vue'

// Example images
const slides = [
  { image: 'https://picsum.photos/1200/600?random=21', caption: 'Our Team at Work' },
  { image: 'https://picsum.photos/1200/600?random=22', caption: 'Elevator Installation' },
  { image: 'https://picsum.photos/1200/600?random=23', caption: 'Project Site Visit' },
]

const currentSlide = ref(0)
const slideCount = slides.length

// Optional: automatic slide change
onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slideCount
  }, 5000) // change slide every 5 seconds
})

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slideCount) % slideCount
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slideCount
}
</script>

<template>
  <section id="whoweare" class="relative w-full py-24 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <!-- Text Content -->
      <div class="md:w-1/2 text-center md:text-left">
        <h2 class="text-4xl font-bold text-slate-900 mb-4">Who We Are</h2>
        <p class="text-lg text-slate-700 mb-6">
          We are a professional elevator and escalator company in Malaysia, providing safe, efficient, and reliable solutions for commercial and residential projects.
        </p>
        <p class="text-lg text-slate-700">
          With years of experience and numerous completed projects, we pride ourselves on quality and precision.
        </p>
      </div>

      <!-- Image Slider -->
      <div class="md:w-1/2 relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <transition name="fade" mode="out-in">
          <img
            :src="slides[currentSlide].image"
            :key="slides[currentSlide].image"
            class="w-full h-full object-cover rounded-xl"
          />
        </transition>

        <!-- Caption -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/40 text-white px-4 py-2 rounded-md text-center">
          {{ slides[currentSlide].caption }}
        </div>

        <!-- Navigation Buttons -->
        <button @click="prevSlide" class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition">‹</button>
        <button @click="nextSlide" class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition">›</button>
      </div>
    </div>
  </section>
</template>

<style>
/* Fade transition for slider */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
