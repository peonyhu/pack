<template>
  <div>
    <!--<my-component v-if="this.show"></my-component>-->
    <div class="m-index" ref="index1">
      <div class="m-fans"></div>
      <div class="m-con">
        <div class="m-home">
          <span class="m-gain"><span class="m-des mt196">好友<em class="c_fff445">FFF</em>向您赠送</span></span>
          <div class="m-con"><span class="m-money"></span></div>
          <span class="m-des">无门槛现金红包</span>
          <div class="m-verify mt28">
            <div class="m-base clearfix">
              <input type="text" v-model="oMobileVal" placeholder="请输入您的手机号码！" id="mobile" class="whole" @focus="mobileFocus" @blur="mobileBlur" />
              <p id="mobile_prompt" class="xs_error">{{this.oMobileError}}</p>
              <span></span>
            </div>
            <div class="m-con m-bn">
              <a href="javascript:;" class="c_fd5600 gainbn" id="j-gain" @click="gain">立即领取</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <component v-bind:item="special" v-bind:is="currentView" v-if="this.show">
      <!--&lt;!&ndash; 组件在 vm.currentview 变化时改变！ &ndash;&gt;-->
    </component>
    <register :oMobileVal2="oMobileVal"></register>
    <p class="m-frid"><friendshare class="disshow"></friendshare><span v-show="ruleShow" class="ml30 j-rule" @click="rule">活动规则  >></span></p>
    <!--<p class="m-frid"><span class="j-friend" @click="friendForward">转给其他好友  >></span><span v-show="ruleShow" class="ml30 j-rule" @click="rule">活动规则  >></span></p>-->
    <alertmsg v-show="alertIsShow" ref="alertmsg" :oStyle="objectStyle" v-on:myHeight="toAlertHeight" v-on:myWidth="toAlertWidth"></alertmsg>
  </div>
</template>
<script type="text/ecmascript-6">
  import register from '@/components/register/register'
  import alertmsg from '@/components/alertmsg/alertmsg'
  import {urlParse,urlSite,removeClassName} from '@/common/js/request';
  import friendshare from '@/components/friendshare/friendshare';
  const mobileRed = /^1\d{10}$/;
//  render函数
  function errMsg(createElement,item){
      return createElement('p',{
        'class': 'm-des mt370 pl32 pr32'
      },
      item.map(function (data) {
        return createElement('i',data.error)
      })
      )
  }
  function conBn(createElement,item){
    return createElement('div',{
      'class': 'm-con m-bn mt336'
    },
    item.map(function(data){
      return createElement('a',{
        attrs:{
            'href':'javascript:;',
            'class':'c_fd5600 gainbn'
        },
        on:{
            click:function(){
                let oEnv = document.getElementById('env').value;
                if(oEnv == 'productiona')
                {
                  window.location.href='http://m.jinhui365.com/helps/downloadApp';
                }else{
                  window.location.href='http://m.jinhui365.cn/helps/downloadApp';
                }
            }
        }
      },data.con)
    })
    )
  }
  function indexErr(createElement,item){
    return createElement('div',{
      'class': 'm-con'
    }
    ,[
        errMsg(createElement,item),
        conBn(createElement,item)
    ])
  }
  const MyComponent = {
    props: ['item'],
    data(){
      return{
      }
    },
    render: function (createElement) {
//      debugger;
      return createElement('div',
        [indexErr(createElement,this.item)]
      )
    }
  };

//  局部组件
//  var Child = {
//    template: '<div class="m-con">\
//              <p class="m-des mt370 pl32 pr32">{{this.$parent.msg}}</p>\
//              <div class="m-con m-bn mt336">\
//                  <a href="javascript:;" class="c_fd5600 gainbn" @click="seeActivity" id="seeOtherAct">查看其他活动</a>\
//              </div></div>',
//    methods: {
//      seeActivity(){
//        let oEnv = document.getElementById('env').value;
//        if (oEnv == 'productiona') {
//          window.location.href = 'http://m.jinhui365.com/helps/downloadApp';
//        } else {
//          window.location.href = 'http://m.jinhui365.cn/helps/downloadApp';
//        }
//      }
//    }
//  }
  export default {
    data () {
      return {
        flag: '',        //分享标记为1点击任意位置消失，剩下的不消失
        objectStyle: {
          offsetHeight: '',
          offsetWidth: ''
        },
        alertIsShow: false,
        ruleShow: true,        //活动规则只有首页的时候有
        oMobileVal: '',
        oMobileError: '',
        isClick: 1,
        getUrlData: {
          random: (() => {
            let queryParam = urlParse();
            return queryParam.random ? queryParam.random : '';
          })()
        },
        show: false,
        currentView: MyComponent,
        special: [
          {
            "con": "查看其他活动",
            "error": ''
          }
        ],
        goods: [],
        msg: ''
      }
    },
    methods: {
      toAlertHeight: function (height) { // mychlid事件触发调用的方法
        this.objectStyle.offsetHeight = height; // massage就是子组件穿过来的内容
      },
      toAlertWidth: function (width) { // mychlid事件触发调用的方法
        this.objectStyle.offsetWidth = width; // massage就是子组件穿过来的内容
      },
      mobileBlur () {
        if (this.oMobileVal == '') {
          this.oMobileError = '*请输入手机号码';
          return false;
        } else if (!(mobileRed.test(this.oMobileVal))) {
          this.oMobileError = '*输入错误，请输入11位手机号码';
          return false;
        } else {
          this.oMobileError = '';
        }
      },
      mobileFocus () {
        this.oMobileError = '';
      },
      gain(){
        this.mobileBlur();
        if (this.oMobileError != '') {
          return false;
        } else {
          if (this.isClick) {
            this.isClick = 0;
          } else {
            return false;
          }
          let params = {
            random: this.getUrlData.random,
            mobile: this.oMobileVal
          };
          this.$http.post('/redPacket/api.php?action=checkShare', params, {
            emulateJSON: true
          }).then(function (res) {
            let data = res.data;
            this.$refs.index1.style.display = 'none';
            this.ruleShow = false;
            if (data.message.code == 0) {
              let oReg = document.getElementById('m-reg');
              removeClassName(oReg, 'm-reg');
              this.isClick = 1;
            } else {
//                    this.$refs.index1.style.display = 'none';
              this.show = true;
//              this.msg = data.message.message;
                    this.special[0].error = data.message.message;
            }
          })
        }
      },
      rule(){
        this.flag = 2;
        let eTime = document.getElementById('end-time');
        let msgCon = '<div class="m-cont-msgm">\
                      <div class="m-cont-rule">\
                      <div class="rule">活动规则</div>\
                      <p class="mt34">1、活动时间：截止至' + eTime.value + '</p>\
                      <p>2、活动期间，成功购买产品即有概率获分享红包，每个分享红包可领取五次。</p>\
                      <p>3、红包在新用户成功注册后自动发放，先到先得，领完即止。</p>\
                      <p>4、领取红包后，可前往APP“我的”-“我的红包”，官网“我的账户”-“我的红包”中查看。</p>\
                      <p>5、本次活动最终解释权归金汇金融所有，如有疑问请在线联系客户或拨打4006-999-133。</p>\
                      <p>6、通过本次活动邀请客户可与其他活动（如有）叠加计算。</p>\
                      <p>7、本次活动与苹果公司无关。</p>\
                      <div class="m-bn mt38 mb32"><a href="javascript:;" class="c_fd5600 gainbn" id="gainbn">关闭</a></div>\
                      </div></div>';
        this.$refs.alertmsg.alertMsgSuper(msgCon);
      },
      friendNum(){
//        this.$http.post('/static/db.json',{
//          emulateJSON:true
//        }).then((res)=>{
//          res = res.data;
//          console.log(res)
//        })
      }
    },
    mounted(){
      this.friendNum();
    },
    components: {
      register,
      alertmsg,
      friendshare
//      'my-component':Child
    }
  };
</script>
<style>
  .disshow{display: inline-block;}
</style>
