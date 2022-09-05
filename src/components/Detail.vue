<template>
  <div>
    <ul>
      <li>id:{{ $route.params.id }}</li>
      <li>title:{{ $route.params.title }}</li>
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
