/*
 * @Author: your name
 * @Date: 2020-09-24 13:16:31
 * @LastEditTime: 2020-09-24 13:28:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\28.委托模式\index.js
 */
// 委托父元素
ul.onclick = function (e) {
  var e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.nodeName.toLowerCase() === "li") {
    target.style.backgroundColor = "grey";
  }
};

// 内存外泄
{
  /* 
<div id="btn_container">
  <button id="btn">demo</button>
</div> 
*/
}
var g = function (id) {
  return document.getElementById(id);
};
g("btn").onclick = function () {
  g("btn").onclick = null;
  g("btn_container").innerHTML = "触发事件";
};
g("btn_container").onclick = function (e) {
  var target = (e && e.target) || window.event.srcElement;
  if (target.id === "btn") {
    g("btn_container").innerHTML = "触发事件";
  }
};
