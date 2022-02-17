/* eslint-disable quote-props */
// 一定要 * as echarts 否则导入不成功
import * as echarts from 'echarts'
import mapJson from '../assets/china.json'
import nameMap from '../assets/nameMap'

const install = (Vue) => {
  // Object 方法 ES5提供 defineProperties
  // 通过 prototype 把方法挂载到 vue 原型上 可以用 this 方法调用
  Object.defineProperties(Vue.prototype, {
    $charts: {
      get () {
        return {
          // 中国地图配置
          chinaMap: (id, data) => {
            const dom = document.getElementById(id)
            const myChart = echarts.init(dom)
            const uploadDataUrl = mapJson
            console.log(uploadDataUrl)
            // 注册地图
            echarts.registerMap('china', uploadDataUrl)
            const option = {
              // 提示信息
              tooltip: {
                triggerOn: 'mousemove', // 默认 点击触发
                enterable: true, // 是否允许点击 默认 允许
                formatter (data) {
                  return `<div>
                            <p>${data.seriesName}：${data.name}</p>
                            <p>累计治愈：${data.value}</p>
                          </div>`
                }
              },
              visualMap: [{ // 映射 颜色值
                orient: 'vertical', // 分段方向：horizontal 水平 vertical 垂直
                type: 'piecewise', // 分段
                pieces: [ // 配置颜色区间
                  { min: 0, max: 0, color: '#fff' },
                  { min: 1, max: 10, color: '#FDFDCF' },
                  { min: 10, max: 100, color: '#FE9E83' },
                  { min: 100, max: 500, color: '#E55A4E' },
                  { min: 500, max: 10000, color: '#4F070D' }
                ]
              }],
              // geo: {
              //   // 地理坐标系组件,支持在地理坐标系上绘制散点图、线图
              //   map: 'china',
              //   aspectScale: 0.75,
              //   zoom: 1.1
              // },
              series: [
                {
                  name: '省',
                  type: 'map', // 配置图表类型
                  map: 'china', // 中国地图
                  roam: false, // 是否允许自动缩放 false 不允许
                  zoom: 1.2, // 地图缩放比例
                  label: { // 配置字体
                    normal: {
                      show: true, // 是否显示字体
                      textStyle: {
                        fontSize: 8
                        // color: '#1DE9B6'
                      }
                    }
                    // emphasis: {
                    //   textStyle: {
                    //     color: 'rgb(183, 185, 14)'
                    //   }
                    // }
                  },
                  itemStyle: { // 配置地图样式
                    normal: {
                      areaColor: 'rgba(0,255,236,0)',
                      borderColor: 'rgba(0,0,0,0.2)'
                    },
                    emphasis: { // 配置阴影效果
                      areaColor: 'rgba(255,180,0,0.8)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20, // 模糊程度
                      borderWidth: 0,
                      shadowColor: 'rgba(0,0,0,0.5)'
                    }
                  },
                  // data: [
                  //   { name: '内蒙古', value: 10, itemStyle: { normal: { areaColor: '#fff' } } }
                  // ]
                  data: data
                }
                // 地图的线路图动画效果相关设置
                // {
                //   type: 'lines',
                //   zlevel: 2,
                //   effect: {
                //     show: true,
                //     period: 4,
                //     trailLength: 0.6,
                //     symbol: 'arrow',
                //     symbolSize: 7
                //   },
                //   lineStyle: {
                //     normal: {
                //       color: '#1DE9B6',
                //       width: 1,
                //       opacity: 0.1,
                //       curveness: 0.3
                //     }
                //   },
                //   data: []
                // }
              ]
            }
            myChart.setOption(option)
          },
          // 世界地图配置
          worldMap: (id, data) => {
            const dom = document.getElementById(id)
            const myChart = echarts.init(dom)
            const option = {
              // 提示信息
              tooltip: {
                triggerOn: 'mousemove', // 默认 点击触发
                enterable: true, // 是否允许点击 默认 允许
                formatter (data) {
                  return `<div>
                            <p>${data.seriesName}：${data.name}</p>
                            <p>累计治愈：${data.value}</p>
                          </div>`
                }
              },
              visualMap: [{ // 映射 颜色值
                orient: 'vertical', // 分段方向：horizontal 水平 vertical 垂直
                type: 'piecewise', // 分段
                pieces: [ // 配置颜色区间
                  { min: 0, max: 0, color: '#fff' },
                  { min: 1, max: 5000, color: '#FDFDCF' },
                  { min: 5000, max: 10000, color: '#FE9E83' },
                  { min: 10000, max: 50000, color: '#E55A4E' },
                  { min: 50000, max: 100000000, color: '#4F070D' }
                ]
              }],
              // geo: {
              //   // 地理坐标系组件,支持在地理坐标系上绘制散点图、线图
              //   map: 'china',
              //   aspectScale: 0.75,
              //   zoom: 1.1
              // },
              series: [
                {
                  name: '国家',
                  type: 'map', // 配置图表类型
                  map: 'world', // 中国地图
                  roam: false, // 是否允许自动缩放 false 不允许
                  zoom: 1.2, // 地图缩放比例
                  label: { // 配置字体
                    normal: {
                      show: false, // 是否显示字体
                      textStyle: {
                        fontSize: 8
                        // color: '#1DE9B6'
                      }
                    }
                  },
                  nameMap: nameMap,
                  itemStyle: { // 配置地图样式
                    normal: {
                      areaColor: 'rgba(0,255,236,0)',
                      borderColor: 'rgba(0,0,0,0.2)'
                    },
                    emphasis: { // 配置阴影效果
                      areaColor: 'rgba(255,180,0,0.8)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowBlur: 20, // 模糊程度
                      borderWidth: 0,
                      shadowColor: 'rgba(0,0,0,0.5)'
                    }
                  },
                  data: data
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
