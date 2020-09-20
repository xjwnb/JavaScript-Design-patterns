// 函数的书写
console.log('函数的书写')
function checkName() {
  console.log("checkName");
}
function checkEmail() {
  console.log("checkEmail");
}
checkName();
checkEmail();

// 函数的另一种形式
console.log('函数的另一种形式')
var checkName = function () {
  console.log("checkName");
};
var checkEmail = function () {
  console.log("checkEmail");
};
checkName();
checkEmail();

// 对象收编变量
console.log('对象收编变量')
var CheckObject = {
  checkName: function () {
    console.log("checkName");
  },
  checkEmail: function () {
    console.log("checkEmail");
  },
};
CheckObject.checkName();
CheckObject.checkEmail();