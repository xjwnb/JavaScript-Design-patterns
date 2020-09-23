/*
 * @Author: your name
 * @Date: 2020-09-21 14:50:55
 * @LastEditTime: 2020-09-21 15:57:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\3.神奇的魔术师-简单工厂模式\index.js
 */
// 篮球基类
var Basketball = function () {
  this.intro = "篮球盛行于美国";
};
Basketball.prototype = {
  getMember: function () {
    console.log("每个队伍需要5名队员");
  },
  getBallSize: function () {
    console.log("篮球很大");
  },
};
// 足球基类
var Football = function () {
  this.intro = "足球在世界范围内很流行";
};
Football.prototype = {
  getMember: function () {
    console.log("每个队伍需要11名队员");
  },
  geyBallSize: function () {
    console.log("足球很大");
  },
};
// 网球基类
var Tennis = function () {
  this.intro = "每年有很多网球系列赛";
};
Tennis.prototype = {
  getMember: function () {
    console.log("每个队伍需要1名队员");
  },
  getBallSize: function () {
    console.log("网球很小");
  },
};
// 运动工厂
/**
 * 篮球，足球，网球的工厂函数。
 * 参数 'NBA' 返回 Basketball 实例
 * 参数 ‘wordCup' 返回 Football 实例
 * 参数 'FrenchOpen' 返回 Tennis 实例
 * @param {string} name 'NBA' | 'wordCup' | 'FrenchOpen'
 *
 */
var SportsFactory = function (name) {
  switch (name) {
    case "NBA":
      return new Basketball();
    case "wordCup":
      return new Football();
    case "FrenchOpen":
      return new Tennis();
  }
};

var footnall = SportsFactory("wordCup");
console.log(footnall); // { intro: '足球在世界范围内很流行' }
console.log(footnall.intro); // 足球在世界范围内很流行
footnall.getMember(); // 每个队伍需要11名队员

// 工厂模式
console.log("工厂模式");
function createBook(name, time, type) {
  var o = new Object();
  o.name = name;
  o.time = time;
  o.type = type;
  o.getName = function () {
    console.log(this.name);
  };
  return o;
}
var book1 = createBook("JavaScript设计模式", 2020, "js");
var book2 = createBook("JavaScript高级程序设计", 2019, "js");
book1.getName(); // JavaScript设计模式
book2.getName(); // JavaScript高级程序设计
