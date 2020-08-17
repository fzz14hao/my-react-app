const common = {
    /*
     *
     * @param    需要获取的参数值
     * @url      链接地址, 可以不传，默认从当前链接拿
     * */
    getUrlParamValue: function (param, url) {
      var urls = url || window.location;
      var reg = new RegExp(param + "=([^&]*)");
      var r = urls.search.substr(1).match(reg);
      if (r !== null) {
        return decodeURIComponent(r[1]);
      }
      return null;

    },
    /*
    * @param {Object}
    * url 链接
    * 页面跳转
    * */
    jumpPage: function (url) {
      var eleA = document.createElement('a')
      var event = document.createEvent('MouseEvents')
      document.body.appendChild(eleA)
      event.initEvent('click', true, true)
      eleA.href = url
      eleA.dispatchEvent(event)
      document.body.removeChild(eleA)
    }
  }
;

export default common;

