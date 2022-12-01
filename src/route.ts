import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// import PageA from "./pages/pagea/index.vue"
// import PageB from "./pages/pageb/index.vue"

const routes = [
  {
    path: "/",
    component: () => import("./pages/index/index.vue")
  },
  {
    path: "/a",
    component: () => import("./pages/pagea/index.vue")
  },
  {
    path: "/b",
    component: () => import("./pages/pageb/index.vue")
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})