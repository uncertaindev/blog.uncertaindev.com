<template>
	<article class="prose-base mt-15">
		<h2 class="text-2xl font-extrabold font-font-customTitleSerif text-stone-50 mb-0">
			{{ currentArticle.title }}
		</h2>
		<div class="font-customTitleSerif font-light text-stone-400 flex-row flex mb-4">
			<div class="material-symbols-outlined text-base leading-5 align-top self-center pr-1">
				calendar_month
			</div>
			<div class="self-center">
				{{ currentArticle.date }} &sdot;
			</div>
			<div class="material-symbols-outlined text-base leading-5 align-top self-center px-1">
				timer
			</div>
			<div class="self-center">
				{{ currentArticle.readTime }} min read
			</div>
		</div>

		<ArticlePageArticleBody
			v-for="(part, id) in currentArticle.body"
			:key="id"
			:body-part="part"
		/>
		<footer class="font-customTitleSerif font-light text-stone-400 flex-row flex mt-5">
			<div
				v-for="(tag, tagId) in currentArticle.tags"
				:key="`${currentArticle.id}-${tagId}`"
			>
				<HomePageArticleTag
					:tag="tag"
					:left-margin="tagId === 0"
				/>
			</div>
		</footer>
	</article>
</template>

<script>
import { mapStores } from "pinia";

import { useArticleStore } from "@/store/articleStore";
import { useTagStore } from "@/store/tagStore";

export default {
	name: "ArticlePageArticle",
	computed: {
		...mapStores(useArticleStore, useTagStore),
		currentArticle() {
			return this.articleStore.currentArticle;
		}
	}
};
</script>
