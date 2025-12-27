<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-200">
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="text-lg font-semibold text-slate-900">Janna Engineering</div>

      <ul class="hidden md:flex gap-8 text-sm text-slate-700">
        <li><button @click="scrollToSection('mission')" class="hover:text-indigo-600 transition">Mission</button></li>
        <li><button @click="scrollToSection('services')" class="hover:text-indigo-600 transition">Services</button></li>
        <li><button @click="scrollToSection('vacancy')" class="hover:text-indigo-600 transition">Vacancy</button></li>
        <li><button @click="scrollToSection('contact')" class="hover:text-indigo-600 transition">Contact</button></li>
      </ul>
    </nav>
  </header>
</template>
