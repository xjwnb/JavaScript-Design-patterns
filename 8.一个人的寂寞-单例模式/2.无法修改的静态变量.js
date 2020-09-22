/*
 * @Author: your name
 * @Date: 2020-09-22 00:32:43
 * @LastEditTime: 2020-09-22 10:44:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\8.一个人的寂寞-单例模式\2.无法修改的静态变量.js
 */
var Conf = (function () {
  // 私有变量
  var conf = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 1000,
  };
  return {
    get: function (name) {
      return conf[name] ? conf[name] : nulll;
    },
  };
})();
var count = Conf.get("COUNT");
console.log(count);
