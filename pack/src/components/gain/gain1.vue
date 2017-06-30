<template>
  <div>
    ddd
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.component('my-component',{
    template: '<div class="m-con">\
              <p class="m-des mt370 pl32 pr32">{{this.$parent.msg}}</p>\
              <div class="m-con m-bn mt336">\
                  <a href="javascript:;" class="c_fd5600 gainbn" @click="seeActivity" id="seeOtherAct">查看其他活动</a>\
              </div></div>',
    methods: {
      seeActivity(){
        let oEnv = document.getElementById('env').value;
        if (oEnv == 'productiona') {
          window.location.href = 'http://m.jinhui365.com/helps/downloadApp';
        } else {
          window.location.href = 'http://m.jinhui365.cn/helps/downloadApp';
        }
      }
    }
  })
</script>
//  new Vue({
//    el:'#example1'
//  })
