import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Resume from '../components/Resume.vue';
//import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  //{ path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
