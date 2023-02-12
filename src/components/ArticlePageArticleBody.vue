<template>
	<div class="grid">
		<p
			v-if="bodyPart.type === 'p'"
			class="font-serif text-stone-300 mb-3 mt-1"
		>
			{{ bodyPart.content }}
		</p>
		<figure
			v-if="bodyPart.type === 'img'"
			class="mb-8 justify-self-center"
		>
			<img
				:src="bodyPart.content"
				:alt="bodyPart.alt"
				class="mb-0"
			>
			<figcaption class="font-light text-stone-400 text-center">
				{{ bodyPart.alt }}
			</figcaption>
		</figure>
	</div>
</template>

<script>
export default {
	name: "ArticlePageArticle",
	props: {
		bodyPart: {
			type: Object,
			required: true,
		},
	}
};
</script>
