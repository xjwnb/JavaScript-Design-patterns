/*
 * @Author: your name
 * @Date: 2020-09-23 23:38:46
 * @LastEditTime: 2020-09-24 00:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\25.迭代器模式\1.实现迭代器.js
 */
var Iterator = function (items, container) {
  var container = container && document.getElementById(container);
  var items = container.getElementsByTagName(items);
  var length = items.length;
  var index = 0;
  var splice = [].splice;
  return {
    // 获取第一个元素
    first: function () {
      index = 0;
      return items[index];
    },
    // 获取最后一个元素
    second: function () {
      index = length - 1;
      return items[index];
    },
    // 获取前一个元素
    pre: function () {
      if (--index > 0) {
        return items[index];
      } else {
        index = 0;
        return null;
      }
    },
    // 获取后一个元素
    next: function () {
      if (++index < length) {
        return items[index];
      } else {
        index = length - 1;
        return null;
      }
    },
    // 获取某个元素
    get: function (num) {
      index = num >= 0 ? num % length : num % length + length;
      return items[num];
    },
  }
}