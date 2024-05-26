import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/PageLogin.vue";
import Cadastro from "../pages/PageCadastro.vue";
import Home from "../pages/PageHome.vue";
import Cursos from "../pages/PageCursos.vue";
// import MaisServicos from '../pages/MaisServicos.vue'
// import Blog from '../pages/Blog.vue'
// import SobreNos from '../pages/SobreNos.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: Cadastro,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
  },
  //   {
  //     path: '/mais-servicos',
  //     name: 'mais-servicos',
  //     component: MaisServicos
  //   },
  //   {
  //     path: '/blog',
  //     name: 'blog',
  //     component: Blog
  //   },
  //   {
  //     path: '/sobre-nos',
  //     name: 'sobre-nos',
  //     component: SobreNos
  //   }
];

const router = new VueRouter({
  history: true,
  routes,
});

export default router;