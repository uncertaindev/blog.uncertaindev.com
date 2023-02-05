<template>
	<div class="container container-xl mx-auto text-stone-100">
		<header class="flex py-4 px-4 mb-20 border-slate-800 border-b-2">
			<router-link to="/">
				<h1 class="text-3xl font-customLogoSerif font-light text-primary flex-none">
					Uncertain<strong class="text-stone-50">DEV</strong>
				</h1>
			</router-link>
			<nav class="flex grow">
				<AppNav />
			</nav>
		</header>
		<main class="mx-10 flex flex-row">
			<router-view />
		</main>
	</div>
</template>
