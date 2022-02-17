<template>
  <div class="map">
    <p class="title"><i></i> 疫情地图</p>
    <Tabs :currentIndex='currentIndex' @onIndex='getIndex'>
      <!-- Tab 属于 Tabs 的 插槽 用slot -->
      <!-- label 是 Tab 的一个属性 通过props 读取 -->
      <Tab index='1' label='国内疫情'>
          <div id="chinaMap"></div>
      </Tab>
      <Tab index='2' label='国外疫情'>
        <div id='worldMap'>国外疫情</div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
// import api from '@/api/'
import axios from 'axios'

export default {
  name: 'ChinaMap',
  data () {
    return {
      currentIndex: '1'
    }
  },
  mounted () {
    function NcovCity () {
      return axios.get('/area.json')
    }
    function ncovAbroad () {
      return axios.get('http://iwenwiki.com/wapicovid19/foreign.php')
    }
    // 合并多个并发请求
    axios.all([NcovCity(), ncovAbroad()]).then(axios.spread((NcovCity, ncovAbroad) => {
      // 两个请求现在都执行完成
      const allCitys = []
      //  { name: '内蒙古', value: 10, itemStyle: { normal: { areaColor: '#fff' } } }
      for (let i = 0; i < NcovCity.data.length; i++) {
        const temp = {
          name: NcovCity.data[i].provinceShortName,
          value: NcovCity.data[i].curedCount
        }
        allCitys.push(temp)
      }
      const worlds = []
      for (let i = 0; i < ncovAbroad.data.retdata.length; i++) {
        const temp = {
          name: ncovAbroad.data.retdata[i].xArea,
          value: ncovAbroad.data.retdata[i].curConfirm
        }
        worlds.push(temp)
      }
      this.$charts.chinaMap('chinaMap', allCitys)
      this.$charts.worldMap('worldMap', worlds)
    }))

    // 省市疫情数据
    // this.$axios.get('/area.json').then(res => {
    //   const allCitys = []
    //   //  { name: '内蒙古', value: 10, itemStyle: { normal: { areaColor: '#fff' } } }
    //   for (let i = 0; i < res.data.length; i++) {
    //     const temp = {
    //       name: res.data[i].provinceShortName,
    //       value: res.data[i].curedCount
    //       // 配置颜色值 后用 eachrts 映射代替
    //       // itemStyle: {
    //       //   normal: {
    //       //     areaColor: this.setColor(res.data[i].confirmedCount)
    //       //   }
    //       // }
    //     }
    //     allCitys.push(temp)
    //   }
    //   this.$charts.chinaMap('chinaMap', allCitys)
    //   this.$charts.worldMap('worldMap')
    // }).catch(error => {
    //   console.log(error)
    // })
  },
  methods: {
    getIndex (index) {
      this.currentIndex = index
    }
    // 配置颜色值
    // setColor (value) {
    //   let currentColor = ''
    //   switch (true) {
    //     case value === 0:
    //       currentColor = 'fff'
    //       break
    //     case value > 0 && value < 10:
    //       currentColor = '#FDFDCF'
    //       break
    //     case value >= 10 && value < 100:
    //       currentColor = '#FE9E83'
    //       break
    //     case value >= 100 && value < 500:
    //       currentColor = '#E55A4E'
    //       break
    //     case value >= 500 && value < 50000:
    //       currentColor = '#4F0700'
    //       break
    //     default:
    //       break
    //   }
    //   return currentColor
    // }
  }
}
</script>

<style scoped>
#chinaMap {
  height: 400px;
  width: 100%;
}
#worldMap {
  height: 400px;
  width: 3.75rem;
}
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}
.title::before {
  content: '';
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}
</style>
