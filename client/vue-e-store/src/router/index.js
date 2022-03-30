import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomepageView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () =>
      import(
        /* webpackChunkName: "product_id" */ "../views/ProductpageView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
