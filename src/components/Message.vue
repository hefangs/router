<template>
  <div>
    <h2>我是Message</h2>
    <ul>
      <li v-for="m in messageList" :key="m.id" @click="addData">
        <!-- query传参：to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`"> -->
        <!-- query传参：to的对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title
            }
          }"
        >
          {{ m.id }}-{{ m.title }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"
import { nanoid } from "nanoid"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Message",
  data() {
    return {
      messageList: [
        {
          id: "001",
          title: "001标题"
        }
      ]
    }
  },
  methods: {
    addData() {
      console.log(this.$route)
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(res => {
        let result = res.data
        let dataObj = {
          id: nanoid(),
          title: result
        }
        this.messageList.push(dataObj)
      })
    }
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
}
</style>
