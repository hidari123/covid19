<template>
  <div>城市：{{ city }}
    <div id="city"></div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: ''
    }
  },
  mounted () {
    const cities = []
    this.$axios.get('/area.json').then(res => {
      if (res.status === 200) {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].provinceShortName === this.city) {
            for (let j = 0; j < res.data[i].cities.length; j++) {
              const temp = {
                name: res.data[i].cities[j].cityName + '市',
                value: res.data[i].cities[j].confirmedCount
              }
              cities.push(temp)
            }
          }
        }
      }
      this.$charts.provinceMap('city', this.city, cities)
    })
  }
}
</script>

<style scoped>
#city {
  width: 100%;
  height: 550px;
}
</style>
