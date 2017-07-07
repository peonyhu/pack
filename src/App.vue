<template>
  <div class="m-wrapper">
    <share></share>
    <div class="m-top"></div>
    <router-view></router-view>
    <!--路由视图容器-->
  </div>
</template>

<script type="text/ecmascript-6">
  import share from '@/components/share/share'
export default {
  components: {
    share
  }
}
</script>

<style>
  @import './assets/css/App.css';
  /*.m-wrapper {background:url(https://alicdn.jinhui365.com/activity/redPacket/images/new_bg.jpg) no-repeat;background-size: 100% 100%;min-height:41.65625rem;height:auto;width:100%;}*/
  /*.m-top {background:url(https://alicdn.jinhui365.com/activity/redPacket/images/new_topbg.png) no-repeat; background-size: 100% 8.28125rem;width:100%;height:8.28125rem;text-align: center;}*/
</style>
