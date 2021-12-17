import Vue from "vue";
import VueRouter from "vue-router";
import PortalVue from 'portal-vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { router } from "@/router";
import { store } from "@/store";
import App from "./App.vue";


Vue.use(VueRouter);
Vue.use(PortalVue)

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
