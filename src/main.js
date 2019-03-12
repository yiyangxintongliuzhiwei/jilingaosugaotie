/**
 * @author lijunqi
 * @desc 初始化入口
 */
/* 插件引入 */
import Vue from 'vue'
import App from './App.vue' // vue 入口
import router from './router' // 路由
import store from './store' // vuex
import axios from './js-app/http/main' //  Ajax
/* 公用组件引入 */
import AppTemplate from './components/common/AppTemplate.vue' // app 模板
// import ViewTemplate from './components/common/ViewTemplate.vue' // view 视图模板
import ViewTemplate from './components/common/ViewTemplatepad.vue' // view 视图模板
import PopupTemplate from './components/common/PopupTemplate.vue' // 弹窗 模板
import Counter from './components/common/Counter.vue'
import Swiper from './components/common/Swiper.vue'
import SwiperSlider from './components/common/SwiperSlide.vue'
import CenterScale from './components/common/CenterScale.vue'
import '../static/mapdata/china.js'
import './js-app/helper/DateUtil.js'
import CircleProgress from './components/common/circleProgress.vue';
/* 引入ecaharts */
import Echarts from 'echarts'
Vue.prototype.Echarts = Echarts;
/*  new vue */
window.bus = new Vue();
/**
 * 加载流水
 */
let app = {
  /**
   * 装载 Ajax
   */
  loadAjax() {
    /**
     *  设置是否注册更新回调函数,默认状态为false
     *  如果设置为true，在vue 实例销毁函数中需增加取消监听指标消息监听
     *  否则，因为对回调函数存在引用关系，可能无法销毁vue实例(暂未有确切证据)
     */
    axios.indi.setOnUpdateStatus(false)
    Vue.prototype.$http = axios
  },
  /**
   * 注册全局自定义组件
   */
  loadCustomComponent() {
    Vue.component('app-template', AppTemplate) // 场景模板
    Vue.component('view-template', ViewTemplate) // 视图 模板
    Vue.component('popup-template', PopupTemplate) // 弹窗模板
    Vue.component('center-scale', CenterScale)
    Vue.component('counter', Counter) // 数字滚动插件
    Vue.component('swiper', Swiper) // 轮播组件
    Vue.component('swiper-slide', SwiperSlider) // 轮播组件
    Vue.component('circleProgress', CircleProgress);
  },
  /**
   * 加载vue
   */
  loadVue() {
    Vue.config.productionTip = false
    window.store = store
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: {
        App
      }
    })
    // axios.indi.get('api/mix/sx0014', {}, (res) => {
    //   /* eslint-disable no-new */
    //   new Vue({
    //     el: '#app',
    //     router,
    //     store,
    //     template: '<App/>',
    //     components: {
    //       App
    //     }
    //   })
    // })
  },
  /**
   * 初始化
   */
  init() {
    this.loadAjax()
    this.loadCustomComponent()
    this.loadVue()
  }
}
app.init();
