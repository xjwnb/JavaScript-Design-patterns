/*
 * @Author: your name
 * @Date: 2020-09-22 11:59:36
 * @LastEditTime: 2020-09-22 12:03:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\10.水管弯弯-适配器模式\1.适配异类框架.js
 */
// 定义框架
var A = A || {};
// 通过ID获取元素
A.g = function (id) {
  return document.getElementById(id);
};
A.on = function (id, type, id) {
  var dom = typeof id === "string" ? this.g(id) : id;
  if (dom.addEvenetListener) {
    dom.addEvenetListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent("on" + type, false);
  } else {
    dom["on" + type] = fn;
  }
};
