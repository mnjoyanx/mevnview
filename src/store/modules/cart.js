export default {
    state: {
        cart: [],
        errors: null
    },
    mutations: {
        GET_CART_ITEMS(state, payload) {
            state.cart.push(payload)
        }
    },
    actions: {
    },
    getters: {
        getAllCartProducts(state) {
            return state.cart
        },
    }
}