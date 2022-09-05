<template>
  <div>
    <ul>
      <li>
        <a href="#">这是news1</a>
        <el-input placeholder="请输入内容" style="width: 200px" clearable v-model="input" />
      </li>
      <li>
        <a href="#">这是news2</a>
        <el-input placeholder="请输入内容" style="width: 200px" clearable v-model="input" />
      </li>
      <li>
        <a href="#">这是news3</a>
        <el-input placeholder="请输入内容" style="width: 200px" clearable v-model="input" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "News",
  data() {
    return {
      input: ""
    }
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
