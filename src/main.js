import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component('navbar', require('./components/Navbar').default);

new Vue({
    render: h => h(App)
}).$mount("#app");
