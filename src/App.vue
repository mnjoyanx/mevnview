<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>



<script>
export default {
  name: 'app',
  mounted() {
    fetch('http://localhost:5000/api/v1/categories')
      .then(res => res.json())
      .then(res => console.log(res))

  }
}
</script>