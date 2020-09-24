/*
 * @Author: your name
 * @Date: 2020-09-24 11:42:15
 * @LastEditTime: 2020-09-24 11:48:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\27.链模式\index.js
 */
var A = function (selector) {
  return A.fn.init(selector);
};

A.fn = A.prototype = {
  init: function (selector) {
    this[0] = "test";
    this.length = 1;
    return this;
  },
  length: 2,
  size: function () {
    return this.length;
  }
};

var demo = A("demo");
console.log(demo);
console.log(demo.size());
