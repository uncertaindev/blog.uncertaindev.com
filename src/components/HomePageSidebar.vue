<template>
	<div>
		<!-- <h3 class="mt-4 text-1xl font-extrabold font-customTitleSerif text-stone-100">
			Tags
		</h3>
		<div class="flex flex-row flex-wrap">
			<HomePageArticleTag
				v-for="(tag) in tagStore.tags"
				:key="tag.id"
				:tag="tag"
				top-margin
			/>
		</div> -->
	</div>
</template>

<script>
import { mapStores } from "pinia";

import { useTagStore } from "@/store/tagStore";

export default {
	name: "HomePageSidebar",
	computed: {
		...mapStores(useTagStore),
	}
};
</script>

