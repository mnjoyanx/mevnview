<template>
	<div>
		<template>
			<ul v-if="cartProducts">
				<li v-for="item in cartProducts" :key="item.id">
					<p>
						{{ item.title }} <span>{{ item.price }}</span>
					</p>
				</li>
			</ul>
			<div>
				{{ cartProductsPrice }}
			</div>
		</template>
	</div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
	name: "cart",
	computed: {
		...mapGetters({
			cartProducts: "getAllCartProducts",
			cartProductsPrice: "getAllCartProductsPrice",
		}),
	},
}
</script>

<style lang="scss" scoped></style>
