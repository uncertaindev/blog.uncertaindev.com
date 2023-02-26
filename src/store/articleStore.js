import { defineStore } from "pinia";

export const useArticleStore = defineStore("article", {
	state: () => ({
		articles: [],
		currentArticle: {},
	}),
	getters: {

	},
	actions: {
		async load() {
			const request = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/blog/articles`, { headers: { authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`, method: "GET" } });

			const { result } = await request.json();

			this.articles = result;
		},
		async loadWithSlug(slug) {
			const request = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/blog/articles/${slug}`,{ headers: { authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`, method: "GET" } });

			const { result } = await request.json();

			this.currentArticle = result;
		}
	},
});
