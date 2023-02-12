<template>
	<div class="flex flex-grow">
		<section class="basis-2/3 mr-10">
			<HomePageArticle
				v-for="(article) in articleStore.articles"
				:key="article.id"
				:article="article"
			/>
		</section>
		<aside class="ml-10 basis-1/3 bg-gray-900">
			<HomePageSidebar :tags="tagStore.tags" />
		</aside>
	</div>
</template>

<script>
import { mapStores } from "pinia";

import { useTagStore } from "@/store/tagStore";
import { useArticleStore } from "@/store/articleStore";

export default {
	name: "HomePage",
	metaInfo() {
		return {
			title: "Home",
			titleTemplate: "%s | Uncertain Dev Blog"
		};
	},
	computed: {
		...mapStores(useTagStore, useArticleStore)
	},
	async created() {
		await this.tagStore.load();
		await this.articleStore.load();
	}
};
</script>
