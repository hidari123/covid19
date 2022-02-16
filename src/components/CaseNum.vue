<template>
  <div class="case-num">
      <div class="container">
          <div class="title">
              <span>截至 {{ formatData(caseNumData2.modifyTime) }} 全国数据统计</span>
          </div>
      </div>
      <div class="num">
          <ul class="count" ref="dataList">
              <li v-for="(data, index) in covidList" :key="index">
                  <div class="create-item">
                      <div class="create-count">
                          <b>
                              较昨日<em style="color: rgb(247, 76, 49)"> {{data.yesterday > 0 ? '+' + data.yesterday : data.yesterday}}</em>
                          </b>
                      </div>
                      <strong style="color: rgb(247,76,49)">{{data.now}}</strong>
                      <span>{{ data.name }}</span>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    caseNumData1: {
      type: Object,
      default: function () {
        return {}
      }
    },
    caseNumData2: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      covidList: [
        {
          yesterday: this.caseNumData2.currentConfirmedIncr,
          now: this.caseNumData1.currentConfirmedCount,
          name: '现存确诊'
        },
        {
          yesterday: this.caseNumData2.confirmedIncr,
          now: this.caseNumData1.confirmedCount,
          name: '累计确诊'
        },
        {
          yesterday: this.caseNumData2.suspectedIncr,
          now: this.caseNumData1.suspectedCount,
          name: '累积境外输入'
        },
        {
          yesterday: this.caseNumData2.curedIncr,
          now: this.caseNumData1.curedCount,
          name: '累计治愈'
        },
        {
          yesterday: this.caseNumData2.deadIncr,
          now: this.caseNumData1.deadCount,
          name: '累计死亡'
        },
        {
          yesterday: this.caseNumData2.seriousIncr,
          now: this.caseNumData1.seriousCount,
          name: '累计无症状'
        }
      ]
    }
  },
  updated () {
    // 刷新页面后需要再次赋值给data
    this.covidList[0].yesterday = this.caseNumData2.currentConfirmedIncr
    this.covidList[1].yesterday = this.caseNumData2.confirmedIncr
    this.covidList[2].yesterday = this.caseNumData2.suspectedIncr
    this.covidList[3].yesterday = this.caseNumData2.curedIncr
    this.covidList[4].yesterday = this.caseNumData2.deadIncr
    this.covidList[5].yesterday = this.caseNumData2.seriousIncr
    this.covidList[0].now = this.caseNumData1.currentConfirmedCount
    this.covidList[1].now = this.caseNumData1.confirmedCount
    this.covidList[2].now = this.caseNumData1.suspectedCount
    this.covidList[3].now = this.caseNumData1.curedCount
    this.covidList[4].now = this.caseNumData1.deadCount
    this.covidList[5].now = this.caseNumData1.seriousCount
  },
  methods: {
    formatData (time) {
      const date = new Date(time)
      const YY = date.getFullYear() + '-'
      const MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-'
      const DD = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '   '
      const hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
      const mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      return YY + MM + DD + hh + mm
    }
  }
}
</script>

<style lang="less" scoped>
.case-num {
    padding: 0.16rem;
    background: #fff;
}
.container {
    margin: -0.16rem 0 0;
    font-size: 0.12rem;
}
.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.08rem 0 0.07rem;
    line-height: 0.24rem;
}
.title span {
    color: #666;
}
.title em {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.24rem;
    margin-right: -0.16rem;
    padding: 0 0.08rem;
    color: #666;
    font-style: normal;
    background-color: #f7f7f7;
    border-radius: 0.12rem 0 0 0.12rem;
}
.title em img {
    width: 0.123rem;
    height: 0.123rem;
    margin-right: 0.037rem;
}
.num {
    position: relative;
    text-align: center;
    background: #fff;
}
.num::after{
    position: absolute;
    top: -0.01rem;
    left: -0.01rem;
    display: block;
    width: 200%;
    height: 200%;
    border: 0.01rem solid #ebebeb;
    border-radius: 0.08rem;
    box-shadow: 0 0.4rem 0.12rem 0 rgba(0, 0, 0, 0.05);
    transform: scale(0.5);
    transform-origin: 0 0;
    content: "";
}
.num ul {
    flex-flow: wrap;
    position: relative;
    display: flex;
    margin: 0;
    padding: 0.08rem 0 0.12rem;
}
.num ul li {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 33.33333333%;
    margin: 10px 0;
}
.num ul li .create-item .create-count {
    display: flex;
    align-items: center;
    height: 0.12rem;
    margin-bottom: 0.02rem;
    color: #666;
    font-weight: 400;
    font-size: 0.09rem;
}
.num ul li .create-item .create-count em {
    font-weight: 400;
    font-style: normal;
}
.num ul li strong {
    margin-bottom: 0.01rem;
    font-weight: 700;
    font-size: 0.2rem;
    line-height: 0.25rem;
}
.num ul li span {
    display: block;
    color: #333;
    font-weight: 700;
    font-size: 0.11rem;
    line-height: 0.15rem;
}
</style>>
