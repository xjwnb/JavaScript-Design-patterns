/*
 * @Author: your name
 * @Date: 2020-09-23 17:21:57
 * @LastEditTime: 2020-09-23 18:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\22.驻华大使-访问者模式\对象访问器.js
 */
var Visitor = (function () {
  return {
    splice: function () {
      var args = Array.prototype.splice.call(arguments, 1);
      return Array.prototype.splice.apply(arguments[0], args);
    },
    push: function () {
      var len = arguments[0].length || 0;
      var args = this.splice(arguments, 1);
      arguments[0].length = len + arguments.length - 1;
      return Array.prototype.push.apply(arguments[0], args);
    },
    pop: function () {
      return Array.prototype.pop.apply(arguments[0]);
    },
  };
})();

var a = new Object();
console.log(a.length); // undefined
Visitor.push(a, 1, 2, 3);
console.log(a); // { '0': 1, '1': 2, '2': 3, length: 3 }
console.log(a.length); // 3
