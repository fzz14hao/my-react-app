/**
 * cookie 操作
 *
 */

let cookie = {
  /**
   * 删除 cookie
   * @param name
   * @exp cookie.delItem('usr_token')
   */
  delItem(name) {
    document.cookie = name + '=;expires=' + (new Date(0)).toGMTString()
  },

  /**
   * 拿 cookie
   * @param cookieKey
   * @returns {*}
   * @exp cookie.getIem('usr_token')
   */
  getItem(cookieKey) {//获取指定名称的cookie的值
    let arrStr = document.cookie.split('; ')
    for (let i = 0; i < arrStr.length; i++) {
      let temp = arrStr[i].split('=')
      if (temp[0] == cookieKey) return decodeURIComponent(temp[1])
    }
  },

  /**
   * 设置 cookie
   * @param cookieKey
   * @param cookieVal 值
   * @param cookieExpiresHours 过期时间，单位小时
   */
  setItem(cookieKey, cookieVal, cookieExpiresHours ) { //添加cookie
    let str = cookieKey + '=' + encodeURIComponent(cookieVal)
    if (cookieExpiresHours > 0) { //为时不设定过期时间，浏览器关闭时cookie自动消失
      let date = new Date()
      let ms = cookieExpiresHours * 3600 * 1000
      date.setTime(date.getTime() + ms)
      str += '; expires=' + date.toGMTString()
    }
    document.cookie = str
  }
}

export default cookie
