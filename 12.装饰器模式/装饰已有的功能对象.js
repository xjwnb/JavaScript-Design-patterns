/*
 * @Author: your name
 * @Date: 2020-09-22 13:02:35
 * @LastEditTime: 2020-09-22 13:04:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\12.房子装修-装饰器模式\装饰已有的功能对象.js
 */
// 在已有的点击事件上添加方法
var decorator = function(input, fn) {
  var input = document.getElementById(input);
  if (typeof input.onclick === "function") {
    var oldClickFn = input.onclick;
    input.onclick = function() {
      oldClickFn();
      fn;
    }
  } else {
    input.onclick = fn;
  }
}