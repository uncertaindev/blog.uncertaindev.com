<template>
	<div class="container container-xl mx-auto py-2 text-stone-100">
		<header class="flex mb-20">
			<h1 class="text-3xl font-customLogoSerif font-light text-logoPrimary flex-none">
				Uncertain<strong class="text-logoSecondary">DEV</strong>
			</h1>
			<nav class="flex grow">
				<AppNav />
			</nav>
		</header>
		<main class="mx-10">
			<router-view />
		</main>
	</div>
</template>
