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
import {subTimer} from "../utils/dict";
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
    },
    timer: {
      type: Number,
      default: subTimer
    }
  },
  data () {
    return {
      value: this.selectedOption.value,
      interval: null,  // 定时器，定时触发
      selectedIndex: 0
    }
  },
  methods: {
    changeOption(value) {
      this.callback(value)
    },
    init() {
      this.selectedIndex = 0;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        // 自增取余实现循环
        this.selectedIndex = (++this.selectedIndex) % this.options.length;
        this.value = this.options[this.selectedIndex].value;
        this.changeOption(this.value);
      }, this.timer);
    },
  },
  created() {
    this.init();
  },
  // watch: {
  //   options() {
  //     this.init();
  //   }
  // }
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
