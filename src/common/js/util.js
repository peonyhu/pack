/*
 * 提交验证
 * arrReg--需要正则验证的input集合
 * arrnotEmpty--需要验证非空的input集合
 * regData --需要验证的data集合名
 */
export function subAction(arrReg,arrnotEmpty,regData){
  for( var i=0;i<arrnotEmpty.length;i++ )
  {
    if( regData[arrnotEmpty[i]].val === '')
    {
      //alert(regData[arrnotEmpty[i]].name+'不能为空');
      regData[arrnotEmpty[i]].error='*'+regData[arrnotEmpty[i]].name+'不能为空';
      regData.submited = 0;
      return false;
    }
    else
    {
      regData[arrnotEmpty[i]].error='';
    }

  }
  for( var j=0;j<arrReg.length;j++)
  {
    if(!regData[arrReg[j]].reg.test(regData[arrReg[j]].val))
    {
      regData[arrReg[j]].error='*'+regData[arrReg[j]].name+'格式不正确';
      regData.submited = 0;
      return false;
    }
    else
    {
      regData[arrReg[j]].error='';
    }
  }

}
