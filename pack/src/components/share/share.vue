<template>
  <div class="share">
    <input type="hidden" id="title" value="" v-model="share.title">
    <input type="hidden" id="link" value="" v-model="share.link">
    <input type="hidden" id="imgUrl" value="" v-model="share.imgUrl">
    <input type="hidden" id="env" ref="env">
    <input type="hidden" id="desc" value="" v-model="share.desc">
    <input type="hidden" id="end-time" v-model="share.endTime">
  </div>
</template>
<script type="text/ecmascript-6">
  import {urlSite} from '@/common/js/request';
//  import calcBaseRem from '@/assets/js/calcBaseRem.js';
  export default{
    data(){
      return {
        share: {
          title: '我送你一个188元的，你要不要？',
          link: 'http://wx-staging.jinhui365.cn/redPacket/index.php?ut=2003071',
          imgUrl: 'http://download.jinhui365.cn/group112/M00/AF/C2/CgAAcFkaZPmhrSVBAABhEUrdAKc672.jpg',
          desc: '来金汇金融理财，百万人和你一起投资，迄今产品兑付率100%',
          endTime:'2017-07-12'
        }
      }
    },
    methods:{
      envValue(){
        let oUrl = urlSite();
        if(oUrl == 'jinhui365.com')
        {
          this.$refs.env.value = 'productiona';
        }else{
          this.$refs.env.value = 'staginga';
        }
      }
    },
    mounted(){
      window.addEventListener('load',this.envValue);
    }
  }
</script>
<style>
</style>
