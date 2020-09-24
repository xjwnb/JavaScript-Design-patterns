/*
 * @Author: your name
 * @Date: 2020-09-24 14:23:58
 * @LastEditTime: 2020-09-24 14:54:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript设计模式\29.数据访问对象模式\数据操作状态.js
 */
var BaseLocalStorage = function (preId, timeSign) {
  this.preId = preId;
  this.timeSign = timeSign;
};

BaseLocalStorage.prototype = {
  // 操作状态
  status: {
    SUCCESS: 0, // 成功
    FAILURE: 1, // 失败
    OVERFLOW: 2, // 溢出
    TIMEOUT: 3, // 过期
  },
  // 保存本地存储链接
  storage: localStorage || window.localStorage,
  // 获取本地存储数据库数据真实字段
  getKey: function (key) {
    return this.preId + key;
  },
  // 添加（修改）数据
  set: function (key, value, callback, time) {
    var status = this.status.SUCCESS;
    var key = this.getKey(key);
    try {
      // 参数时间参数时获取时间戳
      time = new Date(time).getTime() || time.getTime();
    } catch (e) {
      time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
    }
    try {
      this.storage.setItem(key, time + this.timeSign + value);
    } catch (e) {
      status = this.status.OVERFLOW;
    }
    callback && callback.call(this, status, key, value);
  },
  // 获取数据
  get: function (key, callback) {
    var status = this.status.SUCCESS,
      key = this.getKey(key),
      value = null,
      timeSignLen = this.timeSign.length,
      that = this,
      index,
      ttime,
      result;
    try {
      value = that.storage.getItem(key);
    } catch (e) {
      result = {
        status: that.status.FAILURE,
        value: null,
      };
      callback && callback.call(this, result.status, result.value);
      return result;
    }
    if (value) {
      index = value.indexOf(that.timeSign);
      time = +value.slice(0, index);
      if (new Date(time).getTime() > new Date().getTime() || time == 0) {
        value = value.slice(index + timeSignLen);
      } else {
        value = null;
        status = that.status.TIMEOUT;
        that.remove(key);
      }
    } else {
      status = that.status.FAILURE;
    }
    result = {
      status: status,
      value: value,
    };
    callback && callback.call(this, result.status, result.value);
    return result;
  },
  // 删除数据
  remove: function (key, callback) {
    var statue = this.status.FAILURE,
      key = this.getKey(key),
      value = null;
    try {
      value = this.storage.getItem(key);
    } catch (e) {}
    if (value) {
      try {
        this.storage.removeItem(key);
        status = this.status.SUCCESS;
      } catch (e) {}
    }
    callback &&
      callback.call(
        this,
        status,
        status > 0
          ? null
          : value.slice(value.indexOf(this.timeSign) + this.timeSign.length)
      );
  },
};
