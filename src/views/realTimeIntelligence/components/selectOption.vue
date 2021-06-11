<template>
  <div class="selectOption">
    <el-select
      size='small'
      popper-class="_select"
      :popper-append-to-body="false"
      v-model="value"
      @change="changeOption"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "selectOption",
  props: {
    options: {
      type: Array,
      default: []
    },
    selectedOption: {
      type: Object,
      default: {}
    },
    callback: {
      type: Function,
    }
  },
  data () {
    return {
      value: this.selectedOption.value
    }
  },
  methods: {
    changeOption(value) {
      this.callback(value)
    }
  }
}
</script>

<style lang="scss">
  .selectOption {
    .el-input__inner {
      background: rgba(0, 0, 0, 0.3) !important;
      border: 1px solid #009DDE !important;
      outline: unset!important;
      color: #fff;
    }
  }
  //下拉列表渲染不在selectOption容器内
  ._select .el-select-dropdown__list {
    background: #011119 !important;
    border: 1px solid #0084BA !important;
  }
  ._select {
    border: 1px solid #0084BA;
  }
  ._select .el-select-dropdown__item.hover, ._select .el-select-dropdown__item:hover {
    background-color: #00BEFF;
    color: #fff!important;
  }
  ._select .el-select-dropdown__item {
    color: #ccc !important;
  }
  ._select .el-select-dropdown {
    border: 1px solid #0084BA;
  }
</style>
