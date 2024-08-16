import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Resume from '../components/Resume.vue';
//import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
import MyContact from '../components/MyContact.vue';
import Privacy from '../components/Privacy.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  //{ path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/mycontact', component: MyContact },
  { path: '/privacy', component: Privacy }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
