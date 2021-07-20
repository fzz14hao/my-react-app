

/**
*
*@param {string} url 链接
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


