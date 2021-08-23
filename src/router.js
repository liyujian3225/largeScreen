import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
      meta: {
        title: '大屏导航',
      }
    },
    {
      path: '/servicePlatform',
      name: 'servicePlatform',
      component: () => import(/* webpackChunkName: "servicePlatform" */ '@/views/servicePlatform'),
      meta: {
        title: '移动智能服务平台',
      }
    },
    {
      path: '/realTimeIntelligence',
      name: 'realTimeIntelligence',
      component: () => import(/* webpackChunkName: "realTimeIntelligence" */ '@/views/realTimeIntelligence'),
      meta: {
        title: '实时智能平台运行大屏',
      }
    },
    {
      path: '/templeArtificialIntelligence',
      name: 'templeArtificialIntelligence',
      component: () => import(/* webpackChunkName: "templeArtificialIntelligence" */ '@/views/templeArtificialIntelligence'),
      meta: {
        title: '庙算人工智能平台',
      }
    },
    {
      path: '/bulletChat',
      name: 'bulletChat',
      component: () => import(/* webpackChunkName: "bulletChat" */ '@/views/bulletChat'),
      meta: {
        title: '弹幕大屏',
      }
    },
  ]
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

export default router
