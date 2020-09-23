/*
 * @Author: your name
 * @Date: 2020-09-23 10:22:05
 * @LastEditTime: 2020-09-23 10:29:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\18.超级玛丽-状态模式\1.状态对象的实现.js
 */
var ResultState = (function () {
  var State = {
    state0: function () {
      console.log("第一种情况");
    },
    state1: function () {
      console.log("第二种情况");
    },
    state2: function () {
      console.log("第三种情况");
    },
    state3: function () {
      console.log("第四种情况");
    },
    state4: function () {
      console.log("第五种情况");
    },
    state5: function () {
      console.log("第六种情况");
    },
  };

  function show(result) {
    return State["state" + result] && State["state" + result]();
  }

  return {
    show: show,
  };
})();

