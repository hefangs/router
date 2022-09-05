<template>
  <div>
    <ul>
      <li>id:{{ id }}</li>
      <li>title:{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  props: ["id", "title"],
  mounted() {
    console.log(this.$route)
  }
}
</script>
