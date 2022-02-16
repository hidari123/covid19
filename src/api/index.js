import request from '../utils/request'

const base = {
  baseUrl: 'http://iwenwiki.com/wapicovid19',
  ncov: '/ncov.php'
}

const api = {
  // 疫情数据
  getNcov (params) {
    return request.get(base.baseUrl + base.ncov, {
      params
    })
  }
}

export default api
