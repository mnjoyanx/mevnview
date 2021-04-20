import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

 
export default new VueRouter ({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
    name: "home"
    },

    {
      path: '/products',
      component: () => import('@/views/products/Index.vue'),
      name: 'products',
      redirect: {name: 'home'},
      children: [
        {
          path: '/products/:id',
          component: () => import("@/views/products/Product"),
          name: 'current-product'
        }
      ]
    },

  {
    path: "/about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    name: "about"
  },
]

});

