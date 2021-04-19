import { getProducts } from "@/services/products.api"

export default {
    state: {
        product: null,
        products: [],
        errors: null,
        isLoading: false
    },
    mutations: {
        GET_PRODUCTS_START(state) {
            state.errors = null
            state.isLoading = true
        },

        GET_PRODUCTS_SUCCESS(state, payload) {
            state.products = payload
            state.isLoading = false
            state.errors = null
        },

        GET_PRODUCTS_FAILURE(state, payload) {
            state.product = null
            state.errors = payload
            state.isLoading = false
        }
    },
    actions: {
       async GET_PRODUCTS({commit}) {
                commit('GET_PRODUCTS_START')
                try {
                    const allProducts = await getProducts()
                    commit('GET_PRODUCTS_SUCCESS', allProducts.data)
                    return allProducts
                } catch (err) {
                    commit('GET_PRODUCTS_FAILURE', err)
                }
        }
    },
    getters: {
        getCurrentProduct: ({ product }) => product,
        getProducts(state) {
            return state.products
        },
        getErrors: ({errors}) => errors
        
    },

}