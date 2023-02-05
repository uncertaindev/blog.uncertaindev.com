<template>
	<router-link :to="`/category/${slugifyCategory}`">
		<span class="bg-sky-900 hover:bg-sky-800 px-2 py-1 transition duration-200 ease-in-out rounded-full text-stone-50 mr-2">{{ category }}</span>
	</router-link>
</template>

<script>
export default {
	name: "HomePageArticleCategory",
	props: {
		category: {
			type: String,
			default: null
		}
	},
	computed: {
		slugifyCategory() {
			return this.category.toLowerCase();
		}
	}
};
</script>
