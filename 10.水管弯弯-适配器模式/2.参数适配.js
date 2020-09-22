/*
 * @Author: your name
 * @Date: 2020-09-22 12:12:12
 * @LastEditTime: 2020-09-22 12:15:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\10.水管弯弯-适配器模式\2.参数适配.js
 */

/**
 * 适配如果参数赋值缺少，添加对应默认值
 * @param {object} obj 对象
 */
function doSomeThing(obj) {
  var _adapter = {
    name: "小卡车",
    age: 20,
    color: "black",
    height: 178,
  };
  for (var key in _adapter) {
    _adapter[key] = obj[key] || _adapter[key];
  }
}