
import Vue from "vue";
import VueMeta from "vue-meta";

import { createPinia, PiniaVuePlugin } from "pinia";



import {router} from "@/router.js";

import App from "@/App.vue";
import "./style.css";

const pinia = createPinia();

Vue.use(PiniaVuePlugin);
Vue.use(VueMeta);



new Vue({
	router,
	pinia,
	render: h => h(App)
}).$mount("#app");
