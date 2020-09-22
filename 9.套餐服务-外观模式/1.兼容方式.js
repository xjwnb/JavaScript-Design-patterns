/*
 * @Author: your name
 * @Date: 2020-09-22 11:33:32
 * @LastEditTime: 2020-09-22 11:43:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\9.套餐服务-外观模式\1.兼容方式.js
 */
/**
 * 元素事件兼容函数
 * @param {string} dom 元素
 * @param {string} type 事件类型
 * @param {function} fn 事件方法
 */
function addEvent(dom, type, fn) {
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent("on" + type, fn);
  } else {
    dom["on" + type] = fn;
  }
}

// 获取事件对象
var getEvent = function (event) {
  return event || window.event;
};

// 获取元素
var getTarget = function (event) {
  return event.target || event.srcElement;
};

// 阻止默认行为
var preventDefault = function (event) {
  var event = getEvent(event);
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
};
