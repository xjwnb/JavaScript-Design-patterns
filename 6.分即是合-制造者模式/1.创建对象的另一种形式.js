/*
 * @Author: your name
 * @Date: 2020-09-21 19:37:14
 * @LastEditTime: 2020-09-21 19:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\6.分即是合-制造者模式\1.创建对象的另一种形式.js
 */
// 创建一位人类
var Human = function (param) {
  this.skill = (param && param.skill) || "保密";
  this.hobby = (param && param.hobby) || "保密";
};
// 类人原型方法
Human.prototype = {
  getSkill: function () {
    return this.skill;
  },
  getHobby: function () {
    return this.hobby;
  },
};

// 实例化姓名类
var Named = function (name) {
  var that = this;
  (function (name, that) {
    that.wholeName = name;
    if (name.indexOf(" ") > -1) {
      that.firstName = name.slice(0, name.indexOf(" "));
      that.secondName = name.slice(name.indexOf(" ") + 1);
    }
  })(name, that);
};

// 实例化职业类
var Work = function (work) {
  var that = this;
  (function (work, that) {
    switch (work) {
      case "code":
        that.work = "程序员";
        that.workDescript = "每天沉醉于编程";
        break;
      case "teach":
        that.work = "教师";
        that.workDescript = "教书育人";
        break;
      default:
        that.work = work;
        that.workDescript = "不清楚你的职位";
        break;
    }
  })(work, that);
};
// 更换期望的职位
Work.prototype.changeWork = function (work) {
  this.work = work;
};
// 添加职位描述
Work.prototype.changeDescript = function (setence) {
  this.workDescript = setence;
};

// 创建一位应聘者
var Person = function (name, work) {
  var _person = new Human();
  _person.name = new Named(name);
  _person.work = new Work(work);
  return _person;
};
var person = new Person("X KC", "code");
console.log(person.name); // Named { wholeName: 'X KC', firstName: 'X', secondName: 'KC' }
console.log(person.work); // Work { work: '程序员', workDescript: '每天沉醉于编程' }
console.log(person.name.firstName); // X
console.log(person.name.secondName); // KC
console.log(person.work.work); // 程序员
console.log(person.work.workDescript); // 每天沉醉于编程
