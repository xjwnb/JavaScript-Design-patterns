/*
 * @Author: your name
 * @Date: 2020-09-22 00:27:07
 * @LastEditTime: 2020-09-22 00:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\8.一个人的寂寞-单例模式\命名空间的管理员.js
 */
var xkc = {
  g: function (id) {
    return document.getElementById(id);
  },
  css: function (id, key, value) {
    this.g(id).style[key] = value;
  },
};

// 创建一个小型代码库
var A = {
  Util: {
    util_method1: function () {},
    util_method2: function () {},
  },
  Tool: {
    tool_method1: function () {},
  },
};
