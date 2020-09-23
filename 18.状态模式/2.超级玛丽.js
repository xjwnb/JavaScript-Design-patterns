/*
 * @Author: your name
 * @Date: 2020-09-23 10:58:06
 * @LastEditTime: 2020-09-23 11:10:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\18.超级玛丽-状态模式\2.超级玛丽.js
 */
// 创建超级玛丽状态类
var MarryState = function () {
  // 内部状态私有变量
  var _currentState = {},
    // 动作与状态方法映射
    states = {
      jump: function () {
        console.log("jump");
      },
      move: function () {
        console.log("move");
      },
      shoot: function () {
        console.log("shoot");
      },
      squat: function () {
        console.log("squat");
      },
    };
  // 动作控制类
  var Action = {
    // 改变状态方法
    changeState: function () {
      var arg = arguments;
      // 重置内部状态
      _currentState = {};
      // 如果有动作则添加动作
      if (arg.length) {
        for (var i = 0; i < arg.length; i++) {
          _currentState[arg[i]] = true;
        }
      }
      return this;
    },
    // 执行动作
    goes: function () {
      console.log("触发动作");
      for (var key in _currentState) {
        states[key] && states[key]();
      }
      return this;
    },
  };
  return {
    changeState: Action.changeState,
    goes: Action.goes,
  };
};

// 测试使用
MarryState()
  .changeState("jump", "shoot")
  .goes()
  .changeState("squat", "move")
  .goes();
// 运行结果
/*   
  触发动作
  jump
  shoot
  触发动作
  squat
  move */