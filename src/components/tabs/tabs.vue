<!--
<template>
  <div>Tabs</div>
</template>
-->

<script>
import Content from './content.vue'

export default {
  name: 'Tabs',
  props: {
    currentIndex: {
      type: [String, Number],
      default: '1'
    }
  },
  data () {
    return {
      pans: [] // 设置数组接收 content
    }
  },
  methods: {
    // 两组父子传值 实现 爷爷和孙子组件的传值
    getIndex (index) {
      this.$emit('onIndex', index)
    }
  },
  render () {
    // pans = [tab, tab, tab]
    return (
      <div>
        <ul class='tabs-header'> { this.$slots.default } </ul>
        <Content pans={ this.pans } />
      </div>

    )
  }
}
</script>

<style lang="less" scoped>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>>
