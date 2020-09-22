/*
 * @Author: your name
 * @Date: 2020-09-22 10:48:36
 * @LastEditTime: 2020-09-22 11:00:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\8.一个人的寂寞-单例模式\3.惰性单例.js
 */
// 惰性载入单例
var LazySingle = (function () {
  // 单例实例引用
  var instance = null;
  // 单例
  function Single() {
    // 这里定义私有属性和方法
    return {
      publicMethod: function () {
        console.log("publicMethod");
      },
      publicProperty: "1.0",
    };
  }
  // 获取单例对象接口
  return function () {
    if (!instance) {
      instance = Single();
    }
    return instance;
  };
})();
console.log(LazySingle().publicProperty); // 1.0
