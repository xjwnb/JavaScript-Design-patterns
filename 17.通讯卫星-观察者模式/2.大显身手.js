/*
 * @Author: your name
 * @Date: 2020-09-23 09:22:46
 * @LastEditTime: 2020-09-23 15:54:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\17.通讯卫星-观察者模式\2.大显身手.js
 */
// 观察者
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

function $(id) {
  return document.getElementById(id);
}

(function () {
  // 追加一则消息
  function addMsgItem(e) {
    var text = e.args.text,
      ul = $("msg"),
      li = document.createElement("li"),
      span = document.createElement("span");
    li.innerHTML = text;
    // 关闭按钮
    span.onclick = function () {
      ul.removeChild(li);
      // 发布删除留言消息
      Observer.fire("removeCommentMessage", {
        num: -1,
      });
      // 添加删除按钮
      li, appendChild(span);
      // 添加留言节点
      ul.appendChild(li);
    };
  }
  // 注册添加评论信息
  Observer.register("addCommentMessage", addMsgItem);
})();

(function () {
  // 更改用户消息数目
  function changeMsgNum(e) {
    // 获取需要增加的用户消息数目
    var num = e.args.num;
    // 增加用户消息数目并写入页面中
    $("msg_num").innerHTML = parseInt($("msg_num").innerHTML + num);
  }
  // 注册添加评论信息
  Observer.register("addCommentMessage", changeMsgNum);
  Observer.register("removeCommentMessage", changeMsgNum);
})();

(function () {
  // 用户点击提交按钮
  $("user_submit").onclick = function () {
    // 获取用户输入框输入的信息
    var text = $("user_input");
    // 如果消息为空提交失败
    if (text.value === "") {
      return;
    }
    Observer.fire("addCommentMessage", {
      text: text.value,
      num: 1,
    });
    text.value = "";
  };
})();
