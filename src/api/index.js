import request from '../utils/request'

const base = {
  baseUrl: 'http://iwenwiki.com/wapicovid19',
  ncov: '/ncov.php',
  ncovabroad: '/foreign.php'
}

const api = {
  // 疫情数据
  getNcov (params) {
    return request.get(base.baseUrl + base.ncov, {
      params
    })
  },
  // 世界疫情数据
  getNcovAbroad () {
    return request.get(base.baseUrl + base.ncovabroad, {
    })
  }
}

export default api
