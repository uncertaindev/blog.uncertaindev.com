<template>
	<ul class="flex flex-auto justify-end self-center">
		<router-link
			to="/"
			:class="{
				'ml-4 hover:border-primary border-b-2 transition duration-200 ease-in-out': true,
				'border-primary': $route.name === 'Home',
				' border-transparent': $route.name !== 'Home'
			}"
		>
			<li class="text-2xl">
				Home
			</li>
		</router-link>
		<router-link
			to="/about"
			:class="{
				'ml-4 hover:border-primary border-b-2 transition duration-200 ease-in-out': true,
				'border-primary': $route.name === 'About',
				' border-transparent': $route.name !== 'About'
			}"
		>
			<li class="text-2xl">
				About
			</li>
		</router-link>
		<router-link
			to="/contact"
			:class="{
				'ml-4 hover:border-primary border-b-2 transition duration-200 ease-in-out': true,
				'border-primary': $route.name === 'Contact',
				' border-transparent': $route.name !== 'Contact'
			}"
		>
			<li class="text-2xl">
				Contact
			</li>
		</router-link>
	</ul>
</template>
