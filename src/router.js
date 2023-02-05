import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{ path: "/", name: "Home", component: () => import("@/views/HomePage.vue") },
	{ path: "/about", name: "About", component: () => import("@/views/AboutPage.vue") },
	{ path: "/contact", name: "Contact", component: () => import("@/views/ContactPage.vue") },
	{ path: "/article/:slug", name: "Article dynamic page", component: () => import("@/views/ArticlePage.vue"), props: true},
	{ path: "/category/:slug", name: "Category dynamic page", component: () => import("@/views/CategoryPage.vue"), props: true },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
