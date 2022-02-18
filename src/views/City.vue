<template>
  <div>城市：{{ city }}</div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
