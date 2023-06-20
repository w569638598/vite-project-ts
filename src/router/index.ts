import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    component: () => import('../layouts/index.vue'),
    redirect: '/vxetable',
    meta: {
      title: '主页',
      icon: 'home'
    },
    children: [
      {
        path: '/vxetable',
        component: () => import('../view/vxetable.vue'),
        meta: {
          title: 'vxetable',
          icon: 'tickets'
        }
      },
      {
        path: '/a',
        redirect: '/dragForm',
        meta: {
          title: '自定义表单图表'
        },
        children: [
          {
            path: '/dragForm',
            meta: {
              title: 'dragForm',
              icon: 'Crop'
            },
            component: () => import('../view/drag/index.vue')
          },
          {
            path: '/b',
            meta: {
              title: 'b',
              icon: 'House'
            },
            component: () => import('../view/b.vue')
          },
          {
            path: '/echarts',
            meta: {
              title: 'echarts',
              icon: 'Crop'
            },
            component: () => import('../view/echarts.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../view/login.vue')
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里layouts
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
router.beforeEach(async (to, from, next) => {
  next()
})
export default router