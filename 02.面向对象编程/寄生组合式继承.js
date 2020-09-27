/*
 * @Author: your name
 * @Date: 2020-09-21 13:57:15
 * @LastEditTime: 2020-09-21 13:57:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\寄生组合式继承.js
 */
// 寄生组合式继承
console.log('寄生组合式继承');
function inheritPrototype (SuperClass, SubClass) {
  var pro = Object.create(SuperClass.prototype);
  pro.constructor = SubClass;
  SubClass.prototype = pro;
}
function SuperClass(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}
SuperClass.prototype.getName = function() {
  console.log(this.name);
}
function SubClass(name, age) {
  this.age = age;
  SuperClass.call(this, name);
}
inheritPrototype(SuperClass, SubClass);
SubClass.prototype.getAge = function() {
  console.log(this.age);
}
var instance1 = new SubClass("js", 2020);
var instance2 = new SubClass("ts", 2019);
console.log(instance1.colors);
instance1.getName();
instance1.getAge();
instance2.getName();
instance2.getAge()
instance1.colors.push("green");
console.log(instance1.colors);
console.log(instance2.colors);
console.log(SubClass.prototype instanceof SuperClass);
console.log(instance1.__proto__ === SubClass.prototype);