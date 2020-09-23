/*
 * @Author: your name
 * @Date: 2020-09-23 08:38:15
 * @LastEditTime: 2020-09-23 08:54:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\17.通讯卫星-观察者模式\1.创建一个观察者.js
 */
var Observer = (function () {
  var _messages = {};
  return {
    // 注册信息接口
    register: function (type, fn) {
      if (typeof _messages[type] === "undefined") {
        _messages[type] = [fn];
      } else {
        _messages[type].push(fn);
      }
    },
    // 发布信息接口
    fire: function (type, args) {
      if (!_messages[type]) {
        return;
      }
      // 定义消息信息
      var events = {
        type: type,
        args: args || {},
      };
      for (var i = 0; i < _messages[type].length; i++) {
        _messages[type][i].call(this, events);
      }
    },
    // 移除信息接口
    remove: function (type, fn) {
      if (_messages[type] instanceof Array) {
        for (var i = _messages[type].length - 1; i >= 0; i--) {
          _messages[type][i] === fn && _messages[type].splice(i, 1);
        }
      }
    },
  };
})();

// 测试
Observer.register("test", function (e) {
  console.log(e.type, e.args.msg);
});
Observer.fire("test", { msg: "数据" });
