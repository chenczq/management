import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import MapContainer from '@/components//view/MapContainer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'index',
      name: 'index',
      component: index
    },
    {
      path: '/',
      name: 'MapContainer',
      component: MapContainer
    }
  ]
})
