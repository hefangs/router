import VueRouter from "vue-router"
import About from "../components/About.vue"
import Home from "../components/Home.vue"
import News from "../components/News.vue"
import Message from "../components/Message.vue"
import Detail from "../components/Detail.vue"
import Vue from "vue"
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      meta: { title: "主页" },
      children: [
        {
          name: "xinwen",
          path: "news",
          meta: { isAuth: true, title: "新闻" },
          component: News
        },
        {
          name: "xiaoxi",
          path: "message",
          meta: { isAuth: true, title: "消息" },
          component: Message,
          children: [
            {
              name: "xiangqing",
              path: "detail",
              meta: { title: "详情" },
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
              props({ query: { id, title } }) {
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
      name: "guanyu",
      path: "/about",
      meta: { title: "关于" },
      component: About
    }
  ]
})
// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否需要鉴权
  if (to.meta.isAuth) {
    if (localStorage.getItem("school") === "abc") {
      next()
    } else {
      alert("无权限")
    }
  } else {
    next()
  }
})
// 全局后置路由守卫
router.afterEach((to, from) => {
  console.log(to, from)
  document.title = to.meta.title || "router-系统"
})

export default router
