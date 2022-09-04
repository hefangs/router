<template>
  <div>
    <h3>我是Home</h3>

    <router-link class="a" to="/home/news">News</router-link>

    <router-link class="a" to="/home/message">Message</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home"
}
</script>
<style></style>
