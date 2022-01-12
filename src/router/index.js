import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";
import PageNotFound from "../components/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
  {
    path: "/deplacemaison",
    name: "deplacemaison",
    props: true,
    component: () => import("../components/Project/Project.vue"),
  },
  {
    path: "/pxvImgOverlay",
    name: "pxvImgOverlay",
    props: true,
    component: () => import("../components/Project/Project.vue"),
  },
  {
    path: "/spotifystat",
    name: "spotifystat",
    props: true,
    component: () => import("../components/Project/Project.vue"),
  },
  {
    path: "/workoutassistant",
    name: "workoutassistant",
    props: true,
    component: () => import("../components/Project/Project.vue"),
  },
  {
    path: "/newcastle",
    name: "newcastle",
    props: true,
    component: () => import("../components/Project/Project.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
