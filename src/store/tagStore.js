import { defineStore } from "pinia";

export const useTagStore = defineStore("tag",{
	state: () => ({
		tags: []
	}),
	getters: {
		// getTagById: (state) => {
		// 	return (tagId) => {
		// 		return state.tags.find(tag => tag.id === tagId);
		// 	};
		// }
	},
	actions: {
		async load() {
			if (this.tags.length > 0) return;
			const request = await fetch("http://localhost:1338/api/v1/blog/tags");

			const { result } = await request.json();

			this.tags = result;
		}
	},
});
