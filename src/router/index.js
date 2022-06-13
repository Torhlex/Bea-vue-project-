import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import LandingPage from "../@component/LandingPage.vue";
// import LoginPage from "../@component/LoginPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
// export default new Router({
//   routes: [
//     {
//       path: "/",
//       redirect: {
//         name: "LandingPage",
//       },
//     },
//     {
//       path: "/LandingPage",
//       name: "LandingPage",
//       component: LandingPage,
//     },
//     {
//       path: "/",
//       redirect: {
//         name: "LoginPage",
//       },
//     },
//     {
//       path: "/LoginPage",
//       name: "LoginPage",
//       component: LoginPage,
//     },
//   ],
// });
