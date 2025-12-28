<template>
  <!-- Sticky Navbar -->
  <nav class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 shadow-md">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold text-slate-900">Janna Engineering</div>

      <!-- Desktop Links -->
      <ul class="hidden md:flex gap-6 text-slate-700 font-medium">
        <li><router-link to="/" class="hover:text-slate-900 transition">Home</router-link></li>
        <li><router-link to="/about-us" class="hover:text-slate-900 transition">About Us</router-link></li>
        <li><router-link to="/services" class="hover:text-slate-900 transition">Services</router-link></li>
        <li><router-link to="/products" class="hover:text-slate-900 transition">Products</router-link></li>
        <li><router-link to="/vacancy" class="hover:text-slate-900 transition">Vacancy</router-link></li>
        <li><router-link to="/contact" class="hover:text-slate-900 transition">Contact</router-link></li>
      </ul>

      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button @click="menuOpen = !menuOpen" class="focus:outline-none">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <ul v-show="menuOpen" class="md:hidden bg-white/95 border-t border-slate-200 shadow-md flex flex-col gap-4 px-6 py-4">
        <li><router-link @click="menuOpen=false" to="/" class="hover:text-slate-900 transition">Home</router-link></li>
        <li><router-link @click="menuOpen=false" to="/services" class="hover:text-slate-900 transition">Services</router-link></li>
        <li><router-link @click="menuOpen=false" to="/products" class="hover:text-slate-900 transition">Products</router-link></li>
        <li><router-link @click="menuOpen=false" to="/vacancy" class="hover:text-slate-900 transition">Vacancy</router-link></li>
        <li><router-link @click="menuOpen=false" to="/contact" class="hover:text-slate-900 transition">Contact</router-link></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style>
/* Mobile menu slide-down animation */
.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-down-enter-to, .slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
