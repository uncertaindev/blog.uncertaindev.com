import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{ path: "/", name: "Home", component: () => import("@/views/HomePage.vue") },
	{ path: "/about", name: "About", component: () => import("@/views/AboutPage.vue") },
	{ path: "/contact", name: "Contact", component: () => import("@/views/ContactPage.vue") },
	{ path: "/article/:slug", name: "Article dynamic page", component: () => import("@/views/ArticlePage.vue"), props: true},
	{ path: "/tag/:slug", name: "Tag dynamic page", component: () => import("@/views/TagPage.vue"), props: true },
];

export const router = new VueRouter({
	mode: "history",
	routes,
});
