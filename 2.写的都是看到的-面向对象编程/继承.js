/*
 * @Author: your name
 * @Date: 2020-09-20 20:43:20
 * @LastEditTime: 2020-09-21 11:15:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\继承.js
 */
// 类式继承
console.log("类式继承");
// 父类
function SuperClass() {
  this.superValue = true;
}
// 父类共有方法
SuperClass.prototype.getSuperValue = function () {
  return this.superValue;
};
// 子类
function SubClass() {
  this.subValue = false;
}
// 继承子类
SubClass.prototype = new SuperClass();
// 子类共有方法
SubClass.prototype.getSubValue = function () {
  return this.subValue;
};
var instance = new SubClass();
console.log(instance.getSubValue()); // false
console.log(instance.getSuperValue()); // true
// 测试
console.log(instance instanceof SuperClass); // true
console.log(instance instanceof SubClass); // true
console.log(SubClass instanceof SuperClass); // false
// 类式继承的缺陷
function SuperClass() {
  this.books = ["JavaScript", "Html", "CSS"];
}
function SubClass() {}
SubClass.prototype = new SuperClass();
var instance1 = new SubClass();
var instance2 = new SubClass();
console.log(instance2.books); // [ 'JavaScript', 'Html', 'CSS' ]
instance1.books.push("设计模式");
console.log(instance2.books); // [ 'JavaScript', 'Html', 'CSS', '设计模式' ]

// 构造函数继承
console.log("构造函数继承");
function SuperClass(id) {
  this.books = ["JavaScript", "Html", "CSS"];
  this.id = id;
}
SuperClass.prototype.showBooks = function () {
  console.log(this.books);
};
function SubClass(id) {
  SuperClass.call(this, id);
}
var instance1 = new SubClass(1);
var instance2 = new SubClass(2);
instance1.books.push("设计模式");
console.log(instance2.books); // [ 'JavaScript', 'Html', 'CSS' ]
console.log(instance1.id); // 1
console.log(instance2.id); // 2
instance1.showBooks(); // [ 'JavaScript', 'Html', 'CSS', '设计模式' ]
instance2.showBooks(); // [ 'JavaScript', 'Html', 'CSS' ]

// 组合继承
console.log("组合继承");
function SuperClass(name) {
  this.name = name;
  this.books = ["JavaScript", "Html", "CSS"];
}
SuperClass.prototype.getName = function () {
  console.log(this.name);
};
function SubClass(name, time) {
  this.time = time;
  SuperClass.call(this, name);
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function () {
  console.log(this.time);
};
var instance1 = new SubClass("js book", "2014");
instance1.books.push("设计模式");
console.log(instance1.books);// [ 'JavaScript', 'Html', 'CSS', '设计模式' ]
instance1.getName();// js book
instance1.getTime();// 2014

var instance2 = new SubClass("css book", "2010");
console.log(instance2.books);// [ 'JavaScript', 'Html', 'CSS' ]
instance2.getName();// css book
instance2.getTime();// 2010
