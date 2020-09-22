/*
 * @Author: your name
 * @Date: 2020-09-22 12:42:27
 * @LastEditTime: 2020-09-22 12:44:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\11.牛郎织女-代理模式\1.站长代理.js
 */
// 统计代理
var Count = (function () {
  var img = new Image();
  return function (params) {
    var str = "http://www.*.com/a.php?";
    for (var key in params) {
      str += key + "=" + params[key];
    }
    img.src = str;
  };
})();

// 测试
Count({ name: "xkc" });
