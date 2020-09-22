/*
 * @Author: your name
 * @Date: 2020-09-22 13:31:47
 * @LastEditTime: 2020-09-22 13:46:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\13.城市间的公路-桥接模式\2.多元化对象.js
 */

// 运动
function Speed(x, y) {
  this.x = x;
  this.y = y;
}
Speed.prototype.run = function () {
  console.log("跑步");
};

// 着色单元
function Color (cl) {
  this.color = cl;
}
Color.prototype.draw = function () {
  console.log("绘制色彩");
}

// 变形单元
function Shape(sp) {
  this.Shape = sp;
}
Shape.prototype.change = function () {
  console.log("改变形状");
}

// 说话单元
function Speek (wd) {
  this.word = wd;
}
Speek.prototype.say = function () {
  console.log(this.word);
}

// 测试
function Person (x, y, wd) {
  this.speed = new Speed(x, y);
  this.word = new Speek(wd);
}
var person = new Person(1, 2, "小卡车要加油啊");
console.log(person.speed); // Speed { x: 1, y: 2 }
console.log(person.word); // Speek { word: '小卡车要加油啊' }
person.speed.run(); // 跑步
person.word.say(); // 小卡车要加油啊
