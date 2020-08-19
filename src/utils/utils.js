/*
 *
 * @param    需要获取的参数值
 * @url      链接地址, 可以不传，默认从当前链接拿
 * */
export const getUrlParamValue = (param, url) => {
  const urls = url || window.location;
  const reg = new RegExp(param + "=([^&]*)");
  const r = urls.search.substr(1).match(reg);
  if (r !== null) {
    return decodeURIComponent(r[1]);
  }
  return null;

}

/*
* @param {Object}
* url 链接
* 页面跳转
* */
export const jumpPage = (url) => {
  let eleA = document.createElement('a')
  let event = document.createEvent('MouseEvents')
  document.body.appendChild(eleA)
  event.initEvent('click', true, true)
  eleA.href = url
  eleA.dispatchEvent(event)
  document.body.removeChild(eleA)
}



export const formatDate=(date, dateType)=> {
  //格式个位数成两位数
  function _Add_0(data) {
    if (!data.toString().match(/\d{2}/)) {
      return `0${data}`
    }
    return data
  }

  //获取星期数
  function _FormatDays(number) {
    var days = ["日", "一", "二", "三", "四", "五", "六"]
    return days[number]
  }

  if (!date) {
    return ''
  }
  if (typeof date == "string") {
    if (date.length <= "5") {
      return date
    } else if (date.length > "20") {
      date = date
    } else if (/-/.test(date)) {
      date = date.replace(/-/g, "/")
    } else {
      date = date.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3")
    }
    date = new Date(date)
  }
  if (typeof date == "number") {
    date = new Date(date)
  }
  let $d = {
    "y+": date.getFullYear(),
    "M+": _Add_0(date.getMonth() + 1),
    "d+": _Add_0(date.getDate()),
    "H+": _Add_0(date.getHours()),
    "m+": _Add_0(date.getMinutes()),
    "s+": _Add_0(date.getSeconds()),
    "z+": _FormatDays(date.getDay())
  }
  let $a = ["y+", "M+", "d+", "H+", "m+", "s+", "z+"]
  for (let i = 0; i < $a.length; i++) {
    let $0 = $a[i]
    let $1 = $d[$a[i]]
    let $reg = new RegExp($0, "i")
    if (/m/i.test($0)) {
      $reg = new RegExp($0)
    }
    dateType = dateType.replace($reg, $1)
  }
  return dateType
}