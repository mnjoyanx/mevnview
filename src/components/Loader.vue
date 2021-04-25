<template>
	<div class="flex h-screen justify-center items-center">
		<div class="loader bg-white p-5 rounded-full flex space-x-3">
			<div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
			<div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
			<div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "loader",
}
</script>

<style>
.loader div {
	animation-duration: 0.5s;
}

.loader div:first-child {
	animation-delay: 0.1s;
}

.loader div:nth-child(2) {
	animation-delay: 0.3s;
}

.loader div:nth-child(3) {
	animation-delay: 0.6s;
}
</style>
