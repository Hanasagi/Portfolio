import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
//import PageNotFound from "../components/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  /*{
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },*/
  {
    path: "/deplacemaison",
    name: "deplacemaison",
    props: true,
    component: () => import("../components/Project.vue"),
  },
  {
    path: "/pxvImgOverlay",
    name: "pxvImgOverlay",
    props: true,
    component: () => import("../components/Project.vue"),
  },
  {
    path: "/spotifystat",
    name: "spotifystat",
    props: true,
    component: () => import("../components/Project.vue"),
  },
  {
    path: "/workoutassistant",
    name: "workoutassistant",
    props: true,
    component: () => import("../components/Project.vue"),
  },
  {
    path: "/newcastle",
    name: "newcastle",
    props: true,
    component: () => import("../components/Project.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
