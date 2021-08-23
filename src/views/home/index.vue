<template>
  <div class="home">
    <background-canvas class="backgroundCanvas"/>
    <ul>
      <li @click="drumpRouter('servicePlatform')">
        <div class="box">
          <div class="info">
            <span>移动智能服务平台</span>
          </div>
        </div>
      </li>
      <li @click="drumpRouter('realTimeIntelligence')">
        <div class="box">
          <div class="info">
            <span>实时智能平台运行大屏</span>
          </div>
        </div>
      </li>
      <li @click="drumpRouter('templeArtificialIntelligence')">
        <div class="box">
          <div class="info">
            <span>庙算人工智能平台</span>
          </div>
        </div>
      </li>
      <li @click="drumpRouter('bulletChat')">
        <div class="box">
          <div class="info">
            <span>测试</span>
          </div>
        </div>
      </li>

<!--      <li @click="drumpRouter('originalManuscript')">-->
<!--        <div class="box">-->
<!--          <div class="info">-->
<!--            <span>移动智能监控大屏</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </li>-->
<!--      <li @click="drumpRouter('publicSentiment')">-->
<!--        <div class="box">-->
<!--          <div class="info">-->
<!--            <span>移动智能监控大屏</span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </li>-->
    </ul>
  </div>
</template>
<script>
import backgroundCanvas from '@/components/background'
export default {
  name: 'home',
  components: {
    backgroundCanvas
  },
  methods: {
    drumpRouter(name) {
      this.$router.push(name)
    },
  }
}

</script>
<style lang="scss" scoped>
  @mixin backgroundStyle($url,$height) {
    background: {
      image:  url($url);
      repeat: no-repeat;
      size: 100%,100%;
    }
    height:$height;
  }
  div.home{
    height: 100%;
    position: relative;
    .backgroundCanvas {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    ul{
      position: absolute;
      left: 0;right: 0;
      top: 0;bottom: 0;
      margin: auto;
      z-index: 2;
      height: 246px;
      width: 1730px;
      display: flex;
      justify-content: space-between;
      li{
        cursor: pointer;
        flex-basis: 260px;
        &:nth-child(1){
          @include backgroundStyle('../../assets/home/hot.png', 246px);
        }
        &:nth-child(2){
          @include backgroundStyle('../../assets/home/circle.png', 246px);
        }
        &:nth-child(3){
          @include backgroundStyle('../../assets/home/menu.png', 246px);
        }
        &:nth-child(4){
          @include backgroundStyle('../../assets/home/san.png', 246px);
        }
        &:nth-child(5){
          @include backgroundStyle('../../assets/home/wu.png', 246px);
        }
        &:nth-child(6){
          @include backgroundStyle('../../assets/home/circle.png', 246px);
        }
        &:hover{
          div.box{
            background: rgba(0, 0, 0, 0.3);
          }
          div.info{
            color: #f7f05f;
          }
        }
        div.box{
          width: 100%;
          height: 100%;
          padding: 1px;
          box-sizing: border-box;
          transition: all .35s linear;
        }
        div.info{
          margin: 0 auto;
          margin-top: 191px;
          height: 16px;
          line-height: 16px;
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #fff;
          text-align: center;
          transition: all .35s linear;
        }
      }
    }
  }
</style>
