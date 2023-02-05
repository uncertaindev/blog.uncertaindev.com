import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", component: () => import("@/views/HomePage.vue") },
	{ path: "/about", component: () => import("@/views/AboutPage.vue") },
	{ path: "/article/:slug", component: () => import("@/views/ArticlePage.vue"), props: true},
	{ path: "/category/:slug", component: () => import("@/views/CategoryPage.vue"), props: true },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
