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
          path: "message",
          component: Message,
          children: [
            {
              path: "detail",
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
