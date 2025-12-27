<script setup>
import { ref } from 'vue'
import FadeIn from './FadeIn.vue'

const projects = [
  { title: 'KLCC Tower Elevator', image: 'https://placehold.co/1920x1080?text=KLCC+Tower+Elevator&bg=333&fg=fff' },
  { title: 'Mid Valley Escalator', image: 'https://placehold.co/1920x1080?text=Mid+Valley+Escalator&bg=333&fg=fff' },
  { title: 'Petaling Jaya Mall', image: 'https://placehold.co/1920x1080?text=Petaling+Jaya+Mall&bg=333&fg=fff' },
  { title: 'Johor Bahru Office', image: 'https://placehold.co/1920x1080?text=Johor+Bahru+Office&bg=333&fg=fff' },
  { title: 'Penang Hotel', image: 'https://placehold.co/1920x1080?text=Penang+Hotel&bg=333&fg=fff' },
  { title: 'KL Office Tower', image: 'https://placehold.co/1920x1080?text=KL+Office+Tower&bg=333&fg=fff' },
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
    <div class="relative z-10 w-full h-full flex flex-col justify-center items-end px-12 md:px-24 gap-6">
      <FadeIn>
        <!-- Section Title -->
        <div class="text-white mb-6 text-right  mt-8">
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
              'px-6 py-3 backdrop-blur-md text-white font-semibold rounded-full shadow-lg transition-all duration-300 text-right',
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
  transition: opacity 0.7s ease;
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
