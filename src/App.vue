<template>
	<div id="app">
		<div id="nav">
			<navbar />
		</div>
		<router-view />
	</div>
</template>

<script>
export default {
	components: {
		Navbar: () => import("./components/Navbar"),
	},
	name: "app",
}
</script>
