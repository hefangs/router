<template>
  <div>
    <h2>我是Message</h2>
    <ul>
      <!-- <router-link to:"/home/message/detail"> -->
      <li v-for="m in messageList" :key="m.id">id:{{ m.id }}---title:{{ m.title }}</li>
      <!-- </router-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "我是001" },
        { id: "002", title: "我是002" },
        { id: "003", title: "我是003" }
      ]
    }
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
