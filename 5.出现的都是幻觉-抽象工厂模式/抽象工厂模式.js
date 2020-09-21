/*
 * @Author: your name
 * @Date: 2020-09-21 17:42:00
 * @LastEditTime: 2020-09-21 18:04:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\5.出现的都是幻觉-抽象工厂模式\抽象工厂模式.js
 */
var VehicleFactory = function (subType, superType) {
  if (typeof VehicleFactory[superType] === "function") {
    function F() {}
    F.prototype = new VehicleFactory[superType]();
    F.constructor = subType;
    subType.prototype = new F();
  } else {
    throw new Error("未创建该抽象类");
  }
};
VehicleFactory.Car = function () {
  this.type = "car";
};
VehicleFactory.Car.prototype = {
  getPrice: function () {
    return new Error("抽象方法不能调用");
  },
  getSpeed: function () {
    return new Error("抽象方法不能调用");
  },
};
VehicleFactory.Bus = function () {
  this.type = "bus";
};
VehicleFactory.Bus.prototype = {
  getPrice: function () {
    return new Error("抽象方法不能调用");
  },
  getPassengerNum: function () {
    return new Error("抽象方法不能调用");
  },
};

var BMW = function (price, speed) {
  this.price = price;
  this.speed = speed;
};
VehicleFactory(BMW, "Car");
BMW.prototype.getPrice = function () {
  return this.price;
};
BMW.prototype.getSpeed = function () {
  return this.price;
};
var bmw = new BMW(1000, 1000);
console.log(bmw.getPrice());
console.log(bmw.getSpeed());
