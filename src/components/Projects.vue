<script setup>
import { ref } from 'vue'
import FadeIn from './FadeIn.vue'

const projects = [
  { title: 'KLCC Tower Elevator', image: 'https://picsum.photos/1920/1080?random=1' },
  { title: 'Mid Valley Escalator', image: 'https://picsum.photos/1920/1080?random=2' },
  { title: 'Petaling Jaya Mall', image: 'https://picsum.photos/1920/1080?random=3' },
  { title: 'Johor Bahru Office', image: 'https://picsum.photos/1920/1080?random=4' },
  { title: 'Penang Hotel', image: 'https://picsum.photos/1920/1080?random=5' },
  { title: 'KL Office Tower', image: 'https://picsum.photos/1920/1080?random=6' },
]


const selectedIndex = ref(0)
const previewImage = ref(projects[selectedIndex.value].image)

function handleMouseEnter(index) {
  if (selectedIndex.value === null || index === selectedIndex.value) {
    previewImage.value = projects[index].image
  }
}

function handleClick(index) {
  selectedIndex.value = index
  previewImage.value = projects[index].image
}
</script>

<template>
  <section id="projects" class="relative w-full h-screen overflow-hidden">
    <!-- Full-screen Preview Image with fade -->
    <transition name="fade" mode="out-in">
      <img
        :src="previewImage"
        :key="previewImage"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </transition>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Right-aligned Itemized Buttons with Text -->
    <div class="relative z-10 w-full h-full flex flex-col justify-center items-end px-12 md:px-12 gap-6">
      <FadeIn>
        <!-- Section Title -->
        <div class="text-white mb-6 text-right">
          <h2 class="text-4xl md:text-5xl font-bold">Our Notable Projects</h2>
          <p class="mt-2 text-lg md:text-xl text-white/80">
            Some of our completed and ongoing projects that showcase our expertise
          </p>
        </div>

        <!-- Project Buttons -->
        <div class="flex flex-col gap-4 items-end">
          <button
            v-for="(project, i) in projects"
            :key="i"
            @mouseenter="handleMouseEnter(i)"
            @click="handleClick(i)"
            :class="[
              'px-6 py-3 backdrop-blur-md text-white font-semibold rounded-full shadow-lg transition-all duration-100 text-right',
              i === selectedIndex.value
                ? 'bg-white/70 text-slate-900 scale-110 shadow-xl'
                : 'bg-white/30 hover:scale-110 hover:bg-white/50'
            ]"
          >
            {{ project.title }}
          </button>
        </div>
      </FadeIn>
    </div>
  </section>
</template>

<style>
/* Fade transition for preview image */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Optional: subtle glow on hover */
button:hover {
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.5);
}
</style>
