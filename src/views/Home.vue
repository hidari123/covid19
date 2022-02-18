<template>
  <div class="home">
    <Header />
    <!-- 父传子 -->
    <covid-19-info :covid19Info='covid19Info'/>
    <case-num :caseNumData1='caseNumData1' :caseNumData2='caseNumData2'/>
    <china-map />
    <my-swiper />
  </div>
</template>

<script>
import api from '@/api/index.js'
import Header from '@/components/Header'
import Covid19Info from '../components/Covid19Info.vue'
import CaseNum from '@/components/CaseNum.vue'
import ChinaMap from '@/components/chinaMap'
import MySwiper from '@/components/mySwiper'

export default {
  name: 'Home',
  data () {
    return {
      // covid19Info
      covid19Info: {
        note1: '',
        note2: '',
        note3: '',
        remark1: '',
        remark2: '',
        remark3: ''
      },
      caseNumData1: {
        currentConfirmedCount: '', // 现存确诊人数
        confirmedCount: '', // 累计确诊人数
        suspectedCount: '', // 累计境外输入人数
        curedCount: '', // 累计治愈人数
        deadCount: '', // 累计死亡人数
        seriousCount: '' // 现存无症状人数
      },
      caseNumData2: {
        modifyTime: '', // 更新时间
        suspectedIncr: '', // 相比昨天新增境外输入人数
        currentConfirmedIncr: '', // 相比昨天现存确诊人数
        confirmedIncr: '', // 相比昨天累计确诊人数
        curedIncr: '', // 相比昨天新增治愈人数
        deadIncr: '', // 相比昨天新增死亡人数
        seriousIncr: '' // 相比昨天现存无症状人数
      }
    }
  },
  components: {
    Header,
    Covid19Info,
    CaseNum,
    ChinaMap,
    MySwiper
  },
  mounted () {
    api.getNcov({
      key: '62e34ad34025d5d5127135efa58d4ca8'
    }).then(res => {
      if (res.status === 200) {
        const { desc } = res.data.newslist[0]
        // console.log(desc)
        // 疫情信息数据
        this.covid19Info = {
          note1: desc.note1,
          note2: desc.note2,
          note3: desc.note3,
          remark1: desc.remark1,
          remark2: desc.remark2,
          remark3: desc.remark3
        }
        // 疫情病例
        this.caseNumData1 = {
          currentConfirmedCount: desc.currentConfirmedCount, // 现存确诊人数
          confirmedCount: desc.confirmedCount, // 累计确诊人数
          suspectedCount: desc.suspectedCount, // 累计境外输入人数
          curedCount: desc.curedCount, // 累计治愈人数
          deadCount: desc.deadCount, // 累计死亡人数
          seriousCount: desc.seriousCount // 现存无症状人数
        }
        this.caseNumData2 = {
          modifyTime: desc.modifyTime, // 更新时间
          suspectedIncr: desc.suspectedIncr, // 新增境外输入人数
          currentConfirmedIncr: desc.currentConfirmedIncr, // 相比昨天现存确诊人数
          confirmedIncr: desc.confirmedIncr, // 相比昨天累计确诊人数
          curedIncr: desc.curedIncr, // 相比昨天新增治愈人数
          deadIncr: desc.deadIncr, // 相比昨天新增死亡人数
          seriousIncr: desc.seriousIncr // 相比昨天现存无症状人数
        }
      }
    })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
