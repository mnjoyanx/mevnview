<template>
	<div>
		<template v-if="cartProducts.length">
			<ul>
				<table-component :items="cartProducts" />
			</ul>
			<div>{{ cartProductsPrice }}</div>
		</template>
		<template v-else>
			<p>you have not products yet</p>
		</template>
	</div>
</template>

<script>
import { mapGetters } from "vuex"
import TableComponent from "@/components/TableComponent"

export default {
	name: "cart",
	components: {
		TableComponent,
	},
	computed: {
		...mapGetters({
			cartProducts: "getAllCartProducts",
			cartProductsPrice: "getAllCartProductsPrice",
		}),
	},
}
</script>

<style lang="scss" scoped></style>
