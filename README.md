# covid19

## 跨域问题
```
1 开发环境
  proxy 打包后无法使用
2 生产环境
  cors 主要
  jsonp
```

### 打包环境预览
```
npm install -g serve
serve -s dist
```

### 路径问题
```js
  // 对比是不是生产环境 如果不是根路径访问 需要设置
publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
```

### 疫情详细数据
地址:http://iwenwiki.com/wapicovid19/ncov.php?key=62e34ad34025d5d5127135efa58d4ca8

### 全国各个城市疫情数据
地址:http://iwenwiki.com/wapicovid19/all.php

### 国外疫情数据
地址:http://iwenwiki.com/wapicovid19/foreign.php

### 国内省市详情
地址:http://iwenwiki.com/wapicovid19/guonei.php?city=%E5%86%85%E8%92%99%E5%8F%A4

### 疫情曲线图
地址:http://iwenwiki.com/wapicovid19/ncovimg.php

### 城市列表清单
地址:http://iwenwiki.com/wapicovid19/citys.php?key=171e165a7d991c5f6ecd5194c54778ef

#### 注：每日免费访问100次

### 出行防疫政策
地址:http://iwenwiki.com/wapicovid19/query.php?from=10003&to=10004&key=171e165a7d991c5f6ecd5194c54778ef

#### 注：每日免费访问100次

### github & other
http://iwenwiki.com/
https://github.com/shfshanyue?tab=repositories
