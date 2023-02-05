<template>
	<div
		v-for="article in articles"
		:key="article.id"
	>
		<HomePageArticle
			:id="article.id"
			:title="article.title"
			:slug="article.slug"
			:text="article.text"
			:date="article.date"
			:read-time="article.readTime"
			:categories="article.categories"
		/>
	</div>
</template>

<script>
export default {
	name: "HomePage",
	data() {
		return {
			articles: [
				{
					id: "3poi5rjmnq",
					title: "Whata1",
					slug: "what-1",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis metus non lectus venenatis consequat. In pulvinar quam odio, malesuada faucibus risus interdum sit amet. In a est erat. Aliquam purus eros, convallis vitae neque vel, pretium varius lacus. Cras orci magna, commodo sed tempus non, mollis sed neque. Proin id neque sollicitudin lectus ornare lacinia in et lacus. Nam orci purus, ullamcorper quis velit ac, ultricies semper ex.",
					date: "2022/02/02",
					readTime: "5 min",
					categories: [
						"Technology"
					]
				},
				{
					id: "3raf01ak",
					title: "Whata2",
					slug: "what-2",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis metus non lectus venenatis consequat. In pulvinar quam odio, malesuada faucibus risus interdum sit amet. In a est erat. Aliquam purus eros, convallis vitae neque vel, pretium varius lacus. Cras orci magna, commodo sed tempus non, mollis sed neque. Proin id neque sollicitudin lectus ornare lacinia in et lacus. Nam orci purus, ullamcorper quis velit ac, ultricies semper ex.",
					date: "2022/02/02",
					readTime: "175 min",
					categories: [
						"Technology",
						"JavaScript"
					]
				},
				{
					id: "rfawf-0jf",
					title: "Whata3",
					slug: "what-3",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis metus non lectus venenatis consequat. In pulvinar quam odio, malesuada faucibus risus interdum sit amet. In a est erat. Aliquam purus eros, convallis vitae neque vel, pretium varius lacus. Cras orci magna, commodo sed tempus non, mollis sed neque. Proin id neque sollicitudin lectus ornare lacinia in et lacus. Nam orci purus, ullamcorper quis velit ac, ultricies semper ex.",
					date: "2022/02/02",
					readTime: "15 min",
					categories: [
						"Technology",
						"Music"
					]
				}
			]
		};
	}
};
</script>
