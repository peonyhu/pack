export function friendForward()
{
  this.alertIsShow = true;
  let msgCon = '<div class="medal_gg"><div class="medal_bg1"><img src="static/new_share.png"></div></div>';
  this.$refs.alertmsg.alertMsgSuper(msgCon);
  alertShow();
}
function alertShow(){
  let oBox = document.getElementById("alertBox");
  if(oBox)
  {
    let _this = this;
    oBox.onclick = function()
    {
      if(oBox.style.display != 'none'){
        this.parentNode.style.display = 'none'
        _this.alertIsShow = false;
      }
    }
  }
}
