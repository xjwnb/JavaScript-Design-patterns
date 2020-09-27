/*
 * @Author: your name
 * @Date: 2020-09-21 13:46:52
 * @LastEditTime: 2020-09-21 13:48:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\类式继承.js
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
function SuperClass1() {
  this.books = ["JavaScript", "Html", "CSS"];
}
function SubClass1() {}
SubClass1.prototype = new SuperClass1();
var instance1 = new SubClass1();
var instance2 = new SubClass1();
console.log(instance2.books); // [ 'JavaScript', 'Html', 'CSS' ]
instance1.books.push("设计模式");
console.log(instance2.books); // [ 'JavaScript', 'Html', 'CSS', '设计模式' ]