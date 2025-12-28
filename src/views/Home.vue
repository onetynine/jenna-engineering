<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Hero from '../components/Hero.vue'
import WhoWeAre from '../components/WhoWeAre.vue'
import Projects from '../components/Projects.vue'
import Footer from '../components/Footer.vue'


const sections = ['Hero', 'WhoWeAre', 'Projects', 'Footer']
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
  <section class="min-h-screen bg-white overflow-hidden">
  <!-- Elevator Panel -->
  <div
    class="fixed top-1/2 right-4 -translate-y-1/2 z-50
           bg-slate-900 border-2 border-slate-400
           rounded-xl px-3 py-4 shadow-2xl"
  >
    <div class="flex flex-col gap-3">
      <button
        v-for="(_, index) in sections"
        :key="index"
        @click="scrollToSection(index)"
        :class="[
          'w-10 h-10 rounded-full border-2 font-bold transition-all',
          index === clickedIndex
            ? 'bg-red-600 border-red-600 animate-blink'
            : index === activeIndex
            ? 'bg-red-600 border-red-600 shadow-red'
            : 'bg-slate-800 border-slate-400 hover:bg-slate-700'
        ]"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>

  <!-- Scroll container -->
  <div
    ref="scrollContainer"
    class="h-[calc(100vh-64px)] overflow-y-scroll snap-y snap-mandatory scroll-smooth"
  >
    <Hero class="snap-start" />
    <WhoWeAre class="snap-start" />
    <Projects class="snap-start" />
    <Footer class="snap-start" />
  </div>
  </section>
</template>

<style>
@keyframes blink {
  0%,100% { box-shadow: 0 0 10px red }
  50% { box-shadow: 0 0 24px red }
}
.animate-blink {
  animation: blink 0.6s ease-in-out 2;
}
.shadow-red {
  box-shadow: 0 0 18px rgba(255,0,0,0.9);
}
</style>
