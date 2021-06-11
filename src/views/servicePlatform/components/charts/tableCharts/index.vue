<template>
  <ul>
    <li>
      <div v-for="j in columns" :style="{width: j.width + 'px', color: '#fff'}">
        <span>{{j.name}}</span>
      </div>
    </li>
    <li v-for="item in dataSource">
      <div v-for="j in columns" :style="{width: j.width + 'px'}">
        <span>{{item[j.value] || '-'}}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default () {
        return [];
      }
    },
    columns: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {

    };
  }
};
</script>
<style scoped lang="scss">
  ul{
    li{
      height: 40px;
      line-height: 40px;
      list-style: none;
      &:nth-child(even){
        background: #072450;
      }
      &:nth-child(odd){
        background: #001644;
      }
      div{
        float: left;
        text-align: center;
        color: #51B9FC;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
      }
    }
  }
</style>
