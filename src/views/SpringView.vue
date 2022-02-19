<template>
  <div>
    <div class="from">
      <h3>{{ fromInfo.city_name }}</h3>
      <p>{{ fromInfo.high_in_desc !== '' ? fromInfo.high_in_desc : '无高风险地区' }}</p>
      <p>{{ fromInfo.low_in_desc }}</p>
      <p>{{ fromInfo.out_desc }}</p>
    </div>
    <div class="to">
      <h3>{{ toInfo.city_name }}</h3>
      <p>{{ toInfo.high_in_desc !== '' ? toInfo.high_in_desc : '无高风险地区' }}</p>
      <p>{{ toInfo.low_in_desc }}</p>
      <p>{{ toInfo.out_desc }}</p>
    </div>
  </div>
</template>

<script>
import api from '@/api/'
export default {
  props: {
    cities: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      fromInfo: {},
      toInfo: {}
    }
  },
  mounted () {
    api.getSpringTravelQuery({
      // key: '171e165a7d991c5f6ecd5194c54778ef',
      key: '6d2bc7cf6b006a8a3c94b3718c58105e',
      from: this.cities[0].value,
      to: this.cities[1].value
    }).then(res => {
      if (res.status === 200) {
        console.log(res.data.result)
        this.fromInfo = res.data.result.from_info
        this.toInfo = res.data.result.to_info
      }
    })
  }
}
</script>

<style scoped>

</style>
