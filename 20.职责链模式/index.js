/*
 * @Author: your name
 * @Date: 2020-09-23 14:30:58
 * @LastEditTime: 2020-09-23 14:56:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings EditF
 * @FilePath: \JavaScript设计模式\20.有序车站-职责链模式\index.js
 */
var sendData = function (data, dealType, dom) {
  var xhr = new XMLHttpRequest(),
    url = "getData.php?mod=userInfo";
  xhr.onload = function (event) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      dealData(xhr.responseText, dealType, dom);
    } else {
      console.log("请求失败");
    }
  };
  for (var i in data) {
    url += "&" + i + "=" + data[i];
  }
  xhr.open("get", url, true);
  xhr.send(null);
};

var dealData = function (data, dealType, dom) {
  var dataType = Object.prototype.toString.call(data);
  switch (dealType) {
    case "sug":
      if (dataType === "[object Array]") {
        return createSug(data, dom);
      }
      if (dataType === "[object Object]") {
        var newData = [];
        for (var i in data) {
          newData.push(data[i]);
        }
        return createSug(newData, dom);
      }
      return createSug([data], dom);
      break;
    case "validate":
      return createValidataResult(data, dom);
      break;
  }
};

var createSug = function (data, dom) {
  var i = 0;
  var len = data.length;
  var html = "";
  for (; i < len; i++) {
    html += "<li>" + data[i] + "</li>";
  }
  dom.parentNode.getElementsByTagName("ul")[0].innerHTML = html;
};

var createValidataResult = function (data, dom) {
  dom.parentNode.geyElementsByTagName("span")[0].innerHTML = data;
};
