// 一定要 * as echarts 否则导入不成功
import * as echarts from 'echarts'
import mapJson from '../assets/china.json'

const install = (Vue) => {
  // Object 方法 ES5提供 defineProperties
  // 通过 prototype 把方法挂载到 vue 原型上 可以用 this 方法调用
  Object.defineProperties(Vue.prototype, {
    $charts: {
      get () {
        return {
          chinaMap: (id) => {
            const dom = document.getElementById(id)
            const myChart = echarts.init(dom)
            const uploadDataUrl = mapJson
            console.log(uploadDataUrl)
            // 注册地图
            echarts.registerMap('china', uploadDataUrl)
            const option = {
              geo: {
                // 地理坐标系组件,支持在地理坐标系上绘制散点图、线图
                map: 'china',
                aspectScale: 0.75,
                zoom: 1.1
              },
              series: [
                {
                  type: 'map',
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: '#1DE9B6'
                      }
                    },
                    emphasis: {
                      textStyle: {
                        color: 'rgb(183, 185, 14)'
                      }
                    }
                  },
                  zoom: 1.1,
                  map: 'china'
                },
                // 地图的线路图动画效果相关设置
                {
                  type: 'lines',
                  zlevel: 2,
                  effect: {
                    show: true,
                    period: 4,
                    trailLength: 0.6,
                    symbol: 'arrow',
                    symbolSize: 7
                  },
                  lineStyle: {
                    normal: {
                      color: '#1DE9B6',
                      width: 1,
                      opacity: 0.1,
                      curveness: 0.3
                    }
                  },
                  data: []
                }
              ]
            }
            myChart.setOption(option)
          }
        }
      }
    }
  })
}

export default install
