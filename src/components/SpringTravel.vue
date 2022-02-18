<template>
  <div class='spring'>
      <h3 class="title">春节旅行防疫政策</h3>
      <!--
          关于组件实例化的问题
            拆分组件之后，组件的多次调用，会每次实例化一个独立的对象
       -->
       <Cascader :options="options" label="出发城市" @onvalue='getGoCity(data)'/>
       <Cascader :options="options" label="到达城市" @onvalue='getOnCity(data)'/>
       <van-button type='info' block @click="gotoSpring">查看政策</van-button>
    </div>
</template>

<script>
import api from '@/api/'
import Cascader from './Cascader.vue'
export default {
  components: {
    Cascader
  },
  data () {
    return {
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [],
      cities: []
    }
  },
  mounted () {
    api.getSpringTravel({
      from: '10003',
      to: '10004',
      key: '171e165a7d991c5f6ecd5194c54778ef'
    }).then(res => {
      const currentAll = []
      if (res.status === 200) {
        for (let i = 0; i < res.data.result.length; i++) {
          const arr = []
          for (let j = 0; j < res.data.result[i].cities.length; j++) {
            const temp2 = {
              text: res.data.result[i].cities[j].city,
              value: res.data.result[i].cities[j].city_id
            }
            arr.push(temp2)
          }
          const temp1 = {
            text: res.data.result[i].province,
            value: res.data.resuly[i].province_id,
            children: arr
          }
          currentAll.push(temp1)
        }
        this.options = currentAll
      }
    })
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    getGoCity (data) {
      console.log(data)
      this.cities.push(data)
    },
    getOnCity (data) {
      console.log(data)
      this.cities.push(data)
    },
    gotoSpring () {
      if (this.cities.length === 2) {
        this.$router.push({ name: 'Spring', params: { cities: this.cities } })
      } else {
        // 请选择城市
        this.$notify({ type: 'danger', message: '请选择城市' })
      }
    }
  }
}
</script>

<style lang='less' scoped>
.spring{
    width: 100%;
    padding: 10px;
    background: #fff;
    box-sizing: border-box;
    .title {
        font-size: 0.16rem;
        margin: 0 0 0.08rem 0.16rem;
    }
}
</style>
