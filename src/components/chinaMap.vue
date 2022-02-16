<template>
  <div class="map">
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  name: 'ChinaMap',
  mounted () {
    this.$charts.chinaMap('main')
    console.log(123)
  }
}
</script>

<style scoped>
#main {
  height: 300px;
  width: 400px;
}
</style>
