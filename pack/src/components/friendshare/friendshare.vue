<template>
  <div>
    <span class="j-friend" @click="friendForward">转给其他好友  >></span>
    <alertmsg v-show="alertIsShow" ref="alertmsg" :oStyle="objectStyle" v-on:myHeight="toAlertHeight" v-on:myWidth="toAlertWidth"></alertmsg>
  </div>
</template>
<script type="text/ecmascript-6">
  import alertmsg from '@/components/alertmsg/alertmsg'
  export default{
    props:{

    },
    data(){
      return {
        flag:'',        //分享标记为1点击任意位置消失，剩下的不消失
        objectStyle: {
          offsetHeight:'',
          offsetWidth: ''
        },
        alertIsShow:false
      }
    },
    methods:{
      toAlertHeight: function(height) { // mychlid事件触发调用的方法
        this.objectStyle.offsetHeight = height; // massage就是子组件穿过来的内容
      },
      toAlertWidth: function(width) { // mychlid事件触发调用的方法
        this.objectStyle.offsetWidth = width; // massage就是子组件穿过来的内容
      },
      friendForward(){
        this.flag = 1;
        let msgCon = '<div class="medal_gg"><div class="medal_bg1"><img src="static/new_share.png"></div></div>';
        this.$refs.alertmsg.alertMsgSuper(msgCon);
        this.alertShow();
      },
      alertShow(){
        let oBox = document.getElementById('alertBox');
        oBox.onclick = ()=>{
          if(oBox.parentNode.style.display != 'none'){
            if(this.flag == 1)
            {
              oBox.parentNode.style.display = 'none'
              this.alertIsShow = false;
            }else{
              oBox.parentNode.style.display = 'block';
            }
          }
        }
      },
    },
    components:{
      alertmsg
    }
  }
</script>
<style>
</style>
