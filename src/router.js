import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Home from "./components/pages/aside.vue";
import Detail from "./components/pages/detail.vue";

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
      path: "/scan",
      name: "scan",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/scan.vue")
    },
    {
      path: "/batches",
      name: "batches",
      component: () => import("./views/batches.vue")
    },
    {
      path: "/batchessum",
      name: "batchessum",
      component: () => import("./views/batchessum.vue")
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("./views/reports.vue")
    },
    {
      path: "/",
      redirect: "/home" //重定向，当刚打开页面时显示的内容
    }
  ]
});
