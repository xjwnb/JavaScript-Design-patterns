/*
 * @Author: your name
 * @Date: 2020-09-21 16:21:50
 * @LastEditTime: 2020-09-21 16:27:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\4.给我一张名片-工厂方法模式\1.安全模式类.js
 */
/**
 * 信息
 * @param {string} name 名字
 * @param {number} age 年龄
 */
var Msg = function (name, age) {
  if (!(this instanceof Msg)) {
    return new Msg(name, age);
  } else {
    this.name = name;
    this.age = age;
  }
};
Msg.prototype = {
  getName: function () {
    console.log(this.name);
  },
  getAge: function () {
    console.log(this.age);
  },
  setName: function (name) {
    this.name = name;
  },
  setAge: function (age) {
    this.age = age;
  },
};
var msg = Msg("xkc", 20);
msg.getName(); // xkc
msg.getAge(); // 20

