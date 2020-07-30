import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./common/style/reset.css";
import ElementUI from "element-ui";
import Axios from "./common/axios/axios.js";
import $ from "jquery";
// 测试添加远程分支
// 
// 
// 

Vue.use(ElementUI);
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
