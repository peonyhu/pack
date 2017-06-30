// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import top from '@/components/top/top';
import suc from '@/components/suc/suc';
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  base: __dirname,
  routes:[
    { path: '/',name:'top',component: top },
    { path: '/suc',name:'suc',component: suc }
  ]
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// router.go('/goods');

export default router; //将路由器导出
