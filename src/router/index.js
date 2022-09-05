import VueRouter from "vue-router"
import About from "../components/About.vue"
import Home from "../components/Home.vue"
import News from "../components/News.vue"
import Message from "../components/Message.vue"
import Detail from "../components/Detail.vue"
import Vue from "vue"
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News
        },
        {
          name: "xiaoxi",
          path: "message",
          component: Message,
          children: [
            {
              name: "xiangqing",
              path: "detail/:id/:title",
              component: Detail,

              // 第一种：直接props:true, 将params参数传递给改组件，该组件直接通过props来接收
              // props: true

              // 第二种:对象的写法
              // props: { a: 1, b: 2 }

              // 第三种：函数的写法
              // props($route) {
              //   return {
              //     id: $route.params.id,
              //     title: $route.params.title
              //   }
              // }

              // props({ params }) {
              //   return {
              //     id: params.id,
              //     title: params.title
              //   }
              // }
              props({ params: { id, title } }) {
                return {
                  id,
                  title
                }
              }
            }
          ]
        }
      ]
    },
    {
      path: "/about",
      component: About
    }
  ]
})
