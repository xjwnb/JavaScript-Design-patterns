/*
 * @Author: your name
 * @Date: 2020-09-22 13:22:13
 * @LastEditTime: 2020-09-22 13:22:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\13.城市间的公路-桥接模式\1.提取共同点.js
 */
// 抽象
function changeColor(dom, color, bg) {
  dom.style.color = color;
  dom.style.background = bg;
}