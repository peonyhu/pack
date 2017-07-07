// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import gain from '@/components/gain/gain';
import suc from '@/components/suc/suc';
Vue.config.productionTip = false      //来关闭生产模式下给出的提示
Vue.use(VueRouter);     //显式声明使用路由
Vue.use(VueResource);

// 创建路由实例并配置路由映射
const router = new VueRouter({
  hashbang: false,        //为true时，将路径格式化为#!开头  http://localhost:8282/#/
  mode: 'history',        //http://localhost:8282/ HTML5 History 模式
  base: __dirname,        //获取当前路径下的完整路径
  routes:[
    { path: '/',name:'gain',component: gain },
    { path: '/suc',name:'suc',component: suc }
  ]
})
// new Vue的实例化
const app = new Vue({
  router,     //使用路由
  // render: function(createElement) {
  //   return createElement();
  // }
  template: '<App/>',/*告知页面这个组件用这样的标签来包裹着,并且使用它*/
  components: { App }/*告知当前页面想使用App这个组件*/
  // render: h => h(App)
}).$mount('#app')
//vm.$mount()手动地挂载一个未挂载的实例,类似于el:'#app'
// 最后效果将会替换页面中id为app的div元素
// router.go('/');



// export default router; //将路由器导出


// {
//   path: '/blog',
//     name: 'blog',
//   component: Blog,
//   children: [
//   {
//     path: '/',
//     component: page1
//   },
//   {
//     path: 'info',
//     component: page2
//   }
// ]
// }
