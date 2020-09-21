/*
 * @Author: your name
 * @Date: 2020-09-21 13:49:19
 * @LastEditTime: 2020-09-21 13:54:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\构造函数继承.js
 */
// 构造函数继承
console.log("构造函数继承");
function SuperClass(id) {
  this.books = ["JavaScript", "Html", "CSS"];
  this.id = id;
}
SuperClass.prototype.showBooks = function () {
  console.log(this.books);
};
SuperClass.prototype.getID = function() {
  console.log(this.id);
}
function SubClass(id) {
  SuperClass.call(this, id);
}
var instance1 = new SubClass(1);
var instance2 = new SubClass(2);
instance1.books.push("设计模式");
console.log(instance2.books); // [ 'JavaScript', 'Html', 'CSS' ]
console.log(instance1.id); // 1
console.log(instance2.id); // 2
instance1.getID();// TypeError: instance1.getID is not a function
instance1.showBooks();// TypeError: instance1.showBooks is not a function
instance2.showBooks();// TypeError: instance2.showBooks is not a function
