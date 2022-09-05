<template>
  <div>
    <ul>
      <li>id:{{ $route.query.id }}--title:{{ $route.query.title }}</li>
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
