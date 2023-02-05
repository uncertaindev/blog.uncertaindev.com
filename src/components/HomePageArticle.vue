<template>
	<article class="prose-base mt-15">
		<router-link
			:to="`article/${slug}-${id}`"
		>
			<h2 class="text-2xl font-extrabold font-customTitleSerif text-stone-50 mb-0">
				{{ title }}
			</h2>

			<p class="font-serif text-stone-300 truncate whitespace-normal line-clamp-3">
				{{ text }}
			</p>
		</router-link>
		<footer class="font-customTitleSerif font-light text-stone-400 flex-row flex">
			<div class="material-symbols-outlined text-base leading-5 align-top self-center px-1">
				calendar_month
			</div>
			<div class="self-center">
				{{ date }} &sdot;
			</div>
			<div class="material-symbols-outlined text-base leading-5 align-top self-center px-1">
				timer
			</div>
			<div class="self-center">
				{{ readTime }} min read &sdot;
			</div>
			<div
				v-for="(category, catId) in categories"
				:key="`${id}-${catId}`"
			>
				<HomePageArticleCategory
					:category="category"
					:left-margin="catId === 0"
				/>
			</div>
		</footer>
	</article>
</template>

<script>
export default {
	name: "HomePageArticle",
	props: {
		id: {
			type: String,
			default: null
		},
		title: {
			type: String,
			default: "Empty title"
		},
		slug: {
			type: String,
			default: "/"
		},
		text: {
			type: String,
			default: "Empty text"
		},
		date: {
			type: String,
			default: "1979/01/01"
		},
		readTime: {
			type: Number,
			default: 0
		},
		categories: {
			type: Array,
			default: () => []
		}
	},
};
</script>
