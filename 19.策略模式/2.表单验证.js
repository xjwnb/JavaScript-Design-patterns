/*
 * @Author: your name
 * @Date: 2020-09-23 13:11:30
 * @LastEditTime: 2020-09-23 13:40:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\19.活诸葛-策略模式\2.表单验证.js
 */
// 表单正则验证策略对象
var InputStrategy = (function () {
  var strategy = {
    // 是否为空
    notNull: function (value) {
      return /\s+/.test(value) ? "请输入内容" : "";
    },
    // 是否是一个数字
    number: function (value) {
      return /[0-9] + {\.[0-9] +}?$/.test(value) ? "" : "请输入数字";
    },
  };
  return {
    check: function (type, value) {
      value = value.replace(/^\s+|\s+$/g, "");
      return strategy[type] ? strategy[type](value) : "没有该类型的检测方法";
    },
    // 添加策略
    addStrategy: function (type, fn) {
      atrategy[type] = fn;
    },
  };
})();
