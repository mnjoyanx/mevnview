import Vue from "vue";
import Vuex from "vuex";
import products from "@/store/modules/products"
import categories from "@/store/modules/categories"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    categories
  },
});
