<template>
	<!-- component -->
	<div
		class="flex justify-center h-screen items-center bg-gray-200 antialiased"
	>
		<div
			class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl"
		>
			<div
				class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
			>
				<p class="font-semibold text-green-500">Add to Cart ?</p>
				<svg
					class="w-6 h-6 cursor-pointer"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</div>
			<div class="flex flex-col px-6 py-5 bg-gray-50">
				<p class="mb-2 font-semibold text-gray-700">
					Product Description
				</p>
				<p class="w-60 text-gray-500">sdvsv //TODO ITEM DESCRIPTION</p>
				<div
					class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5"
				>
					<div class="w-full sm:w-1/2">
						<p class="mb-2 font-semibold text-gray-700">
							Customer Response
						</p>
						<select
							type="text"
							name=""
							class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
							id=""
						>
							<option value="0">Add service</option>
						</select>
					</div>
					<div class="w-full sm:w-1/2 mt-2 sm:mt-0">
						<p class="mb-2 font-semibold text-gray-700">
							Next step
						</p>
						<select
							type="text"
							name=""
							class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
							id=""
						>
							<option value="0">Book Appointment</option>
						</select>
					</div>
				</div>
				<hr />

				<div class="flex items-center mt-5 mb-3 space-x-4">
					<div class="custom-number-input w-28">
						<label
							for="custom-input-number"
							class="w-full text-gray-700 text-sm font-semibold"
							>Counter Input
						</label>
						<div
							class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"
						>
							<button
								data-action="decrement"
								class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
							>
								<span class="m-auto text-2xl font-thin">−</span>
							</button>
							<input
								type="text"
								class="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
								name="custom-input-number"
								value="0"
							/>
							<button
								class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
							>
								<span class="m-auto text-2xl font-thin">+</span>
							</button>
						</div>
					</div>
				</div>
				<div
					class="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm"
				>
					<div class="flex flex-row items-center">
						<img
							class="w-10 h-10 mr-3 rounded-full"
							src="https://randomuser.me/api/portraits/lego/7.jpg"
							alt=""
						/>
						<div class="flex flex-col">
							<p class="font-semibold text-gray-800">
								Xu Lin Bashir
							</p>
							<p class="text-gray-400">table.co</p>
						</div>
					</div>
					<h1 class="font-semibold text-red-400 cursor-pointer">
						Remove
					</h1>
				</div>
			</div>
			<div
				class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
			>
				<p class="font-semibold text-gray-600 cursor-pointer">Cancel</p>
				<button
					class="px-4 py-2 text-white font-semibold bg-green-500 rounded"
				>
					Add
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "modal",
}
</script>
