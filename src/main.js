import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueRouter from 'vue-router'
import routes from "./rout";

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
})

Vue.use(VueRouter);
new Vue({
    render: h => h(App),
    router
}).$mount("#app")