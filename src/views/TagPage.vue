<template>
	<div>{{ slug }}</div>
</template>

<script>
export default {
	name: "TagPage",
	props: {
		slug: {
			type: String,
			default: "",
		}
	}
};
</script>
