<template>
  <div class="title">
    <span>
      <slot></slot>
    </span>
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
</style>
