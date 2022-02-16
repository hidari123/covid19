import axios from 'axios'
import qs from 'querystring'

// 处理失败的方法
// status: 状态码
// info: 信息

const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      console.log('语义有误，当前请求无法被服务器理解。')
      break
    case 401:
      console.log('服务器认证失败')
      break
    case 403:
      console.log('服务器已经理解请求，但是拒绝执行它')
      break
    case 404:
      console.log('请检查网络请求地址')
      break
    case 500:
      console.log('服务器遇到了一个未知状况，导致无法完成对请求的处理')
      break
    case 502:
      console.log('作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效响应')
      break
    default:
      console.log(info)
      break
  }
}

// 创建 axios 实例对象
const request = axios.create({
  // baseUrl: 'http://iwenwiki.com/wapicovid19'
})

// axios 全局配置
// request.defaults.withCredentials = true
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 拦截器
// 请求拦截
request.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 相应拦截
request.interceptors.response.use(
  res => {
    return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
  },
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data)
      return Promise.reject(response)
    } else {
      console.log('请求失败')
    }
  }
)

export default request
