import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Home from "./components/pages/aside.vue";
import Detail from "./components/pages/details.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "detail",
          component: Detail
        }
      ]
    },
    {
      path: "/",
      redirect: "/home",
      component: Home
    }
  ]
});
