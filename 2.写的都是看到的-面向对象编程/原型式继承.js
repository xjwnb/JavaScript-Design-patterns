/*
 * @Author: your name
 * @Date: 2020-09-21 13:56:21
 * @LastEditTime: 2020-09-21 13:56:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\原型式继承.js
 */
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