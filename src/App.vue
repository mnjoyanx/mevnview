<template>
  <div id="app">
    <div id="nav">
      <navbar />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>



<script>
export default {  components: { 
    Navbar: () => import("./components/Navbar")
   },
  name: "app",
  
}
</script>