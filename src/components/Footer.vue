<template>
  <footer class="bg-slate-900 text-slate-200 py-12">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      
      <!-- Company Info -->
      <div>
        <h3 class="text-xl font-semibold text-white">Janna Engineering</h3>
        <p class="mt-2 text-slate-400">
          Malaysia’s trusted SDN BHD providing modern elevator and escalator solutions with safety and quality.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-xl font-semibold text-white">Quick Links</h3>
        <ul class="mt-2 space-y-1">
          <li><button @click="$nextTick(() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' }))" class="hover:text-indigo-400 transition">Mission</button></li>
          <li><button @click="$nextTick(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }))" class="hover:text-indigo-400 transition">Services</button></li>
          <li><button @click="$nextTick(() => document.getElementById('vacancy')?.scrollIntoView({ behavior: 'smooth' }))" class="hover:text-indigo-400 transition">Vacancy</button></li>
          <li><button @click="$nextTick(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))" class="hover:text-indigo-400 transition">Contact</button></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-xl font-semibold text-white">Contact</h3>
        <p class="mt-2 text-slate-400">
          Email: info@janna-engineering.com<br/>
          Phone: +60 12-345 6789<br/>
          Address: Kuala Lumpur, Malaysia
        </p>
        <!-- Optional social icons -->
        <div class="mt-4 flex gap-4">
          <a href="#" class="text-slate-400 hover:text-indigo-400 transition">LinkedIn</a>
          <a href="#" class="text-slate-400 hover:text-indigo-400 transition">Facebook</a>
          <a href="#" class="text-slate-400 hover:text-indigo-400 transition">Instagram</a>
        </div>
      </div>

    </div>

    <div class="mt-12 text-center text-slate-500 text-sm">
      &copy; Website Preview - in progress Seers Computer Solution
    </div>
  </footer>
</template>
