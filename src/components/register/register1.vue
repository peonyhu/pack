<template>
  <div class="m-con m-reg" id="m-reg">
    <p class="f42 c_fff mt110">手机验证码</p>
    <p class="f20 c_fff mt10">还差一步，完成注册即可获得现金大礼！</p>
    <div class="m-verify mt60">
      <div class="m-vermsg clearfix">
        <input type="text" value="" placeholder="请输入图形验证码"  v-model="regData.checkimgcode.val" id="imgVerify" class="prev" />
        <img v-bind:src="regData.imgCheckUrl.val" @click="imgCode" class="imgkap"/>
        <p class="xs_error" id="imgVerify_prompt">{{regData.checkimgcode.error}}</p>
        <input type="text" v-model="regData.checkcode.val" placeholder="请输入手机验证码" id="mobileVerify" class="prev" />
        <time-btn :start="start" :seconds="seconds" @countDown="start=false" @click.native="sendCode"></time-btn>
        <!--native监听组件根元素的原生事件-->
        <p class="xs_error" id="mobileVerify_prompt">{{regData.checkcode.error}}</p>
        <input type="text" v-model="regData.password.val" placeholder="请输入您的登录密码" id="pwd" class="whole" @blur="pwdBlur" @focus="pwdFocus"/>
        <p class="xs_error" id="pwd_prompt">{{regData.password.error}}</p>
      </div>
      <div class="m-con m-bn clearfix">
        <a href="javascript:;" class="mt24 c_fd5600 gainbn" id="j-reg" @click="register">注册查看</a>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import timeBtn from '@/components/timeBtn/timeBtn';
  import {subAction} from '@/common/js/util';
  import {urlParse} from '@/common/js/request';

  export default{
    props:{
      oMobileVal2:''
    },
    data(){
      return{
        start:false,
        seconds:10,
        regData:{
          submited:0,
          password:{
            val:'',
            name:'密码',
            error:''
          },
          checkcode:{
            val:'',
            name:'验证码',
            error:''
          },
          checkimgcode:{
            val:'',
            name:'图形验证码',
            reg:/^\w{4}$/,
            error:''
          },
          imgCheckUrl:{
            val:'/redPacket/api.php?action=code',
            isVerify:false,
            error:''
          }
        },
        getUrlPara: {
          ut:(() => {
            let queryParam = urlParse();
            return queryParam.ut?queryParam.ut:'';
          })(),
          friendId:(() => {
            let queryParam = urlParse();
            return queryParam.friendId?queryParam.friendId:'';
          })(),
          exchangeId:(() => {
            let queryParam = urlParse();
            return queryParam.exchangeId?queryParam.exchangeId:'';
          })(),
          linkId:(()=>{
            let queryParam = urlParse();
            return queryParam.linkId?queryParam.linkId:'';
          })()
        }
      }
    },
    components: {

    },
    methods:{
      imgCode(){
        this.regData.imgCheckUrl.val = this.regData.imgCheckUrl.val+'&'+Math.floor(Math.random()*100);
      },
      pwdBlur () {
        if (this.regData.password.val == '') {
          this.regData.password.error = '*请输入密码';
          return false;
        } else if (this.regData.password.val.length < 6 || this.regData.password.val.length > 16) {
          this.regData.password.error = '*密码长度应在6-16位，请重新输入';
          return false;
        } else {
          this.regData.password.error = '';
        }
      },
      pwdFocus () {
        this.regData.password.error = '';
      },
//      短信倒计时
      sendCode(){
        this.start = true;
        if(this.regData.checkimgcode.val == ''){
          this.regData.checkimgcode.error = '*图形验证码不能为空';
          return false;
        }else{
          this.regData.checkimgcode.error = '';
        }
        let params = {
          mobile:this.oMobileVal2,
          kaptchaCode:this.regData.checkimgcode.val
        };
        this.$http.post('/redPacket/api.php?action=send', {
//          headers: {
//            "X-Requested-With": "XMLHttpRequest"
//          },
          emulateJSON: true
        }).then((res) => {
          let data = res.data;
          console.log(data);
          if(data.message.code == 0){
            this.regData.checkimgcode.error= "";

//            this.timeCount();
          }else{
            if(data.message.code == -205 || data.message.code == -222){
              this.regData.checkimgcode.error = '*'+data.message.message;
            }else{
              this.regData.checkcode.error = '*'+data.message.message;
            }
          }
        })
      },
      register(){
        let arrnotEmpty = ['checkimgcode','checkcode','password'];//非空输入验证
        let arrReg = ['checkimgcode'];//正则验证

        if( this.regData.submited )
        {
          return false;
        }
        this.regData.submited =1;
        if(subAction(arrReg,arrnotEmpty,this.regData)!=false){
          this.pwdBlur();
          let params = {
            kaptchaCode:this.regData.checkimgcode.val,
            mobile:this.oMobileVal2,
            verifyCode:this.regData.checkcode.val,
            password:this.regData.password.val,
            friendId:this.getUrlPara.friendId,
            ut:this.getUrlPara.ut
          };
          this.$http.post('/redPacket/api.php?action=reg',params,{
            emulateJSON:true
          }).then((res)=>{
            let data = res.data;
            console.log(data);
            if(data.message.code == 0)
            {
              uid = data.userId;
              token = data.token;
              let url = '/suc';
              let params1 = {
                uid:uid,
                token:token,
                friendId:this.getUrlPara.friendId,
                exchangeId:this.getUrlPara.exchangeId,
                linkId:this.getUrlPara.linkId
              };
              this.$http.post('',params1,{
              }).then((res)=>{
                let data1 = res.data;
                this.$router.push({path:url,query: { ut: 'ut' ,friendId:'uid'}});
              }).catch((res)=>{
                this.$router.push({path:url,query: { ut: 'ut' ,friendId:'uid'}});
              })
            }else{
              this.isClick = 1;
              this.regData.password.error = '*'+data.message.message;
            }
          })
        }

      }
    },
    mounted(){
    },
    components: {
        'time-btn':timeBtn
    }
  }
</script>
<style>
</style>
