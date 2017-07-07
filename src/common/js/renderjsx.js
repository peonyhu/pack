/**
 * Created by dell on 2017/7/5.
 */
import Vue from 'vue'
Vue.component('jsx-example', {
  render (h) { // <-- h must be in scope
    return <div class="m-con">
      <p class="m-des mt370 pl32 pr32">{{errormsg}}</p>
    <div class="m-con m-bn mt336">
      <a href="javascript:;" class="c_fd5600 gainbn" @click="seeActivity" id="seeOtherAct">{{activityBtn}}</a>
    </div>
    </div>
  }
})
