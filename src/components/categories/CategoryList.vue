<template>
	<div>
		<router-link
			v-for="item in allCategories"
			:key="item.id"
			:to="item.title"
			class="mr-2"
			>{{ item.title }}</router-link
		>
	</div>
</template>

<script>
export default {
	name: "category-list",
	props: {
		allCategories: {
			type: Array,
			required: true,
		},
	},
}
</script>
