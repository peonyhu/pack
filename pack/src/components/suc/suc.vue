<template>
    <div class="m-con">
      <span class="m-gain1"></span>
      <p class="m-des mt20">红包已发放到您的账户！</p>
      <div class="m-con m-bn mt50">
        <span class="packets"></span>
        <a href="javascript:;" class="c_fd5600 gainbn" @click="downApp">下载APP</a>
        <p class="mt18 c_fff">OR</p>
        <a href="javascript:;" class="mt18 c_fff seebn" @click="seeBn">立即查看</a>
      </div>
      <p class="m-frid"><friendshare class="disshow"></friendshare></p>
      <p class="m-foot">深圳金汇财富金融服务有限公司</p>
    </div>
</template>
<script type="text/ecmascript-6">
  import friendshare from '@/components/friendshare/friendshare'
  export default{
    data(){
      return {
      }
    },
    methods:{
      downApp(){
        let oEnv = document.getElementById('env').value;
        if(oEnv == 'productiona')
          {
            window.location.href='http://m.jinhui365.com/helps/downloadApp';
          }else{
            window.location.href='http://m.jinhui365.cn/helps/downloadApp';
          }
        },
      seeBn(){
        let oEnv = document.getElementById('env').value;
        if(oEnv == 'productiona')
        {
          window.location.href='http://m.jinhui365.com/assets/redPaperList/1';
        }else{
          window.location.href='http://m.jinhui365.cn/assets/voucher/1';
        }
      }
    },
    components: {
        friendshare
    }
  }
</script>
<style>

</style>
