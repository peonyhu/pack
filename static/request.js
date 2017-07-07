export function urlParse()
{
  let url = window.location.search;
  let obj = {};
  let reg =  /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if(arr)
  {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
}
export function urlSite() {
  let url = window.location.hostname;
  let arr = url.split('.');
  let arr1 = decodeURIComponent(arr[1]);
  let arr2 = decodeURIComponent(arr[2]);
  let tempArr = `${arr1}.${arr2}`;
  return tempArr;
}
// 删除class样式
export function removeClassName(element, className)
{
  if (!element) return;
  var elementClassName = element.className;
  if (elementClassName.length == 0) return;
  if(elementClassName == className)
  {
    element.className = "";
    return;
  }
  if (elementClassName.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
    element.className = elementClassName.replace((new RegExp("(^|\\s)" + className + "(\\s|$)"))," ");
};
