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

// 对象的另一种形式
console.log('对象的另一种形式')
var CheckObject = function() {};
CheckObject.checkName = function() {
  console.log('checkName');
}
CheckObject.checkEmail = function() {
  console.log('checkEmail')
}
CheckObject.checkName();
CheckObject.checkEmail();

// 真假对象
console.log('真假对象');
var CheckObject = function() {
  return {
    checkName: function() {
      console.log('checkName');
    },
    checkEmail: function() {
      console.log('checkEmail');
    }
  }
}
var a = CheckObject();
a.checkName();
a.checkEmail();

// 类也可以
console.log('类也可以');
var CheckObject = function() {
  this.checkName = function() {
    console.log('checkName');
  },
  this.checkEmail = function() {
    console.log('checkEmail');
  }
}
var a = new CheckObject();
a.checkName();
a.checkEmail();

// 一个检测类
console.log('一个检测类');
var CheckObject = function() {};
CheckObject.prototype.checkName = function() {
  console.log('checkName');
};
CheckObject.prototype.checkEmail = function() {
  console.log('checkEmail');
};
var a = new CheckObject();
a.checkName();
a.checkEmail();

// 方法还可以这样用
console.log('方法还可以这样用');
var CheckObject = {
  checkName: function() {
    console.log('checkName');
    return this;
  },
  checkEmail: function() {
    console.log('checkEmail');
    return this;
  }
}
CheckObject.checkName().checkEmail();
var CheckObject = function() {};
CheckObject.prototype = {
  checkName: function(){
    console.log('checkName');
    return this;
  },
  checkEmail: function() {
    console.log('checkEmail');
    return this;
  }
}
var o = new CheckObject();
o.checkName().checkEmail();

// 函数的祖先
console.log('函数的祖先');
