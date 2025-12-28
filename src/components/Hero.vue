<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Elevator floors
const floors = ['5', '4', '3', '2', 'G']
const currentFloor = ref(0)
const doorsOpen = ref(true) // start doors open
let goingUp = true

// Percentage for translateY
const currentFloorPercent = computed(() => (currentFloor.value / (floors.length - 1)) * 100)

// Elevator movement logic
function moveElevator() {
  doorsOpen.value = false
  setTimeout(() => {
    if (goingUp) {
      currentFloor.value++
      if (currentFloor.value === floors.length - 1) goingUp = false
    } else {
      currentFloor.value--
      if (currentFloor.value === 0) goingUp = true
    }
    doorsOpen.value = true
    setTimeout(moveElevator, 1500)
  }, 2000)
}

onMounted(() => {
  setTimeout(moveElevator, 1500)
})

// Scroll-reactive arrows
const scrollY = ref(0)
const onScroll = () => { scrollY.value = window.scrollY }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section class="full-section relative w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden px-6">
    
    <!-- Background building / parallax -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <div class="absolute w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div class="absolute left-1/4 top-0 w-2 h-full bg-gray-700/30 animate-pulse-slow"></div>
      <div class="absolute right-1/3 top-0 w-2 h-full bg-gray-700/30 animate-pulse-slower"></div>
    </div>

    <!-- Scroll arrows -->
    <div class="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none">
      <div class="space-y-4">
        <div class="w-6 h-6 border-l-2 border-b-2 border-white/40 transform rotate-45 opacity-70"
             :style="{ transform: `translateY(${-scrollY.value * 0.05}px) rotate(45deg)` }"></div>
        <div class="w-6 h-6 border-l-2 border-b-2 border-white/40 transform rotate-45 opacity-60"
             :style="{ transform: `translateY(${-scrollY.value * 0.04}px) rotate(45deg)` }"></div>
        <div class="w-6 h-6 border-l-2 border-b-2 border-white/40 transform rotate-45 opacity-50"
             :style="{ transform: `translateY(${-scrollY.value * 0.03}px) rotate(45deg)` }"></div>
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">

      <!-- Text content -->
      <div class="md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent 
                  bg-gradient-to-r from-indigo-400 via-pink-400 to-red-400 animate-gradient-x">
          Reliable Elevators for Every Building
        </h1>
        <p class="text-lg md:text-xl text-white/80 max-w-md mx-auto md:mx-0 drop-shadow-lg">
          Malaysia’s trusted SDN BHD providing <span class="font-semibold text-white/90">modern elevator</span> and 
          <span class="font-semibold text-white/90">escalator solutions</span> with safety and quality.
        </p>
        <div class="mt-4 text-white/70 text-lg md:text-xl font-mono tracking-wide">
          <span class="typed-text">We lift buildings, we lift lives.</span>
        </div>
      </div>

      <!-- Elevator -->
      <div class="md:w-1/2 flex justify-center">
        <div class="relative w-64 h-[300px] bg-gray-800 border-4 border-gray-700 rounded-lg overflow-hidden shadow-2xl">

          <!-- Floor panel -->
          <div class="absolute right-3 top-3 flex flex-col gap-1 text-white text-sm">
            <span v-for="(floor, i) in floors" :key="i" 
                  :class="currentFloor === i ? 'text-green-400 font-bold' : 'text-white/50'">{{ floor }}</span>
          </div>

          <!-- Elevator Car -->
          <div class="absolute left-0 bottom-0 w-full h-full transition-transform duration-500"
               :style="{ transform: `translateY(-${currentFloorPercent.value}%)` }">

            <!-- Doors -->
            <div class="absolute top-0 left-0 w-1/2 h-full bg-gray-600 transition-transform ease-in-out duration-[1500ms]"
                 :class="doorsOpen ? 'translate-x-0' : '-translate-x-full'"></div>
            <div class="absolute top-0 right-0 w-1/2 h-full bg-gray-600 transition-transform ease-in-out duration-[1500ms]"
                 :class="doorsOpen ? 'translate-x-0' : 'translate-x-full'"></div>

            <!-- Passengers -->
            <div class="absolute bottom-4 left-1/4 w-3 h-6 bg-gray-400 rounded"></div>
            <div class="absolute bottom-4 right-1/4 w-3 h-6 bg-gray-400 rounded"></div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style>
/* Pulsing building windows effect */
@keyframes pulse-slow { 0%,100%{opacity:0.3}50%{opacity:0.6} }
@keyframes pulse-slower { 0%,100%{opacity:0.2}50%{opacity:0.5} }
.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }

/* Gradient text animation */
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 5s ease infinite;
}

/* Typing effect */
.typed-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid rgba(255,255,255,0.75);
  animation: typing 3s steps(30, end) 1s 1 normal both, blink 0.7s step-end infinite;
}
@keyframes typing { from { width: 0 } to { width: 100% } }
@keyframes blink { 50% { border-color: transparent } }
</style>
