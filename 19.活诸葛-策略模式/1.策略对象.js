// 价格策略对象
var PriceStratepy = (function () {
  // 内部算法对象
  var stratepy = {
    // 100 返 30
    return30: function (price) {
      return +price + parseInt(price / 100) * 30;
    },
    // 100 返 50
    return50: function (price) {
      return +price + parseInt(price / 100) * 50;
    },
    // 9折
    percent90: function (price) {
      return (price * 100 * 90) / 10000;
    },
    // 5 折
    percent50: function (price) {
      return (price * 100 * 50) / 10000;
    },
  };
  // 策略算法调用接口
  return function (algorithm, price) {
    return stratepy[algorithm] && stratepy[algorithm](price);
  };
})();

// 测试
var price = PriceStratepy("return50", "100000");
console.log(price); // 150000
