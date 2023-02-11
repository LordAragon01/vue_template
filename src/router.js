import Vue from 'vue'
import VueRouter from 'vue-router'
import Contatos from './views/contatos/Contatos.vue'
import ContatosDetalhes from './views/contatos/ContatosDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import Home from './views/Home.vue'
import Calendary from './views/Calendary.vue'
import Alojamento from './views/Alojamento.vue'

Vue.use(VueRouter)

export default new VueRouter({
  //hash, history, abstract
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {path: '/contatos', 
    component: Contatos, 
    children:[
        { path: ':id', component: ContatosDetalhes, name: 'contato' },
        { path:'', component: ContatosHome }
    ]},
    {path: '/', component: Home, name: 'painel'},
    {path:'/calendary' , component: Calendary, name: 'calendario'},
    {path:'/alojamento' , component: Alojamento, name: 'alojamento'},
  ]
})