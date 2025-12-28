// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import Vacancy from '../views/Vacancy.vue'
import Services from '../views/Services.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about-us', component: AboutUs },
        { path: '/products', component: Products },
        { path: '/services', component: Services },
        { path: '/contact', component: Contact },
        { path: '/vacancy', component: Vacancy },
    ],
})
