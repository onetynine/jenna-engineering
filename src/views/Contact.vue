<script setup>
import { ref, onMounted } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const showContent = ref(false)

onMounted(() => {
  // trigger fade-in animations
  setTimeout(() => (showContent.value = true), 200)
})
</script>

<template>
  <section class="min-h-screen bg-white pt-8 overflow-hidden">
    <div class="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">

      <!-- Left Info -->
      <div :class="showContent ? 'animate-fade-slide-left opacity-100' : 'opacity-0'">
        <h1 class="text-4xl mt-18 md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact Us
        </h1>

        <p class="mt-6 text-lg text-slate-600 leading-relaxed">
          Get in touch with us for elevator installations, maintenance, or enquiries.
        </p>

        <div class="mt-10 space-y-4 text-slate-700">
          <p><strong>Company:</strong> Janna Engineering Sdn Bhd</p>
          <p><strong>Email:</strong> info@jannaengineering.com</p>
          <p><strong>Phone:</strong> +60 12-345 6789</p>
          <p><strong>Location:</strong> Kuala Lumpur, Malaysia</p>
        </div>

        <!-- Social Links -->
<!-- Social Links -->
<div class="mt-8 flex flex-wrap gap-4">
  <a
    href="#"
    class="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-blue-500 hover:text-white transition-all"
    target="_blank"
    rel="noopener"
  >
    <!-- Facebook SVG -->
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.97h-2.34v7.03C18.34 21.25 22 17.09 22 12.07z"/>
    </svg>
  </a>

  <a
    href="#"
    class="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-blue-500 hover:text-white transition-all"
    target="_blank"
    rel="noopener"
  >
    <!-- LinkedIn SVG -->
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.79-1.75-1.75S5.53 5.2 6.5 5.2 8.25 5.99 8.25 6.95 7.47 8.7 6.5 8.7zm13.5 10.3h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
    </svg>
  </a>

<a
  href="#"
  class="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-pink-500 hover:bg-pink-500 hover:text-white transition-all"
  target="_blank"
  rel="noopener"
>
  <!-- Clean Instagram SVG -->
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
  </svg>
</a>

</div>

      </div>

      <!-- Right Form -->
      <form :class="showContent ? 'animate-fade-slide-right opacity-100' : 'opacity-0'" class="bg-white rounded-2xl shadow-xl border border-slate-200 p-10 space-y-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Name
          </label>
          <input
            v-model="name"
            type="text"
            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-sm hover:scale-[1.02]"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-sm hover:scale-[1.02]"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Message
          </label>
          <textarea
            v-model="message"
            rows="6"
            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-all shadow-sm hover:scale-[1.02]"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold shadow-lg hover:shadow-xl hover:from-slate-800 hover:to-slate-600 transition-all transform hover:-translate-y-1"
        >
          Send Message
        </button>
      </form>

    </div>
  </section>
</template>

<style>
/* Fade + slide animations */
@keyframes fadeSlideLeft {
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes fadeSlideRight {
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
}
.animate-fade-slide-left {
  animation: fadeSlideLeft 0.8s ease-out forwards;
}
.animate-fade-slide-right {
  animation: fadeSlideRight 0.8s ease-out forwards;
}

/* Social hover scale */
.social-icon {
  transition: transform 0.3s, color 0.3s;
}
.social-icon:hover {
  transform: scale(1.25);
}
</style>
