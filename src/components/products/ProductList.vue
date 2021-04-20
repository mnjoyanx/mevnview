<template>
	<div class="mt-6">
		<div class="container mx-auto">
			<h2 class="text-3xl text-yellow-600">Product list</h2>

			<div class="flex items-center justify-between flex-wrap">
				<div
					v-for="product in products"
					:key="product._id"
					class="relative bg-white py-6 px-6 mt-3 border-t border-gray-200 rounded-3xl w-64 my-4 shadow-xl"
				>
					<div class="mt-8">
						<p class="text-xl font-semibold my-2">
							{{ product.title }}
						</p>
						<div class="relative">
							<img :src="product.imgUrl" alt="" />
							<div
								class="flex items-center justify-center absolute h-16 w-16 -bottom-4 -right-4 bg-red-500 rounded-full"
							>
								<p class="text-white">{{ product.price }} $</p>
							</div>
						</div>
						<div class="border-t-2"></div>
						<div class="my-2">
							<p class="font-semibold text-base mb-2">
								Amount:
								<span class="text-yellow-500">{{
									product.amount
								}}</span>
							</p>
						</div>
						<div class="">
							<div
								class="flex space-x-2 text-gray-400 text-sm my-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<p>
									{{
										$moment(product.created_at).format(
											"MM/DD/YYYY"
										)
									}}
								</p>
							</div>
							<div class="my-2 flex justify-between">
								<p
									class="text-base text-gray-500 mb-2 product-description"
								>
									{{ product.description }}
								</p>
							</div>
						</div>
						<button
							class="bg-blue-500 p-4 text-white"
							@click="currentProductHandler(product._id)"
						>
							got to product
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		products: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		currentProductHandler(id) {
			this.$router.push({ name: "current-product", params: { id } })
		},
	},
}
</script>

<style lang="scss" scoped>
.product-description {
	width: 200px;
	height: 100px;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
