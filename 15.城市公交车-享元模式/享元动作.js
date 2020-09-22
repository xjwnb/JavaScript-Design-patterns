/*
 * @Author: your name
 * @Date: 2020-09-22 18:34:05
 * @LastEditTime: 2020-09-22 18:40:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\15.城市公交车-享元模式\享元动作.js
 */
var FlyWeight = {
  moveX: function (x) {
    this.x = x;
  },
  moveY: function (y) {
    this.y = y;
  },
};

// Player类
var Player = function (x, y, c) {
  this.x = x;
  this.y = y;
  this.color = c;
};
Player.prototype = FlyWeight;
Player.prototype.changeColor = function (c) {
  this.color = c;
};

var player = new Player(1, 2, "black");
console.log(player); // { x: 1, y: 2, color: 'black' }
player.moveX(2);
player.moveY(3);
player.changeColor("blue");
console.log(player); // { x: 2, y: 3, color: 'blue' }
