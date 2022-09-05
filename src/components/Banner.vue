<template>
  <div>
    <h1>About</h1>
    <h2>欢迎来到router</h2>
    <button @click="backShow">回退</button>
    <button @click="forwardShow">前进</button>
    <button @click="goShow">go</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  methods: {
    backShow() {
      this.$router.back()
    },
    forwardShow() {
      this.$router.forward()
    },
    goShow() {
      this.$router.go()
    }
  }
}
</script>
