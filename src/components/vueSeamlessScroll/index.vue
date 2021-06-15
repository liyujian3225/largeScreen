<template>
  <vue-seamless-scroll
    class="seamless-warp"
    :class-option="mixinOption"
    :style="{height: height}"
    :data="data"
  >
    <slot name="content"></slot>
  </vue-seamless-scroll>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: "index",
  props: {
    data: {
      type: Array,
      required: true,
    },
    classOption: {
      type: Object,
      default() {
        return this.option;
      }
    },
    height: {
      type: String,
      default: '180px',
    }
  },
  data () {
    return {
      option: {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 500 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  components: {    //组件
    vueSeamlessScroll
  },
  computed: {
    mixinOption: function() {
      return Object.assign(this.option, this.classOption)
    }
  }
}
</script>

<style scoped lang="scss">
  .seamless-warp {
    width: 100%;
    overflow: hidden;
  }
</style>
