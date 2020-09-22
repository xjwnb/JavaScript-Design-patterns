/*
 * @Author: your name
 * @Date: 2020-09-22 15:41:37
 * @LastEditTime: 2020-09-22 16:23:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\14.超值午餐-组合模式\index.js
 */
// 父类
var News = function () {
  this.children = [];
  this.element = null;
  this.init();
};
News.prototype.init = function () {
  throw new Error("重写");
};
News.prototype.add = function () {
  throw new Error("重写");
};
News.prototype.getElement = function () {
  throw new Error("重写");
};

// 联系父子类
function inheritPrototype(SubClass, SuperClass) {
  var prototype = Object.create(SuperClass.prototype);
  prototype.constructor = SubClass;
  SubClass.prototype = prototype;
}

// 容器类
/**
 *
 * @param {string} id 容器的 id
 * @param {Object} parent 父元素
 */
var Container = function (id, parent) {
  News.call(this);
  this.id = id;
  this.parent = parent;
  this.init();
};
inheritPrototype(Container, News);
Container.prototype.init = function () {
  this.element = document.createElement("ul");
  this.element.id = this.id;
};
Container.prototype.add = function (child) {
  this.children.push(child);
  this.element.appendChild(child.getElement());
  return this;
};
Container.prototype.getElement = function () {
  return this.element;
};
Container.prototype.show = function () {
  this.parent.appendChild(this.element);
};

// item类
var Item = function (className) {
  News.call(this);
  this.className = className;
  this.init();
};
inheritPrototype(Item, News);
Item.prototype.init = function () {
  this.element = document.createElement("li");
  this.element.className = this.className;
};
Item.prototype.add = function (child) {
  this.children.push(child);
  this.element.appendChild(child.getElement());
  return this;
};
Item.prototype.getElement = function () {
  return this.element;
};

// IconNews类
var IconNews = function (text, href) {
  News.call(this);
  this.text = text;
  this.href = href;
  this.init();
};
inheritPrototype(IconNews, News);
IconNews.prototype.init = function () {
  this.element = document.createElement("a");
  this.element.href = this.href;
  this.element.innerText = this.text;
  this.element.target = "_blank";
};
IconNews.prototype.add = function () {};
IconNews.prototype.getElement = function () {
  return this.element;
};

// 测试
var new1 = new Container("container1", document.body);
new1
  .add(
    new Item("normal").add(
      new IconNews("小卡车要加油啊，多百度，多学习!", "https://www.baidu.com")
    )
  )
  .add(
    new Item("normal").add(
      new IconNews("小卡车的 Github", "https://github.com/xjwnb")
    )
  )
  .show();
