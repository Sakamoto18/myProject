// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import SvgIcon from '@/components/svgIcon'// svg组件
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import '@/styles/index.scss'
import utils from '@/common/utils/index.js'
import 'default-passive-events' // Chrome优化页面的滑动性能，目前仅适用mousewheel/touch
import './icons'



Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$echarts = echarts;
Vue.prototype.$utl = utils; // 工具类全局注册

Vue.component('svg-icon', SvgIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
