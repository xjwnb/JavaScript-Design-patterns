/*
 * @Author: your name
 * @Date: 2020-09-21 20:25:05
 * @LastEditTime: 2020-09-21 22:03:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\7.语言之魂-原型模式\index.js
 */
// 图片轮播图
var LoopImages = function (imgArr, container) {
  this.imgArr = imgArr;
  this.container = container;
}
LoopImages.prototype = {
  // 创建轮播图片
  createImage: function () {
    console.log("LoopImages createImage function");
  },
  // 切换下一张图片
  changeImage: function () {
    console.log("LoopImages changeImage function");
  },
};

// 上下滑动切换类
var SlideLoopImg = function (imgArr, container) {
  LoopImages.call(this, imgArr, container);
};
SlideLoopImg.prototype = new LoopImages();
// 重写切换图片方法
SlideLoopImg.prototype.changeImage = function() {
  console.log("SlideLoopImg changeImg function"); 
};

var slideLoopImg = new SlideLoopImg(["1.png", "2.png"], "container");
console.log(slideLoopImg.imgArr); // [ '1.png', '2.png' ]
console.log(slideLoopImg.container); // container
slideLoopImg.changeImage(); // SlideLoopImg changeImg function
slideLoopImg.createImage(); // LoopImages createImage function

// 原型的拓展
SlideLoopImg.prototype.getImageLength = function() {
  return this.imgArr.length;
}
