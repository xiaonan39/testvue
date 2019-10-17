import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Home from "./components/pages/aside.vue";
// import Scan from "./views/Scan.vue";
import Batches from "./views/Batches.vue";
import Batchsum from "./views/Batchsum.vue";
import Reports from "./views/Reports.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
      /*children: [
        {
          path: "detail",
          component: "Detail"
        }
      ] */
    },
    {
      path: "/scan",
      name: "scan",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Scan.vue")
    },
    {
      path: "/batches",
      name: "batches",
      component:Batches
    },
    {
      path: "/batchsum",
      name: "batchsum",
      component:Batchsum
    },
    {
      path: "/reports",
      name: "reports",
      component:Reports
    },
    // {
    //   path: "/batchsum",
    //   name: "batchsum",
    //   component:Batchesbatchsum
    // }
  ]
});
