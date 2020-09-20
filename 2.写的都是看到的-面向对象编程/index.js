/*
 * @Author: your name
 * @Date: 2020-09-20 18:00:12
 * @LastEditTime: 2020-09-20 19:21:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\index.js
 */

//  包装明星-封装
console.log("包装明星-封装");
var Book = function (id, bookname, price) {
  this.id = id;
  this.bookname = bookname;
  this.price = price;
};
Book.prototype.display = function () {
  console.log("display");
};
var book = new Book(1, "JavaScript设计模式", 100);
console.log(book.id);
console.log(book.display());

// 私有属性与私有方法，特权方法，对象公有属性和对象共有方法，构造器
console.log("私有属性与私有方法，特权方法，对象公有属性和对象共有方法，构造器");
var Book = function (id, name, price) {
  // 私有属性
  var num = 1;
  // 私有方法
  function checkId() {
    console.log("checkId");
  }
  // 特权方法
  this.getName = function () {
    return name;
  };
  this.getPrice = function () {
    return price;
  };
  this.setName = function (name) {
    this.name = name;
  };
  this.setPrice = function (price) {
    this.price = price;
  };
  // 共有属性
  this.id = id;
  // 共有方法
  this.copy = function () {
    console.log("copy");
  };
  // 构造器
  this.setName(name);
  this.setPrice(price);
};
// 类静态共有属性（对象不能访问）
Book.isChinese = true;
// 类静态共有方法（对象不能访问）
Book.resetTime = function() {
  console.log('new Time');
};
Book.resetTime();
