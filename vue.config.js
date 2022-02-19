// 解决跨域问题

module.exports = {
  devServer: {
    proxy: {
      '/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        target: 'http://apis.juhe.cn', // 代理目标的基础路径
        secure: false, // 设置支持https协议的代理
        changeOrigin: true, // target是域名的话，需要这个参数
        pathRewrite: {
          // pathRewrite 重写路径
          // '^/api': '/api/FingerUnior'
          '^/api': '' // 在返回给服务器的路径中把 '/api' 去掉
        }
      }
    }
  },
  // 对比是不是生产环境 如果不是根路径访问 需要设置
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
}
