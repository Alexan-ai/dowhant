// importing AOS css style globally
import AOS from "aos";
import "aos/dist/aos.css";
//FontAwesome
/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "pages/TestPage.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/*Slider*/

/* add icons to the library */
library.add(faUserSecret);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

AOS.init({
  duration: 650,
});

const routes = [
  {
    path: "/",
    component: () => import("pages/TestPage.vue"),
  },

  {
    path: "/testpage",
    component: () => import("pages/TestPage.vue"),
  },

  {
    path: "/loginVue",
    component: () => import("pages/loginVue.vue"),
  },

  {
    path: "/registerVue",
    component: () => import("pages/registerVue.vue"),
  },

  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),

    children: [
      {
        path: "/home",
        component: () => import("layouts/DashboardPrincipal.vue"),
      },

      {
        path: "/registro",
        component: () => import("layouts/RegistroUsuarios.vue"),
      },
      { path: "/Lista", component: () => import("layouts/ListaUsuarios.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
