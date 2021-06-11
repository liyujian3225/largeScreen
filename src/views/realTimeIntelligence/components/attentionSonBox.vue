<template>
  <div class="attentionSonBox">
    <div class="header" v-if="title">
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="content">
      <div class="son" v-for="item in keysArray">
        <span class="name">{{ keysMap[item] }}</span>
        <span class="value">{{ numberTranslateFormat(dataSource[item])}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  name: "attentionSonBox",
  mixins: [mixin],
  props: {
    title: {
      type: String,
      default: '',
    },
    dataSource: {
      type: Object,
      default: {}
    },
    keysArray: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    numberTranslateFormat(val) {
      if( (typeof val === 'number') && (val > 100000) ) {
        return (val / 10000).toFixed(2) + '万';
      }
      return val;
    }
  }
}
</script>

<style scoped lang="scss">
  div.attentionSonBox {
    width: 410px;
    margin: 0 auto;
    div.header {
      line-height: 28px;
      height: 28px;
      width: 100%;
      background: url("../../../assets/realTimeIntelligence/titlebg.png");
      div.title {
        margin-left: 10px;
        font-size: 18px;
        color: #e4e8ea;
      }
    }
    div.content {
      padding: 5px 10px;
      box-sizing: border-box;
      overflow: hidden;
      width: 100%;
      div.son {
        width: 50%;
        float: left;
        height: 26px;
        line-height: 26px;
        display: flex;
        justify-content: space-between;
        span.name {
          font-size: 16px;
          color: #15A3E5;
          flex-basis: 55%;
        }
        span.value {
          font-size: 18px;
          color: #ffffff;
          flex-basis: 45%;
          text-align: right;
          padding-right: 15px;
        }
      }
    }
  }
</style>
