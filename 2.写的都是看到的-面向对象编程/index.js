/*
 * @Author: your name
 * @Date: 2020-09-20 18:00:12
 * @LastEditTime: 2020-09-20 18:16:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\index.js
 */

//  包装明星-封装
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
