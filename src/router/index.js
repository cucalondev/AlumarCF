import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue';
import Plantilla from '../views/Plantilla.vue';
import Noticias from '../views/Noticias.vue';
import Calendario from '../views/Calendario.vue';
import Tienda from '../views/Tienda.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Inicio, name: 'Inicio' },
    { path: '/plantilla', component: Plantilla, name: 'Plantilla' },
    { path: '/noticias', component: Noticias, name: 'Noticias' },
    { path: '/calendario', component: Calendario, name: 'Calendario' },
    { path: '/tienda', component: Tienda, name: 'Tienda' },
    
  ]
})

export default router
