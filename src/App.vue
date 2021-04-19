<template>
  <div id="app">
    <div id="nav">
      <navbar />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>



<script>
export default {
  components: { 
    Navbar: () => import("./components/Navbar")
   },
  name: "app",
  mounted() {
    this.$store.dispatch("GET_PRODUCT").then(res => console.log(res))
  }
}
</script>