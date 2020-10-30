import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Home from "./components/pages/aside.vue";
import Detail from "./components/pages/details.vue";
import Scan from "@/views/scan.vue";
import Report from "@/views/report.vue";
import Solt from "@/views/Solt.vue";

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
      component: Scan
    },
    { path: "/report", name: "report", component: Report },
    { path: "/solt", name: "solt", component: Solt },
    {
      path: "/",
      redirect: "/home",
      component: Home
    }
  ]
});
