/*
 * @Author: your name
 * @Date: 2020-09-22 14:14:42
 * @LastEditTime: 2020-09-22 15:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\14.超值午餐-组合模式\1.组合要有容器类.js
 */

// 父子类
function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

var News = function () {
  this.children = [];
  this.element = null;
};
News.prototype = {
  init: function () {
    throw new Error("重写");
  },
  add: function () {
    throw new Error("重写");
  },
  getElement: function () {
    throw new Error("重写");
  },
};

// 容器类构造函数
var Container = function (id, parent) {
  News.call(this);
  this.id = id;
  this.parent = parent;
};
inheritPrototype(Container, News);
Container.prototype.init = function () {
  // this.element = document.documentElement;
  this.element = this.id;
};
Container.prototype.getElement = function () {
  return this.element;
};
Container.prototype.add = function (info) {
  this.children.push(info);
  return this;
};
var container = new Container(1, "html");
container.init();
container.add("xkc").add("小卡车");
console.log(container.getElement());
console.log(container.children);
