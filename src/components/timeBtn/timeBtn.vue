<template>
  <div class="timerBtn">
  <span class="prev">{{time | change}}</span>
  </div>
</template>
<script type="text/ecmascript-6">
  let flag = false;
  export default{
      props:{
          start:{
              type:Boolean
          },
          seconds:{
              type:Number,
              default:60
          }
      },
      data(){
        return{
            time:'获取验证码'
        }
      },
      watch:{
        start(value,oldvalue){
          if(value == true){
              this.countDown();
          }
        }
      },
      methods:{
        countDown(){
          this.time = this.seconds;
          let timer = setInterval(()=>{
            this.time--;
            if(this.time == 0){
                this.$emit('countDown');
                this.time = '获取验证码';
                flag = true;
                clearInterval(timer);
            }
          },1000)
        }
      },
    filters:{
      change(value){
        if(!value) return '';
        if(!isNaN(value)){
            if(flag == true){
                return `重新发送${value}`
            }
            return value+'S'
        }else{
            return value
          }
        }
    }
  }
</script>
<style scoped>
  span{
    float:right;
    display: inline-block;
    color: #f85e38;
    background: #fff445;
    height: 3.5rem;
    line-height: 3.5rem;
    border-radius: 0.3125rem;
    box-sizing: border-box;
    font-size: 0.875rem;
    text-align: center;
  }
  span.prev{width:42%;}
  span.whole{width:100%;}
</style>
