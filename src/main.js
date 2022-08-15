// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import *as echarts from "echarts";
import 'echarts-gl'
import '@/assets/font/font.css';
import highcharts from 'highcharts'

import highcharts3d from 'highcharts/highcharts-3d'
Vue.prototype.$http= axios;
highcharts3d(highcharts)
Vue.prototype.axios = axios
import VueAMap from 'vue-amap';
import global_msg from './assets/js/global.js'//



Vue.use(VueAMap);

// VueAMap.initAMapApiLoader({
//   //申请地址 https://lbs.amap.com/ 选择web端jsAPI
//   key: '470145c6fc5751f24e85ffc243a18cb7',
//   // 插件集合，用到什么插件就使用什么插件
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.MarkerClusterer'],
//   v: '1.4.4', // 高德sdk版本，最新的sdk已经出到了2.0
//   //官网解释：JSAPI 2.0 提供的开发接口与 1.4 版本达到 99%的兼容度，但是为了保证插件的稳定性我们还是选择1.4.4。
// })

Vue.prototype.$global_msg = global_msg;

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
import axios from "axios"
axios.defaults.baseURL = 'http://192.168.1.2:8080/mycrm/LargeDataShowSlt'//获取版本号 正式



// 解决地图刷新显示不出来
const amapKeys = Object.keys(localStorage).filter(key => key.match(/^_AMap_/))
amapKeys.forEach(key => {
  // console.log(key)
  localStorage.removeItem(key)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
