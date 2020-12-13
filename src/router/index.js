import { createRouter, createWebHistory } from "vue-router";
import main from "../views/Main.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: main
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
