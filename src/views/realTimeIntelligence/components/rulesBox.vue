<template>
  <div class="rulesBox">
    <div class="contain">
      <div class="left">
        <template v-for="(value, key, index) in dataSource">
          <div>
            <img src="../../../assets/realTimeIntelligence/ruleCircle.png">
            <span>{{ keysMap[key] }}</span>
            <span>{{ value }}</span>
          </div>
        </template>
      </div>
      <div
        class="right"
        :style="{
          background: `url(${backgroundImageImgUrl[Number(num) % 2]
        })`}"
      ></div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  name: "rulesBox",
  mixins: [mixin],
  props: {
    dataSource: {
      default: {},
      type: Object,
    },
    num: {
      type: Number,
    }
  },
  data () {
    return {
      backgroundImageImgUrl: [
        require('../../../assets/realTimeIntelligence/rule_one.png'),
        require('../../../assets/realTimeIntelligence/rule_two.png')
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @keyframes turn{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
  }
  div.rulesBox {
    flex-basis: 450px;
    height: 100%;
    padding: 0 18px;
    box-sizing: border-box;
    background-image: url('../../../assets/realTimeIntelligence/rulesbg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    >div.contain {
      height: 100px;
      width: 100%;
      margin-top: 22px;
      div.left {
        float: left;
        height: 100px;
        >div {
          height: 50px;
          img {
            width: 28px;
            height: 28px;
            margin-right: 5px;
            vertical-align: middle;
          }
          span:nth-child(2) {
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #18b6ff;
            display: inline-block;
            height: 50px;
            line-height: 50px;
            width: 135px;
            vertical-align: middle;
          }
          span:nth-child(3) {
            font-family: FZCSJW--GB1-0;
            font-size: 32px;
            color: #d9f3ff;
            display: inline-block;
            height: 50px;
            line-height: 50px;
            vertical-align: middle;
          }
        }
      }
      div.right {
        width: 99px;
        height: 99px;
        border-radius: 50%;
        float: right;
        animation:turn 30s linear infinite;
      }
    }
  }
</style>
