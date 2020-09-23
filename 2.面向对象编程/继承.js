/*
 * @Author: your name
 * @Date: 2020-09-20 20:43:20
 * @LastEditTime: 2020-09-21 13:58:02
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

// 原型式继承
console.log("原型式继承");
function inheritObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
var book = {
  name: "js book",
  alikeBook: ["css book", "html book"],
};
var newBook = inheritObject(book);
newBook.name = "ajax book";
newBook.alikeBook.push("xml book");

var otherBook = inheritObject(book);
otherBook.name = "flash book";
otherBook.alikeBook.push("as book");
console.log(newBook.name); // ajax book
console.log(newBook.alikeBook); // [ 'css book', 'html book', 'xml book', 'as book' ]
console.log(otherBook.name); // flash book
console.log(otherBook.alikeBook); // [ 'css book', 'html book', 'xml book', 'as book' ]
console.log(book.name); // js book
console.log(book.alikeBook); // [ 'css book', 'html book', 'xml book', 'as book' ]

// 寄生式继承
console.log("寄生式继承");
function initObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
var book = {
  name: "js book",
  alikeBook: ["css book", "html book"],
};
function createBook(obj) {
  var o = new initObject(obj);
  o.getName = function () {
    console.log(this.name);
  };
  return o;
}
var cbook1 = createBook(book);
cbook1.getName();
cbook1.alikeBook.push("js book");
console.log(cbook1.alikeBook);

cbook2 = createBook(book);
cbook2.getName();
console.log(cbook2.alikeBook);


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