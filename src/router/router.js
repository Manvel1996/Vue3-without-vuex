import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import PostsPage from "../pages/PostsPage.vue";
import About from "../pages/About.vue";
import FullPostPage from "../pages/FullPostPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: FullPostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
