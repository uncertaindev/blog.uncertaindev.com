<template>
	<router-link
		:to="`/tag/${tag.slug}`"
		:class="{'flex flex-none': true, 'mt-2': topMargin, 'ml-1': leftMargin}"
	>
		<div class="bg-primary hover:bg-sky-900 px-2 transition duration-200 ease-in-out rounded-md text-neutral-900 hover:text-stone-50 mr-2">
			{{ tag.name }}
		</div>
	</router-link>
</template>

<script>
export default {
	name: "HomePageArticleTag",
	props: {
		tag: {
			type: Object,
			default: () => {},
			required: true,
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
};
</script>
