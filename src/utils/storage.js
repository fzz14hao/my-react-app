const Storage = {
    createSession: function (key, value) { //存蓄sessionStorage
      var sessionStorage = window.sessionStorage;
      if (sessionStorage) {
        sessionStorage[key] = JSON.stringify(value);
      }
    },
    getSession: function (key) { //获取sessionStorage
      var sessionStorage = window.sessionStorage;
      if (sessionStorage) {
        var value = sessionStorage.getItem(key);
        return JSON.parse(value);
      }
    },
    deleteSession: function (key) { //删除sessionStorage
      var sessionStorage = window.sessionStorage;
      if (sessionStorage) {
        sessionStorage.removeItem(key);
      }
    },
    createLocal: function (key, value) { //存蓄localStorage
      var localStorage = window.localStorage;
      if (localStorage) {
        localStorage[key] = value;
      }
    },
    getLocal: function (key) { //获取loaclStorage
      var localStorage = window.localStorage;
      if (localStorage) {
        var value = localStorage.getItem(key);
        return value;
      }
    },
    deleteLocal: function (key) { //删除localStorage
      var localStorage = window.localStorage;
      if (localStorage) {
        localStorage.removeItem(key);
      }
    }
  }
;

export default Storage;
