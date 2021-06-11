<template>
  <div
    class="barInfo"
    :style="isAttention ? attentionStyle : normalStyle"
  >
    <span class="name">
      {{ keysMap[data.name] || '-' }}
    </span>
    <span class="value">
      <span v-if="showValue">{{ data.value }}</span>
    </span>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  name: "barInfo",
  props: {
    data: {
      type: Object,
      default() {
        return {
          name: '防批量撞库',
          value: '42813',
        }
      }
    },
    isAttention: {
      type: Boolean,
      default: false,
    },
    showValue: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      normalStyle: {
        color: '#00DEFF',
        background: '#012361',
        border: '#008DB5 1px solid',
      },
      attentionStyle: {
        color: '#01133B',
        background: '#00DEFF',
        border: '#012361 1px solid',
      }
    }
  },
  mixins: [ mixin ],
}
</script>

<style scoped lang="scss">
  div.barInfo {
    width: 260px;
    height: 32px;
    margin: 0 auto;
    margin-bottom: 17px;
    padding: 0 8px;
    border: 1px solid;
    box-sizing: border-box;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    >span {
      &:first-child {
        text-align: left;
        flex-basis: 60%;
      }
      &:last-child {
        text-align: right;
        flex-basis: 40%;
      }
    }
  }
</style>
