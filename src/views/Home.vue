<template>
	<div class="home">
		<div v-if="getProducts.length">
			<product-list :products="getProducts" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import ProductList from "@/components/products/ProductList.vue"
export default {
	components: { ProductList },
	name: "Home",
	computed: {
		...mapGetters(["getProducts"]),
	},
	methods: {
		...mapActions({ getAllProducts: "GET_PRODUCTS" }),
	},
	created() {
		this.getAllProducts()
	},
}
</script>
