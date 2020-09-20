/*
 * @Author: your name
 * @Date: 2020-09-20 20:43:20
 * @LastEditTime: 2020-09-20 23:48:35
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
console.log(instance instanceof SuperClass);// true
console.log(instance instanceof SubClass);// true
console.log(SubClass instanceof SuperClass);// false
