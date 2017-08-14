import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.prototype.HOST = '/api'
// 定义组件, 也可以像教程之前教的方法从别的文件引入
import loginForm from './component/login.vue'
import demo from './views/demo/demo.vue'
import note from './views/note/note.vue'
import userCenter from './views/userCenter/userCenter.vue'
const work = { template: '<div><h2>我是work子页面</h2></div>' }
const study = { template: '<div><h2>我是study子页面</h2></div>' }
const other = { template: '<div><h2>我是other子页面</h2></div>' }
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    //重定向到 /indexindex
    {
      path: '/',
      redirect: '/index',
    },
    /**
     * 别名
     * /demanddetail 的别名是 /index，
     * 当用户访问 /index 时，URL 会保持为 /index，
     * 但是路由匹配则为 /demanddetail，就像用户访问 /demanddetail 一样。
     */
    {
      path: '/demo',
      component: demo,
      alias: '/index'
    },
    {
      path: '/note',
      // path: '/note/:id',
      component: note,
      // children:[{
      //   path:'work',
      //   component:work
      // },{
      //   path:'study',
      //   component:study
      // },{
      //   path:'other',
      //   component:other
      // }]
    },
    {
      path: '/user',
      component: userCenter
    },
    {
      path: '/login',
      component: loginForm
    },
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')