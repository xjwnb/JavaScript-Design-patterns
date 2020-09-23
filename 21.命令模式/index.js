/*
 * @Author: your name
 * @Date: 2020-09-23 15:45:43
 * @LastEditTime: 2020-09-23 16:22:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\21.命令模式\index.js
 */
// 模块实现模块
var viewCommand = (function () {
  var tpl = {
    // 展示图片结构模板
    product: [
      "<div>",
        "<img src='{#src#}'/>",
        "<p>{#text#}</p>",
      "</div>",
    ].join(""),
    // 展示标题结构模板
    title: [
      "<div class='title'>",
        "<div class='main'>",
          "<h2>{#title#}</h2>",
          "<p>{#tips#}</p>",
        "</div>",
      "</div>"
    ].join(""),
  };
  var html = "";
  // 格式化
  function formateString (str, obj) {
    return str.replace(/\{#\w+#\}/g, function (match, key) {
      return obj[key];
    });
  }
  // 方法集合
  var Action = {
    create: function (data, view) {
      if (data.length) {
        for (var i = 0; i < data.length; i++) {
          html += formateString(tpl[view], data[i]);
        }
      } else {
        html += formateString(tpl[view], data);
      }
    },
    display: function (container, data, view) {
      if (data) {
        this.create(data, view);
      }
      document.getElementById(container).innerHTML = html;
      html = "";
    },
  };

  return function (msg) {
    msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
    Action[msg.command].apply(Action, msg.param);
  };
})();

// 测试
var productData = [
  {
    src: "image/1.png",
    text: "1.png",
  },
  {
    src: "image/2.png",
    text: "2.png",
  },
];
viewCommand({
  command: 'display',
  param: ["product", productData, "product"],
});
