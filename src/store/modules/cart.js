export default {
	state: {
		cart: [],
        errors: null,
        cartCount: 0
	},
	mutations: {
		GET_CART_ITEMS(state, payload) {
            let idx = state.cart.findIndex(item => item._id == payload._id)
			if (idx === -1) {
				state.cart.push(payload)
			} else {
				state.cart = state.cart.filter(item => item._id !== payload._id)
			}
		},
	},
	actions: {},
	getters: {
		getAllCartProducts(state) {
			return state.cart
		},
		getAllCartProductsPrice(state) {
			if (state.cart.length) {
                return state.cart.reduce((acc, i) => {
					return acc + i.price
				}, 0)
			}
		},
        cartItemsCount(state) {
            return state.cart.length
        }
	},
}
