<template>
  <div class='spring'>
      <h3 class="title">春节旅行防疫政策</h3>
      <!--
          关于组件实例化的问题
            拆分组件之后，组件的多次调用，会每次实例化一个独立的对象
       -->
       <div>
           <van-field
            v-model="city"
            is-link
            readonly
            :label="label"
            placeholder="请选择城市"
            @click="show = true"
            ></van-field>
            <van-popup v-model="show" round position="bottom">
            <!-- :field-names='fieldNames' 自定义字段名 -->
            <van-cascader
                v-model="cascaderValue"
                title="请选择城市"
                :options="options"
                @close="show = false"
                @finish="onFinish"
            />
            </van-popup>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      city: '',
      cascaderValue: ''
    }
  },
  props: {
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish ({ selectedOptions }) {
      this.show = false
      this.city = selectedOptions.map((option) => option.text).join('/')
      this.$emit('onvalue', selectedOptions[1])
    }
  }
}
</script>

<style lang='less' scoped>
</style>
