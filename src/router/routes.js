import HomePage from '@/pages/home/HomePage.vue'

const routes = [
  { path: '/:pathMatch(.*)*', redirect: '/home' },
  { path: '/home', component: HomePage },
]

export default routes
