<script setup>
import { ref } from 'vue'

// Mock products
const products = ref([
  {
    id: 1,
    name: "TGJ Series Sightseeing Elevator",
    images: [
      "https://picsum.photos/seed/elevator1/600/400",
      "https://picsum.photos/seed/elevator2/600/400",
      "https://picsum.photos/seed/elevator3/600/400"
    ],
    price: "RM 250,000",
    details: `TGJ series sightseeing elevator with machine room and TGJW Series sightseeing elevator without machine room can meet the requirement for square, diamond, round or other sightseeing methods, which is applicable to shopping malls, CBD, hotels.

Having adopted multi-dimensional spatial thinking innovation technology, KOYO can design and produce multiple types of sightseeing car with firm structure and novel appearance. It can realize sightseeing in four directions at most. While taking the sightseeing elevator, one can not only observe the charming scenery around the building and savor the wonderful and comfortable life, but also realize one’s dream of flying in the brilliant and lustrous sky.

Our TGJ series, with a large viewing area, can provide a broader view.

Integrated with the building and surroundings, the glass cover of KOYO’s sightseeing elevator is not only a part of the building, but also a beautiful mobile scenery.

The FPR structure of the sightseeing elevator perfectly shows the compact space and the overall beauty. The elevator usually adopts round, semi-round and square structure, which can give passengers a different riding experience.

KOYO sightseeing elevators are widely applied in hotels, shopping malls, office buildings, real estate development companies, banks, government buildings, exhibition halls, subway exit and entrance, schools, private villas, etc.`
  },
  {
    id: 2,
    name: "Mock Product 2",
    images: [
      "https://picsum.photos/seed/product2a/600/400",
      "https://picsum.photos/seed/product2b/600/400",
      "https://picsum.photos/seed/product2c/600/400"
    ],
    price: "RM 120,000",
    details: `This is another example product. Its description can also be long, scrollable, and include multiple paragraphs to demonstrate the modal layout and scroll behavior.`
  }
])

const showModal = ref(false)
const selectedProduct = ref(null)
const activeImage = ref(0)

const openModal = (product) => {
  selectedProduct.value = product
  activeImage.value = 0
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const prevSlide = () => {
  if (!selectedProduct.value) return
  activeImage.value =
    (activeImage.value - 1 + selectedProduct.value.images.length) %
    selectedProduct.value.images.length
}

const nextSlide = () => {
  if (!selectedProduct.value) return
  activeImage.value =
    (activeImage.value + 1) % selectedProduct.value.images.length
}

const selectImage = (index) => {
  activeImage.value = index
}
</script>

<template>
  <section class="min-h-screen bg-slate-50 py-12 px-6">
    <h1 class="text-4xl font-bold text-slate-900 mb-8 text-center">Our Products</h1>

    <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition p-6 flex flex-col"
        @click="openModal(product)"
      >
        <img :src="product.images[0]" alt="product" class="w-full h-48 object-cover rounded-xl mb-4">
        <h2 class="text-xl font-semibold text-slate-900 mb-2">{{ product.name }}</h2>
        <p class="text-slate-700 font-medium">{{ product.price }}</p>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div class="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">

        <!-- Header -->
        <div class="flex justify-between items-center px-6 py-4 border-b border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900">{{ selectedProduct.name }}</h2>
          <button @click="closeModal" class="text-slate-500 hover:text-slate-900 font-bold text-2xl">&times;</button>
        </div>

        <!-- Body -->
        <div class="flex flex-col md:flex-row flex-1 overflow-hidden">
          <!-- Image carousel -->
          <div class="md:w-1/2 h-64 md:h-auto bg-slate-100 flex flex-col items-center justify-center p-4">
            <div class="relative w-full flex-1 flex items-center justify-center">
              <img
                :src="selectedProduct.images[activeImage]"
                alt="product image"
                class="object-cover w-full h-full rounded-xl"
              >
              <!-- Navigation Buttons -->
              <button @click="prevSlide" class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition">‹</button>
              <button @click="nextSlide" class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition">›</button>
            </div>
            <!-- Thumbnails -->
            <div class="flex gap-2 mt-4 overflow-x-auto w-full">
              <img
                v-for="(img, index) in selectedProduct.images"
                :key="index"
                :src="img"
                class="w-16 h-16 object-cover rounded-lg cursor-pointer border-2"
                :class="activeImage === index ? 'border-slate-900' : 'border-transparent'"
                @click="selectImage(index)"
              >
            </div>
          </div>

          <!-- Description -->
          <div class="md:w-1/2 p-6 overflow-y-auto max-h-[70vh]">
            <p class="text-slate-700 leading-relaxed whitespace-pre-line">
              {{ selectedProduct.details }}
            </p>
          </div>
        </div>

        <!-- Footer / Price -->
        <div class="px-6 py-4 border-t border-slate-200 flex justify-end">
          <span class="text-xl font-semibold text-slate-900">{{ selectedProduct.price }}</span>
        </div>

      </div>
    </div>
  </section>
</template>
