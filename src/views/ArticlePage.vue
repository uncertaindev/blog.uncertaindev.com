<template>
	{{ slug }}
</template>

<script>
export default {
	name: "ArticlePage",
	props: {
		slug: {
			type: String,
			default: "",
		}
	}
};
</script>
