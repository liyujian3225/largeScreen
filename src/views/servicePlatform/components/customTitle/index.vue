<template>
  <div class="title">
    <div>
      <span>
        <slot></slot>
      </span>
    </div>
    <div>
      <slot name="extra"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "title"
}
</script>

<style scoped lang="scss">
  .title {
    height: 22px;
    line-height: 22px;
    display: flex;
    justify-content: space-between;
    >div:first-child {
      &::before {
        display: inline-block;
        height: 18px;
        width: 3px;
        content: '';
        background: #07D6DE;
        margin-right: 10px;
        margin-top: 2px;
      }
      span {
        font-size: 18px;
        color: #fff;
        font-weight: bold;
      }
    }
    >div:last-child {
      flex: 1;
      height: 100%;
      >span {
        float: right;
      }
    }
  }
</style>
