<template>
  <div class="attentionBox">
    <div class="title" :style="{background: `url(${backgroundImageUrl})`}">
        <span>
          <slot name="title"></slot>
        </span>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "attentionBox",
  data () {
    return {

    }
  },
  props: {
    backgroundImageUrl: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  div.attentionBox {
    flex-basis: 449px;
    background-image: url("../../../assets/realTimeIntelligence/attentionbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 13px 18px 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    >div.title {
      width: 223px;
      height: 52px;
      margin: 0 auto;
      line-height: 52px;
      color: #fff;
      font-weight: bold;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: 2px;
      >span {
        padding-left: 120px;
      }
    }
    >div.content {
      flex: 1;
    }
  }
</style>
