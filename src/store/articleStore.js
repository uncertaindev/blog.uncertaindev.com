import { defineStore } from "pinia";

export const useArticleStore = defineStore("article",{
	state: () => ({
		articles: [],
		currentArticle: {},
	}),
	getters: {

	},
	actions: {
		async load() {
			const request = await fetch("http://localhost:1338/api/v1/blog/articles");

			const { result } = await request.json();

			this.articles = result;
		},
		async loadWithSlug(slug) {
			const request = await fetch(`http://localhost:1338/api/v1/blog/articles/${slug}`);

			const { result } = await request.json();

			this.currentArticle = result;
		}
	},
});
