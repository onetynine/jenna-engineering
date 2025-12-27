<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import WhoWeAre from './components/WhoWeAre.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// Elevator buttons logic
const sections = ['Hero', 'WhoWeAre', 'Projects', 'Contact', 'Footer']
const activeIndex = ref(0)
const clickedIndex = ref(null)
const scrollContainer = ref(null)

function scrollToSection(index) {
  clickedIndex.value = index

  setTimeout(() => {
    const section = scrollContainer.value.children[index]
    section.scrollIntoView({ behavior: 'smooth' })
    activeIndex.value = index
    clickedIndex.value = null
  }, 700)
}

function handleScroll() {
  const children = scrollContainer.value.children
  const scrollTop = scrollContainer.value.scrollTop

  for (let i = 0; i < children.length; i++) {
    if (
      scrollTop >= children[i].offsetTop - children[i].offsetHeight / 2 &&
      scrollTop < children[i].offsetTop + children[i].offsetHeight / 2
    ) {
      activeIndex.value = i
      break
    }
  }
}

onMounted(() => {
  scrollContainer.value.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  scrollContainer.value.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Navbar -->
  <Navbar class="w-full z-50" />

  <!-- Elevator Control Panel (SOLID, ALWAYS VISIBLE) -->
  <div
    class="fixed top-1/2 right-4 -translate-y-1/2 z-50
           bg-[#0f172a]   /* slate-900 */
           border-2 border-slate-400
           rounded-xl px-3 py-4
           shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
  >
    <div class="flex flex-col gap-3">
      <button
        v-for="(section, index) in sections"
        :key="index"
        @click="scrollToSection(index)"
        :class="[
          'w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300',
          index === clickedIndex
            ? 'bg-red-600 border-red-600 text-white animate-blink'
            : index === activeIndex
            ? 'bg-red-600 border-red-600 text-white shadow-[0_0_14px_rgba(255,0,0,1)]'
            : 'bg-slate-800 border-slate-400 text-white hover:bg-slate-700'
        ]"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>

  <!-- Scrollable sections -->
  <div
    ref="scrollContainer"
    class="scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
  >
    <Hero class="snap-start" />
    <WhoWeAre class="snap-start" />
    <Projects class="snap-start" />
    <Contact class="snap-start" />
    <Footer class="snap-start" />
  </div>
</template>

<style>
.scroll-container {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.scroll-container::-webkit-scrollbar {
  width: 0;
}

html {
  scroll-behavior: smooth;
}

/* Elevator button blink */
@keyframes blink {
  0%, 100% { box-shadow: 0 0 10px rgba(255,0,0,0.8); }
  50% { box-shadow: 0 0 22px rgba(255,0,0,1); }
}
.animate-blink {
  animation: blink 0.6s ease-in-out 2;
}
</style>
