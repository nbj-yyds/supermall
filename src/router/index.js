import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Cate.vue");
const Cart = () => import("../views/cart/Cart.vue");
const My = () => import("../views/my/My.vue");
const Detail = () => import("../views/detail/detail.vue");
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/detail",
    component: Detail
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
