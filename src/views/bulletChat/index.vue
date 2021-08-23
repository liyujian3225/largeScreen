<template>
  <div class="bulletChat">
    <Clock/>
  </div>
</template>
<script>
import Clock from '@/components/clock';
export default {
  name: 'bulletChat',
  components: { Clock },
  data() {
    return {

    }
  },
  methods: {
    init() {

    }
  },
  created() {
    this.init();
  }
}
</script>
<style lang="scss" scoped>
  div.bulletChat {
    height: 100%;
    background: #05172E;
  }
</style>
