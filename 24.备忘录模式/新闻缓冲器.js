/*
 * @Author: your name
 * @Date: 2020-09-23 23:20:51
 * @LastEditTime: 2020-09-23 23:23:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\24.备忘录模式\新闻缓冲器.js
 */
var Page = function () {
  var cache = {};
  return function (page, fn) {
    if (cache[page]) {
      fn && fn;
    } else {
      $.post(
        "./data/getNewsData.php",
        {
          page: page,
        },
        function (res) {
          if (res.errNo == 0) {
            cache[page] = res.data;
            fn && fn();
          } else {
            console.log("异常");
          }
        }
      );
    }
  };
};
