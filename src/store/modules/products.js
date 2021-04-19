import { getProduct } from "@/services/products.api"

export default {
    state: {
        product: null,
        products: [],
        errors: null,
        isLoading: false
    },
    mutations: {
        GET_PRODUCT_START(state) {
            state.errors = null
            state.isLoading = true
        },

        GET_PRODUCT_SUCCESS(state, payload) {
            state.product = payload
            state.isLoading = false
            state.errors = null
        },

        GET_PRODUCT_FAILURE(state, payload) {
            state.product = null
            state.errors = payload
            state.isLoading = false
        }
    },
    actions: {
       async GET_PRODUCT({commit}) {
                commit('GET_PRODUCT_START')
                try {
                    const currentProduct = await getProduct("607c6c04fb3416bb55d2b30a")
                    commit('GET_PRODUCT_SUCCESS', currentProduct)
                    return currentProduct
                } catch (err) {
                    commit('GET_PRODUCT_FAILURE', err)
                }
            
        }
    },
    getters: {
        getProduct: ({ product }) => product,
        getProducts: ({ products }) => products,
        getErrors: ({errors}) => errors
        
    },

}