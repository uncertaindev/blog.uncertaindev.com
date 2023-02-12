<template>
	<article
		v-if="article"
		class="prose-base mt-15"
	>
		<router-link
			:to="`article/${article.slug}`"
		>
			<h2 class="text-2xl font-extrabold font-customTitleSerif text-stone-50 mb-0">
				{{ article.title }}
			</h2>

			<p class="font-serif text-stone-300 truncate whitespace-normal line-clamp-3">
				{{ article.previewText }}
			</p>
		</router-link>
		<footer class="font-customTitleSerif font-light text-stone-400 flex-row flex">
			<div class="material-symbols-outlined text-base leading-5 align-top self-center px-1">
				calendar_month
			</div>
			<div class="self-center">
				{{ article.date }} &sdot;
			</div>
			<div class="material-symbols-outlined text-base leading-5 align-top self-center px-1">
				timer
			</div>
			<div class="self-center">
				{{ article.readTime }} min read &sdot;
			</div>
			<div
				v-for="(tag, tagId) in article.tags"
				:key="`${article.id}-${tagId}`"
			>
				<HomePageArticleTag
					:tag="tag"
					:left-margin="tagId === 0"
				/>
			</div>
		</footer>
	</article>
	<div
		v-else
		class="prose-base mt-15"
	>
		<h2 class="text-2xl font-extrabold font-customTitleSerif text-stone-50 mb-0">
			There are no articles. Check back again later.
		</h2>
	</div>
</template>

<script>
import { mapStores } from "pinia";

import { useTagStore } from "@/store/tagStore";

export default {
	name: "HomePageArticle",
	props: {
		article: {
			type: Object,
			required: true,
		}
	},
	computed: {
		...mapStores(useTagStore)
	},
};
</script>
