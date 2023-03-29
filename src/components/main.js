import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from ".App.vue";

// Componentes
const Home = { template: "<h1>helloworld</h1>" };
const Detail = { template: "<h1>helloworld2</h1>" };

// Definir objeto
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail",
    component: Detail,
  },
];

// crear objeto rutas de vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// instancia de vue

const app = createApp(App);
app.use(router).mount("#app");
