/*
 * @Author: your name
 * @Date: 2020-09-22 19:07:49
 * @LastEditTime: 2020-09-22 19:18:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\16.照猫画虎-模板方法模式\index.js
 */
// 创建基本提示框
var Alert = function (data) {
  if (!data) {
    return;
  }
  // 设置内容
  this.content = data.content;
  // 创建提示框面板
  this.panel = document.createElement("div");
  // 创建提示内容组件
  this.contentNode = document.createElement("p");
  // 创建确定按钮组件
  this.confirmBtn = document.createElement("span");
  // 创建关闭按钮组件
  this.closeBtn = document.createElement("b");
  // 为提示框面板添加类
  this.panel.className = "alert";
  // 为关闭按钮添加类
  this.closeBtn.className = "a-close";
  // 为确定按钮添加类
  this.confirmBtn.className = "a-confirm";
  // 为确定按钮添加文案
  this.confirmBtn.innerHTML = data.confirm || "确定";
  // 为提示内容添加文本
  this.contentNode.innerHTML = this.content;
  // 点击确定按钮执行方法
  this.success = data.success || function () {};
  // 点击关闭按钮执行方法
  this.fail = data.fail || function () {};
};

// 模板的原型方法
Alert.prototype = {
  // 创建方法
  init: function () {
    this.panel.appendChild(this.closeBtn);
    this.panel.appendChild(this.contentNode);
    this.panel.appendChild(this.confirmBtn);
    // 插入页面中
    document.body.appendChild(this.panel);
    // 绑定事件
    this.bindEvent();
    this.show();
  },
  bindEvent: function () {
    var me = this;
    this.closeBtn.onclick = function () {
      me.fail();
      me.hide();
    };
    this.confirmBtn.onclick = function () {
      me.success();
      me.hide();
    };
  },
  // 隐藏方法
  hide: function () {
    this.panel.style.display = "none";
  },
  show: function () {
    this.panel.style.display = "block";
  },
};
