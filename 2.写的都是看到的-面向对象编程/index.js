/*
 * @Author: your name
 * @Date: 2020-09-20 18:00:12
 * @LastEditTime: 2020-09-20 20:41:41
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

// 私有属性与私有方法，特权方法，对象公有属性和对象公有方法，构造器
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
  // 公有属性
  this.id = id;
  // 公有方法
  this.copy = function () {
    console.log("copy");
  };
  // 构造器
  this.setName(name);
  this.setPrice(price);
};
// 类静态公有属性（对象不能访问）
Book.isChinese = true;
// 类静态公有方法（对象不能访问）
Book.resetTime = function () {
  console.log("new Time");
};
Book.resetTime();
Book.prototype = {
  // 公有属性
  isJSBook: false,
  // 公有方法
  display: function () {
    console.log("display");
  },
};
var book = new Book(11, "JavaScript设计模式", 100);
console.log(book.num); // undefined
console.log(book.isJSBook); // false
console.log(book.id); // 11
console.log(book.isChinese); // undeined

// 你们看不到我-闭包实现
console.log("你们看不到我-闭包实现");
// 利用闭包实现
var Book = (function () {
  // 静态私有变量
  var bookNum = 0;
  // 静态私有方法
  function checkBook(name) {
    console.log("checkBook");
  }
  // 返回构造函数
  return function (newID, newName, newPrice) {
    // 私有变量
    var name, price;
    // 私有方法
    function checkID(id) {
      console.log("checkID");
    }
    // 特权方法
    this.getName = function () {
      return this.name;
    };
    this.getPrice = function () {
      return this.price;
    };
    this.setName = function (newName) {
      this.name = newName;
    };
    this.setPrice = function (newPrice) {
      this.price = newPrice;
    };
    // 公有属性
    this.id = newID;
    // 公有方法
    this.copy = function () {
      console.log("copy");
    };
    bookNum++;
    if (bookNum > 100) {
      throw new Error("我们仅出版100本书");
    }
    // 构造器
    this.setName(newName);
    this.setPrice(newPrice);
  };
})();
Book.prototype = {
  // 静态公有属性
  isJSBook: false,
  // 静态公有方法
  display: function () {
    console.log("display");
  },
};
var book = new Book(1, "JavaScript设计模式", 100);
console.log(book.getName());
console.log(book.getPrice());
book.copy();

// 安全类
console.log("安全类");
var Book = function (title, time, type) {
  var title, time, type;
  if (this instanceof Book) {
    this.title = title;
    this.time = time;
    this.type = type;
  } else {
    return new Book(title, time, type);
  }
};
var book = Book("JavaScript", "2014", "js");
console.log(book);
console.log(book.title);
console.log(book.time);
console.log(book.type);
