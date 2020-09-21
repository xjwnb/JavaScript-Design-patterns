/*
 * @Author: your name
 * @Date: 2020-09-21 14:08:41
 * @LastEditTime: 2020-09-21 14:38:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\2.写的都是看到的-面向对象编程\多继承.js
 */
// 单继承 属性赋值
console.log('单继承');
var extend = function (target, source) {
  for (var property in source) {
    target[property] = source[property];
  }
  return target;
};
var book = {
  name: "JavaScript设计模式",
  alike: ["css", "html", "javascript"],
};
var anothor = {
  color: "blue",
};
extend(anothor, book);
console.log(anothor.color); // blue
console.log(anothor.name); // JavaScript设计模式
console.log(anothor.alike); // [ 'css', 'html', 'javascript' ]
anothor.alike.push('typescript');
console.log(anothor.alike); // [ 'css', 'html', 'javascript', 'typescript' ]
console.log(book.alike); // [ 'css', 'html', 'javascript', 'typescript' ]

// 多继承 属性赋值
console.log('多继承');
var mix = function() {
  var i = 1,
      len = arguments.length,
      target = arguments[0],
      arg;
  for (; i < len; i++) {
    arg = arguments[i];
    for (var property in arg) {
      target[property] = arg[property];
    }
  }
  return target;
}
var book1 = {
  name: 'javascript高级程序设计',
  price: 200,
};
var book2 = {
  color: 'blue',
};
mix(book2, book1, book);
console.log(book1);
console.log(book2);
console.log(book);
book1.price = 300;
console.log(book1);
console.log(book2);
console.log(book);
book.alike.push('java');
console.log(book1);
console.log(book2);
console.log(book);