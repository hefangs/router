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
              component: Detail
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
