<template>
	<nav class="flex items-center justify-between flex-wrap bg-yellow-500 p-6">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<span class="font-semibold text-xl tracking-tight"
				>Tailwind CSS</span
			>
		</div>
		<div class="block lg:hidden">
			<button
				class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
			>
					Menu
			</button>
		</div>
		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div class="text-sm lg:flex-grow">
				<a
					href="#responsive-header"
					class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>
					Docs
				</a>
				<a
					href="#responsive-header"
					class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>
					Examples
				</a>
				<a
					href="#responsive-header"
					class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
				>
					Blog
				</a>
			</div>
			<div>
				<a
					href="#"
					class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
					>Download</a
				>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "navbar",
}
</script>

<style lang="scss" scoped>
</style>