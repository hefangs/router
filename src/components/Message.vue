<template>
  <div>
    <h2>我是Message</h2>
    <ul>
      <li v-for="m in messageList" :key="m.id" @click="addData">
        <!-- params传参对象写法，只能是name，不能是path，需要route页面占位符 -->
        <!-- <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: m.id || undefined,
              title: m.title || undefined
            }
          }"
        >
          {{ m.id }}-{{ m.title }}
        </router-link> -->

        <!-- params传参：to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
          {{ m.id }}-{{ m.title }}
        </router-link> -->

        <!-- query传参：to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
          {{ m.id }}-{{ m.title }}
        </router-link> -->

        <!-- query传参：to的对象(path)写法 -->
        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title
            }
          }"
        >
          {{ m.id }}-{{ m.title }}
        </router-link> -->

        <!-- query传参：to的对象(name)写法 -->
        <!-- <router-link
          :to="{
            //name写法，需要在 message-route中增加name
            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title
            }
          }"
        >
          {{ m.id }}-{{ m.title }}
        </router-link>
         -->
        <button @click="push(m)">push跳转</button>
        <button @click="replace(m)">replace跳转</button>
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
      console.log(this.$route)
    },
    push(m) {
      this.$router.push({
        name: "xiangqing",
        params: {
          id: m.id || undefined,
          title: m.title || undefined
        }
      })
    },
    replace(m) {
      this.$router.replace({
        name: "xiangqing",
        params: {
          id: m.id || undefined,
          title: m.title || undefined
        }
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
