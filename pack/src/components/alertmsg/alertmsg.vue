<template>
  <div class="alertmsg">
    <div id="alertBox" :style="alertBoxStyle">
      <div id="alertShadow"></div>
        <div id="alertContent-super" class="clearfix" v-on:click="openImageProxy($event)" :style="alertBoxStyleMobile">
          <div class="m-cont-tiped clearfix" v-html="conMsg" ref='conHeight'>
            {{this.conMsg}}
          </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
      props: ["oStyle"],
      data(){
        return {
          conMsg:'',
          screenWidth:document.documentElement.clientWidth,
          screenHeight:document.documentElement.clientHeight,
          scrollleft:document.documentElement.scrollLeft || document.body.scrollLeft,
          scrolltop:document.documentElement.scrollTop || document.body.scrollTop,
          fullHeight:document.body.scrollHeight,
          fullWidth:document.documentElement.scrollWidth
          }
      },
      computed:{
        objLeft:function(){
          return (this.screenWidth - this.oStyle.offsetWidth)/2 ;
        },
        objTop:function(){
          return (this.screenHeight - this.oStyle.offsetHeight)/2;
        },
        alertBoxStyle(){
          return {
              width:this.fullWidth + 'px',
              height:this.fullHeight + 'px'
          }
        },
        alertBoxStyleMobile(){
            if(this.$parent.alertIsShow == true)
            {
              this.$nextTick(() => {
                  this.boxStyle();
              })
            }
            return {
                width:this.oStyle.offsetWidth + 'px',
                height:this.oStyle.offsetHeight+ 'px',
                left:this.objLeft + 'px',
                top:this.objTop + 'px'
            }
        }
      },
      mounted(){
        window.addEventListener('resize',this.handleResize);
        window.addEventListener('scroll',this.handleResize);
      },
      methods:{
        removeAlert(callback){
            this.$parent.alertIsShow = false;
            callback && callback();
        },
        handleResize:function(event){
          this.screenWidth = document.documentElement.clientWidth;
          this.screenHeight = document.documentElement.clientHeight;
          this.scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
          this.scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
          this.fullHeight = document.body.scrollHeight;
          this.fullWidth = document.documentElement.scrollWidth;
        },
        boxStyle(){
          this.$emit('myHeight',parseFloat(this.$refs.conHeight.scrollHeight));
          this.$emit('myWidth',parseFloat(this.$refs.conHeight.scrollWidth));
        },
        alertMsgSuper(msg,type){
          this.$parent.alertIsShow = true;
          msg = msg || '';
          type = type || 0;
          this.conMsg = msg;
        },
        openImageProxy: function (event) {
          if (event.target.nodeName === 'A') {
            this.$parent.alertIsShow = false;
            // event.target.src 这里做处理
//              this.boxStyle();
          }
        }
      },
      components: {
//        alertMsgChild
      }
  }
</script>
<style>
  /*自定义alert样式*/
  #alertBox{ width: 100%; height: 100%; position: absolute; left: 0; top:0; z-index: 999999;}
  #alertShadow{ width: 100%; height: 100%; background: #000; opacity: 0.4; filter:alpha(opacity:40); z-index: 8;}
  #alertBox .vagueShow{ background: #999;opacity: 0.97; filter:alpha(opacity:97);}
  #alertContent{ min-width: 300px;*width: 300px;  background: #fff;  position: absolute; left: 50%; top:50%; z-index: 9; padding:10px; border: 1px solid #e3e3e3;}
  #alertLayerWrap{ /*background: #fff;*/  position: absolute; left: 50%; top:50%; z-index: 999; /*border: 1px solid #e3e3e3;*/}
  #alertContent-super {width:100%;position: fixed; left: 50%; top:50%; z-index: 9;}

  .m-cont-tiped {padding: 0 1.5rem;position:relative; width:100%; box-sizing: border-box;}
  .m-cont-msgm {position: relative; padding:0 1.875rem 0 1.875rem; background: #ff4d2b; border-radius: 1.25rem; font-size: 0.625rem; text-align: center; color: #fff; float:left;width:100%;box-sizing:border-box}
  /*#wrapper{height:15rem;position:relative;width:100%;overflow:auto;}*/
  /*.control-height{position:absolute;padding:0 0.3rem;}*/
  .m-cont-tiped .close{display: inline-block;position: absolute; top: -1rem; right: -1rem; width: 2.25625rem; height: 2.15625rem; background: url(https://alicdn.jinhui365.com/res/cms/activity/newmedal/images/del.png) no-repeat;background-size: 100% 100%; -webkit-tap-highlight-color: rgba(255, 255, 255, 0);z-index: 10;}
  .m-cont-rule .rule {padding:1.25rem 0;height:1.25rem;line-height: 1.25rem; border-bottom: 1px solid #fff; font-size: 1.0625rem;}
  .m-cont-rule p {text-align: left; font-size: 0.625rem; line-height: 1.25rem;}
</style>
