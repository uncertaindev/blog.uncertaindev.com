<template>
	<div class="flex flex-grow">
		<section class="basis-2/3 mr-10">
			<HomePageArticle
				v-for="(article) in articleStore.articles"

				:key="article.id"
				:article="article"
			/>
			<div
				v-if="articleStore.articles.length === 0 && !articleStore.isLoading"
				class="prose-base mt-15"
			>
				<h2 class="text-2xl font-extrabold font-customTitleSerif text-stone-50 mb-0">
					There are no articles. Check back again later.
				</h2>
			</div>
			<div
				v-if="isLoading"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					class="text-primary mx-auto"
					width="100px"
					height="100px"
					viewBox="0 0 100 100"
					preserveAspectRatio="xMidYMid"
				>
					<circle
						cx="50"
						cy="50"
						fill="none"
						stroke="currentColor"
						stroke-width="5"
						r="20"
						stroke-dasharray="94.24777960769379 33.41592653589793"
					>
						<animateTransform
							attributeName="transform"
							type="rotate"
							repeatCount="indefinite"
							dur="1.3333333333333335s"
							values="0 50 50;360 50 50"
							keyTimes="0;1"
						/>
					</circle>
				</svg>
			</div>
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
