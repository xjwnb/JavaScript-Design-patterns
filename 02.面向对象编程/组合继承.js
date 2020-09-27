/*
 * @Author: your name
 * @Date: 2020-09-21 13:55:25
 * @LastEditTime: 2020-09-21 13:55:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\组合继承.js
 */
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
console.log(instance1.books); // [ 'JavaScript', 'Html', 'CSS', '设计模式' ]
instance1.getName(); // js book
instance1.getTime(); // 2014

var instance2 = new SubClass("css book", "2010");
console.log(instance2.books); // [ 'JavaScript', 'Html', 'CSS' ]
instance2.getName(); // css book
instance2.getTime(); // 2010