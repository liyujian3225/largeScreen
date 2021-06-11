<template>
  <div class="chartBox">
    <div class="header">
      <div class="title">
        <span>
          <slot name="title"></slot>
        </span>
      </div>
      <div class="extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="content">
      <slot name="chart"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "chartBox"
}
</script>

<style scoped lang="scss">
  div.chartBox {
    flex-basis: 605px;
    height: 100%;
    background-image: url('../../../assets/realTimeIntelligence/chartbg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    div.header {
      height: 28px;
      line-height: 28px;
      >div.title {
        float: left;
        background: #00BEFF;
        color: #000000;
        text-align: center;
        border-radius: 14px;
        font-weight: bold;
        font-family: PingFangSC-Semibold;
        span {
          padding: 0 15px;
        }
      }
      >div.extra {
        float: right;
      }
    }
    div.content {
      flex: 1;
    }
  }
</style>
