/*
 * @Author: your name
 * @Date: 2020-09-23 19:21:46
 * @LastEditTime: 2020-09-23 19:28:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\23.中介者模式\1.创建中介者对象.js
 */

// 中介者对象
var Mediator = (function () {
  var _msg = {};
  return {
    // 订阅消息方法
    register: function (type, action) {
      if (_msg[type]) {
        _msg[type].push(action);
      } else {
        _msg[type] = [action];
      }
    },
    // 发布消息方法
    send: function (type) {
      if (_msg[type]) {
        for (var i = 0; i < _msg[type].length; i++) {
          _msg[type][i] && _msg[type][i]();
        }
      }
    },
  };
})();

// 测试
Mediator.register("test", function () {
  console.log("first");
});
Mediator.register("test", function () {
  console.log("second");
});
Mediator.send("test");
// 运行结果
/* 
first
second */
