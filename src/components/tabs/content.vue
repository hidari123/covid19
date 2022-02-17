<!--
<template>
  <div>Content</div>
</template>
-->

<script>
export default {
  name: 'Content',
  props: {
    pans: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  render () {
    // ele -> tab
    // ele.isActive
    return (
      <div>
        {
          this.pans.map((ele, index) => {
            // js 基于 v-if v-else 切换 会删除组件 需要通过 css 切换
            // return ele.isActive ? ele.$slots.default : ''
            // display 切换显示 加载内容不会删除 只是隐藏
            return <div style={{ display: ele.isActive ? 'block' : 'none' }}>{ ele.$slots.default }</div>
          })
        }
      </div>
    )
  }
}
</script>

<style>

</style>
