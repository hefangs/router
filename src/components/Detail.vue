<template>
  <div>
    <ul>
      <li>{{ $route.query.id }}--{{ $route.query.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  mounted() {
    console.log(this.$route)
  }
}
</script>
