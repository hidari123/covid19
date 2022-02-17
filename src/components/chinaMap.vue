<template>
  <div class="map">
    <p class="title"><i></i> 疫情地图</p>
    <div id="main"></div>
  </div>
</template>

<script>
// import api from '@/api/'

export default {
  name: 'ChinaMap',
  mounted () {
    // 省市疫情数据
    this.$axios.get('/area.json').then(res => {
      const allCitys = []
      //  { name: '内蒙古', value: 10, itemStyle: { normal: { areaColor: '#fff' } } }
      for (let i = 0; i < res.data.length; i++) {
        const temp = {
          name: res.data[i].provinceShortName,
          value: res.data[i].curedCount
          // 配置颜色值 后用 eachrts 映射代替
          // itemStyle: {
          //   normal: {
          //     areaColor: this.setColor(res.data[i].confirmedCount)
          //   }
          // }
        }
        allCitys.push(temp)
      }
      this.$charts.chinaMap('main', allCitys)
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
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
#main {
  height: 400px;
  width: 100%;
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
