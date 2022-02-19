import request from '../utils/request'

const base = {
  baseUrl: 'http://iwenwiki.com/wapicovid19',
  ncov: '/ncov.php',
  juheUrl: '/api',
  // ncovabroad: '/foreign.php',
  spring: '/springTravel/citys',
  spring1: '/citys.php',
  springTravel: '/springTravel/query',
  springTravel1: '/query.php'
}

const api = {
  // 疫情数据
  getNcov (params) {
    return request.get(base.baseUrl + base.ncov, {
      params
    })
  },
  // // 世界疫情数据
  // getNcovAbroad () {
  //   return request.get(base.baseUrl + base.ncovabroad, {
  //   })
  // },
  // 各地政策城市数据
  getSpringTravel (params) {
    return request.get(base.juheUrl + base.spring, {
      params
    })
  },
  // 各地政策详情
  getSpringTravelQuery (params) {
    return request.get(base.juheUrl + base.springTravel, {
      params
    })
  }
}

export default api
