<template>
	<div class="flex flex-grow">
		<section class="basis-2/3 mr-10">
			<ArticlePageArticle />
		</section>
		<aside class="ml-10 basis-1/3 bg-gray-900">
			<ArticlePageArticleSidebar />
		</aside>
	</div>
</template>

<script>
import { mapStores } from "pinia";

import { useTagStore } from "@/store/tagStore";
import { useArticleStore } from "@/store/articleStore";

export default {
	name: "ArticlePage",
	metaInfo() {
		return {
			title: this.articleStore.currentArticle?.title,
			titleTemplate: "%s | Uncertain Dev Blog",
			meta: [
				{ name: "keywords", content: this.articleStore.currentArticle?.tags?.map(tag => tag.slug).join(",")},
				{ name: "description", content: this.articleStore.currentArticle?.meta?.description}, // 150
				{ name: "copyright", content: "Uncertain Dev"},
				{ name: "robots", content: "index,follow"},
				{ name: "revised", content: this.articleStore.currentArticle?.updatedAt},
				{ name: "author", content: "uncertaindev@gmail.com"},
				{ name: "og:locale", content: "en_US"},
				{ name: "og:type", content: "article"},// otherwise go with website
				{ name: "og:description", content: this.articleStore.currentArticle?.meta?.description},
				{ name: "og:url", content: `https://blog.uncertaindev.com${this.$route.fullPath}`},
				{ name: "og:site_name", content: "Uncertain Dev Blog"},
				{ name: "og:image", content: this.articleStore.currentArticle?.meta?.image},
				{ name: "og:article:published_time", content: this.articleStore.currentArticle?.createdAt},
				{ name: "og:article:modified_time", content: this.articleStore.currentArticle?.updatedAt},
				{ name: "og:article:author", content: "Uncertain Dev"},
				{ name: "og:article:tag", content: this.articleStore.currentArticle?.tags?.map(tag => tag.slug).join(",")},
				{ name: "twitter:card", content: "summary_large_image"},
				{ name: "twitter:title", content: `${this.articleStore.currentArticle?.title} | Uncertain Dev Blog`},
				{ name: "twitter:description", content: this.articleStore.currentArticle?.meta?.description},
				{ name: "twitter:site", content: "https://blog.uncertaindev.com"},
				{ name: "twitter:image", content: this.articleStore.currentArticle?.meta?.image},
				{ name: "twitter:creator", content: "@uncertaindev"},
			],
		};
	},
	props: {
		slug: {
			type: String,
			default: "",
		}
	},
	computed: {
		...mapStores(useTagStore, useArticleStore),
	},
	async created() {
		await this.tagStore.load();
		await this.articleStore.loadWithSlug(this.slug);
	}
};
</script>
