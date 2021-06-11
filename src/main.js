import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入mock假数据
process.env.VUE_APP_MOCK === 'true' && import('@/mock');

//false为生产环境，true为开发环境。
//阻止产生生产模式的消息
Vue.config.productionTip = true;

//引入列表滚动插件
import vueSeamlessScroll from 'vue-seamless-scroll'
Vue.use(vueSeamlessScroll)

//引入elementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//挂载请求接口
import api from '@/api'
Vue.prototype.$api = api;

//系统实现不同分辨率下自动适应调整
import jquery from 'jquery';
import resize from './lib/resize'
window.$ = jquery;
resize();

//外层容器scale会导致g2图表的tooltip容器偏移
import G2 from '@antv/g2';
const rawGetPointByClient = G2.G.Canvas.prototype.getPointByClient;
// 由于需要运行时this指针，这个函数不可改为箭头函数。
G2.G.Canvas.prototype.getPointByClient = function(clientX, clientY) {
  // 获取原函数返回的坐标值
  const raw = rawGetPointByClient.call(this, clientX, clientY);
  // 获取设定高宽和真实高宽。
  // 当设定的高宽不等于getBoundingClientRect获取的高宽时，说明存在缩放。
  const el = this.get('el');
  const bbox = el.getBoundingClientRect();
  const setWidth = this.get('width');
  const setHeight = this.get('height');
  const { width: realWidth, height: realHeight } = bbox;
  // 除以缩放比（真实高宽 / 设定高宽）获得真实的坐标。
  return {
    x: raw.x / (realWidth / setWidth),
    y: raw.y / (realHeight / setHeight),
  };
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
