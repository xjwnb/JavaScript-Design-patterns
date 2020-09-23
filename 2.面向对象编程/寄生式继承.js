/*
 * @Author: your name
 * @Date: 2020-09-21 13:56:52
 * @LastEditTime: 2020-09-21 13:56:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\寄生式继承.js
 */
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