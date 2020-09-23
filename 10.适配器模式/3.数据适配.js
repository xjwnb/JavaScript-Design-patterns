/*
 * @Author: your name
 * @Date: 2020-09-22 12:20:18
 * @LastEditTime: 2020-09-22 12:27:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\10.水管弯弯-适配器模式\3.数据适配.js
 */
/**
 * 将数组转成对象
 * @param {Array}} arr
 */
function arrToObjAdapter(arr) {
  return {
    name: arr[0],
    age: arr[1],
    color: arr[2],
  };
}
var xkc = ["小卡车", 20, "black"];
var adapterData = arrToObjAdapter(xkc);
console.log(adapterData); // {name: "小卡车", age: 20, color: "black"}
