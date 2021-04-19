<template>
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
					<div>
						<img :src="product.imgUrl" alt="" />
					</div>
					<div class="border-t-2"></div>
					<div class="my-2">
						<p class="font-semibold text-base mb-2">Team Member</p>
						<!-- <div class="flex space-x-2">{{ cratedAt }}</div> -->
					</div>
					<div class="">
						<div class="flex space-x-2 text-gray-400 text-sm my-3">
							<!-- svg  -->
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
								{{ getDate(product.created_at) }}
							</p>
						</div>
						<div class="my-2 flex justify-between">
							<p class="font-semibold text-base mb-2">Progress</p>
							<div class="text-base text-gray-400 font-semibold">
								<p>34%</p>
							</div>
						</div>
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
		getDate(date) {
			return this.$moment(date).format("MM/DD/YYYY")
		},
	},
}
</script>
