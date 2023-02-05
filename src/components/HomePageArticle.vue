<template>
	<article class="prose-base mt-10">
		<router-link
			:to="`article/${slug}-${id}`"
		>
			<h2 class="text-2xl font-extrabold font-customTitleSerif text-stone-50">
				{{ title }}
			</h2>
		</router-link>
		<p class="font-serif text-stone-300">
			{{ text }}
			<router-link
				class="text-stone-100 hover:underline transition duration-200 ease-in-out"
				:to="`article/${slug}-${id}`"
			>
				Read more...
			</router-link>
		</p>
		<footer class="font-customTitleSerif font-light text-stone-400">
			<span class="material-symbols-outlined text-base leading-5 align-top pt-1 ">calendar_month</span> {{ date }} &sdot;
			<span class="material-symbols-outlined text-base leading-5 align-top pt-1">timer</span> {{ readTime }} &sdot;
			<span
				v-for="(category, catId) in categories"
				:key="`${id}-${catId}`"
			>
				<HomePageArticleCategory
					:category="category"
				/>
			</span>
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
			type: String,
			default: "0 min"
		},
		categories: {
			type: Array,
			default: () => []
		}
	},
};
</script>
