<template>
  <div class="m-con">
    <p class="m-des mt370 pl32 pr32">{{errormsg}}</p>
    <div class="m-con m-bn mt336">
      <a href="javascript:;" class="c_fd5600 gainbn" @click="seeActivity" id="seeOtherAct">{{activityBtn}}</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props:{
      errormsg:{
          default:'红包过期'
      },
      activityBtn:{
        default:'查看活动'
      }
    },
    methods:{
      seeActivity(){
        let oEnv = document.getElementById('env').value;
        if (oEnv == 'productiona') {
          window.location.href = 'http://m.jinhui365.com/helps/downloadApp';
        } else {
          window.location.href = 'http://m.jinhui365.cn/helps/downloadApp';
        }
      }
    }
  }
</script>
<style>
</style>
