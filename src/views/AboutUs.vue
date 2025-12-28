<template>
  <section class="min-h-screen bg-gray-50 pt-12 px-4 md:px-12 flex">
    <!-- Side Navigation -->
    <aside class="hidden md:flex flex-col w-64 pr-8 sticky top-24 h-screen">
      <div class="flex flex-col gap-4">
        <div
          v-for="(section, index) in sections"
          :key="index"
          @click="scrollToSection(index)"
          :class="[
            'cursor-pointer px-3 py-2 rounded transition-all hover:bg-slate-100',
            activeIndex === index ? 'bg-red-100 font-semibold text-red-600' : 'text-slate-700'
          ]"
        >
          <div class="flex items-center gap-2">
            <span class="font-bold">{{ index + 1 }}</span>
            <span>{{ section.title }}</span>
          </div>

          <!-- Subsections -->
          <div v-if="section.subsections" class="ml-6 mt-1 flex flex-col gap-1">
            <div
              v-for="(sub, subIndex) in section.subsections"
              :key="subIndex"
              @click.stop="scrollToSubsection(index, subIndex)"
              :class="[
                'cursor-pointer text-sm hover:text-red-500 transition',
                activeSubIndex[index] === subIndex ? 'text-red-600 font-medium' : 'text-slate-500'
              ]"
            >
              {{ sub.title }}
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 max-w-4xl space-y-8" ref="scrollContainer">
      <div
        v-for="(section, index) in sections"
        :key="index"
        :ref="el => sectionRefs[index] = el"
        class="space-y-6"
      >
        <!-- Section Card -->
        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{{ section.title }}</h2>
          <p class="text-slate-700 leading-relaxed">{{ section.content }}</p>

          <!-- Subsections Cards -->
          <div
            v-for="(sub, subIndex) in section.subsections || []"
            :key="subIndex"
            :ref="el => subsectionRefs[index] ? subsectionRefs[index][subIndex] = el : subsectionRefs[index] = [el]"
            class="mt-4 bg-gray-50 p-4 rounded-xl border border-slate-200 shadow-sm"
          >
            <h3 class="text-lg md:text-xl font-semibold text-slate-800">{{ sub.title }}</h3>
            <p class="text-slate-700 leading-relaxed mt-2">{{ sub.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  {
    title: 'Company Profile',
    content: `Janna Engineering Sdn Bhd is a leading elevator and escalator solutions provider in Malaysia. 
    Founded in 2002, the company has grown to serve commercial, residential, and industrial projects nationwide.`,
    subsections: [
      { title: 'Our History', content: `Started as a small workshop, we have expanded to multiple offices in Malaysia.` },
      { title: 'Mission & Vision', content: `To provide innovative and reliable vertical transportation solutions with excellence and safety.` },
      { title: 'Infrastructure', content: `We operate with modern facilities and state-of-the-art engineering workshops.` }
    ]
  },
  {
    title: 'Honors & Awards',
    content: `We are proud to have been recognized for our engineering excellence and customer service.`,
    subsections: [
      { title: 'Recent Awards', content: `Best Elevator Installation 2023, Top Service Provider 2022, Innovation in Vertical Transportation 2021.` },
      { title: 'Certifications', content: `ISO 9001, ISO 14001, OHSAS 18001 certified company ensuring quality and safety.` }
    ]
  },
  {
    title: 'Culture',
    content: `Our company culture emphasizes integrity, innovation, and teamwork. We value creativity and collaboration.`,
    subsections: [
      { title: 'Core Values', content: `Integrity, Safety, Excellence, Teamwork, Innovation.` },
      { title: 'Employee Programs', content: `We provide continuous training, mentorship, and team-building activities.` }
    ]
  },
  {
    title: 'Our Team',
    content: `Our workforce consists of experienced engineers, technicians, and project managers dedicated to excellence.`,
    subsections: [
      { title: 'Leadership', content: `Our management team has decades of combined experience in the industry.` },
      { title: 'Departments', content: `Engineering, Maintenance, Customer Service, Research & Development.` }
    ]
  }
]

const sectionRefs = ref([])
const subsectionRefs = ref([])
const scrollContainer = ref(null)
const activeIndex = ref(0)
const activeSubIndex = ref([])

function scrollToSection(index) {
  const el = sectionRefs.value[index]
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeIndex.value = index
  }
}

function scrollToSubsection(sectionIndex, subIndex) {
  const el = subsectionRefs.value[sectionIndex][subIndex]
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeIndex.value = sectionIndex
    activeSubIndex[sectionIndex] = subIndex
  }
}

function handleScroll() {
  sectionRefs.value.forEach((el, index) => {
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top <= 150 && rect.bottom >= 150) {
      activeIndex.value = index
    }
    if (subsectionRefs.value[index]) {
      subsectionRefs.value[index].forEach((subEl, subIndex) => {
        const subRect = subEl.getBoundingClientRect()
        if (subRect.top <= 150 && subRect.bottom >= 150) {
          activeSubIndex[index] = subIndex
        }
      })
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Smooth fade-in for main content */
section > div > div > div {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease-out forwards;
  animation-delay: 0.1s;
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
