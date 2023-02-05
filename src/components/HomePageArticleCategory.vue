<template>
	<router-link
		:to="`/category/${slugifyCategory}`"
		:class="{'flex flex-none': true, 'mt-2': topMargin, 'ml-1': leftMargin}"
	>
		<div class="bg-primary hover:bg-sky-900 px-2 transition duration-200 ease-in-out rounded-md text-neutral-900 hover:text-stone-50 mr-2">
			{{ category }}
		</div>
	</router-link>
</template>

<script>
export default {
	name: "HomePageArticleCategory",
	props: {
		category: {
			type: String,
			default: null
		},
		topMargin: {
			type: Boolean,
			default: false,
		},
		leftMargin: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		slugifyCategory() {
			return this.category
				.toLowerCase()
				.replaceAll(" & ", "and")
				.replaceAll(" ", "-")
				.replaceAll("&", "-and-");
		}
	}
};
</script>
