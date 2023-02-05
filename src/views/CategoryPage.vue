<template>
	{{ slug }}
</template>

<script>
export default {
	name: "CategoryPage",
	props: {
		slug: {
			type: String,
			default: "",
		}
	}
};
</script>
