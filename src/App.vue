<template>
  <div id="app">
    <Banner />
    <router-link class="a" to="/home">home</router-link>
    <router-link class="a" to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from "./components/Home.vue"
import Banner from "./components/Banner.vue"

export default {
  name: "App",
  components: {
    // Home,
    // About
    Banner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a {
  display: inline-block;
  text-decoration: none;
  background: skyblue;
  color: hotpink;
  margin: 10px;
  border: 1px solid blanchedalmond;
  border-radius: 10px;
  font-size: 25px;
}
.a:active {
  background: seagreen;
}
</style>
