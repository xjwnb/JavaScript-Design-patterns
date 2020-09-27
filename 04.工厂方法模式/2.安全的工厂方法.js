/*
 * @Author: your name
 * @Date: 2020-09-21 16:36:09
 * @LastEditTime: 2020-09-21 16:55:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\4.给我一张名片-工厂方法模式\2.安全的工厂方法.js
 */
// 安全模式下的工厂类
var Factory = function (type, content) {
  if (this instanceof Factory) {
    var s = new this[type](content);
    return s;
  } else {
    return new Factory(type, content);
  }
};
Factory.prototype = {
  Java: function (content) {
    this.content = content;
    (function (content) {
      console.log(content);
    })(content);
  },
  JavaScript: function (content) {
    this.content = content;
    (function (content) {
      console.log(content);
    })(content);
  },
};
var data = [
  { type: "JavaScript", content: "JavaScript牛批" },
  { type: "Java", content: "Java牛批" },
];
for (var value of data) {
  new Factory(value.type, value.content); // JavaScript牛批  Java牛批
}
