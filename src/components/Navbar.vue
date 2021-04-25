<template>
	<nav class="flex items-center justify-between flex-wrap bg-yellow-500 p-6">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<router-link
				:to="{ name: 'home' }"
				class="font-semibold text-xl tracking-tight"
				>Home</router-link
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
				<router-link
					:to="{ name: 'about' }"
					class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>
					About
				</router-link>
				<router-link
					:to="{ name: 'about' }"
					class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>
					Examples
				</router-link>
				<a
					href="#responsive-header"
					class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
				>
					Blog
				</a>
			</div>
			<template v-if="allCategories.length">
				<category-list :allCategories="allCategories" />
			</template>
			<button
				class="bg-yellow-300 p-2"
				@click="$router.push({ name: 'cart' })"
			>
				Cart
			</button>
			<span>{{ cartCount }}</span>
		</div>
	</nav>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"

export default {
	name: "navbar",
	components: {
		CategoryList: () => import("@/components/categories/CategoryList"),
	},
	computed: {
		...mapState({
			allCategories: (state) => state.categories.categories,
		}),
		...mapGetters({
			cartCount: "cartItemsCount",
		}),
	},
	methods: {
		...mapActions({
			getCategories: "GET_CATEGORIES",
		}),
	},
	mounted() {
		console.log(this.$router, 22)
		this.getCategories()
	},
}
</script>

<style lang="scss" scoped></style>
