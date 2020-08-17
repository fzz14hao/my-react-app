import axios from 'axios';
import Qs from 'qs'
import 'antd/lib/message/style/index.css'

axios.defaults.timeout = 30000;
// axios.defaults.baseURL = 'http://aukey.canplay.com.cn/aukey/customer';
// axios.defaults.baseURL = '/proxy';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = Qs.stringify(config.data)
    return config;
  },
  error => {
    return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    return Promise.reject(err) // 返回接口返回的错误信息
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export const httpGet = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @param isAuth 是否需要鉴权
 * @param isAlert 是否弹窗提示
 * @returns {Promise}
 */
export const httpPost = (url, data = {}, isAuth = true, isAlert = true) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err)
      })
  })
}
