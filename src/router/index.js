import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(VueRouter)
// 解决重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/Home/Index',
    meta:{
      title:'我的个人商城'
    },
    component: Home,
    children:[
      {
        path:'/Home/Index',
        name:'Index',
        component:()=>import('../views/Home/Index'),
        meta:{
          title:'首页'
        },
      },
      {
        path:'/Home/jd',
        name:'jd',
        component:()=>import('../views/jdList/jdList'),
        meta:{
          title:'京东'
        },
      },
      {
        path:'/Home/pdd',
        name:'pdd',
        component:()=>import('../views/pddList/pddList'),
        meta:{
          title:'拼多多'
        },
      },
      {
        path:'/Home/wph',
        name:'wph',
        component:()=>import('../views/wphList/wphList'),
        meta:{
          title:'唯品会'
        },
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  document.title = to.meta.title;  // 重要
  next();
}) 

export default router
