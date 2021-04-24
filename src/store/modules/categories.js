import { getCategory, getCategories } from "@/services/categories"

export default {
	state: {
		category: {},
		categories: [],
		errors: null,
		isLoading: false,
	},
	mutations: {
        GET_CATEGORY_START(state) {
            state.category = {}
			state.errors = null
			state.isLoading = true
		},
		GET_CATEGORY_SUCCESS(state, payload) {
			state.category = payload
			state.errors = null
			state.isLoading = false
		},
		GET_CATEGORY_FAILURE(state, payload) {
			state.category = {}
			state.isLoading = false
			state.errors = payload
        },
        
        GET_CATEGORIES_START(state) {
            state.categories = []
            state.isLoading = true
            state.errors = null
        },
        GET_CATEGORIES_SUCCESS(state, payload) {
            state.categories = payload
            state.isLoading = false
            state.errors = null
        },
        GET_CATEGORIES_FAILURE(state, payload) {
            state.categories = []
            state.isLoading = false
            state.errors = payload
        }
	},
    actions: {
        async GET_CATEGORY({ commit }) {
            try {
                commit("GET_CATEGORY_START")
                const category = await getCategory("3516844")
                commit("GET_CATEGORY_SUCCESS", category)
                return category
            } catch (err) {
                commit("GET_CATEGORY_FAILURE", err)
            }
        },
        
        async GET_CATEGORIES({ commit }) {
            commit('GET_CATEGORIES_START')
            try {
                const categories = await getCategories()
                commit('GET_CATEGORIES_SUCCESS', categories.data)
                return categories
            } catch (err) {
                commit('GET_CATEGORIES_FAILURE', err)
            }
        }
	},
	getters: {},
}
