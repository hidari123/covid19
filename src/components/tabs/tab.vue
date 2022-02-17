<!--
<template>
  <div>Tab</div>
</template>
-->

<script>
export default {
  name: 'Tab',
  props: {
    label: {
      type: String,
      default: 'tab'
    },
    index: {
      type: [String, Number],
      default: '1'
    }
  },
  mounted () {
    // tab
    this.$parent.pans.push(this)
  },
  computed: {
    isActive () {
      // 可以通过 $parent 直接读取父级属性
      return this.$parent.currentIndex === this.index
    }
  },
  methods: {
    clickItemHandle () {
      this.$parent.getIndex(this.index)
    }
  },
  render () {
    // currentIndex === index ? active : ''
    const classNames = {
      tab: true,
      active: this.isActive
    }
    return (
      <li onClick = { this.clickItemHandle } class = { classNames }>{ this.label }</li>
    )
  }
}
</script>

<style lang="less" scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin: 0 30px;
    position: relative;
    text-align: center;
}
.tab.active {
    border-bottom: 2px solid blue;
}
</style>
